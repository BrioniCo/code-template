//
// const words are outside of the getWord function so that it is not initialised each time the function is called
// Split out from script.js for readability */

// Array of 3-letter words with associated image 

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
    image: "assets/images/sun-icon.png", 
},{
    word: "box",
    image: "assets/images/box-icon.png", 
},{
    word: "jam",
    image: "assets/images/jam-jar-icon.png",
},{
    word: "leg",
    image: "assets/images/chicken-leg-icon.png",
},{
    word: "toy",
    image: "assets/images/toy-icon.png", 
},{
    word: "egg",
    image: "assets/images/egg-color-icon.png",
},{
    word: "arm",
    image: "assets/images/arm-muscles-icon.png",
},{
    word: "lip",
    image: "assets/images/kiss-icon.png", 
},{
    word: "cow",
    image: "assets/images/cow-animal-icon.png", 
},{
    word: "fan",
    image: "assets/images/fan-icon.png",
},{
    word: "bed",
    image: "assets/images/bed-icon.png",
},{
    word: "key",
    image: "assets/images/key-icon.png",
},{
    word: "rug",
    image: "assets/images/rug-icon.png",
},{
    word: "fly",
    image:  "assets/images/fly-icon.png",
},{
    word: "ice",
    image:  "assets/images/ice-icon.png",
}]


// /**
//  * Return random word and image from array of words 
//  * @param {string} wordCategory Verb or Adjective
//  */ keeping this here for reference- from a code inst project Fiona word monster
// function getWord(wordCategory) {
//     // filter the words array into a new array,
//     //get a random word object from the words array, pass this to startGame function 
//     let wordObject = words[Math.floor(Math.random() * words.length)];
//     return wordObject;
// }