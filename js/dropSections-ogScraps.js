const nav = document.querySelector('nav');
const aside = document.querySelector('main > aside');
const targetDiv = document.querySelector('#targetDiv');
const sections = Array.from(document.querySelectorAll('.section'));
let indexSection = 0;
let focusOnSections = true;

const lessons = document.querySelectorAll('.sub-section > li > a')
let focusOnLessons = false
lessons.forEach(el => {
    el.addEventListener('focus', e => {
        focusOnSections = false
        focusOnLessons = true
    })
})
sections.forEach(el => {
    el.addEventListener('focus', () => {
        focusOnSections = true
        focusOnLessons = false
    });
});



[nav, aside, targetDiv].forEach(element => {
    element.addEventListener('focus', scrollToTop);
});

addEventListener('keydown', e => {
    const letter = e.key.toLowerCase();
    switch (letter) {
        case 'n':
            nav.focus();
            break;
        case 'a':
            aside.focus();
            break;
        case 'm':
            targetDiv.focus();
            break;
        default:
            // console.log('why do i suck at coding')    
            break;
    }
    if (focusOnSections){
        sectionsFocus(letter);
    } 
    if(focusOnLessons){
        lessonsFocus(e,letter)
    }
        
});
function sectionsFocus(letter) {
    const intLetter = parseInt(letter);
    if (letter === 's') {
        sections[indexSection].focus();
        // I can't implement this on my own every what the fuck, i sware im worthless
        indexSection = (indexSection + 1) % sections.length;
    } else if (!isNaN(intLetter)) {
        sections.forEach(el => {
            const sectionNum = el.innerText.slice(-1);
            if (intLetter == sectionNum) el.focus();
        });
    }
}

function lessonsFocus(e,letter){
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const section = sectionContainer.querySelector('.section')
    if(letter == 's'){
        section.focus()
        indexSection =0
    }
    if(lessons){
        const lessons = sectionContainer.querySelectorAll('.sub-section > li > a')
        const intLetter = parseInt(letter)
        if(!isNaN(intLetter)){
            lessons.forEach(el => {
                let lessonNum = el.innerText[0]
                if(intLetter == lessonNum){
                    el.focus()
                }
            })
            
        }
    }
}
function getSectionContainer(parent){
    if(parent.classList.contains('section-container')){
        return parent
    } else if(parent.parentElement){
        return getSectionContainer(parent.parentElement)
    }else{
        return null
    }
}
