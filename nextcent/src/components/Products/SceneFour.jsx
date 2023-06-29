import Image from "next/image"
import Illustration from "../../../public/products/four.svg"
import Text from "../TypoGraphy/Text"
import Link from "next/link"
import ChevronRight from "../Icons/ChevronRight"

function SceneFour() {
  return (
    <div className=" bg-header_bg py-14 px-5 w-full">
      <div className="flex items-center flex-col lg:flex-row gap-10 container">
        <Image src={Illustration} alt="rafiki" />

        <div className="space-y-5 max-w-xl">
          <Text
            content={
              "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
            }
          />
          <div className="space-y-1">
            <p className="text-heading_sec font-semibold">Tim Smith</p>
            <Text
              content={"British Dragon Boat Racing Association"}
              fontSize={"1rem"}
            />
          </div>

          <div className="mt-4 grid grid-cols-3 place-items-center gap-10 md:flex md:items-center md:justify-between md:gap-0">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <Image
                  key={idx}
                  src={`/clients/Logo${idx}.svg`}
                  width={50}
                  height={40}
                />
              ))}
          </div>
          <Link
            href={"/#"}
            className="text-heading_sec flex items-center gap-3  w-[11.75rem]"
          >
            <p>meet all customers</p>
            <ChevronRight color={"heading_sec"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SceneFour
