function winston(x = canvas.width * .05,y = canvas.height * .4,faceSize = 40){
    c.beginPath();
    c.fillStyle = "yellow",
    c.ellipse(x,y,faceSize, faceSize, Math.PI / 4, 0 , 2 * Math.PI )
    c.fill()
    c.stroke()
    c.closePath()
    // Eyes 
    c.beginPath()
        // Left Eye
        c.fillStyle = "white";
        c.ellipse( x - (faceSize * .3 ), 
                   y - (faceSize * .2 ),
                   faceSize * .2,
                   faceSize * .2 ,
                   Math.PI / 4,
                   0,
                   2 * Math.PI )
        c.fill();
        c.stroke()
        c.closePath()
        // Right Eye
        c.beginPath()
        c.fillStyle = "white";
        c.ellipse( x + (faceSize * .5 ), 
                   y - (faceSize * .2 ),
                   faceSize * .2,
                   faceSize * .2 ,
                   Math.PI / 4,
                   0,
                   2 * Math.PI )
        c.fill()
        c.stroke()
    c.closePath()
    // Mouth 
    c.beginPath();
    c.fillStyle = "coral"
    c.ellipse(x + (faceSize * .2),
            y + (faceSize * .5),
            faceSize * .3,
            faceSize * .3,
            Math.PI / 4,
            0,
            2 * Math.PI )
    c.fill()
    c.stroke()
    c.closePath()
}


