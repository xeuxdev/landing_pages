import React from "react"

function Text({
  content,
  size,
  orientation,
}: {
  content: string
  size: "sm" | "md" | "lg"
  orientation: string
}) {
  return (
    <p
      className={`${
        size === "sm"
          ? "text-[0.456rem]"
          : size === "md"
          ? "text-[0.5625rem]"
          : "text-[0.75rem]"
      } text-white/80 font-inter font-normal text-${orientation}`}
    >
      {content}
    </p>
  )
}

export default Text
