const sidebarLink = document.getElementById("sidebarLink")
const sideMenu = document.getElementById("sideMenu")
let currentWidth = ''
const iframeFocus = document.querySelector('iframe')
addEventListener("DOMContentLoaded", e => {
    currentWidth = innerWidth
    console.log(currentWidth)
    toggleSideBar()
})

addEventListener("resize", e => {
    currentWidth = innerWidth
    console.log(currentWidth)
    toggleSideBar()
})

sidebarLink.addEventListener("click", e => {
    // let body = e.target.parentElement
    console.log(sideMenu)
    if(!sideMenu.classList.contains("hide") ){
        sideMenu.classList.add("hide")
    } else {
        sideMenu.classList.remove("hide")
    }    
})


function toggleSideBar(){
    if(currentWidth < 830){
        sideMenu.classList.add("hide")
    } else {
        sideMenu.classList.remove("hide")
    }
}

sidebarLink.addEventListener("mouseover", e => {
    if(currentWidth < 830){
        sideMenu.classList.remove('hide')
        sideMenu.classList.add('absolute')
        sideMenu.style.background = "white"
    }
})
sidebarLink.addEventListener("focusin", e => {
    if(currentWidth < 830){
        sideMenu.classList.remove('hide')
        sideMenu.style.background = "white"
    } else if (currentWidth < 550){
        sideMenu.classList.remove('hide')
        sideMenu.classList.add('absolute')
        sideMenu.style.background = "white"
    } else {
        sideMenu.classList.remove("absolute")
    }
})

sideMenu.addEventListener("mouseover", e => {
    if(currentWidth < 830){
        sideMenu.classList.remove('hide')
    }
})
sideMenu.addEventListener("mouseout", e => {
    if(currentWidth < 830){
        sideMenu.classList.add('hide')
    }
})


iframeFocus.addEventListener("focusin", () => {
    if(currentWidth < 830){
        sideMenu.classList.add("hide")
    }
})