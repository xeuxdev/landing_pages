import Image from "next/image"
import Illustration from "../../../public/products/pana.svg"
import Heading from "../TypoGraphy/Heading"
import Text from "../TypoGraphy/Text"
import Button from "../Button/Button"

function SceneThree() {
  return (
    <div className="flex items-center flex-col lg:flex-row gap-10 py-14 px-5">
      <Image src={Illustration} alt="rafiki" />

      <div className="space-y-5 max-w-xl">
        <Heading
          content={"How to design your site footer like we did"}
          orientation={"left"}
          tag={"h6"}
        />
        <Text
          content={
            "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
          }
        />
        <Button content={"Learn More"} variant={"filled"} />
      </div>
    </div>
  )
}

export default SceneThree
