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
    el.addEventListener('click', e => {
        toggleTopics(e)
    })
    el.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'enter'){   
            toggleTopics(e)
        }
    })
})
topics.forEach(el => {
    el.addEventListener('focus', e => {
        // rFocus = false
        // tFocus = true
    })
})
function resourcesFocus(e,letter){
    if(isNaN(letter)){
        resources.forEach(el => {
            if(letter == el.id[0]){
                el.focus()
            }
        })
    } else if(!isNaN(letter) && !currentResourceFocus){
        const intLet = parseInt(letter)
        if(resources.length >= 0 && intLet > 0){
            resources[intLet - 1].focus()
        }
    }
    // console.log(resources[0])
}
function topicsFocus(e,letter){
    // When dropResource has focus, allow numbers to focus to numbered topic
    const rContainer = getResourceContainer(e.target.parentElement)
    if(rContainer){
        const topics = rContainer.querySelectorAll('.topics-container > .topic')
        if (!isNaN(letter)) {
            const intLet = parseInt(letter)
            if(intLet){
                if (topics && !topics[intLet - 1].classList.contains('hide') 
                    ){
                        // console.log(rContainer)
                        console.log(topics[intLet-1])
                    topics[intLet - 1].focus()
                }
            }
        }
    }
}
function toggleTopics(e){
    const resourceContainer = getResourceContainer(e.target.parentElement)
    const topicsContainer = resourceContainer.querySelector('.topics-container')
    const topics = topicsContainer.querySelectorAll('.topic')
    if(topicsContainer.classList.contains('hide')){
        topicsContainer.classList.remove('hide')
    } else {
        topicsContainer.classList.add('hide')
    }
    topics.forEach(el => {
        if(el.classList.contains('hide')){
            el.classList.remove('hide')
        } else {
            el.classList.add('hide')
        }
    })
}
resources.forEach(el => {
    // add focus listener, when currentResourceFocus is true, num pad goes to numbered topic
    el.addEventListener('focus', e =>{
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
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    switch (letter) {
        case 'h':
            const homelink = document.querySelector('#homelink')
            homelink.focus()
            break
        case 'b':
            const backlink = document.querySelector('#backlink')
            backlink.focus()
            break
        case 't':
            const tutorialLink = document.querySelector('#tutorialLink')
            tutorialLink.focus()
            break
    }
    if (rFocus) {
        resourcesFocus(e, letter)
    }
    if (currentResourceFocus) {
        topicsFocus(e, letter)
    }
});