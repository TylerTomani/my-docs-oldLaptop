const distance = document.querySelector('input.distance')
const speed = document.querySelector('input.speed')
const time = document.querySelector('input.time')
let currentSpeed = 1000
let scale = 10
let rulerLength = 2
const canvas = document.querySelector('#canvas')
const c = canvas.getContext('2d')
canvas.width =innerWidth
canvas.height =innerHeight * .9
let cm = (10 * scale)
console.log('1cm = ',cm,'px')
let newRulerLength = rulerLength * cm

let rulerLengthDisplay = document.querySelector('.ruler-display')

distance.addEventListener('change', e => {
    rulerLength = e.target.value
    newRulerLength = e.target.value * cm
    rulerX['rulerLength'] = e.target.value * cm
})

time.addEventListener('change', e => {    
    currentSpeed = e.target.value * 1000
    clearInterval(animationInterval);
    startAnimation();
})

let animationInterval;

function startAnimation() {
    animationInterval = setInterval(() => {
        square1.position.x += cm
        if(square1.position.x >= square1.width + (rulerLength * cm)) {
            square1.position.x = 20
        }
        square1.update()
        console.log(currentSpeed)
    }, currentSpeed);
}

class Ruler{
    constructor({position},rulerLength){
        this.position = position
        this.rulerLength = rulerLength
    }
    rulerDraw(){
        for(let cms = 0; cms <= newRulerLength; cms+=cm){
            c.beginPath()
            c.moveTo(this.position.x,this.position.y)
            c.lineTo(this.position.x + cms,this.position.y)
            c.lineTo(this.position.x + cms,this.position.y - cm * .3)
            c.lineWidth = 1
            c.strokeStyle = 'black'
            c.fillStyle = 'black'
            if(cms != 0){
                if(scale <= 2){
                    c.fillText(`${cms / cm}`, this.position.x + cms , this.position.y - cm * .5)
                    c.font = '10px Arial'
                } else {
                    c.fillText(`${cms / cm}cm`, this.position.x + cms , this.position.y - cm * .5)
                    c.font = '10px Arial'
                }
            }
            c.stroke()    
        }
    }
    updateDraw(){
        this.rulerLength = newRulerLength * cm
        this.rulerDraw()
    }
}

class Square{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.width =  cm
        this.height = cm
    }
    draw(){
        c.beginPath();
        c.moveTo(this.position.x,this.position.y)
        c.lineTo(this.position.x + cm,this.position.y)
        c.lineTo(this.position.x + cm,this.position.y + cm)
        c.lineTo(this.position.x,this.position.y + cm)
        c.lineTo(this.position.x,this.position.y)
        c.lineWidth = 1;
        c.strokeStyle = 'black';
        c.stroke();
    }
    update(){
        this.draw()
    }
}

const square1 = new Square({
    position :{
        x:20,
        y:50
    }
})

const rulerX = new Ruler({
    position: {
        x: square1.position.x,
        y: square1.position.y + square1.height * 4
    }
},rulerLength * cm)

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    square1.update()
    rulerX.rulerDraw()
}

startAnimation(); // Start the animation initially
animate();
