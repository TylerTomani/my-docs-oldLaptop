const groups = document.querySelectorAll('.group')
const subGroups = document.querySelectorAll('.sub-group')
const dropGroups = document.querySelectorAll('.group > .drop')
const dropSubGroups = document.querySelectorAll('.sub-group > .drop')

function hideGroupItems(){
    groups.forEach(el => {
        const groupItems = el.querySelector('.group-items')
        if(groupItems){
            if(!groupItems.classList.contains('hide')){
                groupItems.classList.add('hide')                
            }
        }
    })
}
function hideSubGroupsDrops(){
    subGroups.forEach(el => {
        const subDrop = el.querySelector('.drop')
        if(subDrop){
            if(!subDrop.classList.contains('hide')){
                subDrop.classList.add('hide')
            }
        }
    })
}
function hideSubGroupItems() {
    subGroups.forEach(el => {
        const subGroupItems = el.querySelector('.sub-group-items')
        if(subGroupItems){
            if(!subGroupItems.classList.contains('hide')){
                subGroupItems.classList.add('hide')
            }
        }
    })
}
hideGroupItems()
hideSubGroupsDrops()
hideSubGroupItems()
dropGroups.forEach(el => {
    el.addEventListener('click', e => {
        const group = getGroup(e.target.parentElement)
        const groupItems = group.querySelector('.group-items') 
        if(groupItems){

            if(groupItems.classList.contains('hide')){
                groupItems.classList.remove('hide')
            } else {
                groupItems.classList.add('hide')
            }
        }

        const subGroups = group.querySelectorAll('.sub-group')
        if(subGroups){
            subGroups.forEach(subGroup => {
                const subDrop = subGroup.querySelector('.drop')
                if(subDrop.classList.contains('hide')){
                    toggleItems(subDrop)
                }                
            })
        }
    })
})

dropSubGroups.forEach(el => {
    el.addEventListener('click',e => {
        console.log(e.target)
        const subGroup = getSubGroup(e.target.parentElement)
        const subGroupItems = subGroup.querySelector('.sub-group-items')
        toggleItems(subGroupItems)
    })
})

function toggleItems(el){
    if(el.classList.contains('hide')){
        el.classList.remove('hide')
    } else{
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