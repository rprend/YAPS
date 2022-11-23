let mouseX, mouseY
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

export default function init() {
  // Can we assume guarantee that there is only one Element with this class?
  canvas = document.getElementsByClassName("terminal").item(0) as HTMLCanvasElement
  ctx = canvas.getContext("2d")

  console.log("apprived")
  canvas.addEventListener('mousemove', (e => {
    mouseX = e.offsetX
    mouseY = e.offsetY
    console.log(e)
  }))

  canvas.addEventListener('click', (e => {
    console.log('click')
  }))

  requestAnimationFrame(update)
}

function update() {
  const hex = "#9342f5"

  ctx.fillStyle = hex
  ctx.fillRect(mouseX, mouseY, 2, 2)

  requestAnimationFrame(update)
}