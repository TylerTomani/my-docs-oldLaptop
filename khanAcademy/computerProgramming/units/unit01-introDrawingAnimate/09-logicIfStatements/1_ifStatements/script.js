const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = innerWidth;
canvas.height = innerHeight * .3;

class Ball {
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
    }
    draw(){
        c.beginPath();
        c.fillStyle = "orange"
        c.ellipse(this.position.x,this.position.y,
            canvas.width * .05,canvas.width *.05, Math.PI / 4, 0 , 2 * Math.PI);
        c.fill();
        c.stroke()
        c.closePath()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.x > canvas.width){
            this.velocity.x = -5
        } else if(this.position.x < 0){
            this.velocity.x = 10;
        }
        if(this.position.y > canvas.height){
            this.velocity.y = -10
        } else if(this.position.y < 0){
            this.velocity.y = 5;
        }
    }

}

const ball1 = new Ball({
    position: {
        x: canvas.width * .5,
        y: 10
    },
    velocity:{
        x: 10,
        y: 3
    }
})

function animate(){
    window.requestAnimationFrame(animate);
    canvas.style.background = "rgb(30,200,100)"
    c.clearRect(0,0,canvas.width,canvas.height)
    ball1.update()
}    
animate()