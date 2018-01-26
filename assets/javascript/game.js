//onclick id's crystals red, yellow, purple, blue
//other id's randomNumber, wins, losses, total

//variables

//Added link to the jQuery Library

var green, orange, blue, purple;
var randomNumber;
var wins = 0;
var losses = 0;
var total;

function startGame () {
        green = Math.floor((Math.random() * 12) + 1);
        orange = Math.floor((Math.random() * 12) + 1);
        blue = Math.floor((Math.random() * 12) + 1);
        purple = Math.floor((Math.random() * 12) + 1);
        randomNumber = Math.floor((Math.random() * 102) + 19);
        total = 0;

        // update the html for the game board
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
		$("#randomNumber").html(randomNumber);
		$("#score").html(total);
}

// function to check if user has won or lost
	// increment wins / losses in either case
	// and then re-initialize variables for new round
	// if user hasn't won or lost then nothing happens
	function gameresult() {
		// check if user has lost
		if (total > randomNumber) {
			losses++;
			console.log("user lost");
			startGame();
		}

		// check if user has won
		if (total == randomNumber) {
			wins++;
			console.log("user won");
			startGame();
		}
	}

	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("greenValue: ", green + " orangeValue: " + orange + " blueValue: " + blue + " purpleValue: " + purple);
		console.log("randomNumber: " + randomNumber + " total: " + total);
		console.log("----------------------------------");

	}


startGame();

// listen for clicks on any of the gems by targeting the gem class
	$(".crystal").on("click", function() {
		// each icon has a value attribute of green, orange, blue, or purple
		// use this attribute to identify which gem the user actually clicked
		var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
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
        // then update the html for the user score
        $("#score").html(total);
        
        // call the function to see if user has won or lost
        gameresult();
	});


        
      


