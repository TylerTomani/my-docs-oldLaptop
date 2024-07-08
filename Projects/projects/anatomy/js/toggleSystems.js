const skeletalSystemBtn = document.getElementById('skeletalSystemBtn')
const nervousSystemBtn = document.getElementById('nervousSystemBtn')
const muscularSystemBtn = document.getElementById('muscularSystemBtn')
const systems = document.querySelectorAll('.system')
const dropGroups = document.querySelectorAll('.group > .drop')
const dropSubGroups = document.querySelectorAll('.sub-group > .drop')
const groupItems = document.querySelectorAll('.group-items')
const subGroups = document.querySelectorAll('.sub-group')
const subGroupsItems = document.querySelectorAll('.sub-group-items')
systems.forEach(el => {
    if(!el.classList.contains('show')){
        el.classList.add('hide')
    }
})
function hideSystems(){
    systems.forEach(el => {
        if(el.classList.contains('show')){
            el.classList.remove('show')
            el.classList.add('hide')
        }
        el.classList.add('hide')
    })
}

function hideGroupItems(){
    groupItems.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
function hideSubGroups(){
    subGroups.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
function hideSubGroupsItems(){
    subGroupsItems.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
hideGroupItems()
hideSubGroups()
hideSubGroupsItems()
skeletalSystemBtn.addEventListener('click',e => {
    const skeletalSystem = document.querySelector('#skeletalSystem')
    console.log(skeletalSystem)
    hideSystems()
    if(skeletalSystem.classList.contains('hide')){
        skeletalSystem.classList.remove('hide')
    }
})
nervousSystemBtn.addEventListener('click',e => {
    const nervousSystem = document.querySelector('#nervousSystem')
    hideSystems()
    console.log(nervousSystem)
    if(nervousSystem.classList.contains('hide')){
        nervousSystem.classList.remove('hide')
    }
})
muscularSystemBtn.addEventListener('click',e => {
    const muscularSystem = document.querySelector('#muscularSystem')
    console.log(muscularSystem)
    hideSystems()
    if(muscularSystem.classList.contains('hide')){
        muscularSystem.classList.remove('hide')
    }
})
dropGroups.forEach(el => {
    el.addEventListener('click', e => {
        const group = getGroup(e.target.parentElement)
        const groupItems = group.querySelector('.group-items')
        if(groupItems){
            toggleItems(groupItems)
        }
        const subGroups = group.querySelectorAll('.sub-group')
        subGroups.forEach(el =>{
            console.log(el)
            if(el.classList.contains('hide')){
                el.classList.remove('hide')
            } else {
                el.classList.add('hide')

            }
        })
    })
})
dropSubGroups.forEach(el =>{
    el.addEventListener('click', e => {
        const subGroup = getSubGroup(e.target.parentElement)
        const subGroupItems = subGroup.querySelector('.sub-group-items')
        toggleItems(subGroupItems)
    })
})

function toggleItems(el){
    if(el.classList.contains('hide')){
        el.classList.remove('hide')
    } else {
        el.classList.add('hide')
    }
}

function getGroup(parent){
    if(parent.classList.contains('group')){
        return parent
    } else if (parent.parentElement){
        return getGroup(parent.parentElement)
    } else {
        return null
    }
}
function getSubGroup(parent){
    if(parent.classList.contains('sub-group')){
        return parent
    } else if (parent.parentElement){
        return getSubGroup(parent.parentElement)
    } else {
        return null
    }
}