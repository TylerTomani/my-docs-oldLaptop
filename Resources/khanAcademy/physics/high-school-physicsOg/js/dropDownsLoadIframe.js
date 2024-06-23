import { asideMain } from "./menuFocusToggle.js";
import { getUnitContainer } from "./unitsFocus.js";
import { getSubUnitsContainer } from "./unitsFocus.js";
import { units } from "./unitsFocus.js";
import { subunits } from "./unitsFocus.js";
import { lessons } from "./unitsFocus.js";
const subUnitsContainers = document.querySelectorAll('.sub-units-container')
const iframe = document.querySelector('iframe')
let asideFocused = false
let currentLesson

function hideSubUnitsContainers(){
    subUnitsContainers.forEach(el =>{
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}

hideSubUnitsContainers()

units.forEach(el => {
    el.addEventListener('click', e => {
        const unitContainer = getUnitContainer(e.target.parentElement)
        const subUnitsContainer = unitContainer.querySelector('ul > li.sub-units-container')
        toggleContainer(subUnitsContainer)
    });
})

function toggleContainer(c){
    console.log(c)
    if(c.classList.contains('show')){
        c.classList.remove('show')
        c.classList.add('hide')
    } else
    if(c.classList.contains('hide')){
        hideSubUnitsContainers()
        c.classList.remove('hide')
    } else {
        c.classList.add('hide')
    }
}

lessons.forEach(el => {
    if(el.hasAttribute('autofocus')){
        iframe.src = el.href
    }
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        iframe.src = e.target.href      
        if(e.target == currentLesson){
            iframe.focus()
        }

        currentLesson = e.target
    });
})


addEventListener('keydown', e  => {
    let letter = e.key.toLowerCase()
    if(letter == 'm'){
        iframe.focus()
    }
    if(currentLesson){
        if(letter == 'a'){
            currentLesson.focus(0)
        }
    }
});