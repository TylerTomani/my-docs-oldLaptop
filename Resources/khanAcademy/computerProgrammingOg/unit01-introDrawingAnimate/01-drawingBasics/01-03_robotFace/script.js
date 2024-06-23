const switchOrderBtn = document.getElementById("switch-order")
const code = document.getElementById("code")
let toggle = false;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight /4;

let faceX = canvas.width * .1
let faceY = canvas.height * .1
let faceWidth = faceX + (canvas.width * .15)
let faceHeight = faceY + (canvas.height * .5)
let eyeLeftX = faceX + (canvas.width * .045)
let eyeLeftY = faceY + (canvas.height * .125)
let eyeWidth = canvas.width * .04
let eyeHeight = canvas.height * .1
let eyeRightX = faceX + (canvas.width *  .2)



switchOrder()
function animate(){
    window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
  
    if(!toggle){
        //Face
        ctx.rect(faceX,faceY,faceWidth,faceHeight) 
        //Eyes
        ctx.rect(eyeLeftX, eyeLeftY, eyeWidth, eyeHeight) 
        ctx.rect(eyeLeftX + (faceWidth * .45), eyeLeftY, eyeWidth, eyeHeight) 
        //Mouth
        ctx.rect(eyeLeftX + (faceWidth * .125), eyeLeftY + (faceHeight * .45), eyeWidth + (faceWidth * .2), eyeHeight) 
        ctx.stroke()
    } else {
        //Mouth
        ctx.rect(eyeLeftX + (faceWidth * .125), eyeLeftY + (faceHeight * .45), eyeWidth + (faceWidth * .2), eyeHeight) 
        //Face
        ctx.rect(faceX,faceY,faceWidth,faceHeight) 
        //Eyes
        ctx.rect(eyeLeftX, eyeLeftY, eyeWidth, eyeHeight) 
        ctx.rect(eyeLeftX + (faceWidth * .45), eyeLeftY, eyeWidth, eyeHeight) 
        ctx.stroke()
    }
    console.log(toggle)
}
animate()

function switchOrder(){
    switchOrderBtn.addEventListener("click", e => {
        e.preventDefault();
        if(!toggle){
            code.innerHTML = `
    //Face
   <br>ctx.rect(faceX,faceY,faceWidth,faceHeight) 
   <br>
   <br>//Eyes
   <br>ctx.rect(eyeLeftX, eyeLeftY, eyeWidth, eyeHeight) 
   <br>ctx.rect(eyeLeftX + (faceWidth * .45), eyeLeftY, eyeWidth, eyeHeight) 
   <br>
   <br>//Mouth
   <br>ctx.rect(eyeLeftX + (faceWidth * .125), eyeLeftY + (faceHeight * .45), eyeWidth + (faceWidth * .2), eyeHeight) 
            `
        } else {
            code.innerHTML = `
            //Mouth
            <br>ctx.rect(eyeLeftX + (faceWidth * .125), eyeLeftY + (faceHeight * .45), eyeWidth + (faceWidth * .2), eyeHeight) 
            //Face
            <br>ctx.rect(faceX,faceY,faceWidth,faceHeight) 
            <br>
            <br>//Eyes
            <br>ctx.rect(eyeLeftX, eyeLeftY, eyeWidth, eyeHeight) 
            <br>ctx.rect(eyeLeftX + (faceWidth * .45), eyeLeftY, eyeWidth, eyeHeight) 
            <br>
            <br>//Mouth
            <br>ctx.rect(eyeLeftX + (faceWidth * .125), eyeLeftY + (faceHeight * .45), eyeWidth + (faceWidth * .2), eyeHeight) 
            `
        }
        toggle = !toggle

    })
}