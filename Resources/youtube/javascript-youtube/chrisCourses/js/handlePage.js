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
