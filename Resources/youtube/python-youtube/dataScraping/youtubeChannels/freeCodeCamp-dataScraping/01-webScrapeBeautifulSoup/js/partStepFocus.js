import { mainTargetFocused } from "./sectionFocusLessonLoad.js"
import { mainTargetDivContainer } from "./sectionFocusLessonLoad.js"
export function partStepsEventListeners(){
    console.log(mainTargetFocused)
    console.log(mainTargetDivContainer)
    
    const dropParts = document.querySelectorAll('.dropPart')
    const stepsContainers = document.querySelectorAll('.steps-container')
    const part01 = document.getElementById('part01')
    let partsFocused = false
    let stepsFocused = false
    
    const dropSections = document.querySelectorAll('.dropSection')
    const lessons = document.querySelectorAll('.section > ul > li a')
    const img2Containers = document.querySelectorAll('.img-2-container')
    const stepTxts = document.querySelectorAll('.step-txt')
    const allStepTxtAs = document.querySelectorAll('.step-txt > p > a')
    const allStepTxtAsALL = document.querySelectorAll('.step-txt > a')
    const allCopyCodes = document.querySelectorAll('.copy-code')
    const codeCopy = document.querySelectorAll('.copy-code')
    const codeContainers = document.querySelectorAll('.code-containers')
    const stepTxtPAsCopy = document.querySelectorAll('.step-txt > p > a')
    let cntrlCarray = []
    const allImages = document.querySelectorAll('img') 
    const allVideos = document.querySelectorAll('video') 
    const playVidClicks = document.querySelectorAll('.playVid-click')
    let imgEnlarged = false
    let vidEnlarged = false
    let currentVid 
    let playing = false
    const enlargeFirstImages = document.querySelectorAll('.enlarge-first-img')
    
    lessons.forEach(el => {
        el.addEventListener('focus', e => {
            partsFocused = false
        } );
    })
    dropSections.forEach(el => {
        el.addEventListener('focus', e => {
            partsFocused = false
        } );
    })
    function hideStepContainers(){
        stepsContainers.forEach(el => {
            if(!el.classList.contains('show')){
                el.classList.add('hide')
            }
        })
    }
    hideStepContainers()

    navMain.addEventListener('focus', () => {
        partsFocused =false
    })
    asideMain.addEventListener('focus', () => {
        partsFocused =false
    })
    dropParts.forEach(el => {
        el.addEventListener('click', e => {
            toggleStepsContainer(e)
        })
        el.addEventListener('keydown', e => {
            let key = e.keyCode
            if(key === 13){

            }            
        })
        el.addEventListener('focus',()=>{
            partsFocused = true
            removeAllInnerStepTxtTabIndexes()
            denlargeAllImgVids()
        })

    })

    function toggleStepsContainer(e){
        let part = getPartContainer(e.target)
        let stepsContainer = part.querySelector('.steps-container')
        if(stepsContainer.classList.contains('show')){
            stepsContainer.classList.remove('show')
        }
        if(stepsContainer.classList.contains('hide')){
            hideStepContainers()
            if(stepsContainer.classList.contains('show')){
            stepsContainer.classList.remove('show')
        }   
            stepsContainer.classList.remove('hide')
        } else {
            stepsContainer.classList.add('hide')
        }

    }

    

    // //////////////////////////// Add steps focus below here
    // //////////////////////////// Add Img Enlarge Features below here
    function addTabIndex (els){
        els.forEach(el => {
            el.setAttribute('tabindex', '1')
        })
    }
    stepTxts.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                let step = getStep(e.target.parentElement)
                let img = step.querySelector('.step-img > img')
                let as = step.querySelectorAll('.step-txt > p > a')
                let copyCodes = step.querySelectorAll('.copy-code')
                if(!step.classList.contains('.step-col')){

                    
                    addTabIndex(copyCodes)
                    addTabIndex(as)
                    toggleStepImg(img)
                } else {
                    
                    addTabIndex(copyCodes)
                    addTabIndex(as)
                    toggleStepImg(img)
                    images = step.querySelectorAll('.img-2-container > .step-img > img')
                    images.forEach(el =>{
                        el.setAttribute('tabindex','1')
                    } )
                }
            })
            el.addEventListener('keydown', e => {
                let key = e.keyCode
                if(key === 13){   
                    let step = getStep(e.target.parentElement)
                    let img = step.querySelector('.step-img > img')
                    let as = step.querySelectorAll('.step-txt > p > a')
                    let copyCodes = step.querySelectorAll('.copy-code')
                    if(!step.classList.contains('step-col')){
                        as.forEach(a => {
                            a.addEventListener('click', e => {
                                window.open(a.href,'_blank')
                            } );
                        })
                        addTabIndex(copyCodes)
                        addTabIndex(as)
                        toggleStepImg(img)
                    } else if(step.classList.contains("step-col")){
                        addTabIndex(copyCodes)
                        addTabIndex(as)
                        // toggleStepImg(img)
                        let images = step.querySelectorAll('.img-2-container > .step-img > img')
                        images.forEach(el =>{
                            el.setAttribute('tabindex','1')
                        } )
                    }
                }
            })
            el.addEventListener('focus', e => {
                partsFocused =false
                stepsFocused = true
                denlargeAllImgVids()
                removeAllInnerStepTxtTabIndexes()
                // removeAllInnerStepTxtTabIndexes()

            } );
            el.addEventListener('focusin', e => {
                stepsFocused = true
            } );
        })    
    allStepTxtAs.forEach(el => {
        el.addEventListener('focus', ()=>{
            denlargeAllImgVids()
        });
    })
    allStepTxtAs.forEach(el => {
        el.addEventListener('click', e=>{
            window.open(e.target.href,'_blank')
        });
    })

    allCopyCodes.forEach(el => {
        el.addEventListener('focus', ()=>{
            denlargeAllImgVids()
        });
    })

    allImages.forEach(el => {
        el.addEventListener('click', e =>  {
            console.log(e.target)
            e.preventDefault()
            toggleAllImgsSize(e.target) 
        });
        el.addEventListener('keydown', e =>  {
            let key = e.keyCode
            if(key === 13){
                toggleAllImgsSize(e.target) 
            }
        });
        el.addEventListener('focus', e  => {
            el.style.position = 'relative'
            el.style.zIndex = '1'
        });
        el.addEventListener('focusout', e  => {
            el.style.position = 'static'
            el.style.zIndex = '0'
        });
    })
    function toggleStepImg(img){
        if(img){
            let currentClass = img.classList[0]
            if(!imgEnlarged){
                switch(currentClass){
                    case 'sm-enlarge':
                        img.classList.add('sm-enlarged')
                        break
                        case 'lg-enlarge':
                            img.classList.add('lg-enlarged')
                            break
                    case 'xlg-enlarge':
                        img.classList.add('xlg-enlarged')
                        break
                    default :
                        img.classList.add('enlarge')
                        break
                }
                } else {
                    if(img.classList.contains('sm-enlarged')){
                        img.classList.remove('sm-enlarged')
                    }
                    img.classList.remove('lg-enlarged')
                    img.classList.remove('xlg-enlarged')
                    img.classList.remove('enlarge')
                }
                imgEnlarged = !imgEnlarged
            }
    }
    function toggleAllImgsSize(img){
        if(img.classList.contains('enlarge')){
            img.classList.remove('enlarge')
        } else {
            img.classList.add('enlarge')
        }
    }
    function denlargeAllImgVids(){
        imgEnlarged = false
        allImages.forEach(img => {
            img.classList.remove('sm-enlarged')
            img.classList.remove('lg-enlarged')
            img.classList.remove('xlg-enlarged')
            img.classList.remove('enlarge')
        })
        allVideos.forEach(vid => {
            vid.classList.remove('sm-enlarged')
            vid.classList.remove('lg-enlarged')
            vid.classList.remove('xlg-enlarged')
            vid.classList.remove('enlarge')
        })
    }
