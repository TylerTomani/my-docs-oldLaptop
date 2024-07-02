// content.js
document.addEventListener('keydown', (event) => {
  // Check if a letter key is pressed
  if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
    const pressedLetter = event.key.toLowerCase();
    
    // Find the first link or button that starts with the pressed letter
    const elements = document.querySelectorAll('a, button');
    for (let element of elements) {
      const text = element.textContent.trim().toLowerCase();
      if (text.startsWith(pressedLetter)) {
        element.focus();
        
        // Add event listener for Enter key
        const enterListener = (e) => {
          if (e.key === 'Enter') {
            element.click();
            document.removeEventListener('keydown', enterListener);
          }
        };
        
        document.addEventListener('keydown', enterListener);
        break;
      }
    }
  }
});
