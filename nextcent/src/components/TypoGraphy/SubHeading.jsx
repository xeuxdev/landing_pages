import React from "react"

function SubHeading({ orientation, content }) {
  return (
    <p
      className={`text-heading font-bold text-[1.75rem] md:text-4xl leading-[2.25rem] font-inter text-${orientation}`}
    >
      {content}
    </p>
  )
}

export default SubHeading
