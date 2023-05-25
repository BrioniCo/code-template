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
const keyboard = document.querySelector(".keyboard-key-container"); // Corrected selector

// Now i need to list the keys for my keyboard in alphabetic order to make it easier for children.-Ask tutor about this, would it be better as a shuffle of letters needed for word?
// Leave it as a constant array for now but maight come back in and change it to a shuffle that contains only the keys contained in word

const keys = [
"a", "b", "c", "d","e","f", "g", "h","i", "j","k", "l","m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "enter", "<"
]

// Here are the rows for attemptRows, these rows will be used to create letter tiles
// const attemptRows = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""]
// ]
const handleClick = () => {
  console.log("clicked")
}

// Create a button for each key in the keyboard container div. 
keys.forEach (key => {
    const buttonObject = document.createElement("button");
    buttonObject.textContent = key;
    buttonObject.classList.add(".keyboard-key-container"); 
    keyboard.appendChild(buttonObject);
    buttonObject.addEventListener("click", handleClick);
  });
  
  // attemptRows.forEach((attemptRow, attemptRowIndex) => {
  //  const rowElement = document.createElement("div");
  //  rowElement.setAttribute("id", "attemptRow" + attemptRowIndex);
  // //  Now put this in the letter tiles
  // letterTiles.append(rowElement)
  // })