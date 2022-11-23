interface Pixel {
  x: number
  y: number
}

let mouse: Pixel, last_mouse: Pixel
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
    if (mouse) last_mouse = {x: mouse.x, y: mouse.y}
    mouse = {x: e.offsetX, y: e.offsetY}
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

function drawPixel(pixel: Pixel, size = 2) {
  ctx.fillRect(pixel.x, pixel.y, size, size)
}

/**
 * Hitbox size is 2x2.
 */
function pixelsOverlapping(first, second): boolean {
  const HITBOX_SIZE = 2

  if (Math.abs(first.x - second.x) < HITBOX_SIZE && Math.abs(first.y - second.y) < HITBOX_SIZE) {
    return true
  }

}

function connectPixels(prev, curr) {
  if (!prev || !curr) return

  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.moveTo(prev.x, prev.y)
  ctx.lineTo(curr.x, curr.y)
  ctx.stroke()
}

function update() {
  const hex = "#9342f5"

  if (drawing) {
    ctx.fillStyle = hex
    ctx.strokeStyle = hex
    connectPixels(last_mouse, mouse)
  }

  requestAnimationFrame(update)
}

export function clear_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}