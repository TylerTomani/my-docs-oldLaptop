import { currentLesson, mainTargetFocused } from "./sectionFocusLessonLoad.js"
import { mainTargetDivContainer } from "./sectionFocusLessonLoad.js"
import { currentLessonEl } from "./sectionFocusLessonLoad.js"
import { getSection } from "./sectionFocusLessonLoad.js"
export function partStepsEventListeners(){
    let h4s = document.querySelectorAll('.step-txt > h4')
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
    // Fix this vidEnlarge, videos are not enlarging properly
    let vidEnlarged = true
    let currentVid 
    let playing = false
    const enlargeFirstImages = document.querySelectorAll('.enlarge-first-img')
    let nxtElement
    let currentIndex;
    const nxtBtn = document.querySelector('#nxtLesson');
    if(nxtBtn){
        nxtBtn.addEventListener('click', e  => {
            let section = getSection(currentLessonEl.parentElement);
            let lessons = section.querySelectorAll('ul > li a');
            lessons.forEach((el, i, arr) => {
                if (currentLessonEl === el) {
                    if (i >= arr.length - 1) {
                        currentIndex = 0;
                    } else {
                        currentIndex = i + 1;
                    }
                    scrollTo(0, 0);
                    if (arr[currentIndex]) { // Check if next element exists
                        arr[currentIndex].focus();
                    }
                }
            });
        });

    }
    
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
            let gparent = e.target.parentElement.parentElement
            gparent.style.position = 'static'
            gparent.style.zIndex = '0'
            denlargeAllImgVids()
        });
    })
    function toggleStepImg(img){
        if(img){
            let currentClass = img.classList[0]
            if(!imgEnlarged){
                scrollToImg(img)
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
            denlargeAllImgVids()
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
            if(!el.classList.contains("tabindex1")){
                el.removeAttribute('tabindex')
            }
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
            if(vid){
                playVid(vid)
                vid.play()
            }
        })
        playVidClick.addEventListener('keydown', e => {
            // e.preventDefault()
            let key = e.keyCode
            let left = 37
            let right = 39
            let parent = getStep(e.target)
            let vid = parent.querySelector('.step-vid > video')
            console.log('pause')
            if(playing){
                if(key == 32){
                    e.preventDefault()
                    vid.pause()
                    playing = false
                }
                if(key == left){
                    e.preventDefault()
                    if(vid.currentTime <= 0){
                        vid.currentTime = 0
                        vid.play()
                    }
                    if(vid.currentTime > 0){
                        vid.currentTime -= vid.currentTime - .75
                        vid.play()
                    }
                } else
                if(key == right){
                    e.preventDefault()
                    if(vid.currentTime > 0){
                        console.log(vid.currentTime)
                        console.log(vid.currentTime)
                        vid.currentTime += vid.currentTime + .75
                        console.log(vid.currentTime)
                        vid.play()
                    }
                }
                
            } else if(!playing){
                // e.preventDefault()
                vid.play()
            }
            if(key === 13){
                currentVid = vid
                if(vid){
                    playVid(vid,key)
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
    function playVid(vid,key){
        if(!playing){
            vid.play()
            vid.currentTime = '0'
            vidEnlarged = true
        } else {
            vid.pause()
            // vidEnlarged = true
            // vid.currentTime = '0'
        }
        playing = !playing
    }
    function toggleStepVid(vid){
        let currentClass = vid.classList[0]
        console.log(vidEnlarged)
        if(!vidEnlarged){
            switch(currentClass){
                case 'sm-enlarge':
                    vid.classList.add('sm-enlarged')
                    break
                case 'lg-enlarge':
                    vid.classList.add('lg-enlarged')
                    break
                case 'xlg-enlarge':
                    vid.classList.add('xlg-enlarged')
                    break
                default :
                    vid.classList.add('sm-enlarge')
                    break
            }
        } else {
            vid.classList.remove('sm-enlarged')
            vid.classList.remove('lg-enlarged')
            vid.classList.remove('xlg-enlarged')
            vid.classList.remove('enlarge')
        }
        vidEnlarged = !vidEnlarged
    }
    function scrollToVid(vid){    
        if(!vidEnlarged ){
            vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            vidEnlarged  = true
            
        } else {
            vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            vidEnlarged  = false
            
        }   
    } 
    function scrollToImg(img){    
        if(!imgEnlarged ){
            img.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            imgEnlarged = true
            
        } else {
            img.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            // vid.scrollIntoView({ behavior: "smooth", });
            imgEnlarged = false
            
        }   
    } 
// main page key shortcut navigation
    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        let letter = e.key.toLowerCase()
        let num = parseInt(letter)
        const nxtLessonBtn = document.getElementById('#nxtLesson')    
        let h4sArray = [...h4s]
        if(num > h4sArray.length){
            // nxtLessonBtn.focus()
            if(nxtBtn){
                nxtBtn.focus()
            }
        }
        if(letter == 'e' && nxtBtn){
            console.log(nxtLessonBtn)
            nxtBtn.focus()
        }

        if(letter == 'e' && !nxtBtn){
            scrollTo(0,innerHeight)
        }
        if(mainTargetFocused){
            stepsFocused = true
            if(stepTxts){
                    stepTxts.forEach(el => {
                        // h4s found at top
                        // let h4sArray = Array.from(h4s);
                        // or use spread ...
                        
                        let h4 = el.querySelector('h4')
                        if(h4){
                            if(num == h4.innerText[1]){
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
                    if(dropPart){
                        dropPart.focus()

                    }
                }
                let stepsTxt = stepsContainer.querySelectorAll('.step > .step-txt') ? stepsContainer.querySelectorAll('.step > .step-txt') : stepsContainer.querySelectorAll('.step-col > .step-txt')
                if(stepTxts){
                    stepTxts.forEach(el => {
                        let h4 = el.querySelector('h4')
                        if(h4){
            
                            if(key == h4.innerText[1]){
                                el.focus()
                            }
                        }
                    })
                }
            }
        }
    } );
/*  step-col > .step-txt first image enlarged when 'enter' is press 
    see above */
    enlargeFirstImages.forEach(el => {
        el.addEventListener('click', e=> {
            e.preventDefault()
            let stepCol = getStepColContainer(e.target.parentElement)
            let img = stepCol.querySelector('.img-2-container > .step-img > img')
                toggleStepImg(img)
        });
        el.addEventListener('keydown', e => {
            let key = e.keyCode
 
            if(key === 13){
                let stepCol = getStepColContainer(e.target.parentElement)
                let img = stepCol.querySelector('.img-2-container > .step-img > img')
                toggleStepImg(img)
            }
        });
    })
    mainTargetDivContainer.addEventListener('focus', e => {
        // currentLesson.focus()
    })
}
