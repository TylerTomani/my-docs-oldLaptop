const allEls = document.querySelectorAll('body *') 
const allElsArr = Array.from(allEls)
let letteredEls = []
let sorted = []
let currentLetter
let iLetter = 0
allEls.forEach(el => {
    if(el.hasAttribute('id')){
        letteredEls.push(el)
        el.setAttribute('tabindex', '1')
    }
    el.addEventListener('focus', e => {
    })
})

sorted = letteredEls.sort((a, b) => {     
            const idA = a.id.toLowerCase();
            const idB = b.id.toLowerCase();
            if (idA < idB) return -1;
            if (idA > idB) return 1;
            return 0;
        });
addEventListener('keydown', e  => {
    let letter = e.key.toLowerCase()
    if(letter != 'enter'){
        if(currentLetter != letter){
            sorted.forEach((el,i,arr) => {
                if(letter == el.id[0]){
                    iLetter = i
                }
            })
        }
        // if(currentLetter == letter){

        // }
        console.log(iLetter)
        console.log(sorted[iLetter])
        sorted[iLetter].focus()
                
    } else {
    }
    currentLetter = letter
});
// function getTopicsContainer(parent){
//     if(parent.classList.contains('topics-container')){
//         return parent
//     } else if (parent.parentElement){
//         return getTopicsContainer(parent.parentElement)
//     } else {
//         return null
//     }
// }