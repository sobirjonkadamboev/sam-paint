const canvas = document.querySelector('canvas'),
	toolButtons = document.querySelectorAll('.tool')

let context = canvas.getContext('2d'),
	isDrawing = false,
	brushWidth = 5

window.addEventListener('load', () => {
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
})

const startDraw = () => {
	isDrawing = true
	context.beginPath()
	context.lineWidth = brushWidth
}

const drawing = e => {
	if (!isDrawing) return
	context.lineTo(e.offsetX, e.offsetY)
	context.stroke()
}

const stopDraw = () => {
	isDrawing = false
}

toolButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log(btn.id)
	})
})

canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', stopDraw)
