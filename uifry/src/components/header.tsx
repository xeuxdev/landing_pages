"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("home");
  return (
    <header className="pt-10 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-full">
        <div className="flex items-center gap-10">
          <Image src={"/logo.svg"} alt="logo" width={120} height={60} />
          <nav className="flex items-center gap-6">
            {["home", "about us", "pricing", "features"].map((item) => {
              const isActive = item === activeLink;
              return (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`${
                    isActive ? "text-pri-red font-bold " : ""
                  }capitalize font-medium text-black hover:text-pri-red  text-lg hover:font-bold`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>

        <Button>Download</Button>
      </div>

      <svg
        width="62"
        height="58"
        viewBox="0 0 62 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-10 right-0 "
      >
        <path
          d="M31 0L32.5047 29.9289L61.4338 22.1115L33.4347 32.7911L49.8091 57.8885L31 34.56L12.1909 57.8885L28.5653 32.7911L0.566191 22.1115L29.4953 29.9289L31 0Z"
          fill="black"
        />
      </svg>
    </header>
  );
}
