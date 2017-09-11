// Week 3 coding boot camp homework.

// initial variables
var dictionary = ["argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela"];
var wins = 0;
var remainingGuesses = 12;
var arrayLettersGuessed = [];
var gameOver = false;

document.getElementById("wins").innerHTML = wins;
document.getElementById("remaining-guesses").innerHTML = remainingGuesses;


// choose a new word as the answer
var randomNumber = Math.floor(Math.random()*dictionary.length);
answer = dictionary[randomNumber];

console.log(answer);

// put the answer in an array
var arrayAnswer = answer.split("");

console.log(arrayAnswer);

// create an array for the current word, initially all blanks
var arrayCurrentWord = [];

for (var i = 0; i < answer.length; i++) {
	arrayCurrentWord.push("_");
}

// show the current word as a number of blanks on screen
var currentWord = arrayCurrentWord.join("");
document.getElementById("current-word").innerHTML = currentWord;

// enter guess
document.onkeyup = function(event) {

	// store key press as a variable
	var guess = event.key;
	console.log("key pressed: " + guess);

	// ensure correct guess is set to false
	var isCorrectGuess = false;

	// check that guess is a letter and convert to lower case
	if (guess.toLowerCase() != guess.toUpperCase()) {
		console.log("guess is a letter");
		guess = guess.toLowerCase();
		console.log("guess is " + guess);
	}
	
	else {
		alert("Your guess is not a letter, please try again");
	}

	// check if the letter has been guessed before
	if (arrayLettersGuessed.indexOf(guess) >= 0 || arrayCurrentWord.indexOf(guess) >= 0) {
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

				arrayCurrentWord[i] = guess;
				currentWord = arrayCurrentWord.join("");
				document.getElementById("current-word").innerHTML = currentWord;
				
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
			arrayLettersGuessed.push(guess);
			document.getElementById("letters-guessed").innerHTML = arrayLettersGuessed;
		}

		// check if the whole word has been guessed
		if (currentWord == answer) {
			wins = wins +1;
			document.getElementById("wins").innerHTML = wins;

			gameOver = true;
			console.log("Game Over: " + gameOver);
			// change image
		}

		// check if remaining guesses is zero
		if (remainingGuesses == 0) {
			gameOver = true;
			console.log("Game Over: " + gameOver + " no guesses left");
		}
	}

}; // end keyup

	

