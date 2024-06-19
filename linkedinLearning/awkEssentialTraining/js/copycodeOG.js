const copyPreCodes = document.querySelectorAll(".copy-pre-code");
let keyArray = [] // used in cmdCCopy
// Copy Event Listner
copyPreCodes.forEach(preCode => {
    preCode.addEventListener("click",clickCpy);    
    preCode.addEventListener("keydown",cmdCCopy)
})

// Cmd + c Copy
function cmdCCopy (e){
    let keyCode = e.keyCode
    keyArray.unshift(keyCode)
    
    let el = e.target
    el.classList.add("textCpyAnimation")
    setTimeout(() => {
        el.classList.add("removeTextCpyAnimation")
        
        el.classList.remove("textCpyAnimation")
    }, 150);
    
    el.classList.remove("removeTextCpyAnimation")
    if(keyArray.length > 2){
        keyArray.pop()
    }
    
    let sum = keyArray.reduce((accum ,current ) => accum + current)
    if(sum === 158){
        navigator.clipboard.writeText(e.target.innerText);

    }
}
// Click to copy
function clickCpy(e){
        alert("text copied")
        const body = document.querySelector('body')
        const copyText = document.createElement("textarea");
        copyText.value = e.target.innerText
        e.target.appendChild(copyText)
        copyText.select();
        //Not sure what setSelRange does???
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field to Clipboard
        navigator.clipboard.writeText(copyText.value);

        e.target.removeChild(copyText)
}
