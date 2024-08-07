import { asideMain } from "./sectionFocusLessonLoad.js"
import { navMain } from "./sectionFocusLessonLoad.js"
export function addEventListenersToInjectedContent() {
    const dropParts = document.querySelectorAll('.dropPart')
    const stepsContainers = document.querySelectorAll('.steps-container')
    const part01 = document.getElementById('part01')
    let partsFocused = false
    const dropSections = document.querySelectorAll('.dropSection')
    const lessons = document.querySelectorAll('.section > ul > li a')
    lessons.forEach(el => {
        el.addEventListener('focus', e => {
            partsFocused = false
        } );
    })
    dropSections.forEach(el => {
        el.addEventListener('focus', e => {
            partsFocused = false
        } );
    })
    function hideStepContainers(){
        stepsContainers.forEach(el => {
            if(!el.classList.contains('show')){
                el.classList.add('hide')
            }
        })
    }
    hideStepContainers()

    navMain.addEventListener('focus', () => {

        partsFocused =false
    })
    asideMain.addEventListener('focus', () => {
        partsFocused =false
    })
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
        if(stepsContainer.classList.contains('show')){
            stepsContainer.classList.remove('show')
        }
        if(stepsContainer.classList.contains('hide')){
            stepsContainer.classList.remove('hide')
        } else {
            stepsContainer.classList.add('hide')
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
            if(key == 'p'){
                part01.focus()
            }
        }        
    } );
}

