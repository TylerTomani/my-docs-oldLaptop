const canvasId = document.getElementById('canvas')
const scripts = document.querySelectorAll('.script')
const arrScripts = Array.from(scripts)
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nxtBtn')
const copyCodeFirstMains = document.querySelectorAll('.code-container > .copy-code')
const main = document.querySelector('main')
let shiftS = []
let scriptMoved = false
let currentScript ,preEl
let currentIndex = 0
const copyCodesInner = document.querySelectorAll('.copy-code > .copy-code')
const explainerContainer = document.querySelector('.explainer-container')
changeScript(1)
scripts.forEach(script => {
    if(script.classList.contains('show')){
        currentScript = script
        preEl = script
    }
    if(!script.classList.contains('show')){
        script.classList.add('hide')
    }
})
function hideScripts(){
    scripts.forEach(script => {
        if(!script.classList.contains('show')){
            script.classList.add('hide')
        } else {
            script.classList.add('hide')
        }
    })
}
// hideScripts()
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
    e.preventDefault()
    scrollTo(0,0)
    arrScripts[currentIndex].classList.remove('show')
    hideScripts()
    currentIndex += 1
    
    if(currentIndex >= arrScripts.length){
        currentIndex = 0
    }
    changeScript(currentIndex)
})

console.log(currentIndex)
function changeScript(currentIndex){
    switch(currentIndex){
        case 0:
            explainerContainer.innerHTML = `
                <p>
                    Use keys below to move player and shoot enemies, don't let more than 10 off the screen
                </p>
                <div class="fc controls-container">
                    <div class="fi movement-controls">
                        <h3>movement</h3>
                        <ul>
                            <li>a - left</li>
                            <li>w - up</li>
                            <li>d - right</li>
                            <li>s - down</li>
                        </ul>
                    </div>
                    <div class="fi shooting-controls">
                        <h3>projectiles</h3>
                        <ul>
                            <li>j-  left</li>
                            <li>u - top-left 3&pi;/4</li>
                            <li>i - up</li>
                            <li>d - top-right &pi;/4</li>
                            <li>s - down</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Press "Next" button to go to the scrips step by
                    
                `
            break
        case 1:
            explainerContainer.innerHTML = `
                <p>
                    Code draws the player only 
                </p>
                <p>
                    Press tab to go to parts of script
                </p>
                <p>
                    Press "⌘" + "C" to copy code
                </p>
                <p>
                    Press "N" for Next
                    <br>
                    Press "p" for Previous
                </p>
            `  
            break
        case 2:
            explainerContainer.innerHTML = `
                <p>
                    <span class="dy-txt">Click</span> with the 
                    <span class="dy-txt">Mouse</span> on the screen's canvas
                    element to shoot projectiles
                </p>
                    
            `
            break
        case 3:
            explainerContainer.innerHTML = `
                <p>
                    Use the <span class="dy-txt">j</span>,
                    <span class="dy-txt">u</span>,
                    <span class="dy-txt">i</span>,
                    <span class="dy-txt">o</span>,
                    <span class="dy-txt">l</span>,
                    <span class="dy-txt">k</span>,
                     keys to shoot projectiles at different angles
                </p>
                 <div class="fc controls-container">

                    <div class="fi shooting-controls">
                        <h3 class="">Projectiles</h3>
                        <ul>
                            <li>j-  left</li>
                            <li>u - top-left 3&pi;/4</li>
                            <li>i - up</li>
                            <li>d - top-right &pi;/4</li>
                            <li>s - down</li>
                        </ul>
                    </div>
                </div>   
            `
            break
        case 4:
            explainerContainer.innerHTML = `
                <p>
                    Use the j,u,i,o,l,k keys to shoot projectiles at different angles
                </p>
                 <div class="fc controls-container">
                    <div class="fi movement-controls">
                        <h3>movement</h3>
                        <ul>
                            <li>a - left</li>
                            <li>w - up</li>
                            <li>d - right</li>
                            <li>s - down</li>
                        </ul>
                    </div>
                    <div class="fi shooting-controls">
                        <h3>projectiles</h3>
                        <ul>
                            <li>j-  left</li>
                            <li>u - top-left 3&pi;/4</li>
                            <li>i - up</li>
                            <li>d - top-right &pi;/4</li>
                            <li>s - down</li>
                        </ul>
                    </div>
                </div>   
            `
            break
    }
    let codeTxt = arrScripts[currentIndex].querySelector('.code-container > .copy-code')
    let code = codeTxt.textContent.trim()
    let runCode = new Function(code)
    runCode()
    hideScripts()
    scripts.forEach((el,i,arr) =>{
        preEl = arr[currentIndex]
        if(preEl.classList.contains('hide')){
            preEl.classList.remove('hide')
        }
    })

    
}
changeScript(currentIndex)
copyCodeFirstMains.forEach(el => {
    el.addEventListener('focus',()  => {
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
        let copyCode = document.querySelector('.copy-code')
        if(!scriptMoved){
            main.style.display = 'flex'
            main.style.flexDirection = 'row'
            scrollTo(0,0)       
        } else {
            main.style.display = 'flex'
            main.style.flexDirection = 'column'
        }
        copyCode.focus()
        scriptMoved = !scriptMoved
    }
    if(letter <= 9){
        currentIndex = parseInt(letter)
        if(typeof(letter == 'number')){

            let currentScript = arrScripts[currentIndex]
            currentScript.focus()
            console.log(currentScript)
        }
        changeScript(currentIndex)
        preEl = arrScripts[currentIndex]
    }
}); 

copyCodesInner.forEach(el => {
    el.addEventListener('focusin', e => {
        e.target.focus()
        // console.log(e.target)
        e.target.scrollIntoView({ block: "end", inline: "nearest" });
        if(e.target.classList.contains('long-code')){
            e.target.scrollIntoView({ block: "start", inline: "nearest" });
        }
    });

});