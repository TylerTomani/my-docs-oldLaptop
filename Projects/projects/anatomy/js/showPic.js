const links = document.querySelectorAll('a')
const axialImg = document.querySelector('#axial')
// const midSagitalImg = document.getElementById('#midSagital > img')
const img = document.querySelector('main > .img-container > img')

const notesP = document.querySelector('.notes > p')

links.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        img.src = e.target.href
        const id = e.target.id

        switch(id){
            case 'c1':
                axialImg.src = 'myMris/axial/axial-1.jpeg'
                notesP.innerText = "C1-C2: The atlantoaxial articulation demonstrates mild degenerative changes.  No cord impingement. The spinal canal is normal in caliber."
                break;
            case 'c2':
                axialImg.src = 'myMris/axial/axial-2.jpeg'
                notesP.innerText = "C2-C3: No significant disc bulging or focal soft disc protrusion/herniation. No central or lateral recess stenosis. No foraminal narrowing."
                break;
            case 'c3':
                axialImg.src = 'myMris/axial/axial-3-b.jpeg'
                notesP.innerText = "C3-C4: Large disc osteophyte complex eccentric to the left causes mild ventral cord impingement, cord flattening, and clockwise rotation in the axial plane. No focal soft disc protrusion/herniation. No central canal stenosis. Mild to moderate left lateral recess stenosis. Mild left foraminal narrowing.  "
                break;
            case 'c4':
                axialImg.src = 'myMris/axial/axial-4-b.jpeg'
                notesP.innerText = "C4-C5: Minor disc osteophyte complex and small central annular tear without focal soft disc protrusion/herniation or cord impingement. No spinal stenosis or foraminal narrowing."
                break;
            case 'c5':
                axialImg.src = 'myMris/axial/axial-5-b.jpeg'
                notesP.innerText = "C5-C6: Moderate disc osteophyte complex mildly eccentric to the left causes minimal ventral cord impingement on the left. No focal soft disc protrusion/herniation. Moderate central and left lateral recess stenosis. Severe left foraminal narrowing."
                break;
            case 'c6':
                axialImg.src = 'myMris/axial/axial-6-b.jpeg'
                notesP.innerText = "C6-C7: Mild disc osteophyte complex mildly eccentric to the right without cord impingement or focal soft disc protrusion/herniation. Mild central and right lateral recess stenosis. Mild foraminal narrowing."
                break;
            case 'c7':
                axialImg.src = 'myMris/axial/axial-7-b.jpeg'
                notesP.innerText = "C7-T1: No significant disc bulging or focal soft disc protrusion/herniation. No central or lateral recess stenosis. No foraminal narrowing."
                break;
        }


    })

})