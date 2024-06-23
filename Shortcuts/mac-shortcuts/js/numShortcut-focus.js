const shortcuts = document.querySelectorAll('.shortcut')
const shortcutsArr = Array.from(shortcuts)

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    let intLetter = parseInt(letter)

    if(!isNaN(intLetter)){

        shortcutsArr[intLetter-1].focus()
        console.log(shortcutsArr[0])
        console.log(typeof(intLetter))
    }
    console.log(intLetter)
})