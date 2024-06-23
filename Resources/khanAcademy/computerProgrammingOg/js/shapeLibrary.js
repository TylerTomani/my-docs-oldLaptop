

const drawWinston = function(x,y,faceColor,eyeColor,mouthColor){
    let faceWidth = canvas.width * .125;
    let faceHeight = canvas.width * .125;
    let eyeLeftX = x + (faceWidth * -.3);
    let eyeLeftY = y + (faceHeight * -.3);
    let eyeWidth = faceWidth * .175;
    let mouthX = x + (faceWidth * .15);
    let mouthY = y + (faceHeight * .45);
    let mouthWidth = faceWidth * .3;

    //Face

    c.beginPath()
    c.fillStyle = faceColor
    c.ellipse(x, y, faceWidth, faceHeight, Math.PI / 4, 0, 2 * Math.PI)
    c.fill();
    c.stroke()
    c.closePath()
    
    //Eyes
    c.beginPath()
    //Left eye
    // c.fillStyle = `"${eyeColor}"`
    c.fillStyle = eyeColor
        // c.fillStyle = 'black'
        c.ellipse(eyeLeftX, eyeLeftY, eyeWidth, eyeWidth, Math.PI / 4, 0, 2 * Math.PI)
        c.fill()
        c.stroke()
        c.closePath();

        //Right eye
        c.beginPath();
        c.ellipse(eyeLeftX + (faceWidth * .85), eyeLeftY, eyeWidth, eyeWidth, Math.PI / 4, 0, 2 * Math.PI)
        c.fill()
        c.stroke()
        c.closePath();
    //Mouth
    c.beginPath();
    c.ellipse(mouthX, mouthY, mouthWidth, mouthWidth, Math.PI / 4, 0 , 2 * Math.PI)
    c.stroke()
}

let drawCar = function(x,y){
    //Body 
        c.beginPath();
        c.fillStyle = "orange"
        c.rect(x,y,100,25);
        c.rect(x + 25,y - 20,50,40);
        c.stroke();
        c.fill();
        c.closePath()
    //Wheels 
        c.beginPath()
        c.fillStyle = "black"
        c.ellipse(x + 15, y + 25 , 10, 10, Math.PI / 4, 0 , 2 * Math.PI)
        c.fill()
        c.stroke()
        c.closePath();
        c.beginPath();
        c.fillStyle = "black"
        c.ellipse(x + 85, y + 25 , 10, 10, Math.PI / 4, 0 , 2 * Math.PI)
        c.fill();
        c.stroke()


}

const drawGround = function(x1,y1,x2,y2,color){
    c.beginPath();
    c.fillStyle = color;
    c.rect(x1,y1,x2,y2)
    c.fill();
    c.stroke();
    c.closePath()
}
const drawSky = function(x1,y1,x2,y2,g,b){
    c.beginPath();
    c.fillStyle = `rgb(0,${g},${b})`;
    c.rect(x1,y1,x2,y2)
    c.fill();
    c.stroke();
    c.closePath()
}
const drawCloud = function(x,y,cloudSize){
    c.beginPath();
    c.fillStyle = "white"
    c.ellipse(x,y,cloudSize,cloudSize, Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .02),y,cloudSize + (canvas.width * .01),cloudSize + (canvas.width * .01), Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .03),y,cloudSize + (canvas.width * .01),cloudSize + (canvas.width * .01), Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .05),y,cloudSize,cloudSize, Math.PI / 4, 0, 2 * Math.PI)
    c.fill();
    c.closePath()
}
const drawSun = function(x,y,sunRadius,color){
    c.beginPath();
    c.fillStyle = color
    c.ellipse(x,y,sunRadius,sunRadius, Math.PI / 4, 0, 2 * Math.PI)
    c.fill()
    c.closePath()

}