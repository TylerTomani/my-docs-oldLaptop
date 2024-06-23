
const tabImages = document.querySelectorAll('img.tab-img')
const videos = document.querySelectorAll('video')

videos.forEach(vid => {
    vid.setAttribute('tabindex', 1);
    vid.addEventListener('click', enlargeVid)
    vid.addEventListener('keydown', enlargeVid)

    // vid.addEventListener('focusout', shrinkImg)
})

let toggleVidSize = true
function enlargeVid(e){
    let parent = e.target.parentElement
    let key = e.keyCode
    if(key === 13 && toggleVidSize){
        parent.style.position = "absolute"
        e.target.style.position = 'relative'
        e.target.style.zIndex = '4'
        e.target.style.top = '0'
        e.target.style.marginTop = '-10%'
        e.target.focus()
        
    }
    if(key === 13 && !toggleVidSize){
        parent.style.position = "relative"        
        e.target.style.zIndex = '0'
        e.target.style.marginTop = '0'
        // e.target.style.width = '100%'
    }
    toggleVidSize = !toggleVidSize;
    console.log(toggleVidSize)
}



tabImages.forEach(img => {
    img.setAttribute('tabindex', 1);
    img.addEventListener('click', tabImgEnlarge)
    img.addEventListener('keydown', tabImgEnlarge)
    img.addEventListener('focusout', tabImgDecrese)
    img.addEventListener('focusin', e => {
        // let style = e.target.style
        // console.log(e.target)
        // style.borer = "3px solid black"
        // style.boxShadow = "8px 4px 6px 2px  black"
    })
    img.addEventListener('hasfocus', e => {
        let style = e.target.style
        console.log(e.target)
        style.borer = "3px solid black"
        style.boxShadow = "8px 4px 6px 2px  black"
    })
})

let enlargeToggle = false;

function tabImgEnlarge(e){
    let key = e.keyCode
    let img = e.target;
    let style = img.style
    const parent = e.target.parentElement
    const grandParent = parent.parentElement
    const greatParent = grandParent.parentElement

    let imgRec = img.getBoundingClientRect()
    imgTop = imgRec.top
    imgX = imgRec.x
    imgY = imgRec.y
    
    if(key === 13){
        console.log(innerHeight)
        console.log(imgRec)
    }
    
    if(key === 13 && !enlargeToggle){
            window.scrollTo(imgX,imgY)            
            grandParent.style.position = "relative"
            style.position = "absolute"
            style.zIndex = '4';
            style.boxShadow = '3px 8px 10px 2px royalblue'
            style.background = 'white'
            style.width = '90%'
            style.left = '10%'
            style.right = '25%'
            console.log('yes')
            
        } else {
            window.scrollTo(imgX,imgY)            
            grandParent.style.position = "relative"
            style.position = "relative"
            style.zIndex = '0'
            style.border = 'none'
            style.boxShadow = 'none'
            style.left = '0'
            style.right = '0'
            style.width = '100%'  
        }


    enlargeToggle = !enlargeToggle
}

function tabImgDecrese(e){
    let key = e.keyCode
    let img = e.target;
    let style = img.style
    const parent = e.target.parentElement
    const grandParent = parent.parentElement
    const greatParent = grandParent.parentElement
    enlargeToggle = false;
    grandParent.style.position = "relative"
    style.position = "relative"
    style.zIndex = '0'
    style.border = '1px solid black'
    style.boxShadow = 'none'
    style.left = '0'
    style.right = '0'
    style.width = '100%'


}