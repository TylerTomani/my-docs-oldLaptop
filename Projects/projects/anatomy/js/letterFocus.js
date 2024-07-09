const homelink = document.getElementById('homeLink');
homelink.addEventListener('click', e => {
    open(e.target.href);
});
let letteredArr = [];
let iLetter = 0;
let currentLetter;
let currentIndex = 0
const allElements = document.querySelectorAll('[id]');
allElements.forEach(el => {
    el.addEventListener('focus', e =>{
        currentIndex = [...allElements].indexOf(e.target)
    })
})
document.addEventListener('keydown', e => {
    const letter = e.key.toLowerCase();
    if (letter == 'h') {
        homelink.focus();
    }
    // Select all elements with an id attribute
    // Filter elements where id starts with the pressed key
    letteredArr = [];
    allElements.forEach(el => {
        const parent = getParent(el);
        if (parent) {
            if (letter == el.id[0] && !el.classList.contains('hide')) {
                letteredArr.push(el);
            }
        }
    });
    /** The last step will be going to the next element of a different letter 
     * so if on Vertebral Column, and 'C' is pressed, focus goes to 
     * Cervial Spine, NOT Cranial Bones
     */
    
    if (letter == currentLetter && letteredArr.length > 0) {
        console.clear();
        iLetter = (iLetter + 1) % letteredArr.length;
        letteredArr[iLetter].focus();
    } else {

        let allIndex = [...allElements].indexOf(letteredArr[iLetter]);
        console.log(e.target)
        console.log('currentIndex',currentIndex)
        console.log('allIndex',allIndex)
        if(allIndex > currentIndex){
            if (letteredArr.length > 0) {
                letteredArr[0].focus();
            }
        } else {
            if (letteredArr.length > 0 && letteredArr[1]) {
                letteredArr[1].focus();
            } else {
                letteredArr[0].focus()
            }
        }
    }
    currentLetter = letter;
});

function getParent(parent) {
    if (parent.classList.contains('group') || parent.classList.contains('sub-group') || parent.classList.contains('systems-btns')) {
        return parent;
    } else if (parent.parentElement) {
        return getParent(parent.parentElement);
    } else {
        return null;
    }
}
