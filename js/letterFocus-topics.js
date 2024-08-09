const allIdEls = document.querySelectorAll('[id]')
let currentLetter 
let iShowing = 0
let showingEls = []

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()    
    let letterArr = []
    console.clear()
    allIdEls.forEach(el => {
        if(letter == el.id[0]){
            letterArr.push(el)
        }
    })
    if(letterArr[0]){
        showingEls = letterArr.filter(el => !el.classList.contains('hide'))            
        cycleThruShowing(showingEls,letter)   
    }
    currentLetter = letter
});

function cycleThruShowing(showingEls,letter){
    if (showingEls) {
        if (letter == currentLetter) {
            iShowing = (iShowing + 1) % showingEls.length
            showingEls[iShowing].focus()
        } else {
            showingEls[0].focus()
        }
    }
}

function getSubResourcesContainer(parent){
    if(parent.classList.contains('sub-resources-container')){
        return parent
    } else if (parent.parentElement){
        return getSubResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}