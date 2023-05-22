// getWord() function will be inseparate js file called words.js
// Pulling elements from the DOM to manipulate. image and lettertiles will correspond to each other.
const image = document.querySelector("clue-image-container");
const letterTiles = document.querySelector("letter-tile-container");
const keyboard = document.querySelector(".keyboard-key-container"); // Corrected selector

// Now i need to list the keys for my keyboard in alphabetic order to make it easier for children.-Ask tutor about this, would it be better as a shuffle of letters needed for word?
// Leave it as a constant array for now but maight come back in and change it to a shuffle that contains only the keys contained in word

const keys = [
"a", "b", "c", "d","e","f", "g", "h","i", "j","k", "l","m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "enter", "\b"
]

// Create a button for each key
keys.forEach(key => {
    const buttonObject = document.createElement("button");
    buttonObject.textContent = key;
    buttonObject.classList.add("keyboard-key-container"); 
    // Add a CSS class for styling
    keyboard.appendChild(buttonObject);
  });
  