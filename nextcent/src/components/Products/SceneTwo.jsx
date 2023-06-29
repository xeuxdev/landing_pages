import React from "react"
import Text from "../TypoGraphy/Text"
import Image from "next/image"
import SubHeading from "../TypoGraphy/SubHeading"

const data = [
  { number: "2,245,341", title: "members", icon: "/products/members.svg" },
  { number: "46,328", title: "clubs", icon: "/products/clubs.svg" },
  { number: "828,867", title: "event bookings", icon: "/products/events.svg" },
  { number: "1,926,436", title: "payments", icon: "/products/payments.svg" },
]

function SceneTwo() {
  return (
    <div className=" py-14 bg-header_bg px-5 w-full">
      <div className="container flex items-center justify-center flex-col lg:flex-row gap-10 lg:gap-20">
        {/* left */}
        <div className="flex flex-col self-stretch justify-between gap-4 text-center lg:text-left">
          <h5 className="text-heading text-3xl md:text-4xl leading-[2.75rem] font-semibold">
            Helping a local <br />
            <span className="text-heading_sec"> business reinvent itself</span>
          </h5>
          <Text
            content={"We reached here with our hard work and dedication"}
            fontSize={"1rem"}
            orientation={"left"}
          />
        </div>
        {/* right */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-7">
          {data.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <Image src={item.icon} alt={item.title} width={48} height={48} />

              <div className="space-y-1">
                <SubHeading content={item.number} orientation={"left"} />
                <Text
                  content={item.title}
                  fontSize={"1rem"}
                  orientation={"left"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SceneTwo
