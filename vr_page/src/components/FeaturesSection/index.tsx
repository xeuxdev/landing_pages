import React from "react"
import Heading from "../Typography/Heading"
import Text from "../Typography/Text"
import Button from "../Button/Button"
import Image from "next/image"

function FeaturesSection() {
  return (
    <section className="container py-10">
      <div className="flex flex-col items-center justify-between gap-16 px-5 lg:flex-row">
        {/* left  */}

        <div className="relative flex items-center gap-5 px-5">
          <div className="relative w-[12.5rem] h-[17.5rem]">
            <Image src={"/vr-1.svg"} alt="" width={200} height={280} />
            <div className="absolute inset-0 mx-auto mt-3 w-[12rem] h-[17rem]">
              <Image src={"/img-1.svg"} alt="" fill />
            </div>
          </div>

          {/* 2 */}
          <div className="relative w-[12.5rem] h-[17.5rem] mt-40">
            <Image src={"/vr-2.svg"} alt="" width={200} height={280} />
            <div className="absolute inset-0 mx-auto w-[12rem] h-[17rem]">
              <Image src={"/img-2.svg"} alt="" fill />
            </div>
          </div>
        </div>

        {/* right */}

        <div className="max-w-[24rem] space-y-6">
          <Heading
            content="New Experience In Playing Game"
            orientation="left"
            size="xl"
            tag={"h2"}
          />

          <Text
            content="You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world."
            orientation="left"
            size="lg"
          />

          <Button content="Get it Now" />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
