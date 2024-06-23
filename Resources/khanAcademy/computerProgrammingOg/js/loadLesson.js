const lessons = document.querySelectorAll(".lesson")
const iframe = document.querySelector('iframe')

lessons.forEach(lesson =>{
    lesson.addEventListener("click", e =>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.href)
        iframe.src = e.target.href
        iframe.focus()
        window.scroll(0,0)
    })
})