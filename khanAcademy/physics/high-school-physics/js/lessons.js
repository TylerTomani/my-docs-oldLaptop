(function(){
    const homelink = document.querySelector('#homelink')
    let canvas = document.querySelector('canvas')
    let speedBox = document.querySelector('.speed-box')    
    let rulerBox = document.querySelector('.ruler-box')    
    const cntrlBoxes = document.querySelectorAll('.cntrl-box')
    const inputs = document.querySelectorAll('input')
    let focusedInput = false
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'h'){
            homelink.focus()
        }
        if(canvas){   
            if(letter == 'c'){
                canvas.focus()
            }
            
        }
        if(!focusedInput){
            if(rulerBox){   
                if(letter == 'r'){
                    rulerBox.focus()
                }
                
            }
            if(speedBox){   
                if(letter == 's'){
                    speedBox.focus()
                }
                
            }
        }
    });

    inputs.forEach(el => {
        el.addEventListener('focus', e => {
            focusedInput = true        
        });
        // el.addEventListener('keydown', e => {
        //     let letter = e.key.toLowerCase()
        //     let cntrlBox = getCntrlBox(e.target.parentElement)
        //     let currentInputs = cntrlBox.querySelectorAll('input')
        //     currentInputs.forEach(el => {
        //         console.log(el.name)
        //         if(letter == el.name[0]){
        //             console.log(el)
        //             el.focus()
        //         }
        //     })
        // });
    })
    cntrlBoxes.forEach(el =>{
        el.addEventListener('focus', e => {
            focusedInput = false
        });    
    })

    function getCntrlBox(parent){
        if(parent.classList.contains('cntrl-box')){
            return parent
        } else if (parent.parentElement){
            return getCntrlBox(parent.parentElement)
        } else {
            return null
        }
    }
}())