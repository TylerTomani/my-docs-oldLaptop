const copyPreCodes = document.querySelectorAll(".copy-pre-code");
const copyCodes = document.querySelectorAll(".copy-code");
let keyArray = [] // used in cmdCCopy
// Copy Event Listner
copyPreCodes.forEach(preCode => {
    preCode.addEventListener("click",clickCpy);    
    preCode.addEventListener("keydown",cmdCCopy)
})
copyCodes.forEach(code => {
    code.addEventListener("click",clickCpy);    
    code.addEventListener("keydown",cmdCCopy)
})

// Cmd + c Copy
function cmdCCopy (e){
    let keyCode = e.keyCode
    keyArray.unshift(keyCode)
    
    let el = e.target
    
    // console.log(el.parentElement)
    
    el.parentElement.classList.add("textCpyAnimation")
    console.log(el.parentElement)
    
    // el.classList.add("textCpyAnimation")
    // el.classList.remove("removeTextCpyAnimation")
    if(keyArray.length > 2){
        keyArray.pop()
    }
    

    let sum = keyArray.reduce((accum ,current ) => accum + current)
    if(sum === 158){
        navigator.clipboard.writeText(e.target.innerText);
        console.log(e.target.innerText)
        el.style.border = "5px solid white"
        el.classList.add("textCpyAnimation")
        setTimeout(() => {
            el.style.border = "1px solid white"
        }, 200);
        


        console.log("cmd c")

    }
}
// Click to copy
function clickCpy(e){
        // alert("text copied")
        const body = document.querySelector('body')
        const copyText = document.createElement("textarea");
        copyText.value = e.target.innerText
        e.target.appendChild(copyText)
        copyText.select();
        //Not sure what setSelRange does???
        console.log(copyText)
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field to Clipboard
        navigator.clipboard.writeText(copyText.value);

        e.target.removeChild(copyText)
}

function intervalCount(cb,count,delay){
    const intboj = setTimeout(() =>{
        cb();
        count--;
        if(count === 0){
            clearInterval(intboj)
        }
    },delay)
}

