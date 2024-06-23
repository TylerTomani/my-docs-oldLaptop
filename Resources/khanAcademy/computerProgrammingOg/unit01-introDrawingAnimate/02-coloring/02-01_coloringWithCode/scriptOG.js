const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight * .25;



const eyeColorId = document.getElementById("eyeColorID");
let eyeColor = "black"
function changeEyeColor(){
    eyeColorID.addEventListener("input", e => {
        eyeColor = e.target.value
    })
}

const faceColorID = document.getElementById("faceColorID");
let faceColor = "white"
function changeFaceColor(){
    faceColorID.addEventListener("input", e => {
        faceColor = e.target.value
    })
}

const inputs = document.querySelectorAll(".input")
let r = 200;
let g = 200;
let b = 200;
function changeBgColor(){
    inputs.forEach(input => {
        input.addEventListener("change", e => {
            console.log(e.target.value)
            let currentID = e.target.getAttribute('id');
            console.log(currentID)
            switch(currentID){
                case "r":
                    r = e.target.value            
                    console.log(r)
                break;
                case "g":
                    g = e.target.value            
                break;
                case "b":
                    b = e.target.value            
                break;
                default:
                    console.log("ERROR")
            }
            
        })
    
    })
}

function animate(){
    window.requestAnimationFrame(animate);
    
    changeFaceColor()
    changeEyeColor()
    changeBgColor()
    canvas.style.background = `rgb(${r},${g},${b})`
    // drawWinston in shapeLibrary.js .... home folder
    c.fillStyle = `${faceColor}`
    drawWinston(canvas.width * .25, canvas.height * .45,faceColor,eyeColor)
    
}
animate();