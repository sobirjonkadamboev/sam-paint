const canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

window.addEventListener('load', () => {
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
})

const drawing = e => {
	context.lineTo(e.offsetX, e.offsetY)
	context.stroke()
}

canvas.addEventListener('mouseover', drawing)
