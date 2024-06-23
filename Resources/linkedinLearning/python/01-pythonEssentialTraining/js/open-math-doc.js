const mathLink = document.querySelectorAll('.math-link')

mathLink.forEach(link => {
    let bubble = document.createElement('span')
    link.addEventListener('focusin', e => {
        console.log()
        e.target.parentElement.style.position = 'relative'
        bubble.style.border = "1px solid black"
        bubble.style.position = 'relative'
        bubble.style.fontSize = "14px "
        bubble.style.bottom = "4px "
        bubble.style.left = "0px "
        bubble.style.padding = "0 .2%"

        bubble.style.width = "-250px "
        bubble.innerText = "Open Math Tutorial"
        
        console.log(bubble)
        console.log(e.target)
        e.target.appendChild(bubble)

    })
    link.addEventListener('focusout', e=> {
        e.target.removeChild(bubble)
    })
})