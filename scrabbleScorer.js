//import readline sync
const input = require("readline-sync");

// Code your transform function here:
function transform(oldPointStructure) {
  // declare new point structure
  newPointStructure = {};
  // get all keys
  var keys = Object.keys(oldPointStructure);
  for (var i = 0; i < keys.length; i++) {
    // get all values of key
    var values = oldPointStructure[keys[i]];
    // iterate through all values
    for (var j = 0; j < values.length; j++) {
      // create new structure with value as key and original key as value
      newPointStructure[values[j].toLowerCase()] = keys[i];
    }
  }
  // return the new structure
  return newPointStructure;
}

// Code your initialPrompt function here:
function initialPrompt() {
  console.log("Welcome to the Scrabble score calculator!");
  console.log("");
  console.log("Which scoring algorithm would you like to use?");
  console.log("");
  console.log("0 - Scrabble: The traditional scoring algorithm.");
  console.log("1 - Simple Score: Each letter is worth 1 point.");
  console.log(
    "2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt."
  );
  console.log("");
}

// Code your runProgram function here:
function runProgram() {
  initialPrompt();
  userInput = input.question("Enter 0, 1, or 2:");

  while (userInput) {
    if (userInput === "0") {
      console.log("");
      console.log(`Using algorithm: ${scoringOption1.name}`);
      console.log("");
      wordInput = input.question("Enter a word to be scored, or Stop to quit:");
      if (wordInput === "stop" || wordInput === "Stop") {
        console.log("Ending scrabble scoring program");
        break;
      }
      console.log(`Score for ${wordInput}: ${scrabbleScore(wordInput)}`);
    } else if (userInput === "1") {
      console.log("");
      console.log(`Using algorithm: ${scoringOption2.name}`);
      console.log("");
      wordInput = input.question("Enter a word to be scored, or Stop to quit:");
      if (wordInput === "stop" || wordInput === "Stop") {
        console.log("Ending scrabble scoring program");
        break;
      }
      console.log(`Score for ${wordInput}: ${simpleScore(wordInput)}`);
    } else if (userInput === "2") {
      console.log("");
      console.log(`Using algorithm: ${scoringOption3.name}`);
      console.log("");
      wordInput = input.question("Enter a word to be scored, or Stop to quit:");
      if (wordInput === "stop" || wordInput === "Stop") {
        console.log("Ending scrabble scoring program");
        break;
      }
      console.log(`Score for ${wordInput}: ${bonusVowels(wordInput)}`);
    } else if (userInput === "Stop" || userInput === "stop") {
      console.log("Ending scrabble scoring program");
      break;
    } else {
      console.log("");
      console.log("Using algorithm: Scrabble");
      console.log("");
      wordInput = input.question("Enter a word to be scored, or Stop to quit:");
      if (wordInput === "stop" || wordInput === "Stop") {
        console.log("Ending scrabble scoring program");
        break;
      }
      console.log(`Score for ${wordInput}: ${scrabbleScore(wordInput)} `);
    }
  }
}

// Here is the oldScoreKey object:
const oldScoreKey = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function simpleScore(word) {
  // Scrabble scoring
  // return the score
  return word.length;
}

// Bonus Vowels function
function bonusVowels(word) {
  var points = 0;
  for (var i = 0; i < word.length; i++) {
    var c = word.charAt(i).toLowerCase();
    // add 3 points for vowel
    if (c == "q" || c == "z" || c == "i" || c == "o" || c == "u") {
      points += 3;
      // add 0 points for spaces
    } else if (c == " ") {
      points += 0;
      // add 1 point for consonant
    } else {
      points += 1;
    }
  }
  return points;
}

// Scrabble Score function
function scrabbleScore(word, newPointStructure) {
  var points = 0;
  for (var i = 0; i < word.length; i++) {
    var c = word.charAt(i).toLowerCase();
    // get points and add
    if (c == "q" || c == "z") {
      points += 10;
    } else if (c == "j" || c == "x") {
      points += 8;
    } else if (c == "k") {
      points += 5;
    } else if (c == "f" || c == "h" || c == "v" || c == "w" || c == "y") {
      points += 4;
    } else if (c == "b" || c == "c" || c == "m" || c == "p") {
      points += 3;
    } else if (c == "d" || c == "g") {
      points += 2;
      // add 0 points for spaces
    } else if (c == " ") {
      points += 0;
      // add 1 point for consonant
    } else {
      points += 1;
    }
    //couldnt get this way to interate so I improvised.
    //points += parseInt(newPointStructure[c]);
  }
  return points;
}

// Create your scoringAlgorithms array here:
// objects of 3 scoring options
var scoringOption1 = {
  name: "Scrabble",
  description: "Scrabble Algorithm",
  scoreFunction: scrabbleScore,
};

var scoringOption2 = {
  name: "Simple Score",
  description: "Simple Score Algorithm",
  scoreFunction: simpleScore,
};

var scoringOption3 = {
  name: "Bonus Vowels",
  description: "Bonus Vowels Algorithm",
  scoreFunction: bonusVowels,
};

// create the array
var scoringAlgorithms = [scoringOption1, scoringOption2, scoringOption3];

// Call the runProgram function here:
runProgram();
