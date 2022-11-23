import { useEffect } from "react"
import canvas_loop, { clear_canvas, setCanvasMode } from "../canvas/canvas_loop"

export default function Terminal() {
  useEffect(() => {
    canvas_loop()
  })

  function trashClick () {
    clear_canvas()
  }

  return (
    <div>
      <div className="button-panel">
        <button onClick={trashClick}>trash</button>
        <button onClick={() => setCanvasMode('Pencil')}>pencil</button>
      </div>
      <canvas className="terminal"></canvas>
    </div>
  )
}