/* Needs Major Refactoring, struggled with inputString matching 
 the answerString, both strings made from arrays and exclude space, \t ,
 and \t. Done so only the characters would be compared */
const pageResults = document.querySelectorAll(".page-result")
const htmlResults = document.querySelectorAll(".html-result")
pageResults.forEach(page => page.classList.add('hide'))
pageResults.forEach(htmlRes => htmlRes.classList.add('hide'))

const body = document.querySelector("body")    

const correctResult1 = `<table>
<tr>
	<th>Bowler</th>
	<td>Round 0</td>
	<td>Round 1</td>
	<td>Round 2</td>
	<td>Round 3</td>
	<td>Round 4</td>
	<td>Round 5</td>
	<td>Round 6</td>
</tr>
`
const correctResult2 = `<table
<tr>
	<th>Bowler</th>
	<td>Round 0</td>
	<td>Round 1</td>
	<td>Round 2</td>
	<td>Round 3</td>
	<td>Round 4</td>
	<td>Round 5</td>
	<td>Round 6</td>
</tr>
<tr>
<td><b>Gretchen Galloway</b></td>
<tr>
	<td>268</td>
	<td>178</td>
	<td>256</td>
	<td>259</td>
	<td>282</td>
</tr>
<tr>
<td><b>Isaac Steele</b></td>
<tr>
	<td>253</td>
	<td>155</td>
	<td>210</td>
	<td>195</td>
	<td>225</td>
</tr>
<tr>
<td><b>Wayne Myers</b></td>
<tr>
	<td>290</td>
	<td>283</td>
	<td>227</td>
	<td>243</td>
	<td>128</td>
</tr>
<tr>
<td><b>Lillith Lee</b></td>
<tr>
	<td>148</td>
	<td>127</td>
	<td>260</td>
	<td>131</td>
	<td>180</td>
</tr>
<tr>
<td><b>Molly Blackwell</b></td>
<tr>
	<td>299</td>
	<td>143</td>
	<td>202</td>
	<td>267</td>
	<td>222</td>
</tr>
<tr>
<td><b>Maia Arnold</b></td>
<tr>
	<td>204</td>
	<td>198</td>
	<td>294</td>
	<td>158</td>
	<td>254</td>
</tr>
<tr>
<td><b>Lev Reese</b></td>
<tr>
	<td>180</td>
	<td>278</td>
	<td>156</td>
	<td>170</td>
	<td>261</td>
</tr>
<tr>
<td><b>Carlos Guthrie</b></td>
<tr>
	<td>289</td>
	<td>205</td>
	<td>117</td>
	<td>138</td>
	<td>232</td>
</tr>
<tr>
<td><b>Sophia Buck</b></td>
<tr>
	<td>112</td>
	<td>104</td>
	<td>191</td>
	<td>112</td>
	<td>147</td>
</tr>
<tr>
<td><b>Vincent Mitchell</b></td>
<tr>
	<td>270</td>
	<td>153</td>
	<td>207</td>
	<td>175</td>
	<td>252</td>
</tr>
<tr>
<td><b>Buffy Harris</b></td>
<tr>
	<td>206</td>
	<td>107</td>
	<td>187</td>
	<td>286</td>
	<td>286</td>
</tr>
<tr>
<td><b>Reuben Miles</b></td>
<tr>
	<td>247</td>
	<td>227</td>
	<td>170</td>
	<td>237</td>
	<td>133</td>
</tr>
<tr>
<td><b>Brendan Fowler</b></td>
<tr>
	<td>265</td>
	<td>166</td>
	<td>145</td>
	<td>278</td>
	<td>170</td>
</tr>
<tr>
<td><b>Mason Hancock</b></td>
<tr>
	<td>217</td>
	<td>231</td>
	<td>271</td>
	<td>187</td>
	<td>284</td>
</tr>
<tr>
<td><b>Nigel Boone</b></td>
<tr>
	<td>236</td>
	<td>282</td>
	<td>196</td>
	<td>143</td>
	<td>290</td>
</tr>
<tr>
<td><b>Gretchen Foreman</b></td>
<tr>
	<td>276</td>
	<td>228</td>
	<td>186</td>
	<td>223</td>
	<td>156</td>
</tr>
<tr>
<td><b>Serena Goodman</b></td>
<tr>
	<td>189</td>
	<td>145</td>
	<td>137</td>
	<td>155</td>
	<td>211</td>
</tr>
<tr>
<td><b>Shoshana Velez</b></td>
<tr>
	<td>281</td>
	<td>120</td>
	<td>125</td>
	<td>199</td>
	<td>252</td>
</tr>
<tr>
<td><b>Eve Hughes</b></td>
<tr>
	<td>236</td>
	<td>176</td>
	<td>249</td>
	<td>173</td>
	<td>158</td>
</tr>
`
const correctResult3 = `<table>
<tr>
	<th>Bowler</td>
	<td>Round 1</td>
	<td>Round 2</td>
	<td>Round 3</td>
	<td>Round 4</td>
	<td>Round 5</td>
	<td>Round 6</td>
</tr>
<tr>
<td>Gretchen Galloway</td>
	<td>268</td>
	<td>178</td>
	<td>256</td>
	<td>259</td>
	<td>282</td>
	<td>139</td>
</tr>
<tr>
<td>Isaac Steele</td>
	<td>253</td>
	<td>155</td>
	<td>210</td>
	<td>195</td>
	<td>225</td>
	<td>172</td>
</tr>
<tr>
<td>Wayne Myers</td>
	<td>290</td>
	<td>283</td>
	<td>227</td>
	<td>243</td>
	<td>128</td>
	<td>221</td>
</tr>
<tr>
<td>Lillith Lee</td>
	<td>148</td>
	<td>127</td>
	<td>260</td>
	<td>131</td>
	<td>180</td>
	<td>125</td>
</tr>
<tr>
<td>Molly Blackwell</td>
	<td>299</td>
	<td>143</td>
	<td>202</td>
	<td>267</td>
	<td>222</td>
	<td>159</td>
</tr>
<tr>
<td>Maia Arnold</td>
	<td>204</td>
	<td>198</td>
	<td>294</td>
	<td>158</td>
	<td>254</td>
	<td>205</td>
</tr>
<tr>
<td>Lev Reese</td>
	<td>180</td>
	<td>278</td>
	<td>156</td>
	<td>170</td>
	<td>261</td>
	<td>283</td>
</tr>
<tr>
<td>Carlos Guthrie</td>
	<td>289</td>
	<td>205</td>
	<td>117</td>
	<td>138</td>
	<td>232</td>
	<td>278</td>
</tr>
<tr>
<td>Sophia Buck</td>
	<td>112</td>
	<td>104</td>
	<td>191</td>
	<td>112</td>
	<td>147</td>
	<td>294</td>
</tr>
<tr>
<td>Vincent Mitchell</td>
	<td>270</td>
	<td>153</td>
	<td>207</td>
	<td>175</td>
	<td>252</td>
	<td>202</td>
</tr>
<tr>
<td>Buffy Harris</td>
	<td>206</td>
	<td>107</td>
	<td>187</td>
	<td>286</td>
	<td>286</td>
	<td>244</td>
</tr>
<tr>
<td>Reuben Miles</td>
	<td>247</td>
	<td>227</td>
	<td>170</td>
	<td>237</td>
	<td>133</td>
	<td>188</td>
</tr>
<tr>
<td>Brendan Fowler</td>
	<td>265</td>
	<td>166</td>
	<td>145</td>
	<td>278</td>
	<td>170</td>
	<td>237</td>
</tr>
<tr>
<td>Mason Hancock</td>
	<td>217</td>
	<td>231</td>
	<td>271</td>
	<td>187</td>
	<td>284</td>
	<td>179</td>
</tr>
<tr>
<td>Nigel Boone</td>
	<td>236</td>
	<td>282</td>
	<td>196</td>
	<td>143</td>
	<td>290</td>
	<td>284</td>
</tr>
<tr>
<td>Gretchen Foreman</td>
	<td>276</td>
	<td>228</td>
	<td>186</td>
	<td>223</td>
	<td>156</td>
	<td>257</td>
</tr>
<tr>
<td>Serena Goodman</td>
	<td>189</td>
	<td>145</td>
	<td>137</td>
	<td>155</td>
	<td>211</td>
	<td>183</td>
</tr>
<tr>
<td>Shoshana Velez</td>
	<td>281</td>
	<td>120</td>
	<td>125</td>
	<td>199</td>
	<td>252</td>
	<td>296</td>
</tr>
<tr>
<td>Eve Hughes</td>
	<td>236</td>
	<td>176</td>
	<td>249</td>
	<td>173</td>
	<td>158</td>
	<td>146</td>
</tr>
<tr>
<td><i></i><td>
	<td><i>235<i></td>
	<td><i>184<i></td>
	<td><i>199<i></td>
	<td><i>196<i></td>
	<td><i>217<i></td>
	<td><i>215<i></td>
</tr>
</table>
`
const correctInput1 =`BEGIN {
        FS="\\t";
        print "<table>";
        print "<tr>";
        print "\\t<th>Bowler</th>";
        for(i=1 ; i < 7 ; i++){
          print "\\t<td>Round" , i "</td>";
        }
        print "</tr>";
}
`
const correctInput2 = `
{
    FS="\\t";
    print "<table>";
    print "<tr>";
    print "\\t<td><b>" $1 "</b></td>";
    for( i=2; i < 8; i++){
      print "\\t<td>" $i "</td>";
      total[i] += $i;
    }
    print "</tr>";
}
                             
`
const correctInput3 =`
END {
    print "<tr>";
    print "<td><i>"average"</i><td>";
    for(i=2; i < 8; i++){
        print "\\t<td><i>" int(total[i] / NR) "<i></td>"; 
    }
    print "</tr>";
    print "</table>";
}
`
const inputElements = document.querySelectorAll(".console-input");

