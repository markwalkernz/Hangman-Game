// Week 3 coding boot camp homework.

// variables
var dictionary = ["argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela"];



// set number of wins to zero
var wins = 0;

document.getElementById("wins").innerHTML = wins;



// press any key to start

// reset number of guesses remaining
var remainingGuesses = 12;

document.getElementById("remaining-guesses").innerHTML = remainingGuesses;

// reset the array of letters already guessed
arrayLettersGuessed = [];

console.log(arrayLettersGuessed);

// choose a new word as the answer
var randomNumber = Math.floor(Math.random()*dictionary.length);
answer = dictionary[randomNumber];

console.log(randomNumber);
console.log(answer);

// put the answer in an array
var arrayAnswer = answer.split("");

console.log(arrayAnswer);

// create an array for the current word, initially all blanks
var arrayCurrentWord = [];

for (var i = 0; i < answer.length; i++) {
	arrayCurrentWord.push("_");
}

// show the right number of blanks on screen

var currentWord = arrayCurrentWord.join(" ");

document.getElementById("current-word").innerHTML = currentWord;


// listen for key press
document.addEventListener("keyup", function(event) {

	// store key press as guess
	var keyPress = event.key;
	console.log("key pressed: " + keyPress);

	// check that guess is a letter and convert to lower case
	if (keyPress.toLowerCase() != keyPress.toUpperCase()) {
		console.log("guess is a letter");
		guess = keyPress.toLowerCase();
		console.log("guess is " + guess);
	}

	else {
		alert("Your guess is not a letter, please try again");
	}

	console.log(guess);

	// check if the letter has been guessed before
	if (arrayLettersGuessed.indexOf(guess) < 0) {
		console.log("not guessed yet");
	}

	else {
		console.log("already guessed");
	}

});




	// store the letter as the current guess


// if current guess is in the answer

	// show the letter in the correct place on screen

	// else

		// reduce the number of guesses remaining by 1
		// show the letter as already guessed


// if all letters have been guessed

	// increase wins by 1

	// change image


//check if guess is a valid character
// function isLetter(c) {
//	return c.toLowerCase() != c.toUpperCase();
// }
