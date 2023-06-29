import React from "react"
import Heading from "../TypoGraphy/Heading"
import Text from "../TypoGraphy/Text"
import Image from "next/image"

function Clients() {
  return (
    <section id="#service">
      <div className="container py-10 px-5 ">
        {/* <header className="text-heading">Our Clients</header> */}

        <div className="space-y-2">
          <Heading tag={"h2"} content={"Our Clients"} orientation={"center"} />
          <Text
            content={"We have been working with some Fortune 500+ clients"}
            fontSize={"1rem"}
            orientation={"center"}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 place-items-center gap-10 md:flex md:items-center md:justify-between md:gap-0">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <Image
                key={idx}
                src={`/clients/Logo${idx}.svg`}
                alt={"client" + idx}
                width={50}
                height={40}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