let inputArray = []

let correctAnswerArray1 = correctInput1.split("")
let correctAnswerArray2 = correctInput2.split("")
let correctAnswerArray3 = correctInput3.split("")
// (correctAnswerArray1)
// Fills nextCharArray[] with all element that are not spaces
correctAnswerArray1.forEach((el,i,array) => {
    if( array[i] === "\t" || array[i] === "\n" || array[i] === "" || array[i] === ' ' || array[i] === undefined){
        correctAnswerArray1.splice(i,1);
        // (correctAnswerArray1)
    }
})
correctAnswerArray2.forEach((el,i,array) => {
    if( array[i] === "\t" || array[i] === "\n" || array[i] === "" || array[i] === ' ' || array[i] === undefined){
        correctAnswerArray2.splice(i,1);
        // (correctAnswerArray1)
    }
})
correctAnswerArray3.forEach((el,i,array) => {
    if( array[i] === "\t" || array[i] === "\n" || array[i] === "" || array[i] === ' ' || array[i] === undefined){
        correctAnswerArray3.splice(i,1);
        // (correctAnswerArray1)
    }
})

let correct = false;
let currentInputID = ""
inputElements.forEach(inputEl => {
    
    inputEl.addEventListener("input", (e) => {
        let el = e.target;

        currentInputID = el.getAttribute("id")

        let grandParent = e.target.parentElement.parentElement

        let htmlResult = grandParent.querySelector(".html-result")
        let pageResult = grandParent.querySelector(".page-result")
        
        let val = e.target.value
        inputArray = val.split('')
    
        let inputString = "";
        for(let i = 0; i < inputArray.length; i++){
            let el = inputArray[i];
            /* I Can not exculde \t's because it is included in the example,
            plus the tab key changes element when clicked inside the text area*/
            if(!(el == " ") && !(el == '\n') && !(el == '\r')){
                inputString += el
            }
        }
    
        let answerString = ''

        if(currentInputID === "input1"){
            console.log(currentInputID)
            
                for(let i = 0; i < correctAnswerArray1.length; i++){
                    let el = correctAnswerArray1[i]
                    if(el !== ' '){
                        answerString += el;
                    }
                }
        } else if (currentInputID === "input2"){
            console.log(currentInputID)
            for(let i = 0; i < correctAnswerArray2.length; i++){
                    let el = correctAnswerArray2[i]
                    if(el !== ' '){
                        answerString += el;
                    }
                }
        } else if (currentInputID === "input3"){
            console.log(currentInputID)
            for(let i = 0; i < correctAnswerArray3.length; i++){
                    let el = correctAnswerArray3[i]
                    if(el !== ' '){
                        answerString += el;
                    }
                }
        }
        
        
        console.log("i:",inputString)
        console.log("o:",answerString)

        if(inputString === answerString){    
            correct = true
            console.log("Is true")
        } else {   
            correct = false; 
        }


        inputEl.style.background="blue"
        // I think this is why because On input I'm setting placeholder to ""
        inputEl.setAttribute("placeholder","")
        
        if(inputArray.length === 0){
            inputEl.setAttribute("placeholder","")
    
            inputEl.style.background="royalblue"
            htmlResult.innerText = "";
            htmlResult.innerHTML = "";
        }
        if(correct){
            inputEl.style.background="green"
        }else {
            htmlResult.innerHTML = "";
            pageResult.innerHTML = "";
            // consoleResult.innerText = "Error - add line specific";
        }
        
    })

    
    
    let runBtn = inputEl.querySelector(".run-btn")


    runBtn.addEventListener("click", e => {
        let parent = e.target.parentElement.parentElement;
        let htmlResult = parent.querySelector(" .html-result")
        let pageResult = parent.querySelector(".page-result")

     if(inputArray.length === 0 ){
        inputEl.style.background="tomato"
        htmlResult.innerText = "";
    }
    let newPre =""
    if(correct){
        switch(currentInputID){
            case "input1" :
                pageResult.innerHTML = correctResult1;
                htmlResult.innerText = correctResult1;
                break;
            case "input2" :
                if(pageResult.classList.contains('hide')){
                    pageResult.classList.remove('hide')
                }
                pageResult.innerHTML = correctResult2;
                newPre = document.createElement("pre");
                newPre.innerText = correctResult2
                htmlResult.appendChild(newPre)
                // htmlResult.focus()
                // htmlResult.innerText = correctResult2;
                break;
            case "input3" :
                if(pageResult.classList.contains('hide')){
                    pageResult.classList.remove('hide')
                }
                pageResult.innerHTML = correctResult3;
                newPre = document.createElement("pre");
                newPre.innerText = correctResult3
                htmlResult.appendChild(newPre)
                // htmlResult.focus()
                // htmlResult.innerText = correctResult2;
                break;
            default:
                pageResult.innerHTML = "asdf";
                htmlResult.innerText = "asdf";
        }
    } else {
        inputEl.style.background="tomato"
        htmlResult.innerHTML = "";
        pageResult.innerHTML = "";
        htmlResult.innerText = "Error - add line specific";

    }
})

})

