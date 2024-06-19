const canvasId = document.getElementById('canvas')
const scripts = document.querySelectorAll('.script')
const arrScripts = Array.from(scripts)
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nxtBtn')
const copyCodeFirstMains = document.querySelectorAll('.code-container > .copy-code')
    const main = document.querySelector('main')
    let shiftS = []
    let scriptMoved = false
let currentIndex = 0
changeScript(1)
scripts.forEach(script => {
    if(!script.classList.contains('show')){
        script.classList.add('hide')
    }
})
function hideScripts(){
    scripts.forEach(script => {
        if(script.classList.contains('show')){
            script.classList.remove('show')
            script.classList.add('hide')
        } else {
            script.classList.add('hide')
        }
    })
}
prevBtn.addEventListener('click', e => {
    scrollTo(0,0)
    hideScripts()
    currentIndex -= 1
    if(currentIndex < 0){
        currentIndex = arrScripts.length - 1
    }
    changeScript(currentIndex)
});
nextBtn.addEventListener('click', e => {
    scrollTo(0,0)
    arrScripts[currentIndex].classList.remove('show')
    hideScripts()
    currentIndex += 1
    
    if(currentIndex >= arrScripts.length){
        currentIndex = 0
    }
    changeScript(currentIndex)
})

function changeScript(currentIndex){
    let codeTxt = arrScripts[currentIndex].querySelector('.code-container > .copy-code')
    let code = codeTxt.textContent.trim()
    let runCode = new Function(code)
    runCode()

    scripts.forEach((el,i,arr) =>{
        let preEl = arr[currentIndex]
        if(preEl.classList.contains('hide')){
            preEl.classList.remove('hide')
        }
    })
}
changeScript(currentIndex)
copyCodeFirstMains.forEach(el => {
    el.addEventListener('focusin',()  => {
        scrollTo(0,0)
    });
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    
    shiftS.unshift(letter)
    if(shiftS.length > 2){
        shiftS.pop()
    }
    if(shiftS[0] == 's' && shiftS[1] == 'shift'){
        if(!scriptMoved){
            main.style.display = 'flex'
            main.style.flexDirection = 'row'
            // scriptsSection.style.width = '100vw '
            // scriptsSection.style.flexBasis = '100%'
            scrollTo(0,0)
        } else {
            main.style.display = 'flex'
            main.style.flexDirection = 'column'
        }
        scriptMoved = !scriptMoved
    }
    
}); 