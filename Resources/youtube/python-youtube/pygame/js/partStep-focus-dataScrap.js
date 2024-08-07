import { dropParts } from "./dropParts-dataScrap.js"
import { getPartContainer } from "./dropParts-dataScrap.js"
export const stepTxts = document.querySelectorAll('.step-txt')
const AsStepTxts = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.copy-code')
const part01 = document.getElementById('part01')
let partsFocus = true
let stepsFocus = false

dropParts.forEach(el => {
    el.addEventListener('focus', e => {
        stepsFocus = false
        partsFocus = true
    })
})
stepTxts.forEach(el => {
    el.addEventListener('focus', e => {
        stepsFocus = true
        partsFocus = false
        removeTabs()
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        const as = e.target.querySelectorAll('p >a')
        const copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        addTabs(as)
        addTabs(copyCodes)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){    
            const as = e.target.querySelectorAll('p > a')
            const copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
            addTabs(copyCodes)
            addTabs(as)
            openLink(as)
        }
    })
})

addEventListener('keydown', e => {
    let key = e.key
    if(partsFocus){
        if(key.toLowerCase() === 'p'){
            part01.focus()
        }
        dropParts.forEach(part => {
            const h3 = part.querySelector('h3')
            if(key === h3.innerText[5].toLowerCase()){
                part.focus()
            }
        })
    }

    if(stepsFocus){

        stepTxts.forEach(el => {
            const h4 = el.querySelector('h4')
            if(key === h4.innerText[1]){
                el.focus()
            }
        })
        if(key.toLowerCase() === 'p'){
            const part = getPartContainer(e.target.parentElement)
            const dropPart = part.querySelector('.dropPart')
            console.log(part)
            dropPart.focus()
        }
    }

})

function addTabs(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}
function removeTabs(){
    AsStepTxts.forEach(el => {
        el.setAttribute('tabindex','-1')
    })
    copyCodes.forEach(el => {
        el.setAttribute('tabindex','-1')
    })
}

function openLink(els){
    els.forEach(el => {
        el.addEventListener('click', e => {
            open(e.target.href,'_blank')
        })
    })
}
removeTabs()