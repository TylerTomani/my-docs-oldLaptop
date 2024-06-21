const allEls = document.querySelectorAll('body *') 
let letteredEls = []
let currentLetteredEls = []
let currentLetter
let indexLetter = 0
allEls.forEach(el => {
    if(el.hasAttribute('id')){
        letteredEls.push(el)
        el.setAttribute('tabindex', '1')
    }
})
addEventListener('keydown', e  => {
    let letter = e.key.toLowerCase()
    currentLetteredEls = []
    
    if(letter != 'enter'){
        letteredEls.forEach(el => {
            const topicsContainer = el.parentElement
            if(topicsContainer && !topicsContainer.classList.contains('hide')){
                if(letter == el.id[0] ){
                    currentLetteredEls.push(el)
                } else {
                    return
                }
            }
        })
        if(currentLetteredEls){
            if(currentLetter == letter){
                indexLetter = (indexLetter + 1) % currentLetteredEls.length       
            } else if(currentLetter == letter && indexLetter == 0){
                indexLetter += 1
                currentLetteredEls[indexLetter].focus()
            } else {
                indexLetter = 0
            }
            if(currentLetteredEls.length != 0){
                currentLetteredEls[indexLetter].focus()
            }
        }
        currentLetter = letter
    } else {
        /*  This return else clause allows Animation to Games to be focused on if the letter 'A'
            is pressed after hitting enter on App,Chrome Extensions Project, otherwise you have 
            to press 'A' twice to switch
        */
        return
    }
});

function getTopicsContainer(parent){
    if(parent.classList.contains('topics-container')){
        return parent
    } else if (parent.parentElement){
        return getTopicsContainer(parent.parentElement)
    } else {
        return null
    }
}