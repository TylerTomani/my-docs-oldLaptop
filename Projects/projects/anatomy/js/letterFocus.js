document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    console.log(`Key pressed: ${key}`);

    // Select all elements with an id attribute
    const allElements = document.querySelectorAll('[id]');
    console.log('All elements with IDs:', allElements);

    // Filter elements where id starts with the pressed key
    const elements = Array.from(allElements).filter(el => 
        el.id.toLowerCase().startsWith(key)
    );
    console.log(`Elements matching "${key}":`, elements);

    if (elements.length > 0) {
        let currentFocus = document.activeElement;
        let nextFocus = null;

        // If the current focus is already on one of the matching elements, move to the next one
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === currentFocus) {
                nextFocus = elements[(i + 1) % elements.length];
                // break;
            }
        }

        // If no element is currently focused or the current focus is not on one of the matching elements
        if (!nextFocus) {
            nextFocus = elements[0];
        }

        console.log(`Focusing on:`, nextFocus);
        nextFocus.focus();
    }
});