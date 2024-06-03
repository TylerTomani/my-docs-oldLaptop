const dropResources = document.querySelectorAll('.dropResource')


dropResources.forEach(el => {
    el.addEventListener('click',e => {
        toggleTopics(e)
    })
})

function toggleTopics(e){
    const el = e.target
    const parent = getResourceContainer(el)
    const topicsContainer = parent.querySelector('.topics-container')

    if(!topicsContainer.classList.contains('hide')){
        topicsContainer.classList.add('hide')
    } else {
        topicsContainer.classList.remove('hide')
    }


}


function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if(parent.parentElement){
        return getResourceContainer(parent.parentElement)
    }else{
        return null
    }
}