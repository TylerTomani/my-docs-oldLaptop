let currentLetter 
let iLetter = 0
addEventListener('keydown', e => {
    if (e.key.length === 1 && event.key.match(/[a-z]/i)) {
        const pressedLetter = event.key.toLowerCase();
        const idEls = document.querySelectorAll('[id]')
        let letteredEls = []
        
        idEls.forEach(el => {
            if(el.id[0].toLowerCase() == pressedLetter){
                letteredEls.push(el)
            }
        })     
        if(letteredEls){

            if(currentLetter != pressedLetter){
                iLetter = 0
            } else {
                iLetter = (iLetter + 1) % letteredEls.length
            }
            letteredEls[iLetter].focus()
        }   
        currentLetter = pressedLetter
        console.log(currentLetter)

    }
});