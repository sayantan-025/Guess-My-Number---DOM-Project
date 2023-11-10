"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess);

	if (!guess) {
		document.querySelector(".message").textContent = "⛔ No Number!";
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "🥳 Correct Number!";
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundImage =
			"radial-gradient( circle farthest-corner at 10% 20%,  rgba(226,37,37,1) 0%, rgba(211,49,49,1) 82.8% )";

		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
	} else if (guess != secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent =
				guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "🥴 You Lost the Game!";
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector("body").style.backgroundImage =
		"radial-gradient(\n\t\tcircle 976px at 50% 35%,\n\t\trgba(11, 27, 103, 1) 0%,\n\t\trgba(16, 66, 157, 1) 0%,\n\t\trgba(11, 27, 103, 1) 17.3%,\n\t\trgba(11, 27, 103, 1) 58.8%,\n\t\trgba(11, 27, 103, 1) 71.4%,\n\t\trgba(16, 66, 157, 1) 100.2%,\n\t\trgba(187, 187, 187, 1) 100.2%\n\t)";
});
