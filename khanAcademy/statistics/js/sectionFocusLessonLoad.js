// import { addEventListenersToInjectedContent } from "./lessonFocus.js"
import { partStepsEventListeners } from "./partStepFocus.js"
const homelink = document.getElementById('homelink')
const jupyterlink = document.getElementById('jupyterLink')
const tutoriallink = document.getElementById('tutorialLink')
const dropSections = document.querySelectorAll('.dropSection')

const sectionUls = document.querySelectorAll('.section > ul')
const section01 = document.getElementById('section01')
const lessons = document.querySelectorAll('.section > ul > li a')


// Main Elements 
export const navMain = document.querySelector('.main > #navMain')
export const asideMain = document.querySelector('.main > .main-container #asideMain')
const mainTargetDivContainer = document.getElementById('mainTargetDivContainer')
let sectionsFocused = true
let lessonsFocused = false
let mainTargetFocused = false

let lessonClicked = false
let currentLesson

const allElements = document.querySelectorAll('body  *')
allElements.forEach(el => {
    if(el.classList.contains('show')){
        let section = getSection(el)
        let lessons = section.querySelectorAll('ul li a')
        lessons.forEach(el => {
            el.setAttribute('tabindex','1')
        })
    }
    if(el.hasAttribute('autofocus')){
        fetchLessonHref(el.href)
    }
})

// Main element focus
navMain.addEventListener('focus', () => {
    mainTargetFocused = false
    sectionsFocused = true
    lessonsFocused = false
})
asideMain.addEventListener('focus', () => {
    mainTargetFocused = false
    sectionsFocused = true
    lessonsFocused = false
})
// drop toggle sections & load lessons

dropSections.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = true;
        lessonsFocused = false
        mainTargetFocused = false
    } );
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSectionUl(e.target)
        addLessonTabIndexes(e)
        fetchLessonHref(e.target.href)
        
    } );
})
lessons.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
        mainTargetFocused = false
        currentLesson = ''
    });
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        fetchLessonHref(e.target.href)
        if(currentLesson == e.target){
            mainTargetDivContainer.focus()
            window.scrollTo(0,0)
        }
        currentLesson = e.target
    });
})

function toggleSectionUl(el){
    const section = getSection(el)
    const ul = section.querySelector('ul')
    if(ul.classList.contains('show')){
        ul.classList.remove('show')
    }
    if(!ul.classList.contains('hide')){
        ul.classList.add('hide')
    } else {
        // hideAllSectionUls()
        ul.classList.remove('hide')
    }
}
// Add tab indexes
function addLessonTabIndexes(e){
    const section = getSection(e.target)
    const ul = section.querySelector('ul')
    const lessons = ul.querySelectorAll('li a')
    lessons.forEach(el => {
        el.setAttribute('tabindex','1')
    })
    
}
// Get parent fucntions
function getSection(parent){
    if(parent.classList.contains('section')){
        return parent
    }else if (parent.parentElement){
        return getSection(parent.parentElement)
    } else {
        return null
    }
}
// Hide section uls
sectionUls.forEach(ul => {
    if(!ul.classList.contains('show')){
        ul.classList.add('hide')
    }
})
function hideAllSectionUls(){
  sectionUls.forEach(ul => {
    if(!ul.classList.contains('hide')){
        ul.classList.add('hide')
    }
})  
}
// load lesson

function fetchLessonHref(href){
    fetch(href)
    .then(response => response.text())
    .then(html => {
        // Inject the retrieved HTML into the target div
        document.getElementById('mainTargetDivContainer').innerHTML = html;

////////////// This function is located in lessonsFocus.js ////////////////////////////////////////////////////////////////////////////////////
        partStepsEventListeners()

    })
    .catch(error => console.error('Error fetching content.html:', error));

    
}



// /////////////////////////////////////////// inside lessons 
mainTargetDivContainer.addEventListener('focus', e => {
    window.scrollTo(0,0)
    if(!mainTargetFocused){
        sectionsFocused = false
        lessonsFocused = false
    } else {
        sectionsFocused = true
    }
   mainTargetFocused = !mainTargetFocused

    
});


addEventListener('keydown', e => {
    
    let key = e.key.toLocaleLowerCase()
    if(key == 'h'){
        homelink.focus()
        sectionsFocused = true
        window.scrollTo(0,0)
    }
    if(key == 'j'){
        jupyterlink.focus()
        sectionsFocused = true
        window.scrollTo(0,0)
    }
    if(key == 't'){
        tutoriallink.focus()
        sectionsFocused = true
        window.scrollTo(0,0)
    }
    if(key == 'n'){
        navMain.focus()
        window.scrollTo(0,0)
    }
    if(key == 'a'){
        asideMain.focus()
        window.scrollTo(0,0)
    }
    if(key == 'm'){
        mainTargetDivContainer.focus()
        window.scrollTo(0,0)
    }
    if(sectionsFocused){
        dropSections.forEach(el => {
            if(key == el.innerText[8]){
                el.focus()
            }
        })
        if(key == 's'){
            section01.focus()
            window.scrollTo(0,0)
        }
        if(typeof(key) == Number){
            window.scrollTo(0,0)
        }
    }
    if(lessonsFocused){
        let section = getSection(e.target)
        if(section){

            let dropSection = section.querySelector('.dropSection')
            let lessons = section.querySelectorAll('ul > li > a')
            if(lessons){
                lessons.forEach(el => {
                    if(key == el.innerText[0]){
                        el.focus()
                    }
                })
            }
            if(key == 's' || key == 'p'){
    
                dropSection.focus()
            }
        }
    }
})



