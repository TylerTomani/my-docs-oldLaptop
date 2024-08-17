import {currentSelection} from './sections-new.js'
import { targetDiv } from './sections-new.js'
import { getSubSection } from './sections-new.js'
export function stepTxtListeners(){    
    const allImages = document.querySelectorAll('.step-img > img') ? document.querySelectorAll('.step-img > img') : document.querySelectorAll('.step-video > video')
    const stepTxts = document.querySelectorAll('.step-txt')
    const nxtLesson = document.getElementById('nxtLesson')
    const copyCodes = document.querySelectorAll('.copy-code') 
    const pAs = document.querySelectorAll('p a') 
    let indexStepImages = 0
    let targetDivFocusIN = false
    allImages.forEach(el => {
        el.addEventListener('click', e => {
            e.target.classList.toggle('enlarge')
        })
    })
    pAs.forEach(el => el.addEventListener('click', openNewTab))
    function openNewTab(e){
        open(e.target.href,'_blank')
    }
    // this redundancy make it work, i think only focus out and keydown is needed but did overkill on this
    targetDiv.addEventListener('focus', e => {
        targetDivFocusIN = true
    })
    targetDiv.addEventListener('focusin', e => {
        targetDivFocusIN = true
    })
    targetDiv.addEventListener('keydown', e => {
        targetDivFocusIN = true
    })
    targetDiv.addEventListener('focusout', e => {
        targetDivFocusIN = false
    })
    
    function stepFocus(letter) {
        const intLetter = parseInt(letter)
        if (intLetter <= stepTxts.length) {
            stepNumberFocus(intLetter)
        } else {
            nxtLesson.focus()
        }
    }
    function stepNumberFocus(intLetter) {
        stepTxts[intLetter - 1].focus()

    }    
        
    
    // The code below handle img enlarge and code within step txt
    stepTxts.forEach(el => {
        el.addEventListener('focus', e => {
            removeAllTabs()
            indexStepImages = 0
        })
        el.addEventListener('keydown', e => {
            let letter = e.key.toLowerCase()
            e.target.scrollIntoView({ behavior: "smooth", block: "end"})
            if(letter == 'enter'){
                handleImgSize(e)
                handleStepTabIndex(e)
            }
            if(letter == 'tab'){
                denlargeAllImages()
            }

            
        })
    })
    copyCodes.forEach(el => {
        el.addEventListener('focus', e => {
            denlargeAllImages()
        })
    })

    // This will handle img and video size enlarge and denlarge
    function handleImgSize(e){
        const step = getStepContainer(e.target.parentElement)
        const stepCol = getStepColContainer(e.target.parentElement)
        if(step){
            toggleStepImgSize(step)
        }
        if(stepCol){
            toggleStepColImages(stepCol)
        }
    }
    function toggleStepColImages(stepCol){
        const imgContainer = stepCol.querySelector('.img-container')
        const images = imgContainer.querySelectorAll('.step-img > img')
        console.log(indexStepImages)
        const img = images[indexStepImages]
        if(indexStepImages < 2){
            // img.style.maxWidth = '100px'
            switch (indexStepImages){
                case 0:
                    denlargeAllImages()
                    img.classList.add('enlarge-col')
                    img.scrollIntoView({ behavior: "smooth", block: "end" })
                    break
                case 1:
                    denlargeAllImages()
                    img.classList.add('enlarge-col')
                    img.scrollIntoView({ behavior: "smooth", block: "end" })
                    break
                }
            } else {
            stepCol.scrollIntoView(({ behavior: "smooth", block: "start" }))
            scrollTo(0,0)
            denlargeAllImages()
            stepCol.scrollIntoView()
        }
        indexStepImages = (indexStepImages + 1) % (images.length + 1)

        

    }
    
    function toggleStepImgSize(step){
        const stepImg = step.querySelector('.step-img')
        const img = stepImg.querySelector('img')
        img.classList.toggle('enlarge')
    }
    
    function handleStepTabIndex(e){
        // const stepTxt = getStepTxt(e.target.parentElement)
        const copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        const as = e.target.querySelectorAll('p a')
        copyCodes.forEach(el => addTabs(el))
        as.forEach(el => addTabs(el))
    }
    function handleStepCOLTabIndex() {
        const copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        copyCodes.forEach(el => addTabs(el))
    }
    function addTabs(el) {
        el.setAttribute('tabindex','1')
    }
    function removeTabs(el){
        el.removeAttribute('tabindex')
    }
    function removeAllTabs() {
        copyCodes.forEach(el => {el.removeAttribute('tabindex')})
        pAs.forEach(el => {el.removeAttribute('tabindex')})
    }
    function getStepContainer(parent){
        if(parent.classList.contains('step')){
            return parent
        } else if (parent.parentElement){
            return getStepContainer(parent.parentElement)
        } else {
            return null
        }
    }
    function getStepColContainer(parent){
        if(parent.classList.contains('step-col')){
            return parent
        } else if (parent.parentElement){
            return getStepColContainer(parent.parentElement)
        } else {
            return null
        }
    }
    
    function denlargeAllImages() {
        allImages.forEach(el => {
            if(el.classList.contains('enlarge')){
                el.style.zIndex = "0"
                el.classList.remove('enlarge')
            }
            if(el.classList.contains('enlarge-col')){
                el.classList.remove('enlarge-col')
                el.style.zIndex = "0"
            }
        })
    }
    addEventListener('keydown', e => {
        if (targetDivFocusIN) {
            let letter = e.key.toLowerCase()
            if (!isNaN(letter)) {
                stepFocus(letter)
            }
            if (letter == 'e') {
                nxtLesson.focus()

            }

        }
    });
    nxtLesson.addEventListener('click', e => {
        const subSection = getSubSection(currentSelection)
        console.log(subSection)
        const lessons = subSection.querySelectorAll('li > a')
        if(subSection){
            console.log(subSection)
            let index = [...lessons].indexOf(currentSelection)
            console.log(index)
            lessons[index + 1].focus()
            lessons[index + 1].click()
            
        } else {
            currentSelection.focus()
        }

    })
    
}


