import { asideMain } from "./menuFocusToggle.js";
import { getUnitContainer } from "./unitsFocus.js";
import { getSubUnitsContainer } from "./unitsFocus.js";
import { units } from "./unitsFocus.js";
import { subunits } from "./unitsFocus.js";
import { lessons } from "./unitsFocus.js";
const subUnitsContainer = document.querySelectorAll('.sub-units-container')
const lessonsContainers = document.querySelectorAll('.lessons-container')
const iframe = document.querySelector('iframe')

let selectArray = []
let currentLesson = ''
function hideSubUnitsContainers(){
    subUnitsContainer.forEach(el =>{
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        } 
    })
}
function hideLessonsContainer(){    
    lessonsContainers.forEach(el =>{
        let subUnitContainer = getSubUnitsContainer(el.parentElement)
        
        if(!subUnitContainer.classList.contains('show')){

            el.classList.add('hide')
        }
    })
}
hideLessonsContainer()
hideSubUnitsContainers()
units.forEach(el =>{
    el.addEventListener('click', e =>{
        let unitContainer = getUnitContainer(e.target.parentElement)
        let subUnitsContainers = unitContainer.querySelectorAll('.sub-unit-container')
        subUnitsContainers.forEach(el =>{
            toggleContainer(el)
        })
    })
})
subunits.forEach(el =>{
    el.addEventListener('click', e =>{
        let subUnitContainer = getSubUnitsContainer(e.target.parentElement)
        let lessonsContainer = subUnitContainer.querySelector('.lessons-container')
        toggleContainer(lessonsContainer)
        // lessonsContainer.forEach(el =>{
        // })
    })
})
function toggleContainer(el){
    if(el.classList.contains('show')){
        el.classList.remove('show')
        el.classList.add('hide')
    } else if(!el.classList.contains('hide')){
        el.classList.add('hide')
    } else {
        el.classList.remove('hide')
    }
}
lessons.forEach(el =>{
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        selectArray.unshift(e.target.innerText)
        if(selectArray.length > 2){
            selectArray.pop()
        }
        iframe.src = e.target.href
        if(selectArray[0] === selectArray[1]){
            iframe.focus()
            iframe.src = e.target.href
            currentLesson = e.target
        } 
        
    });
})

iframe.addEventListener('focusout', e => {
        currentLesson.focus()

    } )    

addEventListener('keydown', e  => {
    let letter = e.key.toLowerCase()
    if(letter == 'a'){
        asideMain.focus()
    }
    if(letter == 'm'){
        iframe.focus()
    }
    
});