//ONE function in this file and all the words for the game are held in the const below.
// const words are outside of the getWord function so that it is not initialised each time the function is called
// Split out from script.js for readability */

// Arrays of words: 3, 4 and 5, each with associated image 

const words = [{
    word: "bus",
    image: "assets/",
},{
    word: "dog",
    image: "assets/",
},{
    word: "car",
    image: "assets/", 
},{
    word: "cow",
    image: "assets/",  
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

    ,{
        word: "pen",
        image: url(""), 
    },{
        word: "cup",
        image: url(""), 
    },{
        word: "bat",
        image: url(""), 
    },{
        word: "",
        image: url(""), 
    },{
        word: "",
        image: url(""), 
    },{
        word: "",
        image: url(""),
    },{
        word: "",
        image: url(""),
        
}]




Bat
Sun
Box
Jam
Leg
Toy
Bus
Egg
Arm
Lip
Cow
Fan
Bed
Key
Rug
Air
Bus
Day
Ear
Fly
Gum
Hot
Ice
Job
Kit
Lap
Man
Nap
Owl
Pit
Ram
Sky
Toy
Van
Wax

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