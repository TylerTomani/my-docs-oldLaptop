const dropResources = document.querySelectorAll('.dropResource')
const topics = document.querySelectorAll('.topic')
const topicsContainers = document.querySelectorAll('.topics-container')
function hideTopicsContainers(){
    topicsContainers.forEach(el => {
        if(!el.classList.contains('show')){

            el.classList.add('hide')        
        }
    })
}
hideTopicsContainers()

dropResources.forEach(el => {
    el.addEventListener('click', e => {
        toggleTopics(e)
    })
})

function toggleTopics(e){
    const resourceContainer = getResourceContainer(e.target.parentElement)
    const topicsContainer = resourceContainer.querySelector('.topics-container')
    if(topicsContainer.classList.contains('hide')){
        hideTopicsContainers()
        topicsContainer.classList.remove('hide')
    } else {
        topicsContainer.classList.add('hide')

    }
}

function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return getResource(parent.parentElement)
    } else {
        return null
    }
}
function getResourcesContainer(parent){
    if(parent.classList.contains('resources-container')){
        return parent
    } else if (parent.parentElement){
        return getResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}