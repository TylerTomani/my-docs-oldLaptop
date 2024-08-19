export const scriptsContainer = document.querySelector('#scriptsContainer')
const parentCopyCode = document.querySelector('.code-container > pre.copy-code')
const main = document.querySelector('main')
export const keys = {
    shift :{
        pressed: false
    }
}

addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){
        keys.shift.pressed = false
        
    }
    
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()

    if(letter == 'shift'){
        keys.shift.pressed = true
    }

    if(letter == 'p' && keys.shift.pressed){
        scriptsContainer.classList.toggle('popup')
    }
    if(letter == 's' && keys.shift.pressed){
        parentCopyCode.focus()
    }
    
})

function loadScript(scriptPath) {
    // Fetch the JavaScript file content
    fetch(scriptPath)
        .then(response => response.text())
        .then(data => {
            // Inject the content into the <pre> element
            document.querySelector('#scriptsContainer > .code-container > .copy-code').textContent = data;

            // Reload the script to execute it
            const scriptElement = document.createElement('script');
            console.log(scriptElement.src)
            scriptElement.src = scriptPath;
            scriptElement.id = 'currentScript';
            document.body.appendChild(scriptElement);
        })
        .catch(error => console.error('Error loading script:', error));
}

// Example usage
const scriptPath = './game-scripts/part1.js';
loadScript(scriptPath);
