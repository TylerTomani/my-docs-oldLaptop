const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight / 4;
let x = canvas.width * .05
let y = canvas.height * .8
let faceWidth = 40;
function weeksOld(years){
    return (years * 365) / 7;
}


function animate(){
    window.requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = 'black'
    c.font = "18px Arial"
    c.fillText("Winston is:",x - canvas.width * .04, y - canvas.height * .7)
    c.fillText(weeksOld(2).toFixed(2) + " weeks old", x - faceWidth / 2 , y - canvas.height * .4);
    c.font = "16px Arial"
    winston(x,y,40);

    c.fillStyle = 'black'
    c.fillText(weeksOld(4).toFixed(0) + " weeks old", x + (canvas.width * .2) - (faceWidth / 2) ,
                y - canvas.height * .55);
    c.font = "16px Arial"
    winston(x + (canvas.width * .2),y - canvas.height * .05,60);
    
    c.fillStyle = 'black'
    c.fillText(weeksOld(8).toFixed(0) + " weeks old", x + (canvas.width * .4) - (faceWidth / 2) ,
                y - canvas.height * .7);
    c.font = "16px Arial"
    winston(x + (canvas.width * .45),y - canvas.height * .2,80);
}
animate();