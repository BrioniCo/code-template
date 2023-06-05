document.addEventListener("DOMContentLoaded", () => {
// When game is initialised the availableTiles will always =1

  let availableTiles = 1;
  let guessedWords = [[]];
  let word;
  let correctWordCount = 0;

   /**
    * code for painting the letter tiles onto the DOM
    *
    */
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
    const imageContainer = document.querySelector('.clue-image-container');
    const imageElement = document.createElement('img');
    imageElement.src = randomWord.image;
    imageContainer.appendChild(imageElement);

    word = randomWord.word

  /**
  * Takes a random word with accompanying image from the words array
  *
  */
  function getRandomWord() {
    const randomWordIndex = Math.floor(Math.random() * wordCollection.length);
    return wordCollection[randomWordIndex];
  }

const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelector(".btn-open");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const newGameBtn = document.getElementById("start-new-game");
let guessedWordCount = 0;


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
    return "#CD5C5C";
  }

  const letterInCorrectPosition = word.charAt(index)
  const isCorrectPosition = letter === letterInCorrectPosition

  if (isCorrectPosition && isCorrectLetter) {
    return "#00BB00";
  }
  if (isCorrectLetter && !isCorrectPosition)
  return "orange"
}

function handleSubmitWord() {
    const currentWordArray = getCurrentWordArray();

    if (currentWordArray.length !== 3) {
      window.alert("Word should be 3 letters!")
    return ;
    }

    const currentWord = currentWordArray.join("");
  // adding timing to animation so that tiles bounce
    const firstLetterId = guessedWordCount * 3 + 1;
    const interval = 200;

    currentWordArray.forEach((letter, index) => {
      setTimeout(() => {
      // Change the colour of tile that contains the correct letter
      const tileColor = getTileColor(letter, index);
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);

        letterEl.classList.add("animate__bounce");
        letterEl.style = `background-color:${tileColor};border-color:${tileColor}`
      }, interval * index) ; 

    });

    guessedWordCount += 1 ;

    if (currentWord === word) {
      window.alert("Well done - you did it!!!")
      incrementScore();
  
    }

    if (currentWord !== word && guessedWords.length < 3) {
      window.alert("That's not it- try again!")
    }

    if (guessedWords.length === 3 && currentWord !== word) {
      window.alert(`Sorry, you have no more tries! The word is ${word}`)
      incrementWrongAnswer();
    }

// Here is where the words already guessed are pushed into an array so that the next word can be guessed
    guessedWords.push([]);
}
/**
 * Create an array of words 
 */
function getCurrentWordArray() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords -1];
}

/**
 * takes correctly spelled words from the DOM and increments by 1 
 */
function incrementScore()   {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

  // Increasing the correctWordCount here to head towards ending game 
  correctWordCount ++;

  if (correctWordCount === 5) {
  alert(`YES! You have spelled 5 words!`);
  return;
  }

  if (correctWordCount === 10) {
    alert("WOW!! You spelled 10 words! You are learning so much!");
    return;
  }
}
/**
 * takes a tally of incorrectly spelled words from the DOM and increments by 1 
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

// function gameOver() {
//   if (correctWordCount === 10) {
//     gameOver = true;
//   }


// }
/**
* Keeps track of how many words have been guessed so far and how many tiles are still available. 
*
*/
function updateGuessedWords(letter) {
  const currentWordArray = getCurrentWordArray();

  if (currentWordArray && currentWordArray.length < 3) {
  currentWordArray.push(letter);

  const availableTilesEl = document.getElementById(String(availableTiles));
  availableTiles = availableTiles + 1;

  availableTilesEl.textContent = letter;
  }
}
  /**
  * Handles deleted letters and updates array accordingly- ie takes current word
  * array and reassigns it without the deleted letter. 
  */
function handleDeleteLetter() {
  const currentWordArray = getCurrentWordArray();

// Conditional statement below ensure that letters from already checked rows cannot be deleted, ie indexes 2 and 5
  if (currentWordArray.length > 0) {
    const lastLetterIndex = currentWordArray.length -1;

    if (lastLetterIndex !== 2 || lastLetterIndex !== 5) {
      const removedLetter = currentWordArray.pop();
      guessedWords[guessedWords.length - 1] = currentWordArray;

      const lastLetterEl = document.getElementById(String(availableTiles - 1));

      lastLetterEl.textContent = "";

      availableTiles = availableTiles - 1;
    } else {
      console.log('action not allowed; cannot delete indexes 2 and 5!');
    }

  }
}

const keys = document.querySelectorAll('.keyboard-row > button');

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

/*Function that resets the word to spell without effecting increment score */
//
 function startNewGame() {
  //variable reset here 
  availableTiles = 1;
  guessedWords = [[]];
  guessedWordCount = 0;

  // Clear DOM elements
  const gameBoard = document.getElementById("letter-board");
  gameBoard.innerHTML = "";

  const imageContainer = document.querySelector('.clue-image-container');
  imageContainer.innerHTML = "";

  const randomWord = getRandomWord();
  const imageElement = document.createElement('img');
  imageElement.src = randomWord.image;
  imageContainer.appendChild(imageElement);
  word = randomWord.word;

  createTiles();
}

newGameBtn.addEventListener("click", startNewGame); 
});