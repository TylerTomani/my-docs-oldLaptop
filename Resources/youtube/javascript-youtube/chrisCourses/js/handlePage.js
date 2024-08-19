const scriptsContainer = document.querySelector('#scriptsContainer')
const parentCopyCode = document.querySelector('.code-container > pre.copy-code')
const partTitle = document.getElementById('partTitle')
let scriptHasFocus = false
const canvasEl = document.querySelector('canvas')
const main = document.querySelector('main')
const nxtBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const arrScripts = ['part1.html', 'part2.html', 'part3.html','part4.html','part5.html','part6.html']
let iScript = 0
let injectScript, htmlScript
const currentScript = document.getElementById('currentScript')

injectScript = `./scripts-html/${arrScripts[0]}`
// loadScript(injectScript);

// Don't use this when not working on it
addEventListener('DOMContentLoaded', () =>{
    // iScript = 6
    // injectScript = `./scripts-html/${arrScripts[iScript - 1]}`
    // loadScript(injectScript);
    // displayPartTitle((iScript  -1))    
})
// ?///////////////////////////////////

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
        // scriptsContainer.scrollIntoView()
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
    if(letter == 'c' && !keys.command.pressed){
        canvasEl.focus()
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

nxtBtn.addEventListener('click', e => {
    iScript = (iScript + 1) % arrScripts.length
    htmlScript = arrScripts[iScript]
    htmlScript = `./scripts-html/${htmlScript}`
    loadScript(htmlScript)
    displayPartTitle(iScript)
})
prevBtn.addEventListener('click', e => {
    iScript = (iScript - 1 + arrScripts.length) % arrScripts.length
    htmlScript = arrScripts[iScript]
    htmlScript = `./scripts-html/${htmlScript}`
    loadScript(htmlScript)
    displayPartTitle(iScript)
})
function loadScript(injectScript) {
    // Fetch the JavaScript file content
    fetch(injectScript)
        .then(response => response.text())
        .then(data => {
            parentCopyCode.innerHTML = data;
            // Extract script content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const scriptContent = parentCopyCode.textContent;            
            // Remove old script elements if they exist

            // Create and append new script element
            const newScriptElement = document.createElement('script');
            newScriptElement.type = 'text/javascript';
            newScriptElement.textContent = scriptContent;
            newScriptElement.setAttribute('data-dynamic', 'true'); // Optional: mark as dynamic to easily remove later
            document.body.appendChild(newScriptElement);
        })
        .catch(error => console.error('Error loading script:', error));
}

function displayPartTitle(iScript){
    iScript += 1
    switch (iScript){
        case 1:
            partTitle.innerText = 'part 1 - draw player'
            break
        case 2:
            partTitle.innerText = 'part 2 - gravity'
            break
        case 3:
            partTitle.innerText = 'part 3 - player movement'
            break
        case 4:
            partTitle.innerText = 'part 4 - platform'
            break
        case 5:
            partTitle.innerText = 'part 5 - platform(s) & screen move'
            break
        case 6:
            partTitle.innerText = 'part 6 - use Sprites'
            break
    }
}