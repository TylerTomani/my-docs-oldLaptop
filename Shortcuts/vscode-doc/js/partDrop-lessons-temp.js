

const dropParts = document.querySelectorAll('.dropPart')
const stepTxts = document.querySelectorAll('.step-txt')
const allImages = document.querySelectorAll(".step-img > img")
const allVideos = document.querySelectorAll(".step-vid > video")
const allStepTxtPAs = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.step-txt > .code-container > .copy-code')
const nxtLesson = document.getElementById('nxtLesson') ? document.getElementById('nxtLesson') : null
let playing = false

function hideParts(){
    dropParts.forEach(el => {
        const partContainer = getPartContainer(el)
        const stepsContainer = partContainer.querySelector('.steps-container')
        if(!stepsContainer.classList.contains('hide')){
            stepsContainer.classList.add('hide')
        }
    })
}
dropParts.forEach(el => {
    el.addEventListener('click', e => {
        const partContainer = getPartContainer(el)
        const stepsContainer = partContainer.querySelector('.steps-container')
        if(stepsContainer.classList.contains('hide')){
            stepsContainer.classList.remove('hide')
        } else {
            stepsContainer.classList.add('hide')
        }
    })

})
hideParts()
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
function getPartContainer(parent){
    if(parent.classList.contains('part-container')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
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
    })
    el.addEventListener('focusout', e => {
        denlargeAllImages()
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        toggleImgSize(e)
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
// Numpad focus to invidiual steps
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let key = e.keyCode
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
    
});

// The playing variable is asscoiated with img size so it is placed in here
function denlargeAllImages(){
    allVideos.forEach(el => {
        if(el.classList.contains('enlarge-vid')){
            el.classList.remove('enlarge-vid')
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
        e.preventDefault()
        toggleImgSize(e)
        handleVideoKeydown(e)
    })
})
allImages.forEach(el => {
    el.addEventListener('click',e => {
         ImgSize(e)
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
        } else {
            if(img){

                if(!img.classList.contains('enlarge')){
                    img.classList.add('enlarge')
                    img.style.border = "1px solid black"
                    img.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
                } else{
                    img.style.border = "none"
                    img.classList.remove('enlarge')
                }   
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
allStepTxtPAs.forEach(el =>{
    el.addEventListener('focus', () =>{
        denlargeAllImages()
    })
    el.addEventListener('click',e =>{
        e.preventDefault()
        open(e.target.href,'_blank')
    })
})
