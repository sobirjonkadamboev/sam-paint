const canvas = document.querySelector('canvas')
let context = canvas.getContext('2d'),
	isDrawing = false

window.addEventListener('load', () => {
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
})

const startDraw = () => {}

const drawing = e => {
	context.lineTo(e.offsetX, e.offsetY)
	context.stroke()
}

canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mousemove', drawing)
