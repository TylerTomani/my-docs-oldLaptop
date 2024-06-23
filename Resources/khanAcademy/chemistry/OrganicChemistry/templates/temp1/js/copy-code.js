const codeCopy = document.querySelectorAll('.copy-code')
const codeContainers = document.querySelectorAll('.code-containers')
let cntrlCarray = []
codeCopy.forEach(copycode => {
    copycode.addEventListener('keydown' , e => {        
        cntrlCarray.unshift(e.keyCode)
        if(cntrlCarray.length > 3){
            cntrlCarray.pop()
        }
        if(cntrlCarray[0] === 67 && cntrlCarray[1] === 91){
            animate(e)

            console.log("cmd + c")
        }
    })
    copycode.addEventListener('click', e => {
        e.preventDefault()
        animate(e)
    })

})

function animate(e){
    let el = e.target
    if(el.classList.contains('decopied')){
        el.classList.remove('decopied')
        el.classList.add('copied')
    } else if(!el.classList.contains('decopied') && !el.classList.contains('copied')){
        el.classList.add('copied')
    }
    setInterval(() => {
        el.classList.remove('copied')
        el.classList.add('decopied')
    },500)
    let txt = e.target.innerText
    copyToClip(txt)
}

function copyToClip(txt){

    async function copyTextToClipboard(text) {
        try {
          await navigator.clipboard.writeText(text);
        //   console.log("Text copied to clipboard:", text);
        } catch (err) {
          console.error("Unable to copy text to clipboard:", err);
        }
      }
      
      const textToCopy = txt;
      copyTextToClipboard(textToCopy);
}

