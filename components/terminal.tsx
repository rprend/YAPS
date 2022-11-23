import { useEffect } from "react"
import canvas_loop, { clear_canvas } from "../canvas/canvas_loop"

export default function Terminal() {
  useEffect(() => {
    canvas_loop()
  })

  function trashClick () {
    clear_canvas()
  }

  return (
    <div>
      <button onClick={trashClick}>trash</button>
      <canvas className="terminal"></canvas>
    </div>
  )
}