(function(){
    const allEls =document.querySelectorAll('body *')
    const changeFlexBtnId = document.getElementById('changeFlexBtn')
    const homeLink = document.getElementById('homeLink')


    let shiftCarray2 = []
    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        shiftCarray2.push(key)
        if(shiftCarray2.length > 2){
            shiftCarray2.shift()
        }
        if(shiftCarray2[0] === 'c'){
            if(changeFlexBtnId){
                changeFlexBtnId.focus()
            }
        }
    })

    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()

        if(key === 'h'){
            homeLink.focus()
        }
        
        allEls.forEach(el => {
            if(el.hasAttribute('id')){
                let id = el.getAttribute('id')
                let num = key
                if(key === id[0]){
                    el.focus()
                }
                
                switch (key){
                    case "1":
                        num = 'one'
                        break;
                    case "2":
                        num = 'two'
                        break;
                    case "3":
                        num = 'three'
                        break;
                    case "4":
                        num = 'four'
                        break;
                    case "5":
                        num = 'five'
                        break;
                    case "5":
                        num = 'five'
                        break;
                    case "6":
                        num = 'six'
                        break;
                    case "8":
                        num = 'seven'
                        break;
                    case "9":
                        num = 'nine'
                        break;
                    case "0":
                        num = 'ten'
                        break;
                }
                let resourceNum = document.querySelector(`.${num}`)
                if(resourceNum){
                    resourceNum.focus()

                }
            }

        })  
        
    })
}())