const allEls = document.querySelectorAll('body *')
// const sectionsContainer = document.querySelector('.sections-container')
const mainAside = document.querySelector('main > aside')
const sections = document.querySelectorAll('.section')
const subSections = document.querySelectorAll('.sub-section')
const lessons = document.querySelectorAll('.sub-section > li > a')
const targetDiv = document.getElementById('targetDiv')
let iSection = 0
let intLetter = 0
let sectionsFocused = true
let lessonsFocused = false
let asideFocused = false
let targetDivFocused = false
let backSection = false
let lastFocusedElement 
addEventListener('DOMContentLoaded',()  => {
    allEls.forEach(el => {
        if(el.hasAttribute('autofocus')){
            lastFocusedElement = el      
            if(el.classList.contains('section')){
                console.log([...sections].indexOf(el))
                iSection = [...sections].indexOf(el) 
            }
        }
    })
});
subSections.forEach(el =>{
    if(!el.classList.contains('show')){
        el.classList.add('hide')
    }
})
function hideSubSections(){
    subSections.forEach(el =>{
        if(el.classList.contains('show')){
            el.classList.remove('show')
        }
        el.classList.add('hide')
    })
}
function toggleSubSections(e){
    const section = getSectionContainer(e.target.parentElement)
    const subSections = section.querySelector('.sub-section')
    subSections.classList.toggle('hide')
}

sections.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSubSections(e)
        // fetchLessonHref(e.target.href)
    })
    el.addEventListener('focus', e => {
        lastFocusedElement = e.target
        sectionsFocused = true
        lessonsFocused = false
        asideFocused = false
        targetDivFocused = false
    })
})
lessons.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        // fetchLessonHref(e.target.href)
    })
    el.addEventListener('focus', e => {
        lastFocusedElement = e.target
        sectionsFocused = false
        lessonsFocused = true
        asideFocused = false
        targetDivFocused = false
    })
})
const keys = {
    meta: {
        pressed: false
    },
    shift: {
        pressed: false
    },
    s: {
        pressed: false
    }
}
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'shift'){
        keys.shift.pressed =true
    }
    if(letter == 's'){
        keys.s.pressed =true
    }
    if(keys.s.pressed && keys.shift.pressed){
        backSection = true
    } else {
        backSection = false
    }
    if(sectionsFocused ){
        navSections(e,letter)
    }
    if(lessonsFocused){
        navLessons(e,letter)
    }
});
addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    switch (letter){
        case 's':
            keys.s.pressed = false
            break;
        case 'shift':
            keys.shift.pressed = false
            break;
        default:
    }
})
mainAside.addEventListener('focus', e => {asideFocused = true})
mainAside.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(asideFocused){
        if(letter == 's'){     
            iSection -= 1
        }
    }
    if(letter == 'tab'){
        console.log(iSection)
        iSection =0
    }
})
targetDiv.addEventListener('focus', e => {targetDivFocused = true})
targetDiv.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(targetDivFocused){
        if(letter == 's' || letter == 'a'){     
            console.log(iSection)
            if(lastFocusedElement){
                if(lastFocusedElement.classList.contains('section')){
                    console.log('yes')
                    console.log(lastFocusedElement)
                    iSection -= 1
                    // lastFocusedElement.focus()                    
                }

            }

        }
    }
    
})
function navSections(e,letter){
    if(!isNaN(letter)){
        let intLetter = parseInt(letter)
        iSection = intLetter - 1
        if(intLetter <= sections.length  && intLetter >= 0){
            sections[intLetter - 1].focus()
        } else {
            return
        }
    }
    if(letter == 's' && !backSection){
        iSection = (iSection + 1 ) % sections.length
        sections[iSection].focus()
    } else if( backSection){
        if(iSection >= 0){
            iSection -= 1    
        }else {
            iSection = sections.length - 1
        }
        console.log(iSection)
        if(sections[iSection]){
            
            sections[iSection].focus()
        }
    }   
}
function navLessons(e,letter){
    const el = e.target
    const sectionContainer = getSectionContainer(el.parentElement)
    if(letter == 's'){
        const section = sectionContainer.querySelector('.section')
        section.focus()
    }
    const lessons = sectionContainer.querySelectorAll('.sub-section > li > a')
    if(!isNaN(letter)){
        let intLetter = parseInt(letter)
        if(intLetter - 1 < 0 || intLetter - 1 > lessons.length){
            console.log(" I Can't get rid of this error")
            return
        }else {
            lessons[intLetter - 1].focus()
        }       
    }
}
function getSectionContainer(parent){
    if(parent.classList.contains('section-container')){
        return parent
    } else if (parent.parentElement){
        return getSectionContainer(parent.parentElement)
    } else {
        return null
    }
}
// function fetchLessonHref(href){
//     fetch(href)
//     .then(response => response.text())
//     .then(html => {
//         // Inject the retrieved HTML into the target div
//         document.getElementById('targetDiv').innerHTML = html;
// ////////////// This function is located in lessonsFocus.js ////////////////////////////////////////////////////////////////////////////////////
//             // partStepsEventListeners()
//             // chatGptDropTopics()
//     })
//     .catch(error => console.error('Error fetching content.html:', error));   
// }
