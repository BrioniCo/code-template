document.addEventListener("DOMContentLoaded", () => {

  
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
const image = document.querySelector("clue-image-container");
// const letterTiles = document.querySelector("letter-tile-container");
const keyboard = document.getElementById("keyboard-container"); // Corrected selector


/*Iterate over each keyboard key and create an on-click handler function */
const keys = document.querySelectorAll('.keyboard-row > button');

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const key = target.getAttribute("data-key");

      console.log(key);
    };
    
  }

