// I still don't get this code but the after this is do
document.addEventListener('DOMContentLoaded', () => {
    const targetDiv = document.getElementById('targetDiv');
    const links = document.querySelectorAll('.sub-section a');
    links.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const url = e.target.href;

            try {
                const response = await fetch(url);
                if (response.ok) {
                    const content = await response.text();
                    targetDiv.innerHTML = content;
                    injectScripts(targetDiv);
                } else {
                    targetDiv.innerHTML = '<p>Failed to load content.</p>';
                }
            } catch (error) {
                targetDiv.innerHTML = '<p>Error loading content.</p>';
            }
        });
    });

    function injectScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.head.appendChild(newScript).parentNode.removeChild(newScript);
        });
    }
});
// Starting from here 

const sections = document.querySelectorAll('.section')
const subSections = document.querySelectorAll('.sub-section')
const sectionsArr = Array.from(sections)
let sectionsFocused = true
let iSection = 0
const lessons = document.querySelectorAll('.sub-section > li > a')
const lessonsArr = Array.from(lessons)
let lessonsFocused = true

sections.forEach(el => {
    el.addEventListener('focus', (e) => {
        sectionsFocused =true
        lessonsFocused =false
        console.log()
    })
    el.addEventListener('click',toggleSubSection)    
})
function toggleSubSection(e){
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const subSection = sectionContainer.querySelector('.sub-section')
    if(subSection.classList.contains('show')){
        subSection.classList.remove('show')
        subSection.classList.add('hide')
    } else if(subSection.classList.contains('hide')) {
        hideSubSections()
        subSection.classList.remove('hide')
    } else {
        subSection.classList.add('hide')
    }
}
function hideSubSections(){
    subSections.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        } else if(el.classList.contains('hide') && el.classList.contains('show')){
            el.classList.add('hide')
            el.classList.add('show')
        }
    })
}
hideSubSections()
lessons.forEach(el => {
    el.addEventListener('focus', (e) => {
        sectionsFocused =false
        lessonsFocused = true
    })
})  

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let intLetter = parseInt(letter)
    let key = e.keyCode
    if(sectionsFocused){
        handleSections(letter,intLetter)
    }
    if(lessonsFocused){
        handleLessons(e,intLetter,letter)
    }
})
function handleSections(letter,intLetter){
    if(letter == 's'){
        sectionsArr[iSection].focus()
        iSection = (iSection + 1) % sectionsArr.length;

    } else if (!isNaN(intLetter)){
        sectionsArr.forEach(el => {
            const sectionNum = el.innerText.slice(-1)
            if(sectionNum == intLetter) el.focus()
        })
    }
    sectionsArr.forEach(el => {        
    })
}
function handleLessons(e,intLetter,letter){
    const sectionContainer = getSectionContainer(e.target.parentElement)
    const section = sectionContainer.querySelector('.section')
    const subSection = getSectionContainer(e.target.parentElement)
    const currentLessons = subSection.querySelectorAll('li a')
    const currentLessonsArr = Array.from(currentLessons)
    if(intLetter < currentLessonsArr.length){
        currentLessonsArr[intLetter].focus()
    }
    if(letter == 's'){
        section.focus()
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
function getSubSection(parent){
    if(parent.classList.contains('sub-section')){
        return parent
    } else if(parent.parentElement){
        return getSubSection(parent.parentElement)
    }else{
        return null
    }
}