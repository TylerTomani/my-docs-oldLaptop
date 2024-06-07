import { currentLesson } from "./dropLoad.js"
const mainTargetDiv = document.querySelector('#targetDiv')
const mainAside = document.querySelector('#mainAside')
const mainNav = document.querySelector('#mainNav')
const stepTxtsAs = document.querySelectorAll('.step-txt > p  a')
let mainTargDivFocused = false
const allImages = document.querySelectorAll('img')
const allVidoes = document.querySelectorAll('video')
const allPAs = document.querySelectorAll('.step-txt > p > a')
let playing = false
export  function attachStepNumFocus(){
    const allPAs = document.querySelectorAll('.step-txt > p > a')
    const allImages = document.querySelectorAll('img')
    const allVidoes = document.querySelectorAll('video')
    const stepTxts = document.querySelectorAll('.step-txt')
    const stepTxtsArr = Array.from(stepTxts)
    const nxtBtn = document.getElementById('nxtLesson')
    let enlarged = false
    let vidPlaying = false
    mainTargetDiv.addEventListener('focusin', e => {    
        mainTargDivFocused = true
    })
    mainAside.addEventListener('focusin', e => {    
        mainTargDivFocused = false
    })
    mainNav.addEventListener('focusin', e => {    
        mainTargDivFocused = false
    })    
    nxtBtn.addEventListener('click', e => {
        const subSection = getSubSection(currentLesson)
        const lessons = subSection.querySelectorAll('li a')
        const arrLessons = Array.from(lessons)
    
        if(mainAside.classList.contains('hide')){
            mainAside.classList.remove('hide')
        }
        arrLessons.forEach(el => {  
            if(currentLesson == el){
                if(arrLessons[arrLessons.indexOf(currentLesson) + 1]){
                    arrLessons[arrLessons.indexOf(currentLesson) + 1].focus()
                }
            } else {

                currentLesson.focus()
            }
        })
        
    })
    nxtBtn.addEventListener('focus', e => {
        allImages.forEach(el => {
            if(el.classList.contains('enlarge')){
                el.classList.remove('enlarge')
            }
        })
        allVidoes.forEach(el => {
            if(el.classList.contains('enlarge')){
                el.classList.remove('enlarge')
            }
        })
    })

    addEventListener('keydown', e => {
        if(mainTargDivFocused){
            let letter = e.key.toLowerCase()
            let intLetter = parseInt(letter)
            stepTxts.forEach(el => {
                const h3 = el.querySelector('h3')
                const children = el.querySelectorAll('*')
                if(h3.innerText[1] == intLetter && !isNaN(intLetter)){
                    el.focus()
                }
                children.forEach(el => {
                    el.addEventListener('keydown', stepTxtKeyPressed)
                    el.addEventListener('click', clickedImageVideo)
                    el.addEventListener('focus', denlargeAllImages)
                })

                el.addEventListener('click', clickedImageVideo)
                el.addEventListener('keydown', stepTxtKeyPressed)
                el.addEventListener('focus', e => {
                    // 
                    allImages.forEach(el => {
                        if(el.classList.contains('enlarge')){
                            el.classList.remove('enlarge')
                        }
                    })
                    allVidoes.forEach(el => {
                        if(el.classList.contains('enlarge')){
                            el.classList.remove('enlarge')
                        }
                    })  
                    allPAs.forEach(a => {                     
                        a.setAttribute('tabindex','-1')
                    })

                })  
            })
            if(letter == 'e' || intLetter > stepTxtsArr.length){nxtBtn.focus()}   
        }
    })   
    allImages.forEach(el => { el.addEventListener('click', clickedImageVideo)}) 
    allVidoes.forEach(el => {el.addEventListener('click', clickedImageVideo)}) 
    
}

function addTabIndex(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}
function denlargeAllImages(){
    allImages.forEach(el => {
        if(el.classList.contains('enlarge')){
            el.classList.remove('enlarge')
        }
    })
    allVidoes.forEach(el => {
        if(el.classList.contains('enlarge')){
            el.classList.remove('enlarge')
        }
    })
}
function stepTxtKeyPressed(e){
    const step = getStep(e.target.parentElement)
    const imgVid = step.querySelector('.step-img > img') ? step.querySelector('.step-img > img') : step.querySelector('.step-vid > video')
    let key = e.keyCode
    if(imgVid.tagName == "VIDEO"){
        handleVideo(e,imgVid)

    }
    if(key == 13){
        if(!imgVid.classList.contains('enlarge')){
            imgVid.classList.add('enlarge')
            imgVid.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            if(imgVid.tagName == 'VIDEO'){
                playing =true
            }
            
        } else{
            imgVid.classList.remove('enlarge')
            if(imgVid.tagName == 'VIDEO'){
                playing =false
                imgVid.pause()
            }
            
        }
        const as = e.target.querySelectorAll('p a')
        addTabIndex(as)
        as.forEach(a => {
            a.addEventListener('focusin', () =>  {
                const step = getStep(a.parentElement)
                const vidImg = step.querySelector('.step-img > img') ? step.querySelector('.step-img > img') : step.querySelector('.step-vid > video')
                if(vidImg.classList.contains('enlarge')){
                    vidImg.classList.remove('enlarge')
                }
            })
        })
    }
   
}
function handleVideo(e,vid){
    let key = e.keyCode
    console.log(key)
    if(!playing){
        vid.play() 
    } else {
        vid.pause()
    }
    switch(key){
        case 32:
            e.preventDefault()
            playing = !playing
            break;
        case 37:
            if(vid.currentTime > 0){
                vid.currentTime = vid.currentTime - 1
            }
            break
        case 39:
            vid.currentTime = vid.currentTime + 2
            break
        default:


    }
    
    

    
}
function clickedImageVideo(e){
    const step = getStep(e.target.parentElement)    
    const imgVid = step.querySelector('.step-img > img') ? step.querySelector('.step-img > img') : step.querySelector('.step-vid > video')
    if(!imgVid.classList.contains('enlarge')){
        imgVid.classList.add('enlarge')
    } else{
        imgVid.classList.remove('enlarge')
    }
}
function getStep(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        return getStep(parent.parentElement)
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
