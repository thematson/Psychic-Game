var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
		"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesMade = [];

document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).
		toLowerCase();

		console.log(userguess);

	var computerGuess = options[Math.floor(Math.random()*options.
		length)];

	console.log(computerGuess);

	for (i = 0; i < options.length; i++) {
		if (userguess==computerGuess) {
			wins++;
		}
		if (userguess !== computerGuess) {
			if (guessesLeft>0) {
			guessesLeft--;
			guessesMade.push(userguess);
			else {
				losses++;
			}
			}
		}
	}
	}
