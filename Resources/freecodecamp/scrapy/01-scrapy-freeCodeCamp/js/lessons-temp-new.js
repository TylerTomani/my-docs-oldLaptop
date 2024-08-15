import {currentSelection} from './sections-new.js'
import { targetDiv } from './sections-new.js'


export function stepTxtListeners(){    
    const stepTxts = document.querySelectorAll('.step-txt')
    const nxtLesson = document.getElementById('nxtLesson')
    const copyCodes = document.querySelectorAll('.copy-code') 
    let indexStepImages = 0
    let targetDivFocusIN = false
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
    addEventListener('keydown', e => {
        if(targetDivFocusIN){
            let letter = e.key.toLowerCase()
            if(!isNaN(letter)){
                stepFocus(letter)
            }
            if(letter == 'e'){
                nxtLesson.focus()
                
            }
            
        }
    });
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
        
    nxtLesson.addEventListener('click', e => {
        currentSelection.focus()

    })
    // The code below handle img enlarge and code within step txt
    stepTxts.forEach(el => {
        el.addEventListener('focus', e => {
            removeAllTabs()
            indexStepImages = 0
        })
        el.addEventListener('keydown', e => {
            let letter = e.key.toLowerCase()
            if(letter == 'enter'){
                handleImgSize(e)
                handleTabIndex(e)
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
        if(indexStepImages < 2){
            const img = images[indexStepImages]
            // img.style.maxWidth = '100px'
            switch (indexStepImages){
                case 0:
                    denlargeAllImages()
                    img.classList.add('enlarge-col')
                    img.scrollIntoView()
                    break
                case 1:
                    denlargeAllImages()
                    img.classList.add('enlarge-col')
                    img.scrollIntoView()
                break
            }
        } else {
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
    
    function handleTabIndex(e){
        // const stepTxt = getStepTxt(e.target.parentElement)
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
        copyCodes.forEach(el => {
            el.removeAttribute('tabindex')
            // el.setAttribute('tabindex', '-1')
        })
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
    const allImages = document.querySelectorAll('.step-img > img') ? document.querySelectorAll('.step-img > img') : document.querySelectorAll('.step-video > video')
    function denlargeAllImages() {
        allImages.forEach(el => {
            if(el.classList.contains('enlarge')){
                el.classList.remove('enlarge')
            }
            if(el.classList.contains('enlarge-col')){
                el.classList.remove('enlarge-col')
            }
        })
    }
}


