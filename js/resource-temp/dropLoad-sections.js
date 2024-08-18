// import { addCopyCodes } from "./copy-code.js"
// import { stepTxtListeners } from "./lesson-temp.js"
// export const mainAside = document.querySelector('main > aside')
// export const navBar = document.querySelector('.section-lesson-title')
// const fullCode = document.getElementById('fullcode')
// const allEls = document.querySelectorAll('body *')
// const header = document.querySelector('header')
// const backlink = document.getElementById('backlink')
// const homelink = document.getElementById('homelink')
// const tutorialLink = document.getElementById('tutorialLink')
// const regexCmdsLink = document.getElementById('regexCmds')
// const programShorcutsLink = document.getElementById('programShorcuts')
// const sections = document.querySelectorAll('.section')
// const sectionsChilds = document.querySelectorAll('.section > *')
// const sectionTitle = document.getElementById('section-title')
// const lessonTitle = document.getElementById('lesson-title')
// const subSections = document.querySelectorAll('.sub-section')
// const lessons = document.querySelectorAll('.sub-section > li > a')
// const targetDiv = document.getElementById('targetDiv')
// /* The startSection is crucial to ensure section1 is focus if 's' is pressed whehn 
// page is first opened */
// // true when  not working on project
// let startSection = true
// let iSection = -1
// let intLetter = 0
// // true when  not working on project
// let headerFocused = true
// let sectionsFocused = true
// let sectionsHaveFocus = false
// let lessonsFocused = false
// let asideFocused = false
// let targetDivFocused = false
// let currentLesson
// let shiftS = []
// // Where the pages first loads, Section1 is the lastFocused Element
// export let lastFocusedElement = document.querySelector('.section')

// addEventListener('DOMContentLoaded', () => {
//     fetchLessonHref('home-temp.html')
//     stepTxtListeners()
//     allEls.forEach(el => {
//         if (el.hasAttribute('autofocus') && !headerFocused) {
//             fetchLessonHref(el.href)
//             lastFocusedElement = el
//         }
//     })
// });
// header.addEventListener('focusin', e => {
//     headerFocused = true
//     sectionsFocused = false    
//     sectionsHaveFocus = false
// })
// header.addEventListener('keydown', e => {
//     let letter = e.key.toLowerCase()
//     if(letter == 's'){
//         lastFocusedElement.focus()
//         iSection -= 1
//     }    
//     if(letter == 'a'){
//         lastFocusedElement.focus()
//     }    

// })
// subSections.forEach(el =>{
//     if(!el.classList.contains('show')){
//         el.classList.add('hide')
//         el.scrollIntoView()
//     }
// })
// function hideSubSections(){
//     subSections.forEach(el =>{
//         if(el.classList.contains('show')){
//             el.classList.remove('show')
//         }
//         el.classList.add('hide')
//     })
// }
// function toggleSubSections(e){
//     const section = getSectionContainer(e.target.parentElement)
//     const subSections = section.querySelector('.sub-section')
//     if(subSections){
//         if(subSections.classList.contains('show') && subSections.classList.contains('hide')){
//             subSections.classList.remove('show')
//         }
//         if(subSections.classList.contains('hide')){
//             hideSubSections()
//             subSections.classList.remove('hide')
//         } else {
//             subSections.classList.add('hide')
            
//         }
//     } 
// }

// mainAside.addEventListener('focus', e => {
//     targetDivFocused = false
//     headerFocused = false
//     sectionsFocused = false
//     sectionsHaveFocus = false
// })
// mainAside.addEventListener('keydown', e => {
//     let letter = e.key.toLowerCase()
//     if(letter == 's' && !sectionsFocused){
//         if(lastFocusedElement.classList.contains('section')){
//             lastFocusedElement.focus()
//             iSection -= 1
//         }    
//     }
//     if(!sectionsHaveFocus){
//         if(letter == 'enter'){
//             lastFocusedElement.focus()
//         }
//     }
// })
// navBar.addEventListener('focus', e => {
//     targetDivFocused = false    
//     e.target.scrollIntoView()
// })
// function toggleAside(key){
//     if (key === 13) {
//         if (!mainAside.classList.contains('hide')) {
//             mainAside.classList.add('hide')
//         } else {
//             mainAside.classList.remove('hide')
//         }
//     }
// }
// export function showAside(letter){
//     if (letter == 'a' || letter == 's') {
//         if (mainAside.classList.contains('hide')) {
//             mainAside.classList.remove('hide')
//             lastFocusedElement.focus()
//         }
//     }
// }
// navBar.addEventListener('keydown', e => {
//     let letter = e.key.toLowerCase()
//     let key = e.keyCode
//     toggleAside(key)
//     showAside(letter)
//     // targetDivFocused = false
//     // if(letter == 's' ){
//     //     lastFocusedElement.focus()
//     //     iSection -= 1
//     // }    
// })
// navBar.addEventListener('click', e => {
//     if(!mainAside.classList.contains('hide')){
//         mainAside.classList.add('hide')
//     } else {
//         mainAside.classList.remove('hide')
//     }
//     targetDivFocused = false
//     // if(letter == 's' ){
//     //         lastFocusedElement.focus()
//     //         iSection -= 1
//     //     }    
    
// })
// targetDiv.addEventListener('focus', e => {
//     headerFocused = false
//     sectionsFocused = false
//     lessonsFocused = false
//     targetDivFocused = true
// })
// targetDiv.addEventListener('keydown', e => {
//     let letter = e.key.toLowerCase()
//     sectionsFocused = false
//     if(targetDivFocused){
//         if(letter == 's' || letter == 'a'){
//             lastFocusedElement.focus()
//             iSection -= 1
//         }
//         if(letter == 't'){
//             tutorialLink.focus()
//         }    
//     }    
// })
// const keys = {
//     shift : {
//         pressed: false
//     }
// }
// addEventListener('keyup', e => {
//     let letter = e.key.toLowerCase()
//     switch (letter){
//         case 'shift':
//             keys.shift.pressed = false
//         break
        
//     }
// })
// function navSections(e,letter){
//     if(!startSection){
//         return  
//     } else {
//         if(!keys.shift.pressed && letter == 's'  ){
//             iSection = (iSection + 1) % sections.length
//         } else if (keys.shift.pressed && letter == 's'  ){
//             if(iSection > 0 ){
//                 iSection -= 1
//             } else if(iSection <= 0){
//                 iSection = sections.length -1
//             }
//         }
//     }
//     if(sections[iSection]){
//         sections[iSection].focus()   
//     }
// }
// function navLessons(e,letter){
//     const sectionContainer = getSectionContainer(e.target.parentElement)
//     if(sectionContainer){
//         const section = sectionContainer.querySelector('.section')
//         const subSection = getSubSection(e.target.parentElement)
//         const lessons = subSection.querySelectorAll('li > a')
//         if(letter == 's'){
//             section.focus()
//         }
//         if(!isNaN(letter)){
//             let intLetter = parseInt(letter)
//             if(intLetter <= lessons.length && intLetter >= 0){
//                 lastFocusedElement =  lessons[intLetter - 1]
//                 lastFocusedElement.focus()

//             }
//         }
        
//     }
// }
// function clickLesson(e){
//     if(currentLesson == e.target){
//         targetDiv.focus()
//     }
//     currentLesson = e.target
// }
// export function getSectionContainer(parent){
//     if(parent.classList.contains('section-container')){
//         return parent
//     } else if (parent.parentElement){
//         return getSectionContainer(parent.parentElement)
//     } else {
//         return null
//     }
// }
// export function getSubSection(parent){
//     if(parent.classList.contains('sub-section')){
//         return parent
//     } else if (parent.parentElement){
//         return getSubSection(parent.parentElement)
//     } else {
//         return null
//     }
// }

// sections.forEach(el => {
//     el.addEventListener('click', e => {
//         e.preventDefault()
//         e.stopPropagation()
//         toggleSubSections(e)
//         fetchLessonHref(e.target.href)
//         sectionTitle.innerText = e.target.innerText.slice(0,9)
//         lessonTitle.innerText = ''
//         startSection = true
//     })  
//     el.addEventListener('focus', e => {
//         headerFocused = false
//         lastFocusedElement = e.target
//         targetDivFocused = false
//         sectionsFocused = true
//         lessonsFocused = false
//         sectionsHaveFocus = true
//         iSection = [...sections].indexOf(e.target)
//     })
//     el.addEventListener('keydown', e => {
//         let letter = e.key.toLowerCase()
//         startSection = true
//         const sectionContainer = getSectionContainer(e.target.parentElement)
//         // const lessons = sectionContainer.querySelectorAll('.sub-section > li')
//         const subSection = sectionContainer.querySelector('.sub-section')

//         if(subSection == null && currentLesson == e.target && letter == 'enter'){
//             sectionsFocused = true
//             targetDiv.focus()
//         } 
//         currentLesson = e.target
//     })
// })
// lessons.forEach(el => {
//     el.addEventListener('click', e => {
//         e.preventDefault()
//         e.stopPropagation()
//         clickLesson(e)
//         fetchLessonHref(e.target.href)
//         // e.target.focus()
//     })
//     el.addEventListener('keydown', e => {
//         startSection = true
//         let letter = e.key.toLowerCase()
//         if (letter == 's' ) {
//             const subSection = getSectionContainer(e.target)
//             const section = subSection.querySelector('.section')
//             iSection = [...sections].indexOf(section)
//             if (sections[iSection - 1]) {
//                 sections[iSection - 1].focus()
//             }
//         }
//         if(letter == 'enter'){
//             let titleTxt = e.target.innerText
//             lessonTitle.innerText =  " 0" + titleTxt.slice(0,titleTxt.length)
//             console.log(titleTxt)
//             console.log(titleTxt.slice(0, titleTxt.length))
//         }
//     })
//     el.addEventListener('focus', e => {
//         headerFocused = false
//         currentLesson = ''
//         lastFocusedElement = e.target
//         sectionsFocused = false
//         lessonsFocused = true
//         targetDivFocused = false
//     })
// })
// sectionsChilds.forEach(el => {
//     el.addEventListener('click', e => {
//         e.preventDefault()
//         e.stopPropagation()
//         toggleSubSections(e)
//         const section = e.target.parentElement
//         fetchLessonHref(section.href)
//         sectionTitle.innerText = section.innerText
//         lessonTitle.innerText = ''
//         startSection = true
//     })  
    
    
// })


// addEventListener('keydown', e => {
//     let letter = e.key.toLowerCase()    
    
//     if(letter == 's' && !sectionsFocused ){
//         lastFocusedElement.focus()
//     }
//     if(letter == 'shift'){keys.shift.pressed = true}
//     // Controls Section Selection with numbers on keyboard
//     if(!isNaN(letter) && !lessonsFocused && !targetDivFocused){
//         let intLetter = parseInt(letter)
//         if(intLetter <= sections.length){
//             if(sections[intLetter - 1]){
//                 sections[intLetter - 1].focus()
//             }
//         }
//     }
//     if(sectionsFocused && !targetDivFocused){
//         navSections(e,letter)}
//     if(lessonsFocused){
//         navLessons(e,letter)
//     }
//     switch(letter){     
//         case 'a':
//             scrollTo(0,0)
//             mainAside.focus()
//             break        
//         case 'm':
//             scrollTo(0,0)
//             targetDiv.focus()
//             break        
//         case 'f':
//             if(fullCode){
//                 scrollTo(0,0)
//                 targetDiv.focus()

//             }
//             break        
//         case 'n':
//             navBar.focus()
//             break
//         case 'b':
//             backlink.focus()
//             break
//         case 'h':
//             homelink.focus()
//             break
//         case 'r':
//             regexCmdsLink.focus()
//             // regexCmdsLink.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             break   
//         case 'p':
//             programShorcutsLink.focus()
//             break
//         case 't':
//             if(!targetDivFocused){
//                 tutorialLink.focus() 
//             } else if (targetDivFocused){
//                 const tutoralNumLink = document.getElementById('tutoralNumLink')
//                 tutoralNumLink.focus()
//             }
//             break
            
//     }
//     startSection = true    
// });
// function fetchLessonHref(href){
//     fetch(href)
//     .then(response => response.text())
//     .then(html => {
//         // Inject the retrieved HTML into the target div
//         document.getElementById('targetDiv').innerHTML = html;
// ////////////// This function is located in lesson-temp.js ////////////////////////////////////////////////////////////////////////////////////
//             stepTxtListeners()
//             addCopyCodes()
//     })
//     .catch(error => console.log('Error fetching content.html:', error));   
// }
// [mainAside,targetDiv,backlink].forEach( el => {el.addEventListener('focus', ()=>{scrollTo(0,0)});})

