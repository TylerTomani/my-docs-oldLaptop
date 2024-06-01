(function(){
    const allElements = document.querySelectorAll("body *:not(script)");
    const allElementsArray = Array.from(allElements);
    
    let currentLetter;
    let index = 0;

    addEventListener('keydown', e => {
        const letter = e.key.toLowerCase();
        const letteredElements = allElementsArray.filter(el => el.id && el.id[0] === letter);
        // const letteredElements = [];
        // for (let i = 0; i < allElementsArray.length; i++) {
        //     const el = allElementsArray[i];
        //     if (el.id && el.id[0] === letter) {
        //         letteredElements.push(el);
        //     }
        // }
        if (letteredElements.length === 0){
            return;
        } 
        if (letter !== currentLetter) {
            index = 0;
        }

        if (letteredElements[index]) {
            letteredElements[index].focus();
        }

        index = (index + 1) % letteredElements.length;
        currentLetter = letter;

        
    });

}())