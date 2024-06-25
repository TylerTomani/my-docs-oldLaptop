export let allEls = document.querySelectorAll('body *') 
let idEls = []
let letterEls = [] 
let currentLetter 
let iLetter = 0
let elCurrent
let letteredIndex
let currentIndex
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    idEls = []
    letterEls = []
    allEls.forEach(el =>{
        if(el.hasAttribute('id') && !el.classList.contains('hide')){
            idEls.push(el)

        }
    })
    // console.clear()
    idEls.forEach(el =>{
        if(letter == el.id[0].toLowerCase() && !el.classList.contains('hide') ){
            letterEls.push(el)
        }
        
    })
    if(letterEls){
        if(currentLetter == letter){
            iLetter = (iLetter + 1 ) % letterEls.length
            letteredIndex = [...idEls].indexOf(letterEls[iLetter])    
        } else {
            iLetter = 0
        }
        if(letterEls[iLetter]){
            letterEls[iLetter].focus()
        }
        
    }

    /* We almos have it, need to check if currentElement index is < first lettered element index 
    in idEls */
    
    currentLetter = letter
})
