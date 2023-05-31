document.addEventListener("DOMContentLoaded", () => {

// When game is initialised the availableTiles will always =1
  let availableTiles = 1;
  let guessedWords = [[]];
  let word;

  
  // code for painting the letter tiles onto the DOM
  function createTiles() {
    const gameBoard = document.getElementById("letter-board");
 
    for (let index = 0; index < 9; index++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      // Adding a class to each tile for 'bounce animation from animate css'
      tile.classList.add("animate__animated");
      tile.setAttribute("id", index +1);
      gameBoard.appendChild(tile);
    }
  }

  createTiles();

   // Call getRandomWord() to get a random word object
   const randomWord = getRandomWord();
  // Display the word and image
  //  const clueImageContainer = document.querySelector(".clue-image-container");
  //   const wordImage = document.createElement("img");
  //   wordImage.src = randomWord.image;
  //   console.log(randomWord.image)
    const imageContainer = document.querySelector('.clue-image-container');
    const imageElement = document.createElement('img');
   imageElement.src = randomWord.image;
   imageContainer.appendChild(imageElement);

    word = randomWord.word
    console.log(word)
  
 
    /**
     * Takes a random word with accompanyiong image from the words array
     *
     */
    function getRandomWord() {
      // const wordList = wordCollection.word;
      const randomWordIndex = Math.floor(Math.random() * wordCollection.length);
      return wordCollection[randomWordIndex];
    }
     
// Pulling elements from the DOM to manipulate. image and lettertiles will correspond to each other.

const picture = document.querySelector(".clue-image-container");
const keyboard = document.getElementById("keyboard-container");
const keys = document.querySelectorAll('.keyboard-row > button');
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const newGameBtn = document.getElementById("start-new-game");

let guessedWordCount = 0;

/*Iterate over each keyboard key and create an on-click handler function */
//
for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = ({ target }) => {
    const letter = target.getAttribute("data-key");

    if (letter === 'enter') {
      handleSubmitWord()
      return;
    }

    if (letter === 'del') {
      handleDeleteLetter()
      return
    }

    updateGuessedWords(letter);
  };
  
} 

/**
     * Closes the modal, code taken from 
     * [https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/]
     *
     */
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

   /**
     * checks which letter tiles contain the right letter 
     * in the right place and allow it to change color accordingly
     *
     */
function getTileColor(letter, index) {
  const isCorrectLetter = word.includes(letter)

  if (!isCorrectLetter) {
    return "#182c25";
  }

  const letterInCorrectPosition = word.charAt(index)
  const isCorrectPosition = letter === letterInCorrectPosition

  if (isCorrectPosition) {
    return "#00BB00";
  }
  return "#007FFE"
}

function handleSubmitWord() {
    const currentWordArray = getCurrentWordArray();

    if (currentWordArray.length !== 3) {
      window.alert("Word should be 3 letters!");
    }

    const currentWord = currentWordArray.join("");
  // adding timing to animation so that tiles bounce one after another -NOT WORKING PROPERLY
    const firstLetterId = guessedWordCount * 3 + 1;
    const interval = 200;

    currentWordArray.forEach((letter, index) => {
      setTimeout(() => {
        // Change the colour of tile that contains the correct letter
        const tileColor = getTileColor(letter, index);
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);

        letterEl.classList.add("animate__bounce");
        letterEl.style = `background-color:${tileColor};border-color${tileColor}`
      }, interval * index) ; 
      // This multiplication above is not functioning
    });

    guessedWordCount += 1 ;

    if (currentWord === word) {
      window.alert("Well done - you did it!!!")
    }

    if (currentWord !== word && guessedWords.length < 3) {
      window.alert("That's not it- try again!")
    }

    if (guessedWords.length === 3 && currentWord !== word) {
      window.alert(`Sorry, you have no more tries! The word is ${word}`)
    }

// Here is where the words already guessed are pushed into an array so that the next word can be guessed
    guessedWords.push([]);
}

// create an array of words 
function getCurrentWordArray() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords -1]
}

   /**
     * Keeps track of how many words have been guessed so far and how many tiles are still available. 
     *
     */
function updateGuessedWords(letter) {
  const currentWordArray = getCurrentWordArray()

  if (currentWordArray && currentWordArray.length < 3) {
  currentWordArray.push(letter);

  const availableTilesEl = document.getElementById(String(availableTiles));
  availableTiles = availableTiles + 1;

  availableTilesEl.textContent = letter;
  }
}
   /**
     * Handles deleted letters and updates array accordingly- ie takes current word
     * array and reassigns it without the deleted letter
     */
function handleDeleteLetter() {
  const currentWordArray = getCurrentWordArray();
  const removedLetter = currentWordArray.pop();

  guessedWords[guessedWords.length -1 ] = currentWordArray;

  const lastLetterEl = document.getElementById(String(availableTiles - 1));
  lastLetterEl.textContent = "";
  availableTiles = availableTiles - 1;
}

});

// function runGame(getCurrentWordArray) {

//   currentWordArray.value = "";
// // Each time the runGame is called, the answer box will gain the focus
//  currentWordArray.value = "".focus();

//  runGame();
// }


function startNewGame() {
  newGameBtn.addEventListener("click", startNewGame);
  // Reset variables
  availableTiles = 1;
  guessedWords = [[]];
  guessedWordCount = 0;

  // Clear DOM elements
  const gameBoard = document.getElementById("letter-board");
  gameBoard.innerHTML = "";

  const imageContainer = document.querySelector('.clue-image-container');
  imageContainer.innerHTML = "";

  // Generate a new word
  const randomWord = getRandomWord();
  const imageElement = document.createElement('img');
  imageElement.src = randomWord.image;
  imageContainer.appendChild(imageElement);
  word = randomWord.word;
  console.log(word);

  // Create new tiles
  createTiles();
}