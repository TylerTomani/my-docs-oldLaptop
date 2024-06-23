import { fullCode } from "../game-js/scripts.js";
import { part01DrawPlayer } from "../game-js/scripts.js";

const nxtBtn = document.getElementById('nxt-btn');
const scripts = [fullCode, part01DrawPlayer]; // List of script IDs
let currentScriptIndex = 0;
// fullCode()
nxtBtn.addEventListener('click', () => {
    // nxtBtn.style.boxShadow = `0 0 5px 5px ${Math.random() * 255}`
    nxtBtn.style.border = `100px solid rgb(${Math.random() * 255,Math.random() * 255,Math.random() * 255}))`
    console.log(currentScriptIndex)
    currentScriptIndex = (currentScriptIndex + 1) % scripts.length;
    switchScript(currentScriptIndex)    
});
function switchScript(currentScriptIndex){
    switch(currentScriptIndex){
        case 0:
            fullCode()
            break
        case 1:
            part01DrawPlayer()
            break
        default:
            fullCode()
            console.log("somthing")
    }
}