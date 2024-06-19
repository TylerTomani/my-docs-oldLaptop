const body = document.querySelector("body")

const codeContainers = document.querySelectorAll(".code-container");


addEventListener("DOMContentLoaded", e => {
    console.log(body.offsetWidth)

    if(body.offsetWidth < 450){
        console.log("< 581")
        codeContainers.forEach(fullCode => {
            fullCode.classList.add("full-code")
            fullCode.style.fontSize = "80%"
        })

    } else {
        codeContainers.forEach(fullCode => {
            fullCode.classList.remove("full-code")
        })
    }

})
addEventListener("resize", e => {
    console.log(body.offsetWidth)
})