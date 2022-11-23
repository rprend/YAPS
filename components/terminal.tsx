import { useEffect } from "react"
import canvas_loop from "../canvas/canvas_loop"

export default function Terminal() {
  useEffect(() => {
    canvas_loop()
    console.log("Component did mount")
    // console.log(document.getElementsByClassName("terminal"))
  })

  return (
    <canvas className="terminal"></canvas>
  )
}