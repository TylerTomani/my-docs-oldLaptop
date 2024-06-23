const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = innerWidth;
canvas.height = innerHeight * .3;

let x = 20
let forward = true
let animateCar = function(delay){
    const intervalObj = setInterval(() => {
       if(forward && x < 900){
        c.clearRect(0,0,canvas.width,canvas.height)
        x++;
        drawCar(x,200)
       } else if (x >= 500){
        forward = false;
       }
       
       if(!forward){
        c.clearRect(0,0,canvas.width,canvas.height)
        x--;
        drawCar(x,200);
       } 
        if( x <= 0){
            forward = true
            c.clearRect(0,0,canvas.width,canvas.height)
             x++;
            drawCar(x,200)
       }
       
    }, delay);
    console.log(forward)
    console.log(x)
}



function animate(){
    window.requestAnimationFrame(animate);
    /*The function below is from the Async chapter in app academy, */
    animateCar(225);
}
animate();