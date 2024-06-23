export function addEventListenersToInjectedContent() {
    const dropParts = document.querySelectorAll('.dropPart')
    const stepsContainers = document.querySelectorAll('.steps-container')
    let partsFocused = true
    function hideStepContainers(){
        stepsContainers.forEach(el => {
            if(!el.classList.contains('show')){
                el.classList.add('hide')
            }
        })
    }
    hideStepContainers()

    dropParts.forEach(el => {
        el.addEventListener('click', e => {
            toggleStepsContainer(e)
        })
        el.addEventListener('keydown', e => {
            let key = e.keyCode
            if(key === 13){

            }            
        })
        el.addEventListener('focus',()=>{
            partsFocused = true
        })

    })

    function toggleStepsContainer(e){
        let part = getPartContainer(e.target)
        let stepsContainer = part.querySelector('.steps-container')
        if(stepsContainers){

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
    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        if(partsFocused){
            dropParts.forEach(el => {
                if(key == el.innerText[5]){
                    el.focus()
                }
            })
        }        
    } );
}

