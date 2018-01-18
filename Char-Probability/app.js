

var prob = loadStoredObj();

function loadStoredObj() {
	var storedProb = localStorage.getItem("charProb");

	if(storedProb){
		return storedProb;
	} else {
		return {};
	}
}


function getInput() {
	var input = $("#input-textarea").val().trim();

	updateProb(input);

	updateDisplay();
}

function updateProb(str) {

	for (var i = 0; i < str.length; i++) {
		var char = str[i].toUpperCase();
		/[\w]/;

		if(char.matches(/[\w]|_/) ) {
			prob[char] = prob[char] + 1;
		}
	}
}

function updateDisplay() {
	$("content").text(localStorage.charProb);
}


$("#input-btn").click(getInput);
