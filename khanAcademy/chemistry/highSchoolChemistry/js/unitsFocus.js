const unit01 = document.getElementById('unit01')
export const units = document.querySelectorAll('.unit')
export const subunits = document.querySelectorAll('.sub-unit')
export const lessons = document.querySelectorAll('ul.lessons-container > li > a')


let unitFocus = true
let subunitsFocus = false

//////////// units & sub-units
units.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        // let unitContainer = getUnitContainer(e.target.parentElement)
    });
    el.addEventListener('focus', e  => {
        unitFocus = true
        subunitsFocus = false
        
    });
})
subunits.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        // let subUnitsContainer = getSubUnitsContainer(e.target.parentElement)
    });
    el.addEventListener('focus', e  => {
        unitFocus = false   
        subunitsFocus = true 
    });
})
lessons.forEach(el =>{
    el.addEventListener('focus', e  => {
        unitFocus = false
        subunitsFocus = true
    });
})
////////////  Get Parent Functions
export  function getUnitContainer(parent){
    if(parent.classList.contains('unit-container')){
        return parent
    } else if (parent.parentElement){
        return getUnitContainer(parent.parentElement)
    } else {
        return null
    }
}
export function getSubUnitsContainer(parent){
    if(parent.classList.contains('sub-units-container')){
        return parent
    } else if (parent.parentElement){
        return getSubUnitsContainer(parent.parentElement)
    } else {
        return null
    }
}

function unitFocusChange(letter,e){
    if(unitFocus){
        if(letter == 'u'){
            unit01.focus()
        }
        units.forEach(el => {
            if(letter == el.innerText[5]){
                el.focus()
            }
        })
    } 
    if(subunitsFocus){
        let unitContainer = getUnitContainer(e.target.parentElement)
        let unit = unitContainer.querySelector('h3 > a.unit')
        let subUnits = unitContainer.querySelectorAll('ul > li.sub-units-container > h4 > a.sub-unit')
        subUnits.forEach(el => {
            if(letter == el.innerText[0]){
                el.focus()
            }
        })
        if(letter == 'p' || letter == 'u' || letter == 's'){
            unit.focus()
        }
    }
}
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    unitFocusChange(letter,e)
});

