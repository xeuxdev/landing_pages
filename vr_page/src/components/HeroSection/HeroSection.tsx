import React from "react"
import Heading from "../Typography/Heading"
import Text from "../Typography/Text"
import Button from "../Button/Button"
import Image from "next/image"

function HeroSection() {
  return (
    <section
      id="/"
      className="container flex flex-col items-center justify-between gap-12 px-5 pt-20 lg:flex-row"
    >
      {/* left / top */}
      <div className="flex flex-col max-w-[20.8125rem] lg:max-w-[24.8125rem] gap-6">
        <Heading
          content="Let’s Explore Three-Dimensional visual"
          orientation="left"
          size="xl"
          tag={"h1"}
        />
        <Text
          content="With virtual technology you can see the digital world feel more real and you can play the game with a new style."
          size="lg"
          orientation="left"
        />

        <div className="flex items-center gap-6">
          <Button content="Get it Now" />
          <button className="text-sm font-bold text-white">
            Explore Devices
          </button>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {/* images */}

          <div className="flex items-center ">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <Image
                  src={`/profile/${idx}.png`}
                  alt=""
                  key={idx}
                  width={32}
                  height={32}
                  className="-ml-2 rounded-full first:ml-0"
                />
              ))}
          </div>

          {/* text */}

          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 bg-white rounded-full" />
            <p className="text-sm font-semibold text-white font-inter">
              400k people online
            </p>
          </div>
        </div>
      </div>

      {/* right/bottom */}

      <div className="relative w-full max-w-[26.313125rem] h-[30.75rem]">
        <Image src={"/hero.png"} alt="hero image" fill />
      </div>
    </section>
  )
}

export default HeroSection
