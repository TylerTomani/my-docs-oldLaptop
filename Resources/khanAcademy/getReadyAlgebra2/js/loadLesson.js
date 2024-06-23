const lessons = document.querySelectorAll(".unit > li > ul > li")
const units = document.querySelectorAll(".unit > li > a")
const iframe = document.querySelector("iframe")

function hideLessons() {
    lessons.forEach(lesson => {
        lesson.classList.add("hide")
    })
}
// hideLessons();

// Toggle Units
units.forEach(unit => {
    unit.addEventListener("click", toggleUnits)
})
// Load Lesson

lessons.forEach(lesson => {
    lesson.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target)
        iframe.src = e.target.href

    })
})




function toggleUnits(e){
       e.stopPropagation()
       let parent = e.target.parentNode;
       let lessons = parent.querySelector("ul > li")
       if(!lessons.classList.contains("hide")){
           lessons.classList.add("hide")
       } else {
            hideLessons();
           lessons.classList.remove("hide")
       }
}
