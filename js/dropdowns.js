const dropResources = document.querySelectorAll('.dropResource')
const topics = document.querySelectorAll('.topic')
const topicsContainers = document.querySelectorAll('.topics-container')
function hideTopics(){
    topics.forEach(el => {
        const topicsContainer = getTopicsContainer(el)
        if(!topicsContainer.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideTopics()

dropResources.forEach(el =>{
    el.addEventListener('click', e =>{
        const resourceContainer = getResourceContainer(e.target.parentElement)
        const topicsContainer = resourceContainer.querySelector('.topics-container')
        const topics = topicsContainer.querySelectorAll('.topic')
        toggleTopics(topics,topicsContainer)
    })
})
function toggleTopics(els,topicsContainer){
    els.forEach(el =>{
        console.log(topicsContainer)
        if(topicsContainer.classList.contains('show')){
            topicsContainer.classList.remove('show')
            // el.classList.toggle('hide')
        } 
        if(el.classList.contains('hide')){
            el.classList.remove('hide')
        } else {
            hideTopics()
            el.classList.add('hide')
        }
         
    })
}
function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}
function getTopicsContainer(parent){
    if(parent.classList.contains('topics-container')){
        return parent
    } else if (parent.parentElement){
        return getTopicsContainer(parent.parentElement)
    } else {
        return null
    }
}