import { useEffect } from "react"
import canvas_loop, { clear_canvas, setCanvasMode, CanvasMode } from "../canvas/canvas_loop"

export default function Canvas() {
  let canvas_mode: CanvasMode = null

  useEffect(() => {
    canvas_loop()
  })

  function trashClick () {
    clear_canvas()
  }

  function toggleMode (mode: CanvasMode) {
    if (canvas_mode === mode) {
      setCanvasMode(null)
      canvas_mode = null
    } else {
      setCanvasMode(mode)
      canvas_mode = mode
    }
  }

  return (
    <div className="interactive-panel">
      <div><h2>drawing canvas</h2></div>
      <div className="button-panel">
        <button onClick={trashClick}>trash</button>
        <button
          onClick={() => toggleMode("Pencil")}
        >pencil</button>
        <button onClick={() => toggleMode("Text")}>text</button>
      </div>
      <div tabIndex={1} className="canvas-wrapper">
        <canvas id="canvas"/>
      </div>
    </div>
  )
}