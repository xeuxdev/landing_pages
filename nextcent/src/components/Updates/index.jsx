import React from "react"
import Heading from "../TypoGraphy/Heading"
import Text from "../TypoGraphy/Text"
import SubHeading from "../TypoGraphy/SubHeading"
import Image from "next/image"
import ChevronRight from "../Icons/ChevronRight"

const data = [
  "Creating Streamlined Safeguarding Processes with OneRen",
  "What are your safeguarding responsibilities and how can you manage them?",
  "Revamping the Membership Model with Triathlon Australia",
]

function Updates() {
  return (
    <section className="">
      <div className="container py-12 px-5">
        {/* text */}
        <div className="max-w-[39.25rem] mx-auto space-y-4 pb-10">
          <SubHeading
            content={"Caring is the new marketing"}
            orientation={"center"}
          />
          <Text
            content={
              "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."
            }
            fontSize={"1rem"}
            orientation={"center"}
          />
        </div>

        {/* images */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, idx) => (
            <div key={idx} className="relative h-96 w-full">
              <Image
                height={286}
                width={360}
                src={`/updates/${idx}.png`}
                alt={item}
              />

              <div className="bg-white/90 absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-44 rounded-xl shadow-xl grid place-items-center p-5">
                <Text
                  content={item}
                  fontSize={"1.25rem"}
                  orientation={"center"}
                />
                <p className="flex items-center gap-5 text-heading_sec">
                  <span>Read more</span> <ChevronRight color={"heading_sec"} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates
