const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight * .5;

// https://stackoverflow.com/a/48500289
// canvas.addEventListener('click', event => {
//     let bound = canvas.getBoundingClientRect();
//     console.log(bound)
//     console.log("clientX",event.clientX,"clientY:",event.clientY)
//     let x = event.clientX ;
//     let y = event.clientY  ;
//     console.log("x",x,"y",y)
//     // subtract half the width and height to get shape to draw at center
//     c.fillRect(x - 8, y-8, 16, 16);
// });
c.font = "22px Arial"
c.fillText("Use mouse, Draw on screen", 10, 40)
function mouseDraw(e){
    let bound = canvas.getBoundingClientRect();
    // console.log("clientX",event.clientX,"clientY:",event.clientY)
    let x = e.clientX ;
    let y = e.clientY  ;
    c.lineWidth = 2;
    c.strokeStyle = "black"
    c.fillStyle = "lightblue"
    // subtract half the width and height to get shape to draw at center
    c.fillRect(x-8,y-8,16,16)
    c.strokeRect(x-8, y-8, 16, 16);

};

// Took the the code below from 
// https://www.youtube.com/watch?v=adPc41k4EvE
canvas.addEventListener('mousedown',() => {
    canvas.addEventListener('mousemove',mouseDraw)
});
canvas.addEventListener('mouseup',() => {
    canvas.removeEventListener('mousemove',mouseDraw)
});