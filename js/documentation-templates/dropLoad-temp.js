import { stepTxtListeners } from "./lesson-temp.js"

const backlink = document.getElementById("backlink")
const homelink = document.getElementById("homelink")
const regexCmds = document.getElementById("regexCmds")
const programShorcuts = document.getElementById("programShorcuts")
export const mainAside = document.querySelector('main > aside')
const tutorialLink = document.getElementById("tutorialLink")
const targetDiv = document.getElementById('targetDiv')
const sections = document.querySelectorAll('main > aside > ul > li > a')
const subSections = document.querySelectorAll('main > aside > ul > li > ul')
const lessons = document.querySelectorAll('main > aside > ul > li > ul > li > a')
let currentLink
export let currentSelection
let sectionsFocused = true
let lessonsFocused = false
let iSection = 0

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
    if(parent.classList.contains('sub-section')){
        return parent
    } else if(parent.parentElement){
        return getSubSection(parent.parentElement)
    }else{
        return null
    }
}


function sectionsFocus(letter){   
    if(letter == 's'){
        if(iSection < sections.length){
            sections[iSection].focus()
            iSection++
        } else if(iSection >= sections.length){           
            iSection = 0
            sections[iSection].focus()
        }
    }   
    if(!isNaN(letter)){
        let intLetter = parseInt(letter)
        sections[intLetter - 1].focus()
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
    }
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'enter'){
            fetchPage(e.target.href)
            currentSelection = e.target
            currentLink = currentSelection.href
        }
        if(iSection == [...sections].indexOf(e.target)){
            iSection++       
        }
    })
    el.addEventListener('focus', e => {
        iSection = [...sections].indexOf(e.target)  
        sectionsFocused = true
        lessonsFocused = false
    })
})

function fetchPage(href){
    fetch(href)
    .then(response => response.text())
    .then(html => {
        targetDiv.innerHTML = html
        stepTxtListeners()
        // addCopyCodes()
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
sections.forEach(el => {
    if(el.hasAttribute('autofocus')){
        fetchPage(el.href)
    }
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        // toggleSection(e)
        // fetchPage(e.target.href)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        // e.preventDefault()
        // e.stopPropagation()
        if(key == 13){
            fetchPage(e.target.href)
            toggleSection(e)
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