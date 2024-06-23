import { lastFocusedElement } from "./dropLoad.js"
import { getSubSection } from "./dropLoad.js"
export function stepTxtListeners(){
const stepTxts = document.querySelectorAll('.step-txt')

const allImages = document.querySelectorAll(".step-img > img")
const allVideos = document.querySelectorAll(".step-vid > video")

const allStepTxtPAs = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.step-txt > .code-container > .copy-code')

const nxtLesson = document.getElementById('nxtLesson') ? document.getElementById('nxtLesson') : null
const targetDiv = document.getElementById('targetDiv')
let targetDivFocus = false

let playing = false

targetDiv.addEventListener('focusin', e => {targetDivFocus = true})
targetDiv.addEventListener('focusout', e => {
    targetDivFocus = false
    denlargeAllImages()    
})
targetDiv.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == ''){
        if(nxtLesson){
            nxtLesson.focus()
        }
    }
    
})
allStepTxtPAs.forEach(el =>{
    el.addEventListener('focus', () =>{
        denlargeAllImages()
    })
})
function handleCopyCodes(e){
    const step = getStep(e.target.parentElement)
    const copyCodes = step.querySelectorAll('.step-txt > .code-container > .copy-code')
    addTabIndex(copyCodes)
}

function getStep(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if (parent.parentElement){
        return getStep(parent.parentElement)
    } else {
        return null
    }
}
function addTabIndex(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}
function removeAllTabIndex(){
    allStepTxtPAs.forEach(el => {
        el.setAttribute('tabindex','-1')
    })
    copyCodes.forEach(el => {
        el.setAttribute('tabindex','-1')
    })
}

// Numpad focus to invidiual steps
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let key = e.keyCode
    if(targetDivFocus){
        if(!isNaN(letter) && key != 32 ){
            let intLetter = parseInt(letter)
            if(intLetter > stepTxts.length){
                nxtLesson.focus()
            } else {
                stepTxts[intLetter - 1].focus()
            }
        } else {
            if(letter == 'e'){
                if(nxtLesson){
                    nxtLesson.focus()
                } else {
                    stepTxts[stepTxts.length - 1 ].focus()
                }
            }        
        }
    } 
});
function handleVideoKeydown(e){
    let key = e.keyCode    
    const step = getStep(e.target.parentElement)
    const vid = step.querySelector('.step-vid > video')
    if(vid){
        switch(key){
            case 32:
                e.preventDefault()
                // 
                if(playing){
                    vid.play() 
                    vid.style.border = "2px solid blue"
                } else if(!playing) {
                    vid.pause()
                    vid.style.border = "1px dotted red"
                }
                playing = !playing
                break;
            case 37:
                if(vid.currentTime > 0){
                    vid.currentTime = vid.currentTime - 1
                }
                if(vid.currentTime < vid.duration){
                    vid.style.border = '2px solid blue'
                }
                break
            case 39:
                vid.currentTime = vid.currentTime + 2
                if(vid.currentTime >= vid.duration ){
                    // playing = false
                    vid.style.border = '14px solid red'
                    vid.pause()
                    vid.currentTime = vid.duration()
                } 
                break
            default:
                playing = !playing
            }    
            if(playing){
                vid.play() 
                vid.style.border = "2px solid blue"
            } else if(!playing) {
                vid.pause()
                vid.style.border = "1px dotted red"
            }
            
    }
}
// The playing variable is asscoiated with img size so it is placed in here
function denlargeAllImages(){
    allVideos.forEach(el => {
        if(el.classList.contains('enlarge')){
            el.classList.remove('enlarge')
            playing = false
            el.pause()
        }
    })
    allImages.forEach(el => {
        if(el.classList.contains('enlarge')){
            el.classList.remove('enlarge')
        }
    })
}
function pauseAllVideo(){
    allVideos.forEach(el => {
        el.pause()
    })
}
allVideos.forEach(el => {
    el.addEventListener('click', e =>{
        console.log(e.target)
        e.preventDefault()
        toggleImgSize(e)
        handleVideoKeydown(e)
    })
})
stepTxts.forEach(el => {
    el.addEventListener('click', e => {
        // toggleImgSize(e)
        handleVideoKeydown(e)
    })
    el.addEventListener('focus', e => {
        pauseAllVideo()
        removeAllTabIndex()
    })
    el.addEventListener('focusout', e => {
        denlargeAllImages()
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        const stepTxt = e.target
        const as = stepTxt.querySelectorAll('a')
        handleVideoKeydown(e)
        if(key === 13){
            addTabIndex(as)
            handleCopyCodes(e)
            toggleImgSize(e)
        }
    })    
})
allImages.forEach(el => {
    el.addEventListener('click',e => {
        toggleImgSize(e)
    })
})
function toggleImgSize(e){
    const step = getStep(e.target)
    const img = step.querySelector('.step-img > img') ? step.querySelector('.step-img > img') : step.querySelector('.step-vid > video')
    // console.log(img)
    if(!img.classList.contains('enlarge')){
        img.classList.add('enlarge')
        img.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    } else{
        img.classList.remove('enlarge')
    }   
}
if(nxtLesson){

    nxtLesson.addEventListener('focus', e => {
        removeAllTabIndex()
        pauseAllVideo()
    })
}
if(nxtLesson){
    nxtLesson.addEventListener('click', e => {
        console.log(lastFocusedElement)
        const subSection = getSubSection(lastFocusedElement)
        if(subSection){
            const lessons = subSection.querySelectorAll('li > a')
            let iLesson = [...lessons].indexOf(lastFocusedElement) + 1
            lessons[iLesson].focus()
        } else {
            lastFocusedElement.focus()
        }
        

    })
}
}
