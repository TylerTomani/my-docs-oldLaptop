const homelink = document.getElementById('homeLink')
homelink.addEventListener('click',e => {
    open(e.target.href)
})
let letteredArr =[]
let iLetter = 0
let currentLetter
document.addEventListener('keydown', e => {
    const letter = e.key.toLowerCase();
    // console.log(`Key pressed: ${key}`);
    // We might have to fix the homelinke when stuff begins with the letter 'h' like hyoid
    if(letter == 'h'){
        homelink.focus()
    }
    // Select all elements with an id attribute
    const allElements = document.querySelectorAll('[id]');
    // console.log('All elements with IDs:', allElements);
    
    // Filter elements where id starts with the pressed key
    letteredArr = []
    allElements.forEach(el => {
        const parent = getParent(el)

        if(parent){
            if(letter == el.id[0] && !el.classList.contains('hide')){
                letteredArr.push(el)
            }
            
        }
    })
    
    if(letter == currentLetter && letteredArr){
        allIndex = [...allElements].indexOf[letteredArr[iLetter]]
        letteredIndex = [...letteredArr].indexOf[letteredArr[iLetter]]
        console.log('letteredIndex',letteredIndex)
        console.log('allIndex',allIndex)
        iLetter = (iLetter + 1) % letteredArr.length
        letteredArr[iLetter].focus()
    } else {
        if(letteredArr.length > 0){
            // console.log(letteredArr[0])
            letteredArr[0].focus()
        } else {
            return null
        }
    }
    // if(letteredArr.length > 0){
    //     if(currentLetter != letter){
    //         console.log(letteredArr[0])
    //         letteredArr[0].focus()
            
    //     }
    // }
    currentLetter = letter   
});

function getParent(parent){
    if(parent.classList.contains('group') || parent.classList.contains('sub-group') || parent.classList.contains('systems-btns')){
        return parent
    } else if (parent.parentElement){
        return getParent(parent.parentElement)
    } else {
        return null
    }
}