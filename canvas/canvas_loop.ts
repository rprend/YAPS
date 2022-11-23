let mouseX, mouseY;
let canvas;

export default function init() {
  // Can we assume guarantee that there is only one Element with this class?
  canvas = document.getElementsByClassName("terminal")[0]
  console.log("apprived")
  canvas.addEventListener('mousemove', (e => {
    mouseX = e.offsetX
    mouseY = e.offsetY
    console.log('yee')
  }))

  canvas.addEventListener('click', (e => {
    console.log('click')
  }))
}

function update() {

}