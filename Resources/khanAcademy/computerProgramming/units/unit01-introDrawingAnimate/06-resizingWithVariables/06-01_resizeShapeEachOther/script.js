const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
const xValues = document.querySelectorAll(".x-co")
const yValues = document.querySelectorAll(".y-co")
const faceSizeInput = document.getElementById("faceSizeInput")
let faceSizeVal = document.getElementById("faceSize")

let faceSize = 100;

faceSizeInput.addEventListener("change", e => {
    faceSize = e.target.value
    faceSizeVal.innerHTML = faceSize

})



canvas.width = innerWidth;
canvas.height = innerHeight * .5;
let x = canvas.width * .1
let y = canvas.height * .5

let position = {}

function moveShape(e){
     let bound = canvas.getBoundingClientRect();
    x = e.clientX ;
    y = e.clientY ;
    position.x = x;
    xValues.forEach(xVal => {
        xVal.innerText = x
    })
    yValues.forEach(yVal => {
        yVal.innerText = y
    })
    position.y = y
    console.log(position)
};
canvas.addEventListener('mousedown',() => {
    canvas.addEventListener('mousemove',moveShape)
});
canvas.addEventListener('mouseup',() => {
    canvas.removeEventListener('mousemove',moveShape)
    faceSizeInput.focus()
});


function drawWinston(x,y,faceSize){
    c.beginPath();
    c.fillStyle = "yellow",
    c.ellipse(x,y,faceSize, faceSize, Math.PI / 4, 0 , 2 * Math.PI )
    c.fill()
    c.stroke()
    c.closePath()
    // Eyes 
    c.beginPath()
        // Left Eye
        c.fillStyle = "white";
        c.ellipse( x - (faceSize * .3 ), 
                   y - (faceSize * .2 ),
                   faceSize * .2,
                   faceSize * .2 ,
                   Math.PI / 4,
                   0,
                   2 * Math.PI )
        c.fill();
        c.stroke()
        c.closePath()
        // Right Eye
        c.beginPath()
        c.fillStyle = "white";
        c.ellipse( x + (faceSize * .5 ), 
                   y - (faceSize * .2 ),
                   faceSize * .2,
                   faceSize * .2 ,
                   Math.PI / 4,
                   0,
                   2 * Math.PI )
        c.fill()
        c.stroke()
    c.closePath()
    // Mouth 
    c.beginPath();
    c.fillStyle = "coral"
    c.ellipse(x + (faceSize * .2),
            y + (faceSize * .5),
            faceSize * .3,
            faceSize * .3,
            Math.PI / 4,
            0,
            2 * Math.PI )
    c.fill()
    c.stroke()
    c.closePath()
}

function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    drawWinston(x,y,faceSize);
    c.fillStyle = "black"
    // c.fontStyle = `" ${canvas.height * .5 * 25}px Arial"`
    c.font = "22px Arial "
    c.fillText("Click and Drag", 0, canvas.height * .2);
}
animate()