import { stepTxts } from "./partStep-focus-dataScrap.js";
const allImages = document.querySelectorAll('.step-img > img')

function denlargeAllImages(){
    allImages.forEach(el => {
        el.classList.remove('denlarge')
        el.classList.remove('enlarge')
    })
}

stepTxts.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            const parent = getStep(e.target.parentElement)
            let img = parent.querySelector('.step-img > img')
            toggleImgSize(img)
        }
        
    })
    el.addEventListener('focusin', e => {
        denlargeAllImages()
    })
    el.addEventListener('focusout', e => {
        denlargeAllImages()
    })
})

function getStep(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if (parent.parentElement){
        return getStep(parent.parentElement)
    } else {
        return null
    }
}

function toggleImgSize(img){
    if(!img.classList.contains('enlarge')){
        img.classList.remove('denlarge')
        img.classList.add('enlarge')
        img.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
        
    } else {
        img.classList.add('denlarge')
        img.classList.remove('enlarge')
        img.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    }
}

