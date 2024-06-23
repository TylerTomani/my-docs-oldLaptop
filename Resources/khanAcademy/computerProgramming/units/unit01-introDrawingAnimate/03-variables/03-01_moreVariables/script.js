const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = innerWidth;
canvas.height = innerHeight * .3;

const xPos = document.getElementById('xPos')
let x = 150;
xPos.addEventListener("input", e => {
    console.log(e.target.value)
    x = e.target.value
})

function changeWinstonPos(x,y){
    let faceWidth = 125;
    let eyeWidth = 25;
    let eyeX = x - 40;
    let eyeY = y - 25;
    c.beginPath();
    c.fillStyle = "yellow"
    // Face
    c.ellipse( x, y, faceWidth, faceWidth, Math.PI / 4, 0 , 2 * Math.PI)
    c.fill();
    c.closePath();
    
    

    // Eyes
    c.beginPath();
    c.fillStyle = "whitesmoke"
    c.ellipse(eyeX, eyeY, eyeWidth, eyeWidth, Math.PI / 4, 0 , 2 * Math.PI )
    c.fill();
    c.stroke()
    c.closePath();

    c.beginPath();
    c.fillStyle = "whitesmoke"
    c.ellipse(eyeX + 120, eyeY, eyeWidth, eyeWidth, Math.PI / 4, 0 , 2 * Math.PI )
    c.fill();
    c.stroke()
    c.closePath();
    
    // Mouth
    c.beginPath();
    c.fillStyle = "coral"
    c.ellipse(x  , y + 70, eyeWidth, eyeWidth + 10, Math.PI / 4, 0 , 2 * Math.PI )
    c.fill();
    c.stroke()
    c.closePath();
    
}



function animate(){
    window.requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height)
    changeWinstonPos(x,200)
}
animate();