// Get parent functions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function getPart(parent){
        if(parent.classList.contains('part')){
            return parent
        } else if (parent.parentElement){
            return getPart(parent.parentElement)
        } else {
            return null
        }
    }
    function getPartContainer(parent){
        if(parent.classList.contains('part')){
            return parent
        } else if (parent.parentElement){
            return getPartContainer(parent.parentElement)
        } else {
            return null
        }
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
    function getStepsContainer(parent){
        if(parent.classList.contains('steps-container')){
            return parent
        } else if (parent.parentElement){
            return getStepsContainer(parent.parentElement)
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

// copy code //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    codeCopy.forEach(copycode => {
        copycode.addEventListener('keydown' , e => {        
            cntrlCarray.unshift(e.keyCode)
            if(cntrlCarray.length > 3){
                cntrlCarray.pop()
            }
            if(cntrlCarray[0] === 67 && cntrlCarray[1] === 91){
                animate(e)

                console.log("cntrl + c")
            }
        })
        copycode.addEventListener('click', e => {
            e.preventDefault()
            animate(e)
        })

    })
    stepTxtPAsCopy.forEach(copycode => {
        copycode.addEventListener('keydown' , e => {        
            cntrlCarray.unshift(e.keyCode)
            if(cntrlCarray.length > 3){
                cntrlCarray.pop()
            }
            if(cntrlCarray[0] === 67 && cntrlCarray[1] === 91){
                animate(e)
                console.log("cntrl + c")
            }
        })
        copycode.addEventListener('click', e => {
            e.preventDefault()
            animate(e)
        })
    })
    function animate(e){
        let el = e.target
        el.classList.remove('decopied')
        el.classList.add('copied')
        setInterval(() => {
            el.classList.remove('copied')
            el.classList.add('decopied')
        },500)
        let txt = e.target.innerText
        copyToClip(txt)
    }
    function copyToClip(txt){
        async function copyTextToClipboard(text) {
            try {
            await navigator.clipboard.writeText(text);
            //   console.log("Text copied to clipboard:", text);
            } catch (err) {
            console.error("Unable to copy text to clipboard:", err);
            }
        }
        
        const textToCopy = txt;
        copyTextToClipboard(textToCopy);
    }
    
// Remove Tabs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function removeAllInnerStepTxtTabIndexes(){
        allStepTxtAs.forEach(el => {
            el.removeAttribute('tabindex')
        })
        allStepTxtAsALL.forEach(el => {
            el.removeAttribute('tabindex')
        })
        allCopyCodes.forEach(el => {
            el.removeAttribute('tabindex')
        })
        allImages.forEach(el => {
            el.removeAttribute('tabindex')
        })
        
    }

    function removeImgTabindexes(){
        allImages.forEach(el => {
            el.removeAttribute('tabindex')
        })
    }

