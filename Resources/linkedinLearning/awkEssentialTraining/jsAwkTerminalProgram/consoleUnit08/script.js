const cmdLines = document.querySelectorAll(".console-cmdline-input")

const curInput = document.getElementById("currentInput")
cmdLines.forEach(cmdLine => {
    let textarea = cmdLine.querySelector("textarea")
    let cmdLineArray = [];
    textarea.addEventListener("input", e => {
        let currentVal = e.target.value
        console.log(currentVal)

        // 1. turn value into an array is not a " " blank space
        cmdLineArray = currentVal.split('')
        
        // 2. Get rid of spaces in ARray but not \n new lines
        cmdLineArray.forEach((el,i) => {
            if(el === " "){
                cmdLineArray.pop(i,1);
            }
        })
        
        // curInput.innerText = cmdLineArray
        console.log(cmdLineArray)

        // 3. Check if first word is nano or vim 
            //  if so, open script terminal below the comand line
    })

})