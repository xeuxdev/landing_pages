import React from "react"

function Text({ fontSize, orientation, content }) {
  return (
    <p
      className={`text-[${fontSize}] leading-5 font-normal text-gray text-${orientation}`}
    >
      {content}
    </p>
  )
}

export default Text
