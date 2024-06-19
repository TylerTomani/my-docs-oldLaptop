const unit01 = document.getElementById('unit01')
export const units = document.querySelectorAll('.unit')
export const subunits = document.querySelectorAll('.sub-unit')
export const lessons = document.querySelectorAll('ul.lessons-container > li > a')


let unitFocus = true
let subunitsFocus = false
let lessonsFocus = false

//////////// units & sub-units
units.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        // let unitContainer = getUnitContainer(e.target.parentElement)
    });
    el.addEventListener('focus', e  => {
        unitFocus = true
        subunitsFocus = false
        lessonsFocus = false
        
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
        lessonsFocus = false 
    });
})
lessons.forEach(el =>{
    // console.log(el.href)
    el.addEventListener('focusin', e  => {
        unitFocus = false
        subunitsFocus = false
        lessonsFocus = true
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
    if(parent.classList.contains('sub-unit-container')){
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
        if(unitContainer){
            let subUnits = unitContainer.querySelectorAll('ul > li.sub-unit-container > h4 > a.sub-unit')
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
    if(lessonsFocus){
        console.log('jkdjf')
        let subUnitContainer = getSubUnitsContainer(e.target.parentElement)
        let subUnit = subUnitContainer.querySelector('h4 > a.sub-unit')
        console.log(subUnitContainer)
        let lessons = subUnitContainer.querySelectorAll('ul.lessons-container > li > a')
        if(lessons){
            lessons.forEach(el => {
                console.log(el)
                if(letter == el.innerText[0]){
                    el.focus()
                }
            })
            if(letter == 'p' || letter == 'u' || letter == 's'){
                subUnit.focus()
                // console.log(subUnitContainer)
            }
        }
    }
}
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    unitFocusChange(letter,e)
});

