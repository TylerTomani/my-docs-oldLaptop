(function(){
    const allIdEls = document.querySelectorAll('[id]')
    // iLetter is index to increment up thru letterIds
    let iLetter
    let currentLetter
    let currentResourceFocus = false
    let letterIds = []

    addEventListener('DOMContentLoaded', e => {

    });

    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        letterIds = []
        allIdEls.forEach(el => {
            if (letter == el.id[0].toLowerCase() && !el.classList.contains('hide')) {
                letterIds.push(el)
            }
        })
        if (currentLetter == letter) {
            iLetter = (iLetter + 1) % letterIds.length
            letterIds[iLetter].focus()

        } else if (letterIds.length > 0) {
            iLetter = 0
            letterIds[0].focus()
        }
        currentLetter = letter
    });


}())