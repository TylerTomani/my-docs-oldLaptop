import { attachStepNumFocus } from "./lesson-temp.js"
// import { handleImagesVideos } from "./lesson-temp.js"
const homelink = document.getElementById('homeLink')
const tutorialLink = document.getElementById('tutorialLink')
const regexCmdsLink = document.getElementById('regexCmds')

const mainAside = document.querySelector('main aside')
const nav = document.querySelector('nav')
const targetDiv = document.querySelector('#targetDiv')
const sections = document.querySelectorAll('.section')
const subSections = document.querySelectorAll('.sub-section')
const sectionsArr = Array.from(sections)
const lessons = document.querySelectorAll('.sub-section > li > a')
const lessonsArr = Array.from(lessons)
const links = document.querySelectorAll('.sections a')
// FALSE when working TRUE when deployed
let sectionsFocused = false
let iSection = 0
// true when working false when deployed
let lessonsFocused = true
let linkClicked = false
let targetDivFocus = false
export let currentLesson 
/* these are all links which load lessons or sections
  we might have to reload the variables when links are loaded into 
  targetDiv with loadContent */
// These varialbes handle target div lesson elements

////////////////////////////////////////////////////////////////////////////////
// I still don't get this code but the after this is do
async function loadContent(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const content = await response.text();
            targetDiv.innerHTML = content;
            injectScripts(targetDiv);
        } else {
            targetDiv.innerHTML = '<p>Failed to load content.</p>';
        }
    } catch (error) {
        targetDiv.innerHTML = '<p>Error loading content.</p>';
    }
}
// Function to re-execute scripts in injected content
function injectScripts(container) {
    container.querySelectorAll('script').forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript).parentNode.removeChild(newScript);
        /* This is key, attach the lesson script when inject html from lessons I don't get how the above
        code works before the variables, get a tutor to explain this */
        attachStepNumFocus()
        // handleImagesVideos()
    });
}
//////////////////////////////////////////////////////////////////////////////////
function toggleSubSection(e){
    e.preventDefault()
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const subSection = sectionContainer.querySelector('.sub-section')
    if(subSection.classList.contains('show')){
        subSection.classList.remove('show')
        subSection.classList.add('hide')
    } else if(subSection.classList.contains('hide')) {
        hideSubSections()
        subSection.classList.remove('hide')
    } else {
        subSection.classList.add('hide')
    }
}
function hideSubSections(){
    subSections.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        } else if(el.classList.contains('hide') && el.classList.contains('show')){
            el.classList.add('hide')
            el.classList.add('show')
        }
    })
}
hideSubSections()
// focus sections
sections.forEach(el => {
    el.addEventListener('focus', () => {
        sectionsFocused = true;
        lessonsFocused = false;
        targetDivFocus = false
        linkClicked = false
    });
    el.addEventListener('click', toggleSubSection)
});

lessons.forEach(el => {
    el.addEventListener('focus', () => {
        sectionsFocused = false;
        lessonsFocused = true;
        targetDivFocus = false
        linkClicked = false
        scrollTo(0,0)
    });
});
targetDiv.addEventListener('focusin', () =>{
    targetDivFocus =true
    sectionsFocused =false
    lessonsFocused=false
})

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        loadContent(e.target.href)
        if(linkClicked){
            targetDiv.focus()
        }
        currentLesson = e.target
        linkClicked = true
    })
    if(link.hasAttribute('autofocus')){
        loadContent(link.href)
        currentLesson = link
        linkClicked = true
    }
})

function handleFocus(e){
    let letter = e.key.toLowerCase()
    let intLetter = parseInt(letter)
    // scrollTo(0,0)
    if(sectionsFocused){
        if (letter === 's') {            
            sections[iSection].focus();
            iSection = (iSection + 1) % sections.length;
            if(iSection >= sectionsArr.length){
                iSection =0
            }
        } else if (!isNaN(intLetter)) {
            sections.forEach(el => {
                if (el.innerText[8] == intLetter) el.focus();
            });
        }
    }

    if(lessonsFocused){
        const sectionContainer = getSectionContainer(e.target.parentElement);
        lessons.forEach(el => {
            if(intLetter == el.innerText[0]){
                el.focus()
            }
        })
        if (letter === 's') {
            sectionContainer.querySelector('.section').focus();
        }
    }
    if(targetDivFocus){
        
        lessonsFocused = false
        sectionsFocused = false
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

[mainAside,nav,targetDiv].forEach( el => {
    el.addEventListener('focus', ()=>{scrollTo(0,0)});
})
nav.addEventListener('click', e => {
    if(!mainAside.classList.contains('hide')){
        mainAside.classList.add('hide')
    } else {
        mainAside.classList.remove('hide')
    }
})
nav.addEventListener('keydown', e => {
    let key = e.keyCode
    if(key == 13){
        e.preventDefault()
        if(!mainAside.classList.contains('hide')){
            mainAside.classList.add('hide')
        } else {
            mainAside.classList.remove('hide')
        }
    }
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    switch(letter){
        case 'a':
            mainAside.focus()
            sectionsFocused = true
            targetDivFocus =false
            iSection =0
            currentLesson.focus()
            break
        case 'h':
            homelink.focus()
            break
        case 'm':
            targetDiv.focus()
            break
        case 'n':
            nav.focus()
            sectionsFocused = true
            targetDivFocus =false
            iSection =0
            break
        case 'r':
            regexCmdsLink.focus()
            break
        case 't':
            tutorialLink.focus()
            break
        default:
        
        handleFocus(e)
    }
    if(letter == 'a'){
        if(mainAside.classList.contains('hide')){
            mainAside.classList.remove('hide')
        }
    }
})
