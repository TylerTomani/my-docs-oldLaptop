import { Fish } from "../../../../js-shapes/shapeLibrary.js";
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight * .5

let fishIntervalVal = 1250;
const fishIntervalId = document.getElementById("fishInterval");
fishIntervalId.addEventListener("change", e => {
    fishIntervalVal = e.target.value
    return e.target.value
})



function makeColor(){
    let r = Math.random() * 255;

    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let randomColor =  `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`
    return randomColor;
}

let fish1 = new Fish();
const theFish = []
theFish.push(fish1)

function spawnFish(){
    setInterval(() => {
        let x = 10;
        let y = Math.random() * (canvas.height - 20);
        let width = canvas.width * .05;
        let color = makeColor();
        let xVelocity = Math.random() * 1.1;

        theFish.push(new Fish(x,y,Math.min(canvas.width * .05,Math.random() * canvas.width * .2),color,Math.min(1,xVelocity ) + .2))
        console.log(theFish)
    },fishIntervalVal)
    
}

spawnFish()

function animate(){
    window.requestAnimationFrame(animate);
    // console.log(theFish)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = "rgb(0, 140,200,.4)"
    c.fillRect(0,0,canvas.width,canvas.height)
    c.fillStyle = "rgb(70,70,20)"
    c.fillRect(0,canvas.height - (canvas.height * .2),canvas.width,canvas.height)
    
    fish1.update()
    theFish.forEach(fish =>{
        fish.update()
        if(fish.x > canvas.width){

            let index = theFish.indexOf(fish)
            theFish.splice(index,1)
        }
    })
    
}
animate();