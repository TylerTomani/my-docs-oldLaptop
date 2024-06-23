const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight * .3;
let sunX = 50;
let sunY = 300;
let count = 0;


function animate(){
    window.requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    
    count++;
    console.log(count)
    // Change Sky Color
    if(count < 250){
        drawSky(0,0,canvas.width,canvas.height,count,100 + count);
    } else if (count < 150){
        drawSky(0,0,canvas.width,canvas.height,count > 255 ? 240 : 40,count > 255 ? 255 : 0)
    } else {
        drawSky(0,0,canvas.width,canvas.height,240,100 + (count))
        drawCloud(20,10)
    }
    drawSun(count < 250 ? sunX += count * .015: sunX ,count < 250 ? sunY +- (count * .9) : canvas.height * .2 ,50,"orangered")

// Make a function to draw new clouds

    drawCloud(20 + (count - 200),50,35)
    drawCloud(0 + (count - 300),70,25)
    
    if(count > 1000){
        count = 0;
        sunX = 0;
    }
    drawGround(0,canvas.height * .7, canvas.width, canvas.height, "darkcyan")
}
animate()