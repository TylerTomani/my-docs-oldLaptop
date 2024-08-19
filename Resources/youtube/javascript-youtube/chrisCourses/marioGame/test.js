// // < !--Part 2 -- >
// /** @type {HTMLCanvasElement} */

// const canvas = document.querySelector('canvas')
// canvas.width = innerWidth
// canvas.height = innerHeight * .66
// const c = canvas.getContext('2d')

// const gravity = 1.5
// class Player {
//     constructor() {
//         this.position = {
//             x: 100,
//             y: 100
//         }
//         this.velocity = {
//             x: 0,
//             y: 0
//         }
//         this.width = canvas.width * .05
//         this.height = canvas.width * .05
//     }
//     draw() {
//         c.fillStyle = 'red'
//         c.fillRect(this.position.x, this.position.y, this.width, this.height)
//     }
//     update() {
//         this.position.y += this.velocity.y
//         if (player.position.y + player.height + player.velocity.y <  canvas.height) { this.velocity.y += gravity } else {
//             this.velocity.y = 0
//         } this.draw()
//     }
// }


// const player = new Player()
// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, canvas.width, canvas.height)
//     player.update()
// }
// animate()
