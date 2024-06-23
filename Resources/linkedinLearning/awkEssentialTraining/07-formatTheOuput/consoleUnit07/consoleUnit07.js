const sound = document.getElementById("sound")


const container = document.querySelector(".console-container")
const consoleInput = document.querySelector(".console-input")
const answer = ` awk -F , '{printf("%s\\t%s\\t%d\\n",$1,$2,$3)}'`
const runBtn = document.querySelector(".run-btn") 

const answerArray = answer.split("")
let correctString = ""
answerArray.forEach((el,i) => {
    if(!(el === " ")){
        correctString += el
    }
})


const textArea = document.querySelector(".console-input > textarea");

let correct = false;
let inputArray = []
let inputString = ""
textArea.addEventListener("input", e => {
    inputArray = e.target.value.split("")
    inputArray.forEach((el,i) => {
        if(el === " "){
            inputArray.splice(i,1);
        }
        
    })

    inputString = inputArray.join("")
    
    consoleInput.style.border = "2px solid green";
        consoleInput.style.border = "0 solid black"
        textArea.style.color = "white"
    // console.log(inputString)
    // console.log(correctString)
    
    if(inputString === correctString){
        // textArea.style.border = "2px solid green";
        correct = true
        runBtn.style.background = "lightblue"
        runBtn.style.fontSize ="1rem"
        textArea.style.color = "green";
        runBtn.focus()
    }  else {
        textArea.style.background = "black"
        
        correct = false;
        runBtn.style.background = "white"
    }
    
    runBtn.addEventListener("click", e => {
        if(correct){
            consoleInput.style.border = "2px solid green";
            
            sound.play()
            sound.currentTIme = 5000
            textArea.focus()
            textArea.style.color = " lightgreen";
            
        } else {
            consoleInput.style.border = "2px solid red";
            textArea.style.color = " tomato";
            textArea.focus()

        }
    })
})
    
    

textArea.addEventListener("focusin", e=>{
        runBtn.style.background = "white"
        // runBtn.style.fontSize ="1rem"
        consoleInput.style.border = "0 solid black"
        textArea.style.color = "white"
        // runBtn.style.border ="0px solid blue"
})