const dropTopics = document.querySelectorAll('.dropTopic')
const subTopics = document.querySelectorAll('.sub-topics')

subTopics.forEach(subTopic => {
    if(!subTopic.classList.contains('show')){
        subTopic.classList.add('hide')
        const topics = subTopic.querySelectorAll('ul > li > a.topic')
        hideTopics(topics)
    } 
})

dropTopics.forEach(resource => {
    resource.addEventListener('click', e => {
        console.log('kljd')
        e.preventDefault()
        let topicContainer = getTopicContainer(e.target.parentElement)
        console.log(topicContainer)
        const subTopics = topicContainer.querySelector('.sub-topics')            
        toggleSubResourcesContainer(subTopics)
    })
    resource.addEventListener('keydown', e => {
        let key = e.keyCode 

        if(key === 13){
            let topicContainer = getTopicContainer(e.target.parentElement)
            const subTopics = topicContainer.querySelector('.sub-topics')            
            toggleSubTopics(subTopics)
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

function toggleSubTopics(container){
    const topics = container.querySelectorAll('.sub-topics > ul > li > a.topic')
    if(container){
        if(container.classList.contains('hide')){
            container.classList.remove('hide')
            showTopics(topics)

        }else {
            container.classList.add('hide')
            hideTopics(topics)
        }
    }
}
/*  The code below is redundant but it works until i figure out a better way to 
not add hidden elements inside letterElsArr in the letterFocus-resource.js script*/
function hideTopics(els){
    els.forEach(el=>{
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
function showTopics(els){
    els.forEach(el=>{
        if(el.classList.contains('hide')){
            el.classList.remove('hide')
        }
    })
}
