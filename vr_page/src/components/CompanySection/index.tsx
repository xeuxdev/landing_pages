import React from "react"
import Heading from "../Typography/Heading"
import Image from "next/image"
import { data } from "./data"

function CompanySection() {
  return (
    <section id="#company" className="container px-5 py-10">
      <Heading
        content="Mixed Reality Headsets"
        orientation="left"
        size="xl"
        tag={"h3"}
      />

      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {/* <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 place-items-center"> */}
        {data.map((item) => (
          <div
            className="w-full max-w-[23.4375rem] h-44 relative rounded-lg overflow-hidden"
            key={item.name}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 w-32 h-20 px-3 py-2 bg-[rgba(255, 255, 255, 0.18)] backdrop-blur-[11.4px]">
              <header className="text-sm font-semibold text-white font-orb">
                {item.name}
              </header>
              <p className="text-[7px] font-normal font-inter text-[#E4E5E7]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CompanySection
