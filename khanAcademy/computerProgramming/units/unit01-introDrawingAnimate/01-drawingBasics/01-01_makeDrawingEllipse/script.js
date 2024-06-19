const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let radiusX = 25
let radiusY = 25
let rotation = 4
let startAngle = 0
let endAngle = 2

const inputs = document.querySelectorAll(".input")


canvas.width = innerWidth
canvas.height = innerHeight * .5

inputs.forEach(input => {
    input.addEventListener("change", e=> {
        let currentID = e.target.getAttribute('id');
        console.log(currentID)
        switch(currentID){
            case "x":
                x = e.target.value            
            break;
            case "y":
                y = e.target.value            
            break;
            case "radiusX":
                radiusX = e.target.value            
            break;
            case "radiusY":
                radiusY = e.target.value            
            break;
            case "rotation":
                rotation = e.target.value            
            break;
            case "startAngle":
                startAngle = e.target.value            
            break;
            case "endAngle":
                endAngle = e.target.value            
            break;
            default:
                console.log("ERROR")
        }
    })

})

function animate(){
    window.requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, Math.PI / rotation, startAngle, endAngle * Math.PI);                
    ctx.stroke();
}
animate();



