//Global Variables
const canvas = document.querySelector('canvas'),
	toolButtons = document.querySelectorAll('.tool')

//Local variables
let context = canvas.getContext('2d'),
	isDrawing = false,
	brushWidth = 5,
	selectedTool = 'brush',
	prevMouseX,
	prevMouseY,
	snapshot

//Set canvas width and height
window.addEventListener('load', () => {
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
})

//Start Drawing
const startDraw = e => {
	isDrawing = true
	snapshot = context.getImageData(0, 0, canvas.width, canvas.height)
	prevMouseX = e.offsetX
	prevMouseY = e.offsetY
	context.beginPath()
	context.lineWidth = brushWidth
}

//Draw rectangle
const drawRectangle = e => {
	context.strokeRect(
		e.offsetX,
		e.offsetY,
		prevMouseX - e.offsetX,
		prevMouseY - e.offsetY,
	)
}

//Selected tools and drawing them

const drawing = e => {
	if (!isDrawing) return

	switch (selectedTool) {
		case 'brush':
			context.lineTo(e.offsetX, e.offsetY)
			context.stroke()
			break

		case 'rectangle':
			drawRectangle(e)
			break
		default:
			break
	}
}

const stopDraw = e => {
	isDrawing = false
}

toolButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelector('.options .active').classList.remove('active')
		btn.classList.add('active')
		selectedTool = btn.id
		console.log(selectedTool)
	})
})

canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', stopDraw)
