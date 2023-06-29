import Image from "next/image"
import Illustration from "../../../public/products/rafiki.svg"
import Heading from "../TypoGraphy/Heading"
import Text from "../TypoGraphy/Text"
import Button from "../Button/Button"

function SceneOne() {
  return (
    <div className="flex items-center flex-col lg:flex-row gap-10 py-14 container px-5">
      <Image src={Illustration} alt="rafiki" />

      <div className="space-y-5 max-w-xl">
        <Heading
          content={"The unseen of spending three years at Pixelgrade"}
          orientation={"left"}
          tag={"h4"}
        />
        <Text
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          }
        />
        <Button content={"Learn More"} variant={"filled"} />
      </div>
    </div>
  )
}

export default SceneOne
