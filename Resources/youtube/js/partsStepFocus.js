const tutorialLink = document.getElementById('tutorialLink')
const backlink = document.getElementById('backlink')
const homelink = document.getElementById('homelink')
const dropParts = document.querySelectorAll('.dropPart')
const stepsContainers = document.querySelectorAll('.steps-container')
const part01 = document.getElementById('part01')
let partFocused = true
let stepsFocused = false
const allStepTxtAs = document.querySelectorAll('.step-txt > p > a')
allStepTxtAs.forEach(a => {
    a.setAttribute('tabindex', '-1')
})

function hideParts(){
    dropParts.forEach(part => {
        const parent = part.parentElement
        let stepsContainer = parent.querySelector('.steps-container')
        // console.log(stepsContainer)
        if(stepsContainer == null){
            return
        }
        if(!stepsContainer.classList.contains('show')){

            stepsContainer.classList.add('hide')
        }
        
    })
}
hideParts()

function partFocus(key){
    dropParts.forEach(dropPart => {
        const h2 = dropPart.querySelector('h3')
        if(key === dropPart.innerText[5] && partFocused && !stepsFocused){
            dropPart.focus()
            partFocused = true
        }
    })
}
function toggleStepsContainer(e){
    const parent = getPartContainer(e.target.parentElement)
    const stepsContainer = parent.querySelector('.steps-container')
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
        stepsContainer.classList.add('hide')
    } else if (!stepsContainer.classList.contains('hide')){
        stepsContainer.classList.add('hide')
    } else if(stepsContainer.classList.contains('hide')){
        hideParts()
        stepsContainer.classList.remove('hide')
        
    }
}   
function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}
dropParts.forEach(part => {
    part.addEventListener('click', e => {
        e.preventDefault()
        toggleStepsContainer(e)
    })
    part.addEventListener('focus', e => {
        partFocused = true
        stepsFocused = false
    })
})

stepsContainers.forEach(stepsContainer => {
    const steps = stepsContainer.querySelectorAll('.step-txt')
    steps.forEach(step => {
        step.addEventListener('focus', e => {
            stepsFocused = true
            // console.log('stepsFocused',stepsFocused)
        })
    })
})

addEventListener('keydown', e => {
    let key = e.key
    partFocus(key)
    let letter = e.key.toLowerCase()
    switch (letter){
        case 'b':
            backlink.focus()
            break
        case 'h':
            homelink.focus()
            break
        case 't':
            tutorialLink.focus()
            break
    }
    if(stepsFocused){
        stepsFocus(key)
        
    } else {
        if(key === 'p' || key === 'P'){
            if(part01){

                part01.focus()
            }
        }
    }
})

function stepsFocus(key){
    stepsContainers.forEach(stepsContainer => {
        const steps = stepsContainer.querySelectorAll('.step-txt')
        steps.forEach(step => {
            // const part = step.parentElement.parentElement.parentElement
            const h3s = step.querySelectorAll('h4')
            h3s.forEach(h3 => {
                if(key === h3.innerText[1]){
                    step.focus()
                }
            })
            step.addEventListener('keydown', e => {
                let key = e.key
                if(key === 'p' || key === 'P'){
                    const part = step.parentElement.parentElement.parentElement
                    const dropPart = part.querySelector('.dropPart')
                    dropPart.focus()
                }
            })
        })
    })
}