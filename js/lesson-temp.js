export  function attachLessonScript(){
    const stepTxts = document.querySelectorAll('.step-txt') ? document.querySelectorAll('.step-txt') : null
        stepTxts.forEach(el => {
            el.addEventListener('click', e => {
                console.log(e.target)
        
            })
            el.addEventListener('focus', e => {
                console.log(e.target)
        
            })
        })
}