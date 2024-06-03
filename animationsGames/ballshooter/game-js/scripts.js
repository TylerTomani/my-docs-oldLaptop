export function fullCode(){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    
    c.clearRect(0,0,canvas.width,canvas.height)
    canvas.style.border = '4px solid blue'
    
    let velocity = 5
    console.log('part01')    
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
    const player = new Player(canvas.width * .2, canvas.height * .5, 19, 'orange',
                            {x:0,y:0})
    player.draw()
    function animate(){
        requestAnimationFrame(animate)
        c.clearRect(0,0,canvas.width,canvas.height)
        player.update()
        if(keys.a.pressed && player.x > player.radius){
            player.velocity.x =  velocity * -1
        } else if (keys.d.pressed && player.x < canvas.width ){
            player.velocity.x = velocity  
        } else if (keys.w.pressed && player.y > 0){
            player.velocity.y = velocity * -1  
        } else if (keys.s.pressed && player.y < canvas.height){
            player.velocity.y = velocity  
        } else {
            player.velocity.x = 0
            player.velocity.y = 0
        }
    }
    animate()
    c.beginPath()
    c.arc(canvas.width * .2, canvas.height * .9, 19, 0, Math.PI * 2, false)
    c.fillStyle = 'blue'
    c.fill()
    c.closePath()
    
    
    addEventListener('keydown',  e => {
        let letter = e.key.toLowerCase()
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

}
export function part01DrawPlayer(){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.style.border = '4px solid lightskyblue'
    class Player{
        constructor(x,y,radius,color){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
        }
        draw(){
            c.beginPath()
            c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
        }
        update(){
            draw()
        }
    }
    const player = new Player(canvas.width * .5, canvas.height * .5, 19, 'magenta',
                    {x:0,y:0})
    player.draw()
    function animate(){
        requestAnimationFrame(animate)
        c.clearRect(0,0,canvas.width,canvas.height)
        player.update()
    }
animate()
}    

export function part01ProjectilesClicked(){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    c.clearRect(0,0,canvas.width,canvas.height)
    canvas.style.border = '4px solid magenta'
    canvas.width = innerWidth /2 
    canvas.height = innerHeight /2 
    let velocityGlobal = 5
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
    const player = new Player(canvas.width * .5, canvas.height * .5, 10, 'green',
    {x:0,y:0})
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
        projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'magenta', velocity));

        console.log(mouseX, mouseY);
        console.log(angle);
    });
}

