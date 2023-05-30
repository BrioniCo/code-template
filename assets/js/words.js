//ONE function in this file and all the words for the game are held in the const below.
// const words are outside of the getWord function so that it is not initialised each time the function is called
// Split out from script.js for readability */

// Arrays of words: 3, 4 and 5, each with associated image 

const wordCollection = [{
    word: "bus",
    image: "assets/images/bus.png",
},{
    word: "dog",
    image: "assets/images/dog-icon.png",
},{
    word: "car",
    image: "assets/images/car-icon.png", 
},{
    word: "cow",
    image: "assets/images/cow-icon.png",  
},{
    word: "pig",
    image: "assets/images/pork-icon.png", 
},{
    word: "cat",
    image: "assets/images/cat-animal-icon.png", 
},{
    word: "bee",
    image: "assets/images/bee.png", 
},{
    word: "pie",
    image: "assets/images/pie.png", 
},{
    word: "poo",
    image: "assets/images/poop-icon.png" 
},{
    word: "ear",
    image: "assets/images/ear-icon.png" , 
},{
    word: "toe",
    image: "assets/images/toe.png" , 
},{
    word: "hat",
    image: "assets/images/hat-icon.png" ,
},{
    word: "you",
    image: "assets/images/you.png",
},{
    word: "pen",
    image: "assets/images/pencil-icon.png", 
},{
    word: "cup",
    image: "assets/images/tea-cup-icon.png", 
},{
    word: "bat",
    image: "assets/images/bat-icon.png", 
},{
    word: "sun",
    image: "assets/images/cat-animal-icon.png", 
},{
    word: "box",
    image: "assets/images/cat-animal-icon.png", 
},{
    word: "jam",
    image: "assets/images/cat-animal-icon.png",
},{
    word: "leg",
    image: "assets/images/cat-animal-icon.png",
},{
    word: "toy",
    image: "assets/images/cat-animal-icon.png", 
},{
    word: "egg",
    image: "assets/images/.png",
},{
    word: "arm",
    image: "assets/images/cat-animal-icon.png",
},{
    word: "lip",
    image: "assets/images/cat-animal-icon.png", 
},{
    word: "cow",
    image: "assets/images/cow-animal-icon.png", 
},{
    word: "fan",
    image: "assets/images/cat-animal-icon.png",
},{
    word: "bed",
    image: "#",
},{
    word: "key",
    image: "#", 
},{
    word: "rug",
    image: "#", 
},{
    word: "fly",
    image: "#",
},{
    word: "ice",
    image: "#",
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