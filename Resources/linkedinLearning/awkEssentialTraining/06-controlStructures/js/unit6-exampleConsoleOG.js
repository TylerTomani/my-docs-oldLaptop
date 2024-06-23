const body = document.querySelector("body")    

const correctResult1 = `<table>
<tr>
	<th>Bowler</th>
	<td>Round 0</td>
	<td>Round 1</td>
	<td>Round 2</td>
	<td>Round 3</td>
	<td>Round 4</td>
	<td>Round 5</td>
	<td>Round 6</td>
</tr>
`
const correctInput1 =`BEGIN {
        FS="\\t";
        print "<table>";
        print "<tr>";
        print "\\t<th>Bowler</th>";
        for(i=1 ; i < 7 ; i++){
          print "\\t<td>Round" , i "</td>";
        }
        print "</tr>";
}


`
const inputElements = document.querySelectorAll(".console-input");

let inputArray = []

let correctAnswerArray = correctInput1.split("")

// Fills nextCharArray[] with all element that are not spaces
correctAnswerArray.forEach((el,i,array) => {
    if( array[i] === "\t" || array[i] === "\n" || array[i] === "" || array[i] === ' ' || array[i] === undefined){
        correctAnswerArray.splice(i,1);
        // console.log(i)
    }
})

let correct = false;
inputElements.forEach(inputEl => {
    
    inputEl.addEventListener("input", (e) => {
        let el = e.target;
        console.log(el)
        // let currentInput = 
        let val = e.target.value
        inputArray = val.split('')
    
        let inputString = "";
        for(let i = 0; i < inputArray.length; i++){
            let el = inputArray[i];
            /* I Can not exculde \t's because it is included in the example,
            plus the tab key changes element when clicked inside the text area*/
            if(!(el == " ") && !(el == '\n') && !(el == '\r')){
                inputString += el
            }
        }
    
        let answerString = ''
        for(let i = 0; i < correctAnswerArray.length -1; i++){
            let el = correctAnswerArray[i]
            if(el !== ' '){
                answerString += el;
            }
    
        }
        
        if(inputString === answerString){    
            correct = true
        } else {   
            correct = false; 
        }
        inputEl.style.background="blue"
        inputEl.setAttribute("placeholder","")
        if(inputArray.length === 0){
            inputEl.setAttribute("placeholder","")
    
            inputEl.style.background="royalblue"
            consoleResult.innerText = "";
            consoleResult.innerHTML = "";
        }
        if(correct){
            inputEl.style.background="green"
        }else {
            consoleResult.innerHTML = "";
            // consoleResult.innerText = "Error - add line specific";
        }
        // console.log("inputArray",inputArray)
        // console.log("input ",inputString);
        // console.log("answer",answerString);
        // console.log(inputString);
        // console.log(answerString);
    })

    let runBtn = inputEl.querySelector(".run-btn")
    runBtn.addEventListener("click", e => {
        let grandParent = e.target.parentElement.parentElement;
        let resultConsole = grandParent.querySelector(".console-result")
        console.log(grandParent)
     if(inputArray.length === 0 ){
        inputEl.style.background="tomato"
        resultConsole.innerText = "";
    }
    if(correct){
        resultConsole.innerHTML = correctResult1;
        resultConsole.innerText = correctResult1;
    } else {
        inputEl.style.background="tomato"
        resultConsole.innerHTML = "";
        resultConsole.innerText = "Error - add line specific";

    }
})

})

