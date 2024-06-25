const allEls =document.querySelectorAll('body *')
const homeLink = document.getElementById('homeLink')
const idEls = []
let letterElsArr = []
let currentLetter
// Index of pressed lettered compared to its index in idEls arr
let oldIndex = 0
let newIndex = 0
let iLetter = 0

allEls.forEach(el => {
    if(el.hasAttribute('id')){
        idEls.push(el)
    }
})  
idEls.forEach(el => {
    el.addEventListener('keydown', e => {
        let el = e.target   
        oldIndex = [...idEls].indexOf(el)
    })
    el.addEventListener('focus', e => {
        let el = e.target   
        newIndex = [...idEls].indexOf(el)
    })
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    letterElsArr = []
    idEls.forEach(el =>{
        console.log(el)
        if(letter == el.id[0].toLowerCase() && !el.classList.contains('hide')){
            letterElsArr.push(el)
        }
    })
    letterElsArr.forEach((el,i,arr) =>{
        
    })
    if(currentLetter != letter){
        if(letterElsArr[0]){
            iLetter = 0
        }
        // if(newIndex < oldIndex){
            // iLetter += 1
        // }
    }
    if(currentLetter == letter){
        iLetter = (iLetter + 1 ) % letterElsArr.length
    }
    if(letterElsArr[iLetter]){
        

        letterElsArr[iLetter].focus()
    }    
    currentLetter = letter
})

function getSubTopics(parent){
    if(parent.classList.contains('sub-topics')){
        return parent
    } else if (parent.parentElement){
        return getSubTopics(parent.parentElement)
    } else {
        return null
    }
}