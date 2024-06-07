letterFocus()

function letterFocus(){
    const allElements = document.querySelectorAll("body *");
    const allElementsArray = Array.from(allElements);
    let currentLetter;
    let index = 0;
    const keys = {
        cmd :{
            pressed : false
        }
    }
    addEventListener('keydown', e => {
        const letter = e.key.toLowerCase();
        const letteredElements = allElementsArray.filter(el => el.id && el.id[0] === letter);
        if(letter == 'meta'){keys.cmd.pressed = true}
        if(!keys.cmd.pressed){
            if (letteredElements.length === 0){return;} 
            if (letter !== currentLetter) {
                index = 0;
            }
            if (letteredElements[index]) {
                letteredElements[index].focus();
            }
            index = (index + 1) % letteredElements.length;
            currentLetter = letter; 
        }
    });
}
