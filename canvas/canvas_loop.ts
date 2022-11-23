let mouseX, mouseY, lastX, lastY: number
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

let drawing = false

let subscribed_to_events = false
/**
 * Be careful not to subscribe twice cause React strict mode will render and run useEffects twice.
 */
function subscribeToEvents(): void {
  if (subscribed_to_events) return

  canvas.addEventListener('mousemove', (e => {
    lastX = mouseX
    lastY = mouseY
    mouseX = e.offsetX
    mouseY = e.offsetY
  }))

  canvas.addEventListener('click', (e => {
    drawing = !drawing
  }))

  subscribed_to_events = true
}

export default function init() {
  // Can we assume guarantee that there is only one Element with this class?
  canvas = document.getElementsByClassName("terminal").item(0) as HTMLCanvasElement
  ctx = canvas.getContext("2d")

  subscribeToEvents()

  requestAnimationFrame(update)
}

function update() {
  const hex = "#9342f5"

  if (drawing) {
    ctx.fillStyle = hex
    ctx.fillRect(mouseX, mouseY, 2, 2)
  }

  requestAnimationFrame(update)
}

export function clear_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}