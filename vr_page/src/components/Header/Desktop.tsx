"use client"
import Link from "next/link"
import { useState } from "react"
import Button from "../Button/Button"
import { navlinks } from "@/constants/navItems"

function Desktop() {
  const [activeLink, setActiveLink] = useState(0)
  return (
    <ul className=" items-center gap-[2.18rem] hidden lg:flex">
      {navlinks.map((item, idx) => {
        return (
          <li key={item.name}>
            <Link
              href={`${item.href}`}
              className={` font-medium font-inter text-sm capitalize relative duration-200 ${
                activeLink === idx ? "text-gradient" : "text-white"
              }`}
              onClick={() => setActiveLink(idx)}
            >
              {item.name}

              {activeLink === idx && (
                <span className="absolute w-5 h-1 duration-200 -translate-x-1/2 bg-white -bottom-4 left-1/2" />
              )}
            </Link>
          </li>
        )
      })}

      <Button content="Sign Up" />
    </ul>
  )
}

export default Desktop