// Play Enlarg videos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    playVidClicks.forEach(playVidClick => {    
        playVidClick.addEventListener('click', e => {
            e.preventDefault()  
            let parent = getStep(e.target)
            let vid = playVidClick.querySelector('.step-vid > video')
            currentVid = vid
            console.log(vid)
            if(vid){
                playVid(vid)
                vid.play()
            }
        })
        playVidClick.addEventListener('keydown', e => {
            let key = e.keyCode
            if(key === 13){
                let parent = getStep(e.target)
                // console.log(e.target)
                let vid = parent.querySelector('.step-vid > video')
                currentVid = vid
                if(vid){
                    playVid(vid)
                    scrollToVid(vid)
                    toggleStepVid(vid)
                    vid.play()
                } else {
                    vid.pause()
                }
            }
        })
        playVidClick.addEventListener('focusout', e => {          
                let parent = getStep(e.target)
                let vid = parent.querySelector('.step-vid > video')            
                vid.pause()
                vid.currentTime = 0
        })
    })
    function playVid(vid){
        if(!playing){
            vid.play()
            vid.currentTime = '0'
        } else {
            vid.pause()
            // vid.currentTime = '0'
        }
        playing = !playing
    }
    function toggleStepVid(img){
        let currentClass = img.classList[0]
        if(!imgEnlarged){
            switch(currentClass){
                case 'sm-enlarge':
                    img.classList.add('sm-enlarged')
                    break
                case 'lg-enlarge':
                    img.classList.add('lg-enlarged')
                    break
                case 'xlg-enlarge':
                    img.classList.add('xlg-enlarged')
                    break
                default :
                    img.classList.add('enlarge')
                    break
            }
        } else {
            img.classList.remove('sm-enlarged')
            img.classList.remove('lg-enlarged')
            img.classList.remove('xlg-enlarged')
            img.classList.remove('enlarge')
        }
        imgEnlarged = !imgEnlarged
    }
    function scrollToVid(vid){    
        if(!vidEnlarged ){
            vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            vidEnlarged  = true
            
        } else {
            vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            // vid.scrollIntoView({ behavior: "smooth", });
            vidEnlarged  = false
            
        }   
    } 

    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        let letter = e.key.toLowerCase()
        if(mainTargetFocused){
            stepsFocused = true
            console.log('go')
            if(stepTxts){
                    stepTxts.forEach(el => {
                        let h4 = el.querySelector('h4')
                        if(h4){
                            console.log(h4)
            
                            if(letter == h4.innerText[1]){
                                el.focus()
                            }
                        }
                    })
                }

        }   
        if(partsFocused){
            dropParts.forEach(el => {
                if(key == el.innerText[5]){
                    el.focus()
                }
            })
            if(key == 'p'){
                part01.focus()
            }
        }        
        if(stepsFocused){
            let part = getPart(e.target.parentElement)
            if(part){
                let dropPart = part.querySelector('.dropPart')
                if(key === 'p'){
                    dropPart.focus()
                }
                let stepsContainer = getStepsContainer(e.target)
                if(stepsContainer){

                    let stepsTxt = stepsContainer.querySelectorAll('.step > .step-txt') ? stepsContainer.querySelectorAll('.step > .step-txt') : stepsContainer.querySelectorAll('.step-col > .step-txt')
                    if(stepTxts){
                        stepTxts.forEach(el => {
                            let h4 = el.querySelector('h4')
                            if(key == h4.innerText[1]){
                                el.focus()
                            }
                        })
                    }
                }
            }
            let stepsContainer = getStepsContainer(e.target)
            if(stepsContainer){
                if(key === 'p'){
                    dropPart.focus()
                }
                let stepsTxt = stepsContainer.querySelectorAll('.step > .step-txt') ? stepsContainer.querySelectorAll('.step > .step-txt') : stepsContainer.querySelectorAll('.step-col > .step-txt')
                if(stepTxts){
                    stepTxts.forEach(el => {
                        let h4 = el.querySelector('h4')
                        if(h4){
                            console.log(h4)
            
                            if(key == h4.innerText[1]){
                                el.focus()
                            }
                        }
                    })
                }
            }
        }
    } );
    
    enlargeFirstImages.forEach(el => {
        el.addEventListener('click', e=> {
            e.preventDefault()
            let stepCol = getStepColContainer(e.target.parentElement)
            let img = stepCol.querySelector('.img-2-container > .step-img > img')
                console.log(img)
                toggleStepImg(img)
            console.log('click')
        });
        el.addEventListener('keydown', e => {
            let key = e.keyCode
            if(key === 13){
                let stepCol = getStepColContainer(e.target.parentElement)
                let img = stepCol.querySelector('.img-2-container > .step-img > img')
                console.log(img)
                toggleStepImg(img)
            }
        });
    })
    
}