document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('#mainImgContainer > img');
    const imageCollections = {
        vertebralColumn: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Illu_vertebral_column.svg/500px-Illu_vertebral_column.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/718_Vertebra-en.svg/1000px-718_Vertebra-en.svg.png"
        ],
        cervicalSpine: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cervical_vertebrae_lateral2.png/500px-Cervical_vertebrae_lateral2.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Cervical_vertebrae_animation_small.gif/240px-Cervical_vertebrae_animation_small.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cervical_vertebrae_-_close-up_-_animation2.gif/240px-Cervical_vertebrae_-_close-up_-_animation2.gif"
        ],
        cranialBones: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Human_skull_side_simplified_%28bones%29.svg/700px-Human_skull_side_simplified_%28bones%29.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sobo_1909_38.png/360px-Sobo_1909_38.png"
            // "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gray188.png/800px-Gray188.png"
        ],
        ethmoid: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ethmoid_bone.PNG/640px-Ethmoid_bone.PNG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ethmoid_bone_animation2.gif/230px-Ethmoid_bone_animation2.gif"
        ],
        frontal: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Frontal_bone_lateral2.png/250px-Frontal_bone_lateral2.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gray134.png/800px-Gray134.png"
        ],
        c1: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/C1_lateral.png/500px-C1_lateral.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Atlas_%28C1%29_from_top_animation_small.gif/240px-Atlas_%28C1%29_from_top_animation_small.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Gray86.png/440px-Gray86.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gray308.png/440px-Gray308.png"
        ],
        c2: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/C2_lateral.png/500px-C2_lateral.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/C2_from_top_animation_small.gif/240px-C2_from_top_animation_small.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Axis_vertebrae.jpg/440px-Axis_vertebrae.jpg"
        ],
        c3: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cervical_vertebrae_-_close-up_-_animation2.gif/240px-Cervical_vertebrae_-_close-up_-_animation2.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cervical_vertebra_english.png/500px-Cervical_vertebra_english.png",
            "https://upload.wikimedia.org/wikipedia/commons/5/52/Gray85.png"

        ],
        c4: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cervical_vertebra_english.png/500px-Cervical_vertebra_english.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cervical_vertebrae_-_close-up_-_animation2.gif/240px-Cervical_vertebrae_-_close-up_-_animation2.gif",
            "https://upload.wikimedia.org/wikipedia/commons/5/52/Gray85.png"
        ],
        c5: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cervical_vertebra_english.png/500px-Cervical_vertebra_english.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cervical_vertebrae_-_close-up_-_animation2.gif/240px-Cervical_vertebrae_-_close-up_-_animation2.gif",
            "https://upload.wikimedia.org/wikipedia/commons/5/52/Gray85.png"
        ],
        c6: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cervical_vertebra_english.png/500px-Cervical_vertebra_english.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cervical_vertebrae_-_close-up_-_animation2.gif/240px-Cervical_vertebrae_-_close-up_-_animation2.gif",
            "https://upload.wikimedia.org/wikipedia/commons/5/52/Gray85.png"
        ],
        c7: [
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/C7_animation_small.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cervical_Spine_Anterior_View.png/240px-Cervical_Spine_Anterior_View.png"
        ]
    };
    let currentImages = imageCollections['cranialBones'];
    let currentIndex = 0;

    let startX;

    // Function to update image
    const updateImage = () => {
        img.src = currentImages[currentIndex];
    };

    // Touch events for swipe functionality
    img.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    img.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            // Swiped left, go to next image
            currentIndex = (currentIndex + 1) % currentImages.length;
        } else if (startX < endX - 50) {
            // Swiped right, go to previous image
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        }
        updateImage();
    });

    // Click events for desktop functionality
    img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up
        e.preventDefault(); // Prevent any default action
        
        const imageWidth = img.clientWidth;
        const clickX = e.clientX - img.getBoundingClientRect().left;

        if (clickX > imageWidth / 2) {
            // Clicked right side, go to next image
            currentIndex = (currentIndex + 1) % currentImages.length;
        } else {
            // Clicked left side, go to previous image
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        }
        updateImage();
    });
    img.addEventListener('keydown', e => {
        let key = e.keyCode
        console.log(key)
        if(key == 39){
            currentIndex = (currentIndex + 1) % currentImages.length;
        }
        if(key == 37){
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        }
        if(key == 13){
            currentIndex = (currentIndex + 1) % currentImages.length;
        }
        updateImage()
    })
    // Event listeners for elements to switch image collections
    const elements = document.querySelectorAll('a.drop, .group-items a, .sub-group-items a');
    elements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default navigation action
            
            const id = element.id;
            if (imageCollections[id]) {
                currentImages = imageCollections[id];
                currentIndex = 0;
                updateImage();
            }
        });
    });
});
