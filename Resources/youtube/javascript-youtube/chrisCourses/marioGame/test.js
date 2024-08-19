(function () {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('canvas')
    canvas.width = innerWidth
    canvas.height = innerHeight * .66
    const c = canvas.getContext('2d')

    const gravity = 1.5
    const playerSpeed = 9
    let backgroundSpeed = 5
    const keys = {
        left: {
            pressed : false
        },
        up: {
            pressed : false
        },
        right: {
            pressed : false
        },
        down: {
            pressed : false
        },
    }

    class Player {
        constructor() {
            this.position = {
                x: 100,
                y: 100
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = canvas.width * .05
            this.height = canvas.width * .05
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
        update() {
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            if (player.position.y + player.height + player.velocity.y < canvas.height) { 
                this.velocity.y += gravity 
            } else {
                this.velocity.y = 0
            } 
            this.draw()
        }
    }
    class Platform{
        constructor({x,y}){
            // this.position = {
            //     x: x,
            //     y: y
            // }
            this.position = {
                x,
                y
            }
            this.width = canvas.width * .23
            this.height = 20
        }
        draw(){
            c.fillStyle = 'blue'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    }

    const platforms = []
    platforms.push(new Platform({ x: canvas.width * .2, y: canvas.height * .4 }))
    platforms.push(new Platform({ x: canvas.width * .4, y: canvas.height * .5 }))
    platforms.push(new Platform({ x: canvas.width * .8, y: canvas.height * .55 }))
    platforms.push(new Platform({ x: canvas.width * 1.1, y: canvas.height * .4 }))
    const player = new Player()
    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)
        player.update()
        platforms.forEach(platform => {
            platform.draw()
        })
        // Left Right Direction
        if(keys.right.pressed && player.position.x  < canvas.width * .5){
            player.velocity.x = playerSpeed
        } else if(keys.left.pressed && player.position.x > canvas.width * .1){
            player.velocity.x = -playerSpeed
        } else {
            player.velocity.x = 0
        }

        if(keys.right.pressed){
            platforms.forEach(platform => {
                platform.position.x -= backgroundSpeed
            })
        } else if(keys.left.pressed){
            platforms.forEach(platform => {
                platform.position.x += backgroundSpeed
            })
        }

        // Up Down Direction
        if (keys.up.pressed && player.position.y > 0) {
            player.velocity.y = -17
        } 
        // Platform collision detections
        platforms.forEach(platform => {
            if(player.position.y + player.height <= platform.position.y 
                && player.position.y + player.height + player.velocity.y >= platform.position.y
                && player.position.x + player.width >= platform.position.x
                && player.position.x < platform.position.x + platform.width){
                player.velocity.y = 0
            }
        })
            if (keys.down.pressed && player.position.y + player.height + player.velocity.y + gravity <= canvas.height ) {
                player.position.y += 20
            }
    }
    animate()
    addEventListener('keyup', e => {
        let letter = e.key.toLowerCase()
        switch (letter){
            case 'a':
                keys.left.pressed = false
                break
            case 'w':
                keys.up.pressed = false
                break
            case 'd':
                keys.right.pressed = false
                break
            case 's':
                keys.down.pressed = false
                break
        }
    })
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        switch (letter){
            case 'a':
                keys.left.pressed = true
                break
            case 'w':
                keys.up.pressed = true
                break
            case 'd':
                keys.right.pressed = true
                break
            case 's':
                keys.down.pressed = true
                break
    
        }

    });

}())