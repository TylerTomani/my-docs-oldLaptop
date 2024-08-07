import { loadPlaceholderHtml } from "./fetch-lesson.js"
const section10 = document.getElementById('section10')
const section11 = document.getElementById('section11')
const dropSections = document.querySelectorAll('.dropSection')
const sectionUls = document.querySelectorAll('.section > ul ')
const allLessons = document.querySelectorAll('ul li a')
let shiftTab = []
const allElements = document.querySelectorAll('body > *')
addEventListener('DOMContentLoaded',()=>{
    
    sectionUls.forEach(el => {
        if(el.classList.contains('show')){
            let section = getSection(el.parentElement)
            let lessons = section.querySelectorAll('ul > li a')
            addTabIndex(lessons)
        }
    })
    allLessons.forEach(el => {
        if(el.hasAttribute('autofocus')){
            loadPlaceholderHtml(el.href)
            // el.focus()
        }
    })
})
export let part01
export let currentLesson
export let mainTargetDivContainerFocusIn = false
function hideSectionUls(){
    sectionUls.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideSectionUls()
function removeAllLessonTabIndexes(){
    allLessons.forEach(el => {
        el.removeAttribute('tabindex')
    })
}
function removeHide(el){
    if(el.classList.contains('hide')){
        el.classList.remove('hide')
    }
}
function addHide(el){
    if(!el.classList.contains('hide')){
        el.classList.add('hide')
    }
}
function addTabIndex(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}
// Get parent functions
function getSection(parent){
    if(parent.classList.contains('section')){
        return parent
    } else if (parent.parentElement){
        return getSection(parent.parentElement)
    } else {
        return null
    }
}

mainTargetDivContainer.addEventListener('focus',()  => {

});
mainTargetDivContainer.addEventListener('focusin',()  => {
    mainTargetDivContainerFocusIn = true
    
});
mainTargetDivContainer.addEventListener('focusout',()  => {
    
});


const currentSectionDisplay = document.getElementById('currentSectionDisplay')
const currentLessonDisplay = document.getElementById('currentLessonDisplay')

let currentSection

let sectionsFocused = false
let sectionClicked = false
let lessonsShowing = false
let lessonsFocused = false

dropSections.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        const section = getSection(e.target)
        const ul = section.querySelector('ul')
        const ulLiAs = ul.querySelectorAll('li a')
        console.log('---------------------')
        console.log('sectionsFocused',sectionsFocused)
        console.log('sectionClicked',sectionClicked)
        console.log('lessonsShowing',lessonsShowing)
        console.log('lessonsFocused',lessonsFocused)
        toggleSectionUl(ul,ulLiAs)
        currentSectionDisplay.innerText = e.target.innerText
    })
    el.addEventListener('focus', e => {
        sectionsFocused = true
        lessonsFocused = false
        mainTargetDivContainerFocusIn = false

    });
})
function toggleSectionUl(el,lessons){
    if(el.classList.contains('hide')){
        hideSectionUls()
        el.classList.remove('hide')
        lessonsFocused = true
        addTabIndex(lessons)
    } else if(el.classList.contains('show')){
        el.classList.remove('show')      
    }
    else {
        el.classList.add('hide')       
    }
}

allLessons.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if(currentLesson == e.target){
            part01 = mainTargetDivContainer.querySelector('.dropPart')
            part01.focus()
        }
        currentLessonDisplay.innerText = e.target.innerText                
        if(currentLesson != e.target){
            loadPlaceholderHtml(e.target.href)
        }
        currentLesson = e.target

    });
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 's' ){
            const section = getSection(e.target.parentElement)
            const dropSection = section.querySelector('.dropSection')
            dropSection.focus()
            removeAllLessonTabIndexes()
        }
        
        currentLessonDisplay.innerText = e.target.innerText                

    });
    el.addEventListener('focus',  e => {
        sectionsFocused = false
        lessonsShowing = true
        lessonsFocused = true
        
    });
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!sectionsFocused && !lessonsShowing && !mainTargetDivContainerFocusIn){
        if(letter == 's'){
            let dropSection01 = asideMain.querySelector('.section > .dropSection')
            dropSection01.focus()
            scrollTo(0,0)
        }     
        dropSections.forEach(el => {
            let letter = e.key.toLowerCase()
            if(letter == el.innerText[8]){
                el.focus()
            }
            
        })
        if(letter == '0'){
            section10.focus()
        }
        if(letter == '-'){
            section11.focus()
        }
    }
    if(sectionsFocused){
        dropSections.forEach(el => {
            let letter = e.key.toLowerCase()
            if(letter == el.innerText[8]){
                el.focus()
            }
            
        })
        if(letter == '0'){
            section10.focus()
        }
        if(letter == '-'){
            section11.focus()
        }
    }
    if(lessonsFocused){
        let section = getSection(e.target.parentElement)
        if(section){

            let sectionLessons = section.querySelectorAll('ul > li a')
            // addTabIndex(sectionLessons)
            sectionLessons.forEach(el => {
                if(letter == el.innerText[0]){
                    el.focus()
                    
                }
            })
        }
    }
    
    if(part01){
        if(letter == 'p'){
            part01.focus()
        }
        
    }
});

