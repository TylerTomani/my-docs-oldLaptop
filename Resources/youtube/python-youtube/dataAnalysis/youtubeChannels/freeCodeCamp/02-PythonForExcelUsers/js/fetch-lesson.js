const lessonsAs = document.querySelectorAll('li a')
let lessonsClicked = false
const allImages = document.querySelectorAll('img')
import { currentLesson, mainTargetDivContainerFocusIn } from "./sectionDrop-focus-temp.js";

let shiftTab = []
lessonsAs.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        if(!lessonsClicked){
            loadPlaceholderHtml(e.target.href)
        } 
        lessonsClicked  = !lessonsClicked
    });
})


export function loadPlaceholderHtml(href = 'main-placeholder.htm' ) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            // Inject the retrieved HTML into the target div
            document.getElementById('mainTargetDivContainer').innerHTML = html;
            addEventListenersToInjectedContent()
            addLessonEventListeners()
            
        })
        .catch(error => console.error('Error fetching content.html:', error));
}
loadPlaceholderHtml()

function addEventListenersToInjectedContent() {
    // Add your event listeners here
    // For example:
    const part01 = document.getElementById('part01') ? document.getElementById('part01') : null
    if(part01){

        part01.addEventListener('keydown', (e) => {
            let letter = e.key.toLowerCase()
            shiftTab.unshift(letter)
            if(shiftTab.length > 2){
                shiftTab.pop()
            }
            if(shiftTab[0] == 'tab' && shiftTab[1]== 'shift'){
                setTimeout(() => {
                    // 5ur code that uses currentLesson
                    currentLesson.click()
                    currentLesson.focus()
                    console.log(shiftTab)
                    scrollTo(0,0)
                    if(mainTargetDivContainerFocusIn){
                        if(letter == 'p'){
                            part01.focus()
                        }
                    }
                }, 90); // Adjust the timeout value as needed
            }
        });
    }
}


function addLessonEventListeners() {
    const dropParts = document.querySelectorAll('.dropPart')
    const stepsContainers = document.querySelectorAll('.steps-container')
    const part01 = document.getElementById('part01')
    let partsFocused = false
    let stepsFocused = false
    const dropSections = document.querySelectorAll('.dropSection')
    const lessons = document.querySelectorAll('.section > ul > li a')

    const stepTxts = document.querySelectorAll('.step-txt')
    const allStepTxtAs = document.querySelectorAll('.step-txt > p > a')
    const allStepTxtAsALL = document.querySelectorAll('.step-txt > a')
    const allCopyCodes = document.querySelectorAll('.copy-code')

     const allImages = document.querySelectorAll('img') 
    const allVideos = document.querySelectorAll('video') 
    let imgEnlarged = false

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

    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
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
            let part = getPart(e.target)
            if(part){

                let dropPart = part.querySelector('.dropPart')
                let stepsContainer = getStepsContainer(e.target)
                if(key === 'p'){
                    dropPart.focus()
                }
                let stepsTxts = stepsContainer.querySelectorAll('.step > .step-txt') ? stepsContainer.querySelectorAll('.step > .step-txt') : stepsContainer.querySelectorAll('.step-col > .step-txt')
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
    } );

    // //////////////////////////// Add steps focus below here
    // //////////////////////////// Add Img Enlarge Features below here
    
    stepTxts.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            let step = getStep(e.target.parentElement)
            let img = step.querySelector('.step-img > img')
            let as = step.querySelectorAll('.step-txt > a')
            let copyCodes = step.querySelectorAll('.copy-code')
            if(!step.classList.contains('.step-col')){

                as.forEach(a => {
                    a.addEventListener('click', e => {
                        window.open(a.href,'_blank')
                    } );
                })
                addStepTxtAsTabindex(copyCodes)
                addStepTxtAsTabindex(as)
                toggleStepImg()
            } else {
                images = step.querySelectorAll('.img-2-container > .step-img > img')
                images.forEach(el =>{
                    el.setAttribute('tabindex','1')
                } )
            }
            console.log(step)
        })
        el.addEventListener('keydown', e => {
            let key = e.keyCode
            if(key === 13){   
                let step = getStep(e.target.parentElement)
                let img = step.querySelector('.step-img > img')
                let as = step.querySelectorAll('.step-txt a')
                let copyCodes = step.querySelectorAll('.copy-code')
                addStepTxtAsTabindex(copyCodes)
                addStepTxtAsTabindex(as)
                if(img){
                    toggleStepImg(img)
                    if(!step.classList.contains('.step-col')){
                        as.forEach(a => {
                            a.addEventListener('click', e => {
                                window.open(a.href,'_blank')
                            } );
                        })
                        addStepTxtAsTabindex(copyCodes)
                        addStepTxtAsTabindex(as)
                        toggleStepImg()
                    }
                }
                let images = step.querySelectorAll('.img-2-container > .step-img > img')
                if(images){

                    addStepTxtAsTabindex(copyCodes)
                    addStepTxtAsTabindex(as)
                    toggleStepImg()
                    images.forEach(el =>{
                        el.setAttribute('tabindex','1')
                    } )
                }
                as.forEach(a => {
                a.addEventListener('click', e => {
                    window.open(a.href,'_blank')
                } );
            })
            }
        })
        el.addEventListener('focus', e => {
            partsFocused =false
            stepsFocused = true
            denlargeAllImgVids()
            removeAllInnerStepTxtTabIndexes()
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

    allCopyCodes.forEach(el => {
        el.addEventListener('focus', ()=>{
            denlargeAllImgVids()
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
    const codeCopy = document.querySelectorAll('.copy-code')
    const codeContainers = document.querySelectorAll('.code-containers')
    const stepTxtPAsCopy = document.querySelectorAll('.step-txt > p > a')
    let cntrlCarray = []
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
    function addStepTxtAsTabindex (els){
        els.forEach(el => {
            el.setAttribute('tabindex', '1')
        })
    }
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
// Play Enlarg videos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const playVidClicks = document.querySelectorAll('.playVid-click')

let currentVid 
let playing = false
let vidEnlarged = false

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
    function toggleAllImgsSize(img){
        if(img.classList.contains('enlarge')){
            img.classList.remove('enlarge')
        } else {
            img.classList.add('enlarge')
        }
    }
}
// Initial event listeners setup
// addEventListenersToInjectedContent();