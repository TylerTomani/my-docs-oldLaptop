const unitDropLinks = document.querySelectorAll(".unit-drop-link")
unitDropLinks.forEach(unitDropLink => {
    unitDropLink.addEventListener("click", e => {
        let parent = e.target.parentElement;
        let subUnits = parent.querySelectorAll(".sub-unit")
        let subUnitOl = parent.querySelector("ol")
        if(!subUnitOl.classList.contains("hide")){
            subUnitOl.classList.add("hide")
        } else {
            subUnitOl.classList.remove("hide")

        }
        
    })
})