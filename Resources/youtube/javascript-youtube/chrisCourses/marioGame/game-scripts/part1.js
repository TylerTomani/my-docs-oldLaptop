/** @type {HTMLCanvasElement} */

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

c.fillStyle ='blue'
c.fillRect(400, 300, 200, 100)

canvas.style.background = 'black'