import { partStepsEventListeners } from "./partStepFocus.js"
// import { addEventListenersToInjectedContent } from "./lessonFocus.js"
import { chatGptDropTopics } from "./chatGpt-drop-topics.js"
const homelink = document.getElementById('homelink')
const documentationLink = document.getElementById('documentationLink')
const mainHomeLink = document.getElementById('mainHomeLink') 
const tutoriallink = document.getElementById('tutorialLink')
const regexCmds = document.getElementById('regexCmds')
const dropSections = document.querySelectorAll('.dropSection')

const sectionUls = document.querySelectorAll('.section > ul')
// const section01 = document.getElementById('section01')
const lessons = document.querySelectorAll('.section > ul > li a')

// Main Elements 
export const navMain = document.querySelector('.main > #navMain')
export const asideMain = document.querySelector('.main > .main-container #asideMain')
export const mainTargetDivContainer = document.getElementById('mainTargetDivContainer')
let shiftTab = []
let sectionsFocused = true
let lessonsFocused = false
export let mainTargetFocused = false

let lessonClicked = false
let loadFocusedSection
const displayCurrentSection = document.getElementById('displayCurrentSection')
const displayCurrentLesson = document.getElementById('displayCurrentLesson')
let currentSection
export let currentLesson
export let currentLessonEl

const allElements = document.querySelectorAll('body  *')

// load lesson
//////////////////////////////////////////////// 
function fetchLessonHref(href){
    fetch(href)
    .then(response => response.text())
    .then(html => {
        // Inject the retrieved HTML into the target div

        document.getElementById('mainTargetDivContainer').innerHTML = html;
////////////// This function is located in lessonsFocus.js ////////////////////////////////////////////////////////////////////////////////////
            partStepsEventListeners()
            chatGptDropTopics()
            


    })
    .catch(error => console.error('Error fetching content.html:', error));

    
}
////////////////////////////////////////////////
allElements.forEach(el => {
    if(el.classList.contains('show')){
        let section = getSection(el)
        let lessons = section.querySelectorAll('ul li a')
        lessons.forEach(el => {
            el.setAttribute('tabindex','1')

        })
    }
    if(el.hasAttribute('autofocus')){
        currentLessonEl = el
        currentLesson = el.href
        fetchLessonHref(el.href)
    }
})
// Main element focus
navMain.addEventListener('focus', () => {
    mainTargetFocused = false
    sectionsFocused = true
    lessonsFocused = false
    mainTargetFocused = false
})
asideMain.addEventListener('focus', () => {
    mainTargetFocused = false
    sectionsFocused = true
    lessonsFocused = false
    mainTargetFocused = false
    if(currentLesson){
        currentLessonEl.focus()
    }
})
// drop toggle sections & load lessons
dropSections.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = true;
        lessonsFocused = false
        mainTargetFocused = false
        loadFocusedSection = false
    } );
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSectionUl(e.target)
        addLessonTabIndexes(e)
        fetchLessonHref(e.target.href)
        displayCurrentSection.innerText = e.target.innerText
        if(loadFocusedSection){
            mainTargetDivContainer.focus()
            scrollTo(0,0)
            currentLesson = e.target
        }
        loadFocusedSection = !loadFocusedSection
    });
    el.addEventListener('focusout', e  => {
        loadFocusedSection = false
    });
    el.addEventListener('focusin', e  => {
        currentLesson = ''
        
    });
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
        if(currentLesson == e.target){
            mainTargetDivContainer.focus()
            window.scrollTo(0,0)
        }
        currentLessonEl = e.target
        currentLesson = e.target
        fetchLessonHref(e.target.href)
        displayCurrentLesson.innerText = e.target.innerText
    });
})

function toggleSectionUl(el){
    const section = getSection(el)
    const ul = section.querySelector('ul')
    hideAllSectionUls()
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
export function getSection(parent){
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
// /////////////////////////////////////////// inside lessons 
mainTargetDivContainer.addEventListener('focus', e => {
    window.scrollTo(0,0)
    if(!mainTargetFocused){
        sectionsFocused = false
        lessonsFocused = false
    } else {
        // sectionsFocused = true
    }
    
   mainTargetFocused = true

});
mainTargetDivContainer.addEventListener('keydown', e => {
    let key = e.keyCode
    if(mainTargetFocused){
        shiftTab.push(key)
        if(shiftTab.length > 2){
            shiftTab.shift()
        }
        if(shiftTab[0] == 16 && shiftTab[1] == 9){
            // currentLesson.focus()
        }
    }
    

})
addEventListener('keydown', e => {    
    let key = e.key.toLocaleLowerCase()
    if(key == 'd'){
        documentationLink.focus()
        sectionsFocused = true
        window.scrollTo(0,0)
    }
    if(key == 'h'){
        homelink.focus()
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
    if(key == 'r'){
        regexCmds.focus()
        window.scrollTo(0,0)
    }
    if(sectionsFocused){
        dropSections.forEach(el => {
            if(key == el.innerText[5]){
                el.focus()
            }
        })
        if(key == 'p'){
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
    handleFocus(e)

})
let iSection = 0
function handleFocus(e){
    const sections = document.querySelectorAll('.section')
    const sectionsArr = Array.from(sections)
    let letter = e.key.toLowerCase()
    let intLetter = parseInt(letter)
    // scrollTo(0,0)
    if(sectionsFocused){
        if (letter === 'p') {
            let h4a = sectionsArr[iSection].querySelector('h4 > a')
            
            
            h4a.focus()
            sections[iSection].querySelector('h4').focus();
            iSection = (iSection + 1) % sections.length;
            if(iSection >= sectionsArr.length){
                iSection = 0
            }

        } else if (!isNaN(intLetter)) {
            sections.forEach(el => {
                const h4 = el.querySelector('h4')
                if (h4.innerText[5] == intLetter) h4.focus();
            });
        }
    }

    if(lessonsFocused){
        const sectionContainer = getSectionContainer(e.target.parentElement);
        lessons.forEach(el => {
            if(intLetter == el.innerText[5]){
                el.focus()
            }
        })
        if (letter === 'p') {
            sectionContainer.querySelector('.section h4').focus();
        }
    }
    
}

function getSectionContainer(parent){
    if(parent.classList.contains('.section-container')){
        return parent
    } else if(parent.parentElement){
        return getSectionContainer(parent.parentElement)
    }else{
        return null
    }
}