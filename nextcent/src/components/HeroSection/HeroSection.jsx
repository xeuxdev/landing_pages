import Image from "next/image"
import React from "react"
import Illustration from "../../../public/Illustration.svg"
import Button from "../Button/Button"

function HeroSection() {
  return (
    <section className="bg-hero_bg" id="#home">
      <div className="container px-5 flex items-center flex-col lg:flex-row-reverse gap-[4.5rem] py-10 lg:py-24">
        {/* image section */}
        <Image src={Illustration} alt="illustration" />
        {/* width: 24.4375rem; height: 25.4375rem; */}

        {/* text section */}

        <div className="flex flex-col items-center lg:items-start gap-8 ">
          <div className="flex flex-col self-stretch gap-4 text-center lg:text-left">
            <h1 className="text-heading text-3xl lg:text-[4rem]  leading-8 lg:leading-[4.5rem] font-semibold">
              Lessons and insights <br />
              <span className="text-heading_sec"> from 8 years</span>
            </h1>
            <p className="text-gray ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>

          <Button content={"Register"} variant={"filled"} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
