
// const audio = new Audio('correct.m4a');

const ex1 = "'{if (NF < 8){print \"Short Line:\" , $0}else{print \"Long Line:\" , $0}}'"
const answer1 = `Short Line The grand old Duke of York
Short Line He had ten thousand men
Long Line He marched them up to the top of the hill
Short Line And he marched them down again
Long Line And when they were up they were up
Long Line And when they were down they were down
Short Line And when they were only half-way up
Short Line They were neither up nor down`
const input1 = document.getElementById("input1")


const ex1Array = ex1.split("");
let correct = true
input1.addEventListener("input", (e) => {
    
    let parent = e.target.parentElement
    let answerArray = ex1.split("")    
    let inputArray = e.target.value.split("");

    const runBtn = parent.querySelector(".run-btn")
    const result = parent.querySelector(".result")


    // e.target.setAttribute("placeholder","")
    console.log("answerArray",answerArray)
    console.log("inputArray",inputArray)
    if(inputArray.length === 0){
        parent.style.background = "black"
    }
    inputArray.forEach((el, i) => {
        if(inputArray[i] === answerArray[i]){
            // console.log("correct")
            parent.style.background = "forestgreen"
            correct = true;
        } else {
            // console.log("NOT Correct")
            parent.style.background = "tomato"
            correct = false;
        }
        
        if(correct && inputArray.length === answerArray.length ){
            runBtn.classList.remove("hide")
            runBtn.focus()
            runBtn.style.background ="lighgreen"
            // runBtn.addEventListener('click',() => {
            //                      audio.play()
            //         })
            

        } else {
            runBtn.classList.add("hide")
            
        }
    })
       
    
    
}

)