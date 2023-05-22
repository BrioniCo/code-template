//ONE function in this file and all the words for the game are held in the const below.
// const words are outside of the getWord function so that it is not initialised each time the function is called
// Split out from script.js for readability */

// Arrays of words: 3, 4 and 5, each with associated image 

const words = [{
    word: "bus",
    image: url(""),
},{
    word: "dog",
    image: url("",)
},{
    word: "car",
    image: url(""), 
},{
    word: "cow",
    image: url(""),  
},{
    word: "pig",
    image: url(""), 
},{
    word: "cat",
    image: url(""), 
},{
    word: "bee",
    image: url(""), 
},{
    word: "pie",
    image: url(""), 
},{
    word: "poo",
    image: url(""), 
},{
    word: "ear",
    image: url(""), 
},{
    word: "toe",
    image: url(""), 
},{
    word: "hat",
    image: url(""),
},{
    word: "you",
    image: url(""),
}]

// /**
//  * Return random word and image from array of words 
//  * @param {string} wordCategory Verb or Adjective
//  */ keeping this here for reference- from a code inst project Fiona word monster
// function getWord(wordCategory) {
//     // filter the words array into a new array, by the chosen category
//     let words = words.filter(word => word.type === );
//     //get a random word object from the words array, pass this to startGame function 
//     let wordObject = words[Math.floor(Math.random() * words.length)];
//     return wordObject;
// }