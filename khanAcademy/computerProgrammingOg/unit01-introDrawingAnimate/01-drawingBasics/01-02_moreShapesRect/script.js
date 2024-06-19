const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let width = 100
let height = 100


const inputs = document.querySelectorAll(".input")

canvas.width = innerWidth
canvas.height = innerHeight / 4

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
            case "width":
                width = e.target.value            
            break;
            case "height":
                height = e.target.value            
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
    ctx.rect(x, y, width, height);                
    ctx.stroke();
}
animate();



