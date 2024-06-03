const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.style.background = 'black'
c.clearRect(0,0,canvas.width,canvas.height)
canvas.style.border = '4px solid red'
canvas.width = innerWidth /2 
canvas.height = innerHeight /2 
let playerVelocity = 5
let projectileVelocity = 12
let enemieVelocity = 2
let pause = false
let animationId
let paused = false
const keys = {
    a:{
        pressed: false
    },
    w:{
        pressed: false
    },
    d:{
        pressed: false
    },
    s:{
        pressed: false
    },
}
class Enemy{
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

const player = new Player(canvas.width * .5, canvas.height * .5, 12, 'white',
{x:0,y:0})
const projectiles = []
const enemies = []
addEventListener('keydown',e  => {
    let letter = e.key.toLowerCase()
    let key = e.keyCode
    let angle
    
    if(key == 32){
        e.preventDefault()
        paused = !paused
        scrollTo(0,0)
    }
    // Projectiles
    switch(letter){
        case 'k':
            return
        case 'l':
            angle = 0
            break
        case 'o':
            angle = -.5
            break
        case 'i':
            angle = -3.14 * .5
            break
        case 'u':
            angle = -3.14 * .85
            break
        case 'j':
            angle = 3.14
            break
        case 'm':
            angle = 3.14 * .85
            break
        case ',':
            angle = 3.14 * .5
            break
        case '.':
            angle = 3.14 * .25
            break

    }
    // Player Movement
    switch(letter){
        case 'a':
            keys.a.pressed = true
            break
        case 'w':
            keys.w.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
    }    
    const velocity = {  
        x: Math.cos(angle) * projectileVelocity,
        y: Math.sin(angle) * projectileVelocity
    };
    projectiles.push(new Projectile(player.x,player.y, 5, 'yellow', velocity));
    
});
addEventListener('keyup',  e => {
    let letter = e.key.toLowerCase()
    switch(letter){
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
    }
    
});
function animate(){
    animationId =  requestAnimationFrame(animate)
    if(!paused){
        
        c.fillStyle = `rgba(0, 0, 0, 0.38)`
        c.fillRect(0,0,canvas.width,canvas.height)
        player.update()
        if(keys.a.pressed && player.x > player.radius){
            player.velocity.x =  playerVelocity * -1
        } else if (keys.d.pressed && player.x < canvas.width ){
            player.velocity.x = playerVelocity 
        } else if (keys.w.pressed && player.y > 0){
            player.velocity.y = playerVelocity * -1  
        } else if (keys.s.pressed && player.y < canvas.height){
            player.velocity.y = playerVelocity  
        } else {
            player.velocity.x = 0
            player.velocity.y = 0
        }
        projectiles.forEach((el,i) => {
            el.update()
            if( el.x + el.radius < 0 || 
                el.x - el.radius > canvas.width ||
                el.y + el.radius < 0 ||
                el.y - el.radius > canvas.height ){
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
                setTimeout(()=>{
                    enemies.splice(i,1)
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
                const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
                if(dist - enemy.radius - projectile.radius <= 1 ){
                    setTimeout(()=>{
                        projectiles.splice(pIndex,1)
                        enemies.splice(eIndex,1)

                    },0)
                } 
                
            })
        })
    } else {
        return 
    }
}   
animate()
      
function spawnEnemies(){
    setInterval(() => {
        const radius = 10
        let x
        let y
        
        
        if(Math.random() < 0.5){
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = `hsl(${Math.random() * 360},50%,50%)`
        const angle = Math.atan2(player.y - y, player.x - x )
        const velocity = {  
        x: Math.cos(angle) * enemieVelocity,
        y: Math.sin(angle) * enemieVelocity
        };              
        enemies.push(new Enemy(x,y,radius,color,velocity))
    },1000)
}
spawnEnemies()
                    