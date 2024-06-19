const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight * .5

const xVal = document.getElementById("x-co")
const yVal = document.getElementById("y-co")

let x = 20;
let y = 200;
let position = {}

function mousePosition(e){
    let bound = canvas.getBoundingClientRect();
    x = e.clientX;
    y = e.clientY
    position.x = x;
    position.y = y;
    xVal.innerText = x
    yVal.innerText = y
}
canvas.addEventListener("mousedown", e => {
    canvas.addEventListener("mousemove", mousePosition)
})
canvas.addEventListener("mouseup", e => {
    canvas.removeEventListener("mousemove",mousePosition)
})

function textBox (str,x,y){
    c.beginPath();
    c.font = "48px serif"
    c.fillText(str,x,y)
    
}
function animate(){
    window.requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height)
    textBox("Yo",x,y)
}
animate();