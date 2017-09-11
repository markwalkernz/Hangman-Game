// Week 3 coding boot camp homework.

// variables
var dictionary = ["argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela"];
var wins = 0;
var lastAnswer = "";
var remainingGuesses = 12;
var arrayWrongGuesses = []
var answer = "";
var arrayAnswer = [];
var arrayCorrectGuesses = [];
var correctGuesses = "";
var gameOver = false;

// function to reset the game
function resetGame() {

	remainingGuesses = 12;

	arrayWrongGuesses = [];

	// choose a new word as the answer
	var randomNumber = Math.floor(Math.random()*dictionary.length);
	answer = dictionary[randomNumber];
	
	// put the answer in an array
	arrayAnswer = answer.split("");

	// create an array for correct guesses, initially all blanks
	arrayCorrectGuesses = [];

	for (var i = 0; i < answer.length; i++) {
		arrayCorrectGuesses.push("_");
	}

	correctGuesses = arrayCorrectGuesses.join("");
	
	// set game over to false
	gameOver = false;

	// update the game on screen
	console.log(answer);
	console.log(arrayAnswer);
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("current-word").innerHTML = correctGuesses
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
	document.getElementById("letters-guessed").innerHTML = arrayWrongGuesses;
}

// reset the game to initialise it
resetGame();

// enter guess
document.onkeyup = function(event) {

	// store key press as a variable
	var guess = event.key;
	console.log("key pressed: " + guess);

	// initialise correct guess and set it to false
	var isCorrectGuess = false;

	// check that guess is a letter and convert to lower case
	if (guess.toLowerCase() != guess.toUpperCase()) {
		console.log("guess is a letter");
		guess = guess.toLowerCase();
		console.log("guess is " + guess);

		// then check if the letter has been guessed before
		if (arrayWrongGuesses.indexOf(guess) >= 0 || arrayCorrectGuesses.indexOf(guess) >= 0) {
			alert("already guessed " + guess + ", please try again.");
		}

		// if the letter has not been guessed before
		else {
			console.log("not guessed yet");

			// for each letter in the answer
			for (var i = 0; i < answer.length; i++) {

				// check if current guess is in the answer	
				if (guess === arrayAnswer[i]) {

					// if it is, put the letter in the current word being shown
					arrayCorrectGuesses[i] = guess;
					correctGuesses = arrayCorrectGuesses.join("");
					document.getElementById("current-word").innerHTML = correctGuesses;
					
					// set correct guess to true
					isCorrectGuess = true;
				}
			}
				
			// if the current guess is not in the answer
			if (isCorrectGuess == false) {
				// reduce the number of guesses remaining by 1
				remainingGuesses = remainingGuesses - 1;
				document.getElementById("remaining-guesses").innerHTML = remainingGuesses;

				// show the letter as already guessed
				arrayWrongGuesses.push(guess);
				document.getElementById("letters-guessed").innerHTML = arrayWrongGuesses;
			}
		}
	}

	else {
		alert("Your guess is not a letter, please try again");
	}

	// check if the whole word has been guessed
	if (correctGuesses == answer) {
		wins = wins +1;
		lastAnswer = answer;
		resetGame();
		// change image
	}

	// check if remaining guesses is zero
	if (remainingGuesses == 0) {
		alert("Sorry, no more guesses remaining. The correct answer was " + answer + ".");
		resetGame();
	}

}; // end keyup