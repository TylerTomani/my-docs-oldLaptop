const chapterLinks = document.querySelectorAll(".chapter-link");
const lessons = document.querySelectorAll(".chapter > ul > li > a")
const subLessonsLink = document.querySelectorAll(".sub-lessons-link")

const subLessons = document.querySelectorAll(".chapter > ul > li > ul > li > a")


const chapterDisplay = document.querySelector(".chapter-display")
const lessonDisplay = document.querySelector(".lesson-display")

const iframe = document.querySelector('iframe')

// Hide lessons
function hideChapters(){
    chapterLinks.forEach(link => {
        let parent = link.parentElement;
        let lessonUl = parent.querySelector('ul');
        if(!lessonUl.classList.contains('hide')){
            lessonUl.classList.add('hide')
        }
    })
}
hideChapters();
// Toggle Lessons Display
chapterLinks.forEach(link => {
    link.addEventListener('click', e => {
        let parent = link.parentElement;
        let lessonUl = parent.querySelector('ul');
        if(lessonUl.classList.contains('show')){
            lessonUl.classList.remove('show')
            lessonUl.classList.add('hide')
        } else if(lessonUl.classList.contains('hide')){
            hideChapters()
            hideSubLessons();
            lessonUl.classList.remove('hide')
        } else {
            lessonUl.classList.add('hide')
        }
        e.preventDefault();

    })
})
// Hide Sub lessons
function hideSubLessons(){
    subLessonsLink.forEach(link => {
        let parent = link.parentElement;
        let lessonUl = parent.querySelector('ul');
        if(!lessonUl.classList.contains('hide')){
            lessonUl.classList.add('hide')
        }
    })
}
hideSubLessons();
// Toggle Sub Lessons 
let loadSubToggle = false
subLessonsLink.forEach(link => {
    link.addEventListener('click', e => {
        if(!loadSubToggle){
            loadSubToggle = true

        }
        
        let parent = link.parentElement;
        let lessonUl = parent.querySelector('ul');
        if(lessonUl.classList.contains('show')){
            lessonUl.classList.remove('show')
            lessonUl.classList.add('hide')
        } else if(lessonUl.classList.contains('hide')){
            hideSubLessons()
            lessonUl.classList.remove('hide')
        } else {
            lessonUl.classList.add('hide')
        }
        if(e.target.classList.contains("open-sub-page")){
            iframe.src = e.target.href
        }
    })
})
// Load Lessons
let selectArray = []
let currentLesson = ''
lessons.forEach(lesson => {

   
        
    // REMOVE THIS WHEN NOT WORKING ON SITE
        // if(lesson.hasAttribute('autofocus')){
        //     iframe.src = lesson.href

        // }
    /////////////////////////////////////
    lesson.addEventListener('click', e => {
        if(e.target.classList.contains('sub-lessons-link')){
            e.preventDefault()

        } else {
        hideSubLessons()
        e.preventDefault()
        e.stopPropagation()
        iframe.src = e.target.href
// Fill Chapter Lesson Display 
        let greatGrandParent = e.target.parentElement.parentElement.parentElement
        let chapterText = greatGrandParent.querySelector('.chapter-link').innerText
        chapterDisplay.innerText = chapterText
        lessonDisplay.innerHTML = "&rarr; " + e.target.innerText
        
        selectArray.unshift(e.target.innerText)
        if(selectArray.length > 2){
            selectArray.pop()
        }
        if(selectArray[0] === selectArray[1]){
            iframe.focus()

            currentLesson = e.target
        } 
        }
    })
})
// Load Sub Lessons
subLessons.forEach(lesson => {
    // REMOVE THIS WHEN NOT WORKING ON SITE
        if(lesson.hasAttribute('autofocus')){
            iframe.src = lesson.href

        }
    /////////////////////////////////////
    let code = lesson.querySelector('code')
    lesson.addEventListener('click', e => {
        if(e.target.classList.contains('sub-lessons-link')){
            e.preventDefault()
        } else {
        e.preventDefault()
        e.stopPropagation()
        iframe.src = e.target.href
// Fill Chapter Lesson Display 
        let greatGrandParent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
        let chapterText = greatGrandParent.querySelector('.chapter-link').innerText
        chapterDisplay.innerText = chapterText
        lessonDisplay.innerHTML = "&rarr; " + e.target.innerText

        
        selectArray.unshift(e.target.innerText)
        if(selectArray.length > 2){
            selectArray.pop()
        }
        if(selectArray[0] === selectArray[1]){
            iframe.focus()

            currentLesson = e.target
        } 
        }
        
    })
})
// Specific just-drop lesson links  have sub lessons but also a page that can be tabbed to
const justDrops = document.querySelectorAll(".just-drop")
justDrops.forEach(drop => {
    
    drop.addEventListener('click', e => {
        let parent = drop.parentElement
        let ul = parent.querySelector('ul')

        if(ul.classList.contains('show')){
            ul.classList.remove('show')
            ul.classList.add('hide')
        } else if (ul.classList.contains('hide')) {
            ul.classList.remove('hide')
        } else {
            ul.classList.add('hide')

        }
        let gparent = parent.parentElement
        let lesson  = gparent.querySelector('li a ')
        currentLesson = lesson
    })
    iframe.addEventListener('focusout', e => {
        currentLesson.focus()

    } )    
})

// Chapter number selection
addEventListener('keydown', ({key}) => {
    chapterLinks.forEach(chapter => {
        chapId = chapter.id.slice(2,3)
        if(chapId == key){
            chapter.focus()
        }

    })
})
