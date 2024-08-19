let allEls = document.querySelectorAll('[id]')
let elsLettered = []
let iLetter = 0
let currentLetter
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    switch (letter) {
        case 'h':         
            homelink.focus()
            break
        case 'b':
            const backlink = document.querySelector('#backlink')
            backlink.focus()
            break
        case 't':
            const tutorialLink = document.querySelector('#tutorialLink')
            tutorialLink.focus()
            break
    }
    if(letter != currentLetter){
        iLetter = 0
        elsLettered = []
        allEls.forEach(el => {
            if(letter == el.id[0]){
                elsLettered.push(el)
            }
        })
        console.log(elsLettered)
        elsLettered[0].focus()
    }
    
    if(letter == currentLetter){
        allEls.forEach(el => {
            if(letter == el.id[0]){
                elsLettered.push(el)
            }
        })
        iLetter = (iLetter + 1) % elsLettered.length
        elsLettered[iLetter].focus()
    }
    currentLetter = letter

});