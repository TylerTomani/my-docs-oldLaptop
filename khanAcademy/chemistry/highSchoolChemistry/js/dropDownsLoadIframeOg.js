import { asideMain } from "./menuFocusToggle.js";
import { getUnitContainer } from "./unitsFocus.js";
import { getSubUnitsContainer } from "./unitsFocus.js";
import { units } from "./unitsFocus.js";
import { subunits } from "./unitsFocus.js";
import { lessons } from "./unitsFocus.js";
const subUnitsContainers = document.querySelectorAll('.sub-units-container')
const targetInject = document.querySelector('#target-inject')
let injected = false
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
    }
    el.addEventListener('focus', e => {
        injected =false
        console.log('focus')
    });
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        currentLesson = e.target
        // console.log(injected)
            fetchHtml(e.target.href,injectHtml)

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

function fetchHtml(url,callback){
    fetch(url)
    .then(response => {
        return response.text()
    })
    .then(htmlContent =>{
        callback(htmlContent)
    }) 
    .catch( error => {console.log('something wrong'),error})
}

function injectHtml(htmlContent){
    targetInject.innerHTML = htmlContent;

    // Create a temporary div element to parse the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Find the script element within the temporary div
    const scriptElement = tempDiv.querySelector('script');

    // Extract the src attribute value from the script element, if it exists
    if (scriptElement) {
        const srcValue = scriptElement.getAttribute('src');
        const newScriptTag = document.createElement('script')
        newScriptTag.src = srcValue
        targetInject.append(newScriptTag)
        injected = false
        
    }
}
// function injectHtml(htmlContent){
//     targetInject.innerHTML = htmlContent;

//     // Create a temporary div element to parse the HTML content
//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = htmlContent;

//     // Find the script element within the temporary div
//     const scriptElement = tempDiv.querySelector('script');

//     // Extract the src attribute value from the script element, if it exists
//     if (scriptElement) {
//         const srcValue = scriptElement.getAttribute('src');
        
//         // Check if the script has already been injected
//         if (!document.querySelector(`script[src="${srcValue}"]`)) {
//             const newScriptTag = document.createElement('script')
//             newScriptTag.src = srcValue
//             targetInject.append(newScriptTag)
//             injected = true
//         }
//     }
// }
