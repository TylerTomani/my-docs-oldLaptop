const resources = document.querySelectorAll('.dropResource')
const topics = document.querySelectorAll('.topic')
let rFocus = true
let tFocus = false
let currentResourceFocus = false
let currentFocused 

addEventListener('DOMContentLoaded', e  => {
    const allIdEls = document.querySelectorAll('[id]')
    
    
});

resources.forEach(el => {
    el.addEventListener('focus', e => {
        rFocus = true
        tFocus = false
    })
})
topics.forEach(el => {
    el.addEventListener('focus', e => {
        // rFocus = false
        // tFocus = true
    })
})
addEventListener('keydown', e => {
    // console.log('rFocus', rFocus)
    // console.log('tFocus', tFocus)
    let letter = e.key.toLowerCase()
    if(letter == 'h'){
        const homelink = document.querySelector('#homelink')
        homelink.focus()
    }
    if(letter == 'b'){
        const backlink = document.querySelector('#backlink')
        backlink.focus()
    }
    if(rFocus){
        resourcesFocus(e,letter)
    }
    if (currentResourceFocus) {
        topicsFocus(e,letter)
    }    
});
function resourcesFocus(e,letter){
    if(isNaN(letter)){
        resources.forEach(el => {
            if(letter == el.id[0]){
                el.focus()
            }
            
        })
    } else if(!isNaN(letter)){
        const intlet = parseInt(letter)
        if(resources){
            resources[intlet - 1].focus()
        }
    }
    // console.log(resources[0])
}
function topicsFocus(e,letter){
    // When dropResource has focus, allow numbers to focus to numbered topic
    // console.log(currentFocused)
    const rContainer = getResourceContainer(e.target.parentElement)
    if(rContainer){
        const topics = rContainer.querySelectorAll('.topics-container > .topic')
        if (!isNaN(letter)) {
            const intLet = parseInt(letter)
            console.log(intLet)
            if (topics && !topics[intLet - 1].classList.contains('hide') 
                && intLet <= topics.length){
                topics[intLet - 1].focus()
            }
            
        }
    }

}
resources.forEach(el => {
    // add focus listener, when currentResourceFocus is true, num pad goes to numbered topic
    el.addEventListener('focusin', e =>{
        currentResourceFocus = true
        currentFocused = e.target

    })
})

function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}