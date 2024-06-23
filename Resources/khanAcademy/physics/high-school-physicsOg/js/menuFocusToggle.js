const homelink = document.getElementById('homelink')
export const asideMain = document.getElementById('asideMain')
const navMain = document.getElementById('navMain')
let asideShowing = true
asideMain.addEventListener('focus', e =>{
    scrollTo(0,0)
})
navMain.addEventListener('focus', e =>{
    scrollTo(0,0)
})
navMain.addEventListener('click', e =>{
    scrollTo(0,0)
    toggleAside()
})
navMain.addEventListener('keydown', e =>{
    let key = e.keyCode
    if(key === 13){   
        scrollTo(0,0)
        toggleAside()
    }
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'h'){
        homelink.focus()
    }
    if(letter == 'a'){
        asideMain.focus()
        if(!asideShowing){
            asideMain.classList.remove('hide')
        }
    }
    if(letter == 'n'){
        navMain.focus()
    }
});

function toggleAside(){
    if(!asideMain.classList.contains('hide')){
        asideMain.classList.add('hide')
        asideShowing = false
    } else {
        asideMain.classList.remove('hide')
        asideShowing = true
    }
}