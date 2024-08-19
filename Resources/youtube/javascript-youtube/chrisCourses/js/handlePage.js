const scriptsContainer = document.querySelector('#scriptsContainer')
const parentCopyCode = document.querySelector('.code-container > pre.copy-code')
let scriptHasFocus = false
const main = document.querySelector('main')
const nxtBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const arrScripts = ['part1.html','part2.html']
let iScript = 0
let injectScript, htmlScript
const currentScript = document.getElementById('currentScript')

const keys = {
    shift :{
        pressed: false
    },
    command :{
        pressed: false
    }
}
function togglePopup(){
    if(!scriptsContainer.classList.contains('popup')){
        scriptsContainer.classList.add('popup')
        scrollTo(0,0)
    } else {
        scriptsContainer.classList.remove('popup')
        scriptsContainer.scrollIntoView()
    }
}
scriptsContainer.addEventListener('focusout', e => {scriptHasFocus = false})
scriptsContainer.addEventListener('focusin', e => {scriptHasFocus = true})
addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){keys.shift.pressed = false}
    if(letter == 'meta'){keys.command.pressed = false}
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){keys.shift.pressed = true}
    if(letter == 'meta'){keys.command.pressed = true}
    if(letter == 'p' && keys.shift.pressed){
        togglePopup()        
    }
    if(letter == 's' && keys.shift.pressed){parentCopyCode.focus()}
    if(scriptHasFocus){
        const innerCopyCodes = parentCopyCode.querySelectorAll('.copy-code')
        if(!isNaN(letter)){
            let intLet = parseInt(letter)
            if(innerCopyCodes.length > 0){
                if (intLet <= innerCopyCodes.length){
                    innerCopyCodes[intLet-1].focus()
                } else {
                    parentCopyCode.focus()
                }
            }
        }   
    }
})

// injectScript = './scripts-html/part1.html';
injectScript = `./scripts-html/${arrScripts[0]}`
loadScript(injectScript);

nxtBtn.addEventListener('click', e => {
    iScript = (iScript + 1) % arrScripts.length
    htmlScript = arrScripts[iScript]
    htmlScript = `./scripts-html/${htmlScript}`
    loadScript(htmlScript)
})
prevBtn.addEventListener('click', e => {
    iScript = (iScript + 1 + arrScripts.length) % arrScripts.length
    htmlScript = arrScripts[iScript]
    htmlScript = `./scripts-html/${htmlScript}`
    loadScript(htmlScript)
})
function loadScript(injectScript) {
    // Fetch the JavaScript file content
    fetch(injectScript)
        .then(response => response.text())
        .then(data => {
            parentCopyCode.innerHTML = data;

            // Create a temporary container to manipulate content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extract and clean the script content
            let scriptContent = tempDiv.textContent;

            // Remove function wrappers
            scriptContent = scriptContent.replace(/^\s*function\s*\(\s*\)\s*\{|\}\s*$/g, '');

            // Remove any leading/trailing new lines or spaces
            scriptContent = scriptContent.trim();

            // Inject cleaned script content into <pre> element
            parentCopyCode.textContent = scriptContent;

            // Remove old script elements if they exist
            document.querySelectorAll('script[data-dynamic]').forEach(script => script.remove());

            // Create and append new script element
            const newScriptElement = document.createElement('script');
            newScriptElement.type = 'text/javascript';
            newScriptElement.textContent = scriptContent;
            newScriptElement.setAttribute('data-dynamic', 'true'); // Optional: mark as dynamic to easily remove later
            document.body.appendChild(newScriptElement);
            
        })
        .catch(error => console.error('Error loading script:', error));
}

