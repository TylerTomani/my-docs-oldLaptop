export const navMain = document.getElementById('navMain')
export const asideMain = document.getElementById('asideMain')
export const mainTargetDivContainer = document.getElementById('mainTargetDivContainer')

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    
    if(letter == 'n'){
        navMain.focus()
        scrollTo(0,0)
    }
    if(letter == 'm'){
        mainTargetDivContainer.focus()
        scrollTo(0,0)
    }
    if(letter == 'a'){
        asideMain.focus()
        asideMain.classList.add('addOrangeBoxShadowAside')
        scrollTo(0,0)
    } else {
        asideMain.classList.remove('addOrangeBoxShadowAside')   
    }

});



navMain.addEventListener('keydown', e => {
    let key = e.keyCode
    if(key === 13){        
        console.log(e.target)
        toggleAside()
    }
})
navMain.addEventListener('click', e => {
    e.preventDefault()
    let key = e.keyCode
    toggleAside()
})
navMain.addEventListener('mouseenter', e => {
    if(asideMain.classList.contains('hide')){
        asideMain.classList.remove('hide')
    }
})
function toggleAside(){
    if(!asideMain.classList.contains('hide')){
        asideMain.classList.add('hide')
    } else {
        asideMain.classList.remove('hide')
    }
}