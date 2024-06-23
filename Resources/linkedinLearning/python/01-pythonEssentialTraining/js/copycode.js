const copyPreCodes = document.querySelectorAll(".copy-pre-code");
const copyCodes = document.querySelectorAll(".copy-code");
const images = document.querySelectorAll('img')
// const videos = document.querySelectorAll('video')

let keyArray = [] // used in cmdCCopy
// Copy Event Listner
copyPreCodes.forEach(preCode => {
    preCode.addEventListener("click",clickCpy);    
    preCode.addEventListener("keydown",cmdCCopy)
    
})

let codeEnglargeImgToggle = true;
copyCodes.forEach(code => {
    code.addEventListener("click",clickCpy);    
    code.addEventListener("keydown",cmdCCopy)
    code.addEventListener('focusin', e => {
        codeEnglargeImgToggle = true
        // console.log(e)
    })
    code.addEventListener("keydown",enlargeImgFromCode)
    
})

// Cmd + c Copy
function cmdCCopy (e){
    let keyCode = e.keyCode
    keyArray.unshift(keyCode)
    
    let el = e.target
    
    if(keyArray.length > 2){
        keyArray.pop()
    }
    
    let sum = keyArray.reduce((accum ,current ) => accum + current)
    if(sum === 158){
        navigator.clipboard.writeText(e.target.innerText);
        el.style.border = "5px solid white"
        el.classList.add("textCpyAnimation")
        setTimeout(() => {
            el.style.border = "1px solid white"
        }, 200);

    }
}
// Click to copy
function clickCpy(e){
        // alert("text copied")
        const body = document.querySelector('body')
        const copyText = document.createElement("textarea");
        copyText.value = e.target.innerText
        e.target.appendChild(copyText)
        copyText.select();
        //Not sure what setSelRange does???
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field to Clipboard
        navigator.clipboard.writeText(copyText.value);

        let el = e.target
        el.style.border = "2px solid black"
        el.classList.add("textCpyAnimation")
        setTimeout(() => {
            el.style.border = "none"
        }, 200);
        

        e.target.removeChild(copyText)
    
        
}

// Add event to top when working
let img = ''
function enlargeImgFromCode(e){
    let greateGreatparent = e.target.parentElement.parentElement.parentElement
    img = greateGreatparent.querySelector('.fi > img')
    let parent = img.parentElement
    let key = e.keyCode


    if(key === 13 && codeEnglargeImgToggle && !(e.target.classList.contains('no-img'))){
        enlargeImg(e)
        // codeEnglargeImgToggle = true
    } else if(key === 13 && !codeEnglargeImgToggle){ 
        
        shrinkImg(e)
    }
codeEnglargeImgToggle = !codeEnglargeImgToggle;
    e.target.addEventListener('focusout', shrinkImg)
    
}

function enlargeImg(e){        
        const parent = e.target.parentElement
        const grandParent = parent.parentElement
        const greatParent = grandParent.parentElement
        const img = greatParent.querySelector('.fi > img')
        img.style.position = "relative";
        if(img.classList.contains('left-img')){
            img.style.left = '25%'
            img.style.width = '150%'
        } else {
            img.style.right = '50%'
            img.style.width = '150%'
        }
}
    function shrinkImg(e){
        // console.log('shrink',codeEnglargeImgToggle)
        const parent = e.target.parentElement
        const grandParent = parent.parentElement
        const greatParent = grandParent.parentElement
        const img = greatParent.querySelector('.fi > img')

        img.style.position = 'static'
        img.style.width = '100%'

    }



