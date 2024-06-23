/* <a id="focus"></a> */
addEventListener("DOMContentLoaded", (element) => {
            // let position = e.target.getBoundingClientRect();
            // console.log(position.top)
            const body = document.querySelector("body")
            const focus = document.getElementById("focus");
            let y = focus.offsetTop;
            // console.log(y)
            scroll(0, y)
        })