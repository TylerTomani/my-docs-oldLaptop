const subUnits = document.querySelectorAll('.sub-unit')

function hideLessons(){
    subUnits.forEach(subunit => {
        const parent = subunit.parentElement
        let lessons = parent.querySelectorAll(".lessons-list");
        lessons.forEach(lesson => {
            lesson.classList.add('hide')
        })
    })
}
hideLessons()


subUnits.forEach(subunit => {
    subunit.addEventListener('click', e => {
        const parent = subunit.parentElement
        let lessons = parent.querySelector(".lessons-list");
        if(lessons.classList.contains("hide")){
            hideLessons()
            lessons.classList.remove("hide")
        } else {
            lessons.classList.add("hide")
        }
        

    })
})