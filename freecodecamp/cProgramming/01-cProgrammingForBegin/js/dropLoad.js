const sections = document.querySelectorAll('.section')
const subSections = document.querySelectorAll('.sub-section')
const lessons = document.querySelectorAll('.sub-section > li > a')
const targetDiv = document.getElementById('tagetDiv')
let sIndex = 0
let intLetter = 0
subSections.forEach(el =>{
    if(!el.classList.contains('show')){
        el.classList.add('hide')
    }
})
function hideSubSections(){
    subSections.forEach(el =>{
        if(el.classList.contains('show')){
            el.classList.remove('show')
        }
        el.classList.add('hide')
    })
}

function toggleSubSections(e){
    const section = getSectionContainer(e.target.parentElement)
    const subSections = section.querySelector('.sub-section')
    subSections.classList.toggle('hide')
}

function getSectionContainer(parent){
    if(parent.classList.contains('section-container')){
        return parent
    } else if (parent.parentElement){
        return getSectionContainer(parent.parentElement)
    } else {
        return null
    }
}




addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!isNaN(letter)){
        let intLetter = parseInt(letter)
        console.log(intLetter)
        sIndex = intLetter - 1
        if(intLetter <= sections.length  && intLetter >= 0){
            sections[intLetter - 1].focus()
        } else {
            return
        }
    }
    if(letter == 's'){
        sIndex = (sIndex + 1 ) % sections.length
        sections[sIndex].focus()
        console.log(sIndex )
    }    
    if(letter != 's' ){
        intLetter = 0
        sIndex = -1
    }
    
});

sections.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        toggleSubSections(e)
    })
})
lessons.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
    })
})
