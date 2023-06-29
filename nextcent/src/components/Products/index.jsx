import React from "react"
import SceneOne from "./SceneOne"
import SceneTwo from "./SceneTwo"
import SceneThree from "./SceneThree"
import SceneFour from "./SceneFour"

function Products() {
  return (
    <section className="">
      <div className=" flex items-center flex-col gap-12">
        <SceneOne />
        <SceneTwo />
        <SceneThree />
        <SceneFour />
      </div>
    </section>
  )
}

export default Products
