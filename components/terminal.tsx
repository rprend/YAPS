import { MouseEvent } from "react";

function update() {

}

export default function Terminal() {
  function handleClick(event: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>) {
    console.log(event);
  }

  return (
    <canvas className="terminal" onClick={(e) => handleClick(e)}></canvas>
  )
}