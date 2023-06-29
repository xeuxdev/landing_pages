import React from "react"

function Heading({ tag, orientation, content }) {
  const Tagname = tag
  return (
    <Tagname
      className={`text-heading font-semibold text-3xl md:text-4xl leading-[2.75rem] font-inter text-${orientation}`}
    >
      {content}
    </Tagname>
  )
}

export default Heading
