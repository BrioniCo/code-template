document.addEventListener("DOMContentLoaded", () => {
// When game is initialised the availableTiles will always =1
  let availableTiles = 1;
  let guessedWords = [[]];

  // code for painting the letter tiles onto the DOM
  function createTiles() {
    const gameBoard = document.getElementById("letter-board")

    for (let index = 0; index < 9; index++) {
      let tile = document.createElement("div")
      tile.classList.add("tile")
      tile.setAttribute("id", index +1)
      gameBoard.appendChild(tile)
    }
  }
  createTiles()
  });

// Pulling elements from the DOM to manipulate. image and lettertiles will correspond to each other.

const picture = document.querySelector("clue-image-container");
const keyboard = document.getElementById("keyboard-container");
const keys = document.querySelectorAll('.keyboard-row > button');
let guessedWords = [[]];
let availableTiles = 1;
 

// create an array of words 
function getCurrentWordArray() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords -1]
}
// A function that lets us know how many words have been guessed so far
function updateGuessedWords(letter) {
  const currentWordArray = getCurrentWordArray()

  if (currentWordArray && currentWordArray.length < 3) {
  currentWordArray.push(letter)

  const availableTilesEl = document.getElementById(String(availableTiles));
  availableTiles = availableTiles + 1

  availableTilesEl.textContent = letter;
  }
}



/*Iterate over each keyboard key and create an on-click handler function */
// RESEARCH!:-Is it ok that letter only has a local scope here?
  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      updateGuessedWords(letter);
    };
    
  }

