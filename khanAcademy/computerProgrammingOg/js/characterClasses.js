



 class Fish {
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



   
   