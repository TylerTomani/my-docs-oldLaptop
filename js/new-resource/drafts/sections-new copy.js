// import {nav} from "./lessons-temp-new.js"
// import {targetDiv} from "./lessons-temp-new.js"
// import {aside} from "./lessons-temp-new.js"
// import {header} from "./lessons-temp-new.js"
import {header,nav, sections, mainTargetDiv} from "./lessons-temp-new.js"
import {lessons} from "./lessons-temp-new.js"
// import { targetDivFocusIN } from "./lessons-temp-new.js"
// const targetDiv = document.querySelector('#mainTargetDiv')
const backlink = document.querySelector('#backlink')
const homelink = document.querySelector('#homelink')
const regexCmds = document.querySelector('#regexCmds')
const programShortcuts = document.querySelector('#programShortcuts')
const tutorialLink = document.querySelector('#tutorialLink')
let sectionsFocused = true
let lessonsFocused = false
let pageStarted = false
let iSection = 0
let lastFocusedSelection
const keys = {
    shift: {
        pressed: false
    }
}
function hideSubSections(){
    sections.forEach(el => {
        const sectionContainer = getSectionContainer(el.parentElement)

        const subSection = sectionContainer.querySelector('.sub-section')
        if(!subSection.classList.contains('show')){
            subSection.classList.add('hide')
        }
    })
}
function toggleSubSection(e){
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const el = sectionContainer.querySelector('.sub-section')

    if(el.classList.contains('show')){
        el.classList.remove('show')
    } else  if(!el.classList.contains('hide')){
        el.classList.add('hide')
    } else {
        el.classList.remove('hide')
    }
}
hideSubSections()
header.addEventListener('focus', e => {
    sectionsFocused = true
})
header.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!lastFocusedSelection && letter == 's'){
        sections[0].focus()
    } else if(lastFocusedSelection){
        lastFocusedSelection.focus()
    }
})
mainTargetDiv.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!lastFocusedSelection && letter == 's'){
        sections[0].focus()
    } else if(lastFocusedSelection){
        lastFocusedSelection.focus()
    }
})
nav.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!lastFocusedSelection && letter == 's'){
        sections[0].focus()
    } else if(lastFocusedSelection){
        lastFocusedSelection.focus()
    }
})

addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    if (letter == 'shift') {
        keys.shift.pressed = false
    }
})
lessons.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
        lastFocusedSelection = e.target
        
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
    })
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(lessonsFocused){
            handleLessonsFocus(e,letter)
        }
    })
})
function handleLessonsFocus(e,letter){
    if (letter === 'tab') {
        return; /* default Tab behavior work naturally Very important, lessons were not working,
         this makes the tab key work, Not Sure where this is breaking out to.
        */
    }
    const sectionContainaer = getSectionContainer(e.target.parentElement)
    const section = sectionContainaer.querySelector('.section') 
    const lessons = sectionContainaer.querySelectorAll('.sub-section > li > a')
    if(letter == 's'){   
        section.focus()
    }
    if(!isNaN(letter)){
        const intLetter = parseInt(letter)
        if(intLetter <= lessons.length){

            lessons[intLetter - 1].focus()
        }
    }
}
// handle shift key up
sections.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = true
        lessonsFocused = false
        iSection = [...sections].indexOf(el)
        lastFocusedSelection = el
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        // handleSections(e)
    })
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(sectionsFocused){
            handleSectionsFocus(letter)
        } else {
            return
        }
        if(letter == 'enter'){
           toggleSubSection(e) 
            fetchLessonHref(e.target.href)           
        }
        
    })
})
function handleSectionsFocus(letter) {
    if(!isNaN(letter)){
        const intLetter = parseInt(letter)
        if(intLetter <= sections.length){
            sections[intLetter - 1 ].focus()
        }
    } 
    if (letter == 's') {
        if (!keys.shift.pressed) {
            iSection = (iSection + 1) % sections.length
        } else if (keys.shift.pressed) {
            iSection = (iSection - 1 + sections.length) % sections.length;            
        }
        console.log(iSection)
        sections[iSection].focus()
    }
}

function pageElementsFocus(letter){
    switch(letter){
        case 'b':
            backlink.focus()
            break
        case 'h':
            homelink.focus()
            break
        case 'r':
            regexCmds.focus()
            break
        case 'p':
            programShortcuts.focus()
            break
        case 't':
            tutorialLink.focus()
            break
        case 'm':
            mainTargetDiv.focus()
            break
        case 'n':
            nav.focus()
            break
    }
    scrollTo(0,0)
}
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if (letter === 'tab') {
        return; /* default Tab behavior work naturally Very important, lessons were not working,
         this makes the tab key work, Not Sure where this is breaking out to.
        */
    }
    if (letter == 'shift') {
        keys.shift.pressed = true
    }
    if (!pageStarted && letter == 's') {
        sections[0].focus()
        pageStarted = true
    }
    pageElementsFocus(letter)

});
function getSectionContainer(parent){
    if(parent.classList.contains('section-container')){
        return parent
    } else if (parent.parentElement){
        return getSectionContainer(parent.parentElement)
    } else {
        return null
    }
}
function getSubSection(parent){
    if(parent.classList.contains('sub-section')){
        return parent
    } else if (parent.parentElement){
        return getSubSection(parent.parentElement)
    } else {
        return null
    }
}

function fetchLessonHref(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            // Inject the retrieved HTML into the target div
            mainTargetDiv.innerHTML = html;
            ////////////// This function is located in lesson-temp.js ////////////////////////////////////////////////////////////////////////////////////
            stepTxtListeners()
            addCopyCodes()
        })
        .catch(error => console.log('Error fetching content.html:', error));
}