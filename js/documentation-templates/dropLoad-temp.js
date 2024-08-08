import { stepTxtListeners } from "./lesson-temp.js"
import { addCopyCodes } from "./copy-code.js"
const backlink = document.getElementById("backlink")
const homelink = document.getElementById("homelink")
const regexCmds = document.getElementById("regexCmds")
const programShorcuts = document.getElementById("programShorcuts")
export const mainAside = document.querySelector('main > aside')
export const nav = document.querySelector('nav.section-lesson-title')
const tutorialLink = document.getElementById("tutorialLink")
export const targetDiv = document.getElementById('targetDiv')
const sections = document.querySelectorAll('main > aside > ul > li > a')
const subSections = document.querySelectorAll('main > aside > ul > li > ul')
const lessons = document.querySelectorAll('main > aside > ul > li > ul > li > a')
let currentLink
export let currentSelection
let sectionsFocused = true
let lessonsFocused = false
let iSection = 0


mainAside.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if ((letter == 's' || letter == 'a') && currentLink){
        // currentSelection.focus()
    } else if(letter == 's' ){
        // sections[0].focus()
    }
    
    
})
function hideSubSections(){
    subSections.forEach(el =>{
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideSubSections()

function toggleSection(e){
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const subSection = sectionContainer.querySelector('.sub-section')
    if(subSection.classList.contains('show')){
        subSection.classList.remove('show')
        subSection.classList.add('hide')
    } else
    if(!subSection.classList.contains('hide')){
        subSection.classList.add('hide')
    } else {
        hideSubSections()
        subSection.classList.remove('hide')
    }
}

function getSectionContainer(parent){
    if(parent.classList.contains('section-container')){
        return parent
    } else if(parent.parentElement){
        return getSectionContainer(parent.parentElement)
    }else{
        return null
    }
}
export function getSubSection(parent){
    if(parent){

        if(parent.classList.contains('sub-section')){
            return parent
        } else if(parent.parentElement){
            return getSubSection(parent.parentElement)
        }else{
            return null
        }
    }
}
function sectionsFocus(letter){   
    if(letter == 's'){
        // sections[iSection].focus()
        sections[iSection].focus()
        console.log(iSection)
        iSection = (iSection + 1 ) % sections.length
        console.log(sections[iSection])
    }   
}
function lessonsFocus(e,letter){
    if(letter == 's'){
        const sectionContainer = getSectionContainer(e.target.parentElement)
        if(sectionContainer){
            const section = sectionContainer.querySelector('.section')
            section.focus()
            
        }
    }
    if(!isNaN(letter)){
        const subSection = getSubSection(e.target.parentElement)
        if(subSection){

            const lessons = subSection.querySelectorAll('li > a')
            let intLetter = parseInt(letter)
            if(intLetter <= lessons.length){
                lessons[intLetter -1 ].focus()
            }
        }
    }
}
sections.forEach(el =>{
    if(el.hasAttribute('autofocus')){
        iSection = [...sections].indexOf(el)
        fetchPage(el.href)
    }
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        currentSelection = e.target
        currentLink = currentSelection.href
        // if(iSection == [...sections].indexOf(e.target)){
        //     iSection++       
        // }
        fetchPage(e.target.href)
        toggleSection(e)+}<   })
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'enter'){
            fetchPage(e.target.href)
            currentSelection = e.target
            currentLink = currentSelection.href
            toggleSection(e)
        }
        // if(iSection == [...sections].indexOf(e.target)){
        //     iSection++       
        // }
    })
    el.addEventListener('focus', e => {
        iSection = [...sections].indexOf(e.target)  
        sectionsFocused = true
        lessonsFocused = false
    })
})
sections.forEach(el => {
    
    
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        // e.preventDefault()
        // e.stopPropagation()
        if(key == 13){
            fetchPage(e.target.href)
            
        }
    })
})
lessons.forEach(el => {
    if(el.hasAttribute('autofocus')){
        fetchPage(el.href)
    }
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
    })
    
    el.addEventListener('click',e => {
        e.preventDefault()
        e.stopPropagation()
        fetchPage(e.target.href)
    })
    el.addEventListener('keydown',e => {
        let letter = e.key.toLowerCase()
        if(letter == 'enter'){
            e.preventDefault()
            // e.stopPropagation()
            if(currentLink == e.target.href){
                targetDiv.focus()
                scrollTo(0,0)
            }
            fetchPage(e.target.href)
            currentSelection = e.target
            currentLink = currentSelection.href
        }
        if(letter == 's'){
            sectionsFocused =true
            const sectionContainer = getSectionContainer(e.target.parentElement)
            const section = sectionContainer.querySelector('.section')
            section.focus()
            console.log(section)
        }
    })
})
function fetchPage(href){
    fetch(href)
    .then(response => response.text())
    .then(html => {
        targetDiv.innerHTML = html
        stepTxtListeners()
        addCopyCodes()
    })
}

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(sectionsFocused){
        sectionsFocus(letter)
    }
    if(lessonsFocused){
        lessonsFocus(e,letter)
    }
    // switch statement for top header with back, home ,regex, pshortcuts, and tutorial link
    switch(letter){
        case 'a':
            if(currentSelection){
                currentSelection.focus()
            } else {
                mainAside.focus()
                scrollTo(0,0)
            }
            break
        case 'b':
            backlink.focus()
            break
        case 'h':
            homelink.focus()
            break
        case 'r':
            regexCmds.focus()
            break
        case 'm':
            targetDiv.focus()
            scrollTo(0,0)
            break
        case 'n':
            nav.focus()
            scrollTo(0,0)
            break
        case 'p':
            programShorcuts.focus()
            break
        case 't':
            tutorialLink.focus()
            break
        case 's':
            // if(currentSelection){
            //     currentSelection.focus()
            // }
            break
        default:

    }
    
})
nav.addEventListener('click', e => {
    toggleAside()
})
nav.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'enter'){   
        toggleAside()
    }
    if(letter == 'a'){
        showSide()
        if(currentLink){
            currentLink.focus()
        }
        
    }
})
// nav.addEventListener('focusout', e => {showSide()})


targetDiv.addEventListener('focus', e => {
    lessonsFocused = false;
    sectionsFocused = false

});
targetDiv.addEventListener('click', e => {
    // toggleAside()
});
targetDiv.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'enter'){
        if(mainAside.classList.contains('hide')){
            mainAside.classList.remove('hide')
        }
    }
});

export function showSide() {
    if (mainAside.classList.contains('hide')) {
        mainAside.classList.remove('hide')
    }
}
export function toggleAside() {
    if(!mainAside.classList.contains('hide')){
        mainAside.classList.add('hide')
    } else{
        mainAside.classList.remove('hide')
    }
}