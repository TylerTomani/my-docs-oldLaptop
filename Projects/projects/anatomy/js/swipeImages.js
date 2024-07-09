document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.img-container img');
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cervical_vertebrae_lateral2.png/500px-Cervical_vertebrae_lateral2.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Atlas_%28C1%29_from_top_animation_small.gif/240px-Atlas_%28C1%29_from_top_animation_small.gif",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/C2_from_top_animation_small.gif/240px-C2_from_top_animation_small.gif",
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Cervical_vertebra_english.png",
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/C7_animation_small.gif"
    ];
    let currentIndex = 0;

    let startX;
    let endX;

    imageContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    imageContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    imageContainer.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            // Swiped left
            currentIndex = (currentIndex + 1) % images.length;
        } else if (startX < endX - 50) {
            // Swiped right
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        imageContainer.src = images[currentIndex];
    });
});
