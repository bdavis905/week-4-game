
var green, orange, blue, purple;
var randomNumber;
var wins = 0;
var losses = 0;
var total;

function startGame() {
	green = Math.floor((Math.random() * 12) + 1);
	orange = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	purple = Math.floor((Math.random() * 12) + 1);
	randomNumber = Math.floor((Math.random() * 102) + 19);
	total = 0;

	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " + losses);
	$("#randomNumber").html(randomNumber);
	$("#score").html(total);
}

function gameresult() {
	if (total > randomNumber) {
		losses++;
		startGame();
	}

	if (total == randomNumber) {
		wins++;
		startGame();
	}
}


startGame();

$(".crystal").on("click", function () {
	var pressed = $(this).attr("value");
	console.log(pressed);
	if (pressed == "green") {
		total += green;
	} else if (pressed == "orange") {
		total += orange;
	} else if (pressed == "blue") {
		total += blue;
	} else if (pressed == "purple") {
		total += purple;
	} else {
		console.log("error");
	}

	$("#score").html(total);


	gameresult();
});


        
      


