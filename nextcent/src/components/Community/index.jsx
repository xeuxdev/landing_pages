import React from "react"
import Heading from "../TypoGraphy/Heading"
import Text from "../TypoGraphy/Text"
import { communityStuffs } from "@/constants/community"
import Image from "next/image"

function Community() {
  return (
    <section id="#feature">
      <div className="container px-5 py-10">
        {/* heading */}
        <div className="space-y-4 max-w-[33.875rem] mx-auto mb-10">
          <Heading
            tag={"h3"}
            content={"Manage your entire community in a single system"}
            orientation={"center"}
          />
          <Text
            content={"Who is Nextcent suitable for?"}
            fontSize={"1rem"}
            orientation={"center"}
          />
        </div>

        {/* flex */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 md:mt-5">
          {communityStuffs.map((item) => (
            <div key={item.title} className="space-y-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={65}
                height={56}
                className="mx-auto"
              />
              <header className="text-heading font-semibold text-xl md:text-[1.75rem] leading-[2.25rem] font-inter text-center max-w-[14.375rem] mx-auto">
                {item.title}
              </header>
              <Text
                content={item.desc}
                fontSize={"0.875rem"}
                orientation={"center"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
