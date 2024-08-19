export const scriptsContainer = document.querySelector('#scriptsContainer')
const parentCopyCode = document.querySelector('.code-container > pre.copy-code')
let scriptHasFocus = false
const main = document.querySelector('main')
export const keys = {
    shift :{
        pressed: false
    },
    command :{
        pressed: false
    }
}

addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){keys.shift.pressed = false}
    if(letter == 'meta'){keys.command.pressed = false}
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){keys.shift.pressed = true}
    if(letter == 'meta'){keys.command.pressed = true}
    if(letter == 'p' && keys.shift.pressed){scriptsContainer.classList.toggle('popup')}
    if(letter == 's' && keys.shift.pressed){parentCopyCode.focus()}
    if(scriptHasFocus){
        const innerCopyCodes = parentCopyCode.querySelectorAll('.copy-code')
        if(!isNaN(letter)){
            let intLet = parseInt(letter)
            if(innerCopyCodes.length > 0){
                // if (intLet < innerCopyCodes.length){
                //     innerCopyCodes[intLet-1].focus()
                // } else {
                //     parentCopyCode.focus()
                // }

            }
        }
        
    }
    
})
const scriptPath = './scripts-html/part1.html';
function loadScript(scriptPath) {
    // Fetch the JavaScript file content
    fetch(scriptPath)
        .then(response => response.text())
        .then(data => {
            parentCopyCode.innerHTML = data

            // Reload the script to execute it
            // const scriptElement = document.createElement('script');
            // console.log(scriptElement.src)
            // scriptElement.src = scriptPath;
            // scriptElement.id = 'currentScript';
            // document.body.appendChild(scriptElement);
        })
        .catch(error => console.error('Error loading script:', error));
}

// Example usage

loadScript(scriptPath);
parentCopyCode.addEventListener('focusout', e => {
    scriptHasFocus = false
})
parentCopyCode.addEventListener('focusin', e => {
    scriptHasFocus = true
})

function numFocusCopyCodes(){
    

}