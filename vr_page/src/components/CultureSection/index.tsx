import React from "react"
import Heading from "../Typography/Heading"
import Text from "../Typography/Text"
import Image from "next/image"

const data = [
  { text: "Be Sincere", icon: "/icons/sincere.svg" },
  { text: "Stronger Together", icon: "/icons/stronger.svg" },
  { text: "Keep it simple", icon: "/icons/simple.svg" },
  { text: "Take intelligent risks", icon: "/icons/light-bulb.svg" },
]

function CompanyValues() {
  return (
    <section className="container mt-20">
      <div className="flex flex-col items-center justify-center gap-12 px-5 lg:flex-row">
        {/* left */}
        <div className="max-w-[26.5rem] space-y-4">
          <Heading
            content="Our company values culture 💞"
            orientation="left"
            size="xl"
            tag={"h5"}
          />
          <Text
            content="We specialize in creating visual identities for products and branda in your company."
            orientation="left"
            size="lg"
          />
        </div>

        {/* right */}
        <div className="grid grid-cols-2 gap-10">
          {data.map((item) => (
            <div key={item.text} className="space-y-2">
              <Image
                src={item.icon}
                alt={item.text}
                width={30.75}
                height={30.75}
                className="mx-auto"
              />
              <p className="font-semibold text-center text-white">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyValues
