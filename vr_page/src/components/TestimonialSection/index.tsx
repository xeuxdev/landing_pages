import React from "react"
import Heading from "../Typography/Heading"
import Text from "../Typography/Text"
import Image from "next/image"
import { data } from "./data"

function TestimonialSection() {
  return (
    <section className="px-5 mt-16">
      <div className="max-w-[49.9375rem]  w-full mx-auto min-h-[10.03156rem] testimonia-bg pt-5 px-5">
        <div className="px-5 pb-10 space-y-4">
          <Heading
            tag={"h4"}
            content="What our clients say"
            orientation="center"
            size="xl"
          />
          <Text
            content="See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better."
            orientation="center"
            size="lg"
          />
        </div>

        <div className="flex flex-wrap gap-10 lg:flex-row">
          {data.map((item) => (
            <div
              className="w-full md:max-w-[14rem] p-5 space-y-3  testimonia-card"
              key={item.name}
            >
              <header className="text-orange-400">starstarstar</header>
              <Text content={item.testimony} orientation="center" size="lg" />

              <div className="flex items-center gap-4">
                {/* <p></p> */}
                <Image src={item.image} alt="" width={35} height={35} />
                <div className="space-y-0.5 text-[0.75rem]">
                  <p className="text-white">{item.name}</p>
                  <p className="text-[#EB4468] ">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
