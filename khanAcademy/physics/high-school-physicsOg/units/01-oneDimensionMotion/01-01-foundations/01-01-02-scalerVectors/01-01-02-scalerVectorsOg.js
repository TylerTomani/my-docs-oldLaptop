const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
let scale = 2
let cm = (10 * scale)
console.log('1cm = ',cm)
class Ruler{
    constructor({position},rulerLength){
        this.position = position
        this.rulerLength = rulerLength
    }
    drawCm(){
        c.beginPath()
        c.moveTo(this.position.x,this.position.y) // start point
        c.lineTo(this.position.x + cm,this.position.y) // end point
        c.lineTo(this.position.x + cm,this.position.y - cm * .3) // end point
        c.lineWidth = 1
        c.strokeStyle = 'black'
        c.fillStyle = 'black'
        c.font = '10px Arial'
        c.fillText("1cm", this.position.x + cm , this.position.y - cm * .5)
        c.stroke()
    }
    rulerDraw(){
        this.drawCm()
        for(let cms = 0; cms <= this.rulerLength; cms+=cm){
            console.log(cms / cm)
            
        }
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
        c.moveTo(this.position.x,this.position.x)
        c.lineTo(this.position.x + cm,this.position.y)
        c.lineTo(this.position.x + cm,this.position.y + cm)
        c.lineTo(this.position.x,this.position.y + cm)
        c.lineTo(this.position.x,this.position.y)
        c.lineWidth = 1; // thickness of the outline
        c.strokeStyle = 'black'; // color of the outline
        c.stroke(); // draw the outline
    }
    update(){
        this.draw()
    }
}
const square1 = new Square({
    position :{
        x:50,
        y:50
    }
})
const rulerX = new Ruler({
    position: {
        x: square1.position.x,
        y: square1.position.y + canvas.height * .5
    }
},10 * cm)
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    square1.update()
    rulerX.rulerDraw()

}
animate()

