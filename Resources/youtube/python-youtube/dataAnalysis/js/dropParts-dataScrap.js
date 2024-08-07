const stepsContainers = document.querySelectorAll('.steps-container')
export const dropParts = document.querySelectorAll('.dropPart')


function hideStepsContainer(){
    stepsContainers.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideStepsContainer()

dropParts.forEach(dropPart => {
    // dropPart.addEventListener('keydown', e => {
    //     let key = e.keyCode
    //     if(key === 13){
    //         toggleStepsContainer(e.target)
    //     }
    // })
    dropPart.addEventListener('click', e => {
        e.preventDefault()
        toggleStepsContainer(e.target)
    })
})

export function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if(parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}

function toggleStepsContainer(el){
    const part = getPartContainer(el)
    const stepsContainer = part.querySelector('.steps-container')
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
    } 
     if (!stepsContainer.classList.contains('hide')){
         hideStepsContainer()
         stepsContainer.classList.add('hide')
        } else {
        hideStepsContainer()
        stepsContainer.classList.remove('hide')
        
    }
}

