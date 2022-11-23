interface Pixel {
  x: number
  y: number
}

type CanvasMode = "Pencil" | "Eraser" | null

let canvas_mode: CanvasMode = null

const canvasHandlers: Record<CanvasMode, () => void> = {
  "Pencil": pencilMode,
  "Eraser": () => {}
}

// Mouse is the up to date mouse position. Last mouse the up to date previous mouse position.
let mouse: Pixel, last_mouse: Pixel
// Draw is the pixel position to draw at currently. last_draw is the previous. Since mousemove listeners are much more frequent
// than the update loop, we need to keep track of this separately.
let draw: Pixel, last_draw: Pixel
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

let drawing_touch = false

let subscribed_to_events = false
/**
 * Be careful not to subscribe twice cause React strict mode will render and run useEffects twice.
 */
function subscribeToEvents(): void {
  if (subscribed_to_events) return

  canvas.addEventListener('pointermove', (e => {
    if (mouse) last_mouse = mouse
    mouse = {x: e.offsetX, y: e.offsetY}
  }))

  canvas.addEventListener('pointerdown', (e => {
  }))

  canvas.addEventListener('pointerup', (e => {
    drawing_touch = false

    if (mouse) last_mouse = mouse
    mouse = {x: e.offsetX, y: e.offsetY}

    e.preventDefault()
  }))

  canvas.addEventListener('touchmove', (e => {
    e.touches
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

function pencilMode() {
  const hex = "#9342f5"
  ctx.fillStyle = hex
  ctx.strokeStyle = hex
  connectPixels(last_draw, draw)
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
  draw = mouse
  canvasHandlers[canvas_mode]?.()
  last_draw = draw

  requestAnimationFrame(update)
}

export function clear_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export function setCanvasMode(mode: CanvasMode) {
  canvas_mode = mode
}