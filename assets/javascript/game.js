// Week 3 coding boot camp homework. Hangman game.

// variables
var dictionary = ["ARGENTINA", "BOLIVIA", "BRAZIL", "CHILE", "COLOMBIA", "ECUADOR", "GUYANA", "PARAGUAY", "PERU", "SURINAME", "URUGUAY", "VENEZUELA"];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wins = 0;
var lastAnswer = "none";
var remainingGuesses = 12;
var arrayWrongGuesses = []
var answer = "";
var arrayAnswer = [];
var arrayCorrectGuesses = [];
var correctGuesses = "";
var gameOver = false;
var imgSrc = "assets/images/none.png";

// function to reset the game
function resetGame() {

	// reset remaining guesses and wrong guesses
	remainingGuesses = 12;
	arrayWrongGuesses = [];

	// choose a new word as the answer
	var randomNumber = Math.floor(Math.random()*dictionary.length);
	answer = dictionary[randomNumber];
	
	// put the letters for the answer in an array
	arrayAnswer = answer.split("");

	// reset the array for correct guesses to all blanks
	arrayCorrectGuesses = [];

	for (var i = 0; i < answer.length; i++) {
		arrayCorrectGuesses.push("_");
	}

	correctGuesses = arrayCorrectGuesses.join("");
	
	// set game over to false
	gameOver = false;

	// update the game on screen
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("current-word").innerHTML = correctGuesses
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
	document.getElementById("letters-guessed").innerHTML = arrayWrongGuesses;
	document.getElementById("last-answer").innerHTML = lastAnswer;
	
	// update the image on screen to match the last answer
	imgSrc = "assets/images/" + lastAnswer + ".png"
	document.getElementById("flag-image").src = imgSrc;

} // end of resetGame function


// start of the game
// reset the game to initialise it
resetGame();

// user enters a guess by pressing a key
document.onkeyup = function(event) {

	// store key press as a variable and convert to upper case
	var guess = event.key;
	guess = guess.toUpperCase();

	// initialise correct guess and set it to false
	var isCorrectGuess = false;

	// check that guess is a letter
	if (alphabet.indexOf(guess) < 0) {

		alert("Your guess is not a letter, please try again");
	}

	// if the guess is a letter
	else {

		// check if the letter has been guessed before
		if (arrayWrongGuesses.indexOf(guess) >= 0 || arrayCorrectGuesses.indexOf(guess) >= 0) {
			alert("You have already guessed " + guess + ", please try again.");
		}

		// if the letter has not been guessed before
		else {

			// for each letter in the answer
			for (var i = 0; i < answer.length; i++) {

				// check if current guess is in the answer	
				if (guess === arrayAnswer[i]) {

					// if it is, put the letter in the current word being shown
					arrayCorrectGuesses[i] = guess;
					correctGuesses = arrayCorrectGuesses.join("");
										
					// set correct guess to true
					isCorrectGuess = true;

					//show the results on screen
					document.getElementById("current-word").innerHTML = correctGuesses;

				}
			}
				
			// if the current guess is not in the answer
			if (isCorrectGuess == false) {

				// reduce the number of guesses remaining by 1
				remainingGuesses = remainingGuesses - 1;
				

				// show the letter as already guessed
				arrayWrongGuesses.push(guess);
				
				// show the results on screen
				document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
				document.getElementById("letters-guessed").innerHTML = arrayWrongGuesses;
			}
		}
	}

	// check if the whole word has been guessed
	if (correctGuesses == answer) {
		wins = wins +1;
		lastAnswer = answer;
		alert(answer + " is the right answer!");
		resetGame();
	}

	// check if remaining guesses is zero
	if (remainingGuesses == 0) {
		alert("Sorry, no more guesses remaining. The correct answer was " + answer + ".");
		lastAnswer = answer;
		resetGame();
	}

}; // end of keyup function

// end of the game