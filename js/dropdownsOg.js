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
        e.preventDefault()
        toggleTopics(e)
    })
    
})

function toggleTopics(e){
    const resourcesContainer = getResourcesContainer(e.target.parentElement)
    const resourceContainer = getResourceContainer(e.target.parentElement)
    const topicsContainer = resourceContainer.querySelector('.topics-container')
    console.log(topicsContainer)
    if(topicsContainer.classList.contains('hide')){
        resourcesContainer.classList.add('fcol')
        resourceContainer.classList.add('mtop-2')
        hideTopicsContainers()
        if(topicsContainer.classList.contains('show')){
            topicsContainer.classList.remove('show')
        }
        topicsContainer.classList.remove('hide')
    } else {
        topicsContainer.classList.add('hide')
        resourcesContainer.classList.remove('fcol')
        resourceContainer.classList.remove('mtop-2')

    }
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
function getResourcesContainer(parent){
    if(parent.classList.contains('resources-container')){
        return parent
    } else if (parent.parentElement){
        return getResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}