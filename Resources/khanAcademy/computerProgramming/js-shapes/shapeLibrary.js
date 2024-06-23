export const canvas = document.querySelector("canvas");
export const c = canvas.getContext('2d');

export const drawWinston = function(x,y,faceColor,eyeColor,mouthColor){
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

export let drawCar = function(x,y){
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

export const drawGround = function(x1,y1,x2,y2,color){
    c.beginPath();
    c.fillStyle = color;
    c.rect(x1,y1,x2,y2)
    c.fill();
    c.stroke();
    c.closePath()
}
export const drawSky = function(x1,y1,x2,y2,g,b){
    c.beginPath();
    c.fillStyle = `rgb(0,${g},${b})`;
    c.rect(x1,y1,x2,y2)
    c.fill();
    c.stroke();
    c.closePath()
}
export const drawCloud = function(x,y,cloudSize){
    c.beginPath();
    c.fillStyle = "white"
    c.ellipse(x,y,cloudSize,cloudSize, Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .02),y,cloudSize + (canvas.width * .01),cloudSize + (canvas.width * .01), Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .03),y,cloudSize + (canvas.width * .01),cloudSize + (canvas.width * .01), Math.PI / 4, 0, 2 * Math.PI)
    c.ellipse(x + (canvas.width * .05),y,cloudSize,cloudSize, Math.PI / 4, 0, 2 * Math.PI)
    c.fill();
    c.closePath()
}
export const drawSun = function(x,y,sunRadius,color){
    c.beginPath();
    c.fillStyle = color
    c.ellipse(x,y,sunRadius,sunRadius, Math.PI / 4, 0, 2 * Math.PI)
    c.fill()
    c.closePath()

}
export class Fish {
    constructor(x = 50, y = 150, width = (canvas.width * .05), color = "orange", xVelocity = .5){
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color
        this.xVelocity = xVelocity
    }
    draw(){

            // Body
       c.beginPath();
       c.fillStyle = this.color
       // c.arc(x, y, this.width, 0, Math.PI*4, false);
       c.ellipse(this.x,this.y,this.width* 1.1,this.width * 1.4, Math.PI/ 4, 0,2 * Math.PI)
       c.fill();
       c.closePath()
        
       // Eye
       c.beginPath();
       c.fillStyle = "white"
        
       c.ellipse(this.x + this.width * .53,this.y - (this.width * .48),this.width * .25,this.width * .25, Math.PI/ 4, 0, 2 * Math.PI)
        
       c.fill();
       c.stroke();
       c.closePath()
        
       c.beginPath();
       c.fillStyle = "black";
       c.ellipse(this.x + this.width * .65,this.y - (this.width * .5),this.width * .05,this.width * .05, Math.PI/ 4, 0, 2 * Math.PI)
       c.fill();
       c.stroke();
       c.closePath()
        

       //Side Fin
       c.beginPath();
       c.fillStyle = "black";
       c.strokeStyle = "white"
       c.ellipse(this.x-canvas.width * .01,this.y,this.width* .5,this.width * .5, Math.PI/ -2, 0,1 * Math.PI)
       c.fill();
       c.stroke()
       c.beginPath();
        
       //Tail
       c.beginPath();
       c.strokeStyle ="black"
       c.fillStyle = this.tailColor;
       c.ellipse(this.x - this.width * 1.75,this.y,this.width * .75,this.width * .65, Math.PI/ -2, 0,1 * Math.PI)
       c.fill();

       c.beginPath();

       //Mouth
       c.beginPath();

       c.ellipse(this.x + this.width * .65 ,this.y,this.width* .5,this.width * .5, Math.PI/ 6, 0,.4 * Math.PI)

       c.stroke()
       c.beginPath();
        
    }
    update() {
        this.draw()
        this.x += this.xVelocity; 
    }
}