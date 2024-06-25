(function (){
     const allEls = document.querySelectorAll('body *') 
let idEls = []
let letterEls = [] 
let currentLetter 
let iLetter = 0
let elCurrent
let currentIndex
let lastIndex
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    idEls = []
    letterEls = []
    allEls.forEach(el =>{
        if(el.hasAttribute('id') && !el.classList.contains('hide')){
            idEls.push(el)

        }
    })
    idEls.forEach(el =>{
        if(letter == el.id[0].toLowerCase() && !el.classList.contains('hide') ){
            letterEls.push(el)
            currentIndex = [...idEls].indexOf(el)
        }
        
    })
    
    if(letterEls){
        if(currentLetter == letter){
            iLetter = (iLetter + 1 ) % letterEls.length
            if(letterEls[iLetter + 1]){
                letterEls[iLetter + 1].focus()
            }
        } else {
            iLetter = 0   
        }
        if(letterEls){
            currentIndex = [...idEls].indexOf(letterEls[iLetter])
            // console.log('currentIndex',currentIndex)
            // console.log(idEls[currentIndex].id)
            if(currentIndex < lastIndex && letterEls.length > 1){
                console.log('yes')
                // if(idEls[iLetter + 1]){
                //     iLetter +=1
                // }
            }
        }
        if(letterEls[iLetter]){
            letterEls[iLetter].focus()
        }
        lastIndex = currentIndex
    }
    // console.log(idEls[letteredIndex].id)

    /* We almos have it, need to check if currentElement index is < first lettered element index 
    in idEls */
    
    currentLetter = letter
})

}())