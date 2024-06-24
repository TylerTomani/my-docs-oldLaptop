const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.style.background = 'black'
c.clearRect(0,0,canvas.width,canvas.height)
canvas.style.border = '4px solid #c0d375'
canvas.width = innerWidth /2 
canvas.height = innerHeight /2 
let velocityGlobal = 5

class Player{
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw(){
        
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}
const player = new Player(canvas.width * .5, canvas.height * .5, 10, 'white',
{x:0,y:0})




class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw(){
        
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}



const projectiles = []
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    projectiles.forEach(el => {
        el.update()
        })
    
    }
animate()



addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const angle = Math.atan2(mouseY - canvas.height / 2 , mouseX - canvas.width / 2);
    const velocity = {  
        x: Math.cos(angle) * velocityGlobal,
        y: Math.sin(angle) * velocityGlobal
    };
    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'yellow', velocity));
    
    console.log(mouseX, mouseY);
    console.log(angle);
});


                