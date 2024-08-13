import { lastFocusedElement } from "./dropLoad-sections.js"
import { getSubSection } from "./dropLoad-sections.js"
import { mainAside } from "./dropLoad-sections.js"
export function stepTxtListeners(){
const navbar = document.querySelector('.section-lesson-title')
const stepTxts = document.querySelectorAll('.step-txt')
const allImages = document.querySelectorAll(".step-img > img")
const allVideos = document.querySelectorAll(".step-vid > video")
const allStepTxtPAs = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.step-txt > .code-container > .copy-code')
const nxtLesson = document.getElementById('nxtLesson') ? document.getElementById('nxtLesson') : null
const targetDiv = document.getElementById('targetDiv')
let targetDivFocus = false
let playing = false

const keys = {
    cmd:{
        pressed: false
    }
}

targetDiv.addEventListener('focusin', e => {targetDivFocus = true})
targetDiv.addEventListener('focusout', e => {
    targetDivFocus = false
    // denlargeAllImages()    
})
targetDiv.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'e'){
        if(nxtLesson){
            nxtLesson.focus()
        }
    }
    
})

navbar.addEventListener('keydown',e =>{
    let letter = e.key.toLowerCase()
    if(letter == 'e'){
        if(nxtLesson){
            nxtLesson.focus()
        }  
    }
    if(!isNaN(letter)){
        let intLet = parseInt(letter)
        stepTxts[intLet - 1].focus()
    }
    

})
function handleCopyCodes(e){
    const step = getStep(e.target.parentElement)
    const copyCodes = step.querySelectorAll('.step-txt > .code-container > .copy-code')
    addTabIndex(copyCodes)
}

function getStep(parent){
    if(parent.classList.contains('step') || parent.classList.contains('step-col')){
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
stepTxts.forEach(el => {    
    el.addEventListener('focus', e => {
        pauseAllVideo()
        removeAllTabIndex()
        denlargeAllImages()
    })
    el.addEventListener('focusin', e => {
        /** This is where toggle for command + tab goes */
        denlargeAllImages()
        
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        // toggleImgSize(e)
        // handleVideoKeydown(e)
        
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


// The playing variable is asscoiated with img size so it is placed in here
function denlargeAllImages(){
    allVideos.forEach(el => {
        if (el.classList.contains('enlarge-vid') || el.classList.contains('sm-enlarge')){
            el.classList.remove('enlarge-vid')
            playing = false
            el.pause()
        }
    })
    allImages.forEach(el => {
        if (el.classList.contains('enlarge') || el.classList.contains('enlarge-sm')){
            el.classList.remove('enlarge')
            el.classList.remove('enlarge-sm')
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
        e.preventDefault()
        toggleImgSize(e)
        handleVideoKeydown(e)
    })
})

allImages.forEach(el => {
    el.addEventListener('click',e => {
        toggleImgSize(e)
    })
})
function toggleImgSize(e){
    const step = getStep(e.target)
    if(step){
        const img = step.querySelector('.step-img > img') ? step.querySelector('.step-img > img') : step.querySelector('.step-vid > video')
        if(img && img.tagName == 'VIDEO'){
            if(!img.classList.contains('enlarge-vid')){
                img.classList.add('enlarge-vid')
                img.scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
            } else{
                img.classList.remove('enlarge-vid')
            }   
        } 
        if(img && img.tagName == 'IMG'){
            /* I don't know why sm-enlarge won't be detected??*/
            if(img.parentElement.classList.contains('sm-enlarge') && !img.classList.contains('enlarge-sm')){
                img.classList.add('enlarge-sm')
            } else if(img.classList.contains('enlarge-sm')){
                img.classList.remove('enlarge-sm')
            }else if(!img.classList.contains('enlarge')){
                img.classList.add('enlarge')
                img.style.border = "1px solid black"
                img.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            } else if(img.classList.contains('enlarge')){
                img.style.border = "none"
                img.classList.remove('enlarge')
            }   
                
                
        }
    }

}
function handleVideoKeydown(e){
    let key = e.keyCode    
    const step = getStep(e.target.parentElement) 
    const vid = step.querySelector('.step-vid > video')
    if(vid){
        switch(key){
            case 32:
                e.preventDefault()
                // 
                if(!playing){
                    vid.play() 
                    vid.style.border = "2px solid blue"
                } else if(!playing) {
                    vid.pause()
                    vid.style.border = "1px dotted red"
                }
                playing = !playing
                break;
            // left arrow
            case 37:
                e.preventDefault()
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
                vid.style.border = "1px solid blue"
            } else if(!playing) {
                vid.pause()
                vid.style.border = "1px dotted red"
            }            
    }
}
if(nxtLesson){
    nxtLesson.addEventListener('focus', e => {
        removeAllTabIndex()
        pauseAllVideo()
        const playlistVideoNum = document.getElementById('playlistVideoNum') ? document.getElementById('playlistVideoNum') : null;
        if(playlistVideoNum != null){
            playlistVideoNum.focus()
        }
    })
    nxtLesson.addEventListener('click', e => {
        const subSection = getSubSection(lastFocusedElement)
        if(mainAside.classList.contains('hide')){
            mainAside.classList.remove('hide')
        }
        if(subSection){
            const lessons = subSection.querySelectorAll('li > a')
            let iLesson = [...lessons].indexOf(lastFocusedElement) + 1
            if(lessons[iLesson]){
                lessons[iLesson].focus()

                scrollTo(0,0)
            } else {
                lastFocusedElement.focus()
            }
            
        } else {
            lastFocusedElement.focus()
        }        
    })
    nxtLesson.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'a'){
            lastFocusedElement.focus()
        }
    })
}
copyCodes.forEach(el =>{
    el.addEventListener('focus', () =>{
        if(!keys.cmd.pressed){
            denlargeAllImages()
        }
    })
})
allStepTxtPAs.forEach(el =>{
    el.addEventListener('focus', () =>{
        denlargeAllImages()
    })
    el.addEventListener('click',e =>{
        e.preventDefault()
        open(e.target.href,'_blank')
    })
})
// Numpad focus to invidiual steps

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let key = e.keyCode
    if(targetDivFocus){
        if(!isNaN(letter) && key != 32 ){
            let intLetter = parseInt(letter)
            if(intLetter > stepTxts.length){
                if(nxtLesson){

                    nxtLesson.focus()
                }
            } else {
                stepTxts[intLetter - 1].focus()
            }
        } else {
            if(letter == 'e'){
                if(nxtLesson){
                    nxtLesson.focus()
                } else {
                    // if(stepTxts){
                    //     stepTxts[stepTxts.length - 1 ].focus()
                    // }
                }
            }        
        }
    } 
    
    
});
}
