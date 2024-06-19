const unitLinks = document.querySelectorAll(".unit-link");
const iframe = document.querySelector("iframe")
const sideMenu = document.querySelector("aside")
const unitDisplay = document.querySelector(".unit-display")
const lessonDisplay = document.querySelector(".lesson-display")


const dropArrow = document.querySelector(".drop-arrow")
let currentWidth = 0;
let queryWidth = 670
let widthArray = [];
// Hide lessons
function hideLessons(){
    unitLinks.forEach(unit => {
        const parent = unit.parentElement
        const lessonsUl = parent.querySelectorAll("ul.lessons ")
        
        lessonsUl.forEach(lessons => {
            lessons.classList.add("hide")
        })
    })
}
hideLessons();
// Toggle lessons
unitLinks.forEach(unitLink => {
        unitLink.setAttribute("tabindex",1)
        const parent = unitLink.parentElement
        const lessons = parent.querySelector("ul.lessons ")
        
        unitLink.addEventListener("click", e => {
            let lesson = lessons.querySelectorAll("li a")
            unitDisplay.innerText = e.target.innerText.slice(0, 7)             
            if(lessons.classList.contains("hide")){
                hideLessons()
                lessons.classList.remove("hide"); 
            }else { 
                // NOt sure how to remove "show" id
                // unitLink.removeAttribute('#show')
                lessons.classList.add('hide')
            }
            // This ensures each lesson within unit is "tab-able"
            lesson.forEach(addTabindex => {
                addTabindex.setAttribute("tabindex",1)
            })
            window.scroll(0,0)
        })
})

// load lessons
let tabReady = false; // This variable allows focus to go to iframe if tab is pressed on lesson link
let shiftTab = [] // Fill array with keycode, if shift and tab are pressed tabready = false
unitLinks.forEach(unit => {
    const parent = unit.parentElement
    const parentUlLiA = parent.querySelector("li a")
    const lessons = parent.querySelectorAll("ul.lessons > li > a")
    let selectedLesson = '';
    lessons.forEach(lesson => {
        lesson.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            selectedLesson = e.target.href
            iframe.src = selectedLesson
            tabReady = true // tab is ready to be pressed and bring focus to iframe
            let lessonString = e.target.innerText 
            let lessonSlice = lessonString.slice(2,lessonString.length)
            unitDisplay.innerText = parentUlLiA.innerText.slice(0,7)
            // console.log(e.target.parentElement)
            lessonDisplay.innerText = lessonSlice
            window.scroll(0,0)
        })
        // keydown listener waits for tab to be pressed and brings focus to iframe
        lesson.addEventListener("keydown",({keyCode}) => {
            shiftTab.push(keyCode)
            // console.log(shiftTab)
            if(shiftTab.length > 1){
                shiftTab.pop()
            }
            // not working properly but good enought for now
            if(shiftTab[0] === 13 && shiftTab[1] === 9){
                tabReady = false
                lesson.parentElement.focus()
            }
            // console.log("tabReady")
            if(keyCode === 9 && tabReady){
                iframe.focus()
                tabReady = !tabReady
            }
        })
    })
})

// Media queries control sideMenu



addEventListener("DOMContentLoaded", e => {
    currentWidth = innerWidth
    if(currentWidth < queryWidth && iframe.src === ''){
        sideMenu.classList.remove('hide')
        
    }
    if(sideMenu.classList.contains('hide')){
        iframe.focus()
    }
    // if(currentWidth > queryWidth){
    //     sideMenu.classList.remove('hide')
    // } else {
    //     sideMenu.classList.add('hide')
    // }
    
    
    

})

function toggleAside(){
    if(sideMenu.classList.contains("hide")){
        sideMenu.classList.remove('hide')
        dropArrow.innerHTML = "&#9654;" + unitDisplay.innerHTML
    } else {
        
        dropArrow.innerHTML = "&#9660" + unitDisplay.innerHTML
        sideMenu.classList.add('hide')
    }
}
dropArrow.addEventListener("click", toggleAside)
dropArrow.addEventListener("keydown", ({keyCode}) => {
    if(keyCode === 13){
        toggleAside();
    }
})
dropArrow.addEventListener("focusin", e => {
    if(currentWidth < queryWidth){
        sideMenu.classList.remove('hide')
        dropArrow.innerHTML = "&#9654;" + unitDisplay.innerHTML
    }
})
dropArrow.addEventListener("mouseover", e => {

        sideMenu.classList.remove('hide')
        dropArrow.innerHTML = "&#9654;" + unitDisplay.innerHTML

})








addEventListener("resize", e => {
    currentWidth = innerWidth;
    
    if(currentWidth < queryWidth){
        sideMenu.classList.add('hide')
        dropArrow.innerHTML = '&#9660;' + unitDisplay.innerHTML
        
    } else {
        sideMenu.classList.remove('hide')
    }
    if(sideMenu.classList.contains('hide')){
        iframe.focus()
    }
   
})

iframe.addEventListener("focusin", e => {
    if(currentWidth < queryWidth){

        sideMenu.classList.add('hide')
        dropArrow.innerHTML = "&#9660;" + unitDisplay.innerHTML
    }
    // iframe.style.marginLeft = "5rem"
    iframe.style.width = "100vw"
    iframe.focus()  
})
addEventListener("DOMContentLoaded", e => {
    if(currentWidth < queryWidth){

        sideMenu.classList.add('hide')
        dropArrow.innerHTML = "&#9660;" + unitDisplay.innerHTML
    }
    // iframe.style.marginLeft = "5rem"
    iframe.style.width = "100vw"
    iframe.focus()  
})
iframe.addEventListener("mouseenter", e => {
    if(currentWidth < queryWidth){

        sideMenu.classList.add('hide')
        dropArrow.innerHTML = "&#9660;" + unitDisplay.innerHTML
    }
})

