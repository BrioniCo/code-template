//
// const words are outside of the getWord function so that it is not initialised each time the function is called
// Split out from script.js for readability */

// Array of 3-letter words with associated image 

const wordCollection = [{
    word: "bus",
    image: "assets/images/bus.png",
    alt: "icon of bus",
},{
    word: "dog",
    image: "assets/images/dog-icon.png",
    alt: "icon of dog",
},{
    word: "car",
    image: "assets/images/car-icon.png",
    alt: "icon of car", 
},{
    word: "cow",
    image: "assets/images/cow-animal-icon.png", 
    alt: "icon of cow", 
},{
    word: "pig",
    image: "assets/images/pork-icon.png", 
    alt: "icon of pig face",
},{
    word: "cat",
    image: "assets/images/cat-animal-icon.png", 
    alt: "icon of cat",
},{
    word: "bee",
    image: "assets/images/bee.png", 
    alt: "icon of bee",
},{
    word: "pie",
    image: "assets/images/pie.png",
    alt: "icon of pie", 
},{
    word: "poo",
    image: "assets/images/poop-icon.png" ,
    alt: "icon of poop",
},{
    word: "ear",
    image: "assets/images/ear-icon.png" , 
    alt: "icon of ear",
},{
    word: "toe",
    image: "assets/images/toe.png" , 
    alt: "icon of toes",
},{
    word: "hat",
    image: "assets/images/hat-icon.png" ,
    alt: "icon of hat",
},{
    word: "you",
    image: "assets/images/you.png",
    alt: "icon of finger pointing",
},{
    word: "pen",
    image: "assets/images/pencil-icon.png", 
    alt: "icon of pen",
},{
    word: "cup",
    image: "assets/images/tea-cup-icon.png", 
    alt: "icon of coffee cup",
},{
    word: "bat",
    image: "assets/images/bat-icon.png", 
    alt: "icon of bat",
},{
    word: "sun",
    image: "assets/images/sun-icon.png", 
    alt: "icon of sun",
},{
    word: "box",
    image: "assets/images/box-icon.png", 
    alt: "icon of box",
},{
    word: "jam",
    image: "assets/images/jam-jar-icon.png",
    alt: "icon of jar of jam",
},{
    word: "leg",
    image: "assets/images/chicken-leg-icon.png",
    alt: "icon of leg",
},{
    word: "toy",
    image: "assets/images/toy-icon.png", 
    alt: "icon of toy",
},{
    word: "egg",
    image: "assets/images/egg-color-icon.png",
    alt: "icon of egg",
},{
    word: "arm",
    image: "assets/images/arm-muscles-icon.png",
    alt: "icon of muscled arm",
},{
    word: "lip",
    image: "assets/images/kiss-icon.png", 
    alt: "icon of lips",
},{
    word: "fan",
    image: "assets/images/fan-icon.png",
    alt: "icon of fan",
},{
    word: "bed",
    image: "assets/images/bed-icon.png",
    alt: "icon of bed",
},{
    word: "key",
    image: "assets/images/key-icon.png",
    alt: "icon of key",
},{
    word: "rug",
    image: "assets/images/rug-icon.png",
    alt: "icon of rug",
},{
    word: "fly",
    image:  "assets/images/fly-icon.png",
    alt: "icon of fly",
},{
    word: "ice",
    image:  "assets/images/ice-icon.png",
    alt: "icon of ice symbol",
},{
    word: "gem",
    image: "assets/images/gem.png",
    alt: "icon of gem",
},{
    word: "jaw",
    image: "assets/images/jaw-icon.png",
    alt: "icon of set of teeth",
},{
    word: "art",
    image: "assets/images/art-icon.png",
    alt: "icon of artist palette",
},{
    word: "zip",
    image: "assets/images/zipper-icon.png",
    alt: "icon of zipper",
},{
    word: "ham",
    image: "assets/images/ham-icon.png",
    alt: "icon of ham",
},{
    word: "owl",
    image: "assets/images/owl-icon.png",
    alt: "icon of owl",
},{
    word: "run",
    image: "assets/images/run-icon.png",
    alt: "icon of running figure",
},{
    word: "bug",
    image: "assets/images/bug-icon.png",
    alt: "icon of insect",
},{
    word: "cog",
    image: "assets/images/cog-icon.png",
    alt: "icon of cog",
},{
    word: "cut",
    image: "assets/images/cut-icon.png",
    alt: "icon of scissors",
},{
    word: "fun",
    image: "assets/images/fun-icon.png",
    alt: "icon of laughing face",
},{
    word: "ape",
    image: "assets/images/ape-icon.png",
    alt: "icon of ape",
},{
    word: "air",
    image: "assets/images/air-icon.png",
    alt: "icon of air blowing from air conditioner",
},{
    word: "bad",
    image: "assets/images/bad-icon.png",
    alt: "icon of thumb turned down",
},{
    word: "bag",
    image: "assets/images/bag-icon.png",
    alt: "icon of bag",
},{
    word: "bye",
    image: "assets/images/bye-icon.png",
    alt: "icon of waving hand",
},{
    word: "cry",
    image: "assets/images/cry-icon.png",
    alt: "icon of crying face",
},{
    word: "eye",
    image: "assets/images/eye-icon.png",
    alt: "icon of an eye",
},{
    word: "fix",
    image: "assets/images/fix-icon.png",
    alt: "icon depicting tools",
},{
    word: "gel",
    image: "assets/images/gel-icon.png",
    alt: "icon of squirt bottle",
},{
    word: "hen",
    image: "assets/images/fun-icon.png",
    alt: "icon of profile of hen",
},{
    word: "jet",
    image: "assets/images/jet-icon.png",
    alt: "animation of jet",
},{
    word: "nap",
    image: "assets/images/nap-icon.png",
    alt: "icon of figure in bed",
},{
    word: "pee",
    image: "assets/images/pee-icon.png",
    alt: "icon of figure urinating",
},{
    word: "pet",
    image: "assets/images/pet-icon.png",
    alt: "icon of hands holding a pet",
},{
    word: "rat",
    image: "assets/images/rat-icon.png",
    alt: "icon of rat face",
},{
    word: "see",
    image: "assets/images/see-icon.png",
    alt: "icon of binoculars",
},{
    word: "tap",
    image: "assets/images/tap-icon.png",
    alt: "icon of tap",
},{
    word: "why",
    image: "assets/images/why-icon.png",
    alt: "icon of question mark",
},{
    word: "who",
    image: "assets/images/who-icon.png",
    alt: "icon of question mark within a head's profile",
}]


// /**
//  * Return random word and image from array of words 
//  
// 
// 
// }