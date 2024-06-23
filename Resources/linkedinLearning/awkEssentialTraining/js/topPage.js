const lessonHeader = document.querySelector('.lesson-header')

addEventListener('keypress', e => {
    let key = e.key.toLowerCase()
    if(key === 'h' || key === 'p'){
         lessonHeader.focus()
    }
    
})