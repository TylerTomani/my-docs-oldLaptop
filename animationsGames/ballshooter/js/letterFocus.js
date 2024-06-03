(function(){
    const canvas = document.getElementById('canvas')
    const allEls = document.querySelectorAll('body *')
    const nextBtn = document.getElementById('nxtBtn')
    const prevBtn = document.getElementById('prevBtn')
    const homeLink = document.getElementById('homelink')
    const tutorialLink = document.getElementById('tutorialLink')
    const copyCArr =[]
    const keysFocused = {
    cmd :{
        pressed : false
    }
}
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let id
    if(letter == 'meta'){
        keysFocused.cmd.pressed = true
    }
    
    if(keysFocused.cmd.pressed){
        return
    } else {
        if(letter == 'n'){
            window.scrollTo(0,0)
            nextBtn.focus()
        }
        if(letter == 'p'){
            window.scrollTo(0,0)
            prevBtn.focus()
        }
        if(letter == 't'){
            window.scrollTo(0,0)
            tutorialLink.focus()
        }
        
        
        if(letter == 'c'){
                window.scrollTo(0,0)
                canvas.focus()
                
            }
    }
        if(letter == 'h'){
            console.log('p')
            window.scrollTo(0,0)
            homelink.focus()
        }
});
addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'meta'){
        keysFocused.cmd.pressed = false
    }
})
}())