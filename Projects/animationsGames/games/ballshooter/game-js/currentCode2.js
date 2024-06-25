const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.style.background = 'black'
c.clearRect(0,0,canvas.width,canvas.height)
c.clearRect(0,0,canvas.width,canvas.height)
canvas.style.border = '4px solid #c0d375'
canvas.width = innerWidth /2 
canvas.height = innerHeight /2 
let velocityGlobal = 5
let paused = false
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
    
        projectiles.forEach((el,i) => {
            el.update()
            if( el.x + el.radius < 0 || 
                el.x - el.radius > canvas.width ||
                el.y + el.radius < 0 ||
                el.y - el.radius > canvas.height ){
                console.log('boom')
                setTimeout(()=>{
                    projectiles.splice(i,1)
                    console.log(projectiles.length)
                },0)
            } 
        })
        enemies.forEach((el,i) => {
            el.update()
            if( el.x + el.radius < 0 || 
                el.x - el.radius > canvas.width ||
                el.y + el.radius < 0 ||
                el.y - el.radius > canvas.height ){
                console.log('boom')
                setTimeout(()=>{
                    enemies.splice(i,1)
                    console.log(projectiles.length)
                },0)
            } 
        })
        enemies.forEach((enemy,eIndex) => {
            enemy.update()
            const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y )
            if(dist < player.radius){   
                cancelAnimationFrame(animationId)
            }
            
            projectiles.forEach((projectile,pIndex) => {
                // console.log(enemy.x - projectile.x)
                const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
                // console.log(dist)
                if(dist - enemy.radius - projectile.radius <= 1 ){
                    setTimeout(()=>{
                        projectiles.splice(pIndex,1)
                        enemies.splice(eIndex,1)

                    },0)
                } 
                
            })
        })
    }
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


                