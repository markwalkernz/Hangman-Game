// Week 3 coding boot camp homework.

// variables
var dictionary = ["argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela"];

// set number of wins to zero and show on screen
var wins = 0;
document.getElementById("wins").innerHTML = wins;

		// reset number of guesses remaining
		var remainingGuesses = 12;

		document.getElementById("remaining-guesses").innerHTML = remainingGuesses;

		// reset the array of letters already guessed
		arrayLettersGuessed = [];

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

		var currentWord = arrayCurrentWord.join("");

		document.getElementById("current-word").innerHTML = currentWord;

		// enter guess
		document.addEventListener("keyup", function(event) {

			// store key press as guess
			keyPressed = event.key;
			console.log("key pressed: " + keyPressed);

				// check that guess is a letter and convert to lower case
				if (keyPressed.toLowerCase() != keyPressed.toUpperCase()) {
					console.log("guess is a letter");
					guess = keyPressed.toLowerCase();
					console.log("guess is " + guess);
				}

				else {
					alert("Your guess is not a letter, please try again");
				}

				console.log(guess);

				// check if the letter has been guessed before
				if (arrayLettersGuessed.indexOf(guess) >= 0) {
					alert("already guessed " + guess + ", please try again.");
				}

				else {
					console.log("not guessed yet");

					var isCorrectGuess = false;

					console.log(isCorrectGuess);

					// for each letter in the answer
					for (var i = 0; i < answer.length; i++) {

						// check if current guess is in the answer	
						if (guess === arrayAnswer[i]) {

							// put the letter in the current word being shown
							arrayCurrentWord[i] = guess;
							currentWord = arrayCurrentWord.join("");
							document.getElementById("current-word").innerHTML = currentWord;
							
							// set correct guess to true
							isCorrectGuess = true;
						}
					}

					// if guess was not correct
					if (isCorrectGuess == false) {

						// reduce the number of guesses remaining by 1
						remainingGuesses = remainingGuesses - 1;
						document.getElementById("remaining-guesses").innerHTML = remainingGuesses;


						// show the letter as already guessed
						arrayLettersGuessed.push(guess);
						document.getElementById("letters-guessed").innerHTML = arrayLettersGuessed;

					}

				}


}); // end key press
	
// if all letters have been guessed wins = wins + 1
// change image
