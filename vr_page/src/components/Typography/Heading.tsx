import React from "react"

function Heading({
  content,
  tag,
  size,
  orientation,
}: {
  content: string
  tag: React.ElementType
  size: "sm" | "md" | "lg" | "xl"
  orientation: string
}) {
  const Tagname = tag

  return (
    <Tagname
      className={`font-orb font-black text-white ${
        size === "sm"
          ? "text-[1.00213rem]"
          : size === "md"
          ? "text-[1.17606rem]"
          : size === "lg"
          ? "text-[1.30313rem]"
          : "text-[1.98069rem] lg:text-4xl"
      } leading-[2.71044rem] ${
        orientation == "left"
          ? "text-left"
          : orientation == "right"
          ? "text-right"
          : "text-center"
      }`}
    >
      {content}
    </Tagname>
  )
}

export default Heading
