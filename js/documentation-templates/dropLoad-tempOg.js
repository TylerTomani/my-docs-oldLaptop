const backlink = document.getElementById("backlink")
const homelink = document.getElementById("homelink")
const regexCmds = document.getElementById("regexCmds")
const programShorcuts = document.getElementById("programShorcuts")
const tutorialLink = document.getElementById("tutorialLink")
const sections = document.querySelectorAll('main > aside > ul > li > a')
const subSections = document.querySelectorAll('main > aside > ul > li > ul')
const lessons = document.querySelectorAll('main > aside > ul > li > ul > li > a')
let currentPage
let sectionsFocused = true
let lessonsFocused = false
let iSection = 0
sections.forEach(el =>{
    if(el.hasAttribute('autofocus')){
        iSection = [...sections].indexOf(el)
    }
    el.addEventListener('keydown', e => {
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
lessons.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
    })
    el.addEventListener('click',e => {
        e.preventDefault()
        e.stopPropagation()
    })
})

function hideSubSections(){
    subSections.forEach(el =>{
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideSubSections()
sections.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSection(e)
    })
})
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
function getSubSection(parent){
    if(parent.classList.contains('sub-section')){
        return parent
    } else if(parent.parentElement){
        return getSubSection(parent.parentElement)
    }else{
        return null
    }
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
            programShorcuts.focus()
            break
        case 't':
            tutorialLink.focus()
            break
        default:
            console.log('nokey')

    }
})

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
        const section = sectionContainer.querySelector('.section')
        section.focus()
    }
    if(!isNaN(letter)){
        const subSection = getSubSection(e.target.parentElement)
        const lessons = subSection.querySelectorAll('li > a')
        let intLetter = parseInt(letter)
        if(intLetter <= lessons.length){
            lessons[intLetter -1 ].focus()
        }
    }
}