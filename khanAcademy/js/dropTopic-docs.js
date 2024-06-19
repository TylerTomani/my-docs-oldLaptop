const dropTopics = document.querySelectorAll('.dropTopic')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')

subResourcesContainers.forEach(subResourcesContainer => {
    if(!subResourcesContainer.classList.contains('show')){

        subResourcesContainer.classList.add('hide')
    } 
})

dropTopics.forEach(resource => {
    resource.addEventListener('click', e => {
        console.log('kljd')
        e.preventDefault()
        let resourceContainer = getTopicContainer(e.target.parentElement)
        console.log(resourceContainer)
        const subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')            
        toggleSubResourcesContainer(subResourcesContainer)
    })
    resource.addEventListener('keydown', e => {
        let key = e.keyCode 
        console.log('jkdjf')
        if(key === 13){
            let resourceContainer = getTopicContainer(e.target.parentElement)
            console.log(resourceContainer)
            const subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')            
            toggleSubResourcesContainer(subResourcesContainer)
        }
        
    })
})
// domu shortcut for 'dom up' get container
function getTopicContainer(parent){
    if(parent.classList.contains('topic-container')){
        return parent
    } else if (parent.parentElement){
        return getTopicContainer(parent.parentElement)
    } else {
        return null
    }
}

function toggleSubResourcesContainer(container){
    if(container){
        if(container.classList.contains('hide')){
            container.classList.remove('hide')
        }else {
            container.classList.add('hide')
        }
    }
}