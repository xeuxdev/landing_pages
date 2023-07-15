import React from "react"

function Button({ content }: { content: string }) {
  return (
    <button className="px-6 py-4 rounded-lg btn-bg text-white font-inter font-bold text-sm hover:scale-[1.01] duration-300">
      {content}
    </button>
  )
}

export default Button
