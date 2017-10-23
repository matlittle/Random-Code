
$("#prime-factor").click( function() {
	$("#content-1").empty();

	var inputNum = parseInt($("#input-num-1").val());

	if(validateInput(inputNum)){

		var worker = new Worker("factor1.js");

		worker.onmessage = function(event) {
			var time1 = performance.now();
			buildDisplay(event.data, Math.ceil(time1 - time0), "1");
		}

		var time0 = performance.now();
		worker.postMessage(inputNum);

	}else {
		$("#content-1").text("Enter a valid number, which is greater than zero")
	}
});


$("#prime-factor-2").click( function() {
	$("#content-2").empty();

	var inputNum = parseInt($("#input-num-2").val());

	if(validateInput(inputNum)){

		var worker = new Worker("factor2.js");

		worker.onmessage = function(event) {
			var time1 = performance.now();
			buildDisplay(event.data, Math.ceil(time1 - time0), "2")
		}

		var time0 = performance.now();
		worker.postMessage(inputNum);

	}else {
		$("#content-2").text("Enter a valid number, which is greater than zero")
	}
});


function validateInput(num) {
	if(typeof num === 'number' && num > 0){
		return true;
	} else {
		return false;
	}
}


function buildDisplay(set, time, ver) {
	$(`#content-${ver}`).empty();

	var displaySet = "{";

	if(set !== null) {
		set.forEach(function(entry) {
			displaySet += `${entry}, `;
		});

		displaySet = displaySet.slice(0, -2); 
	}

	displaySet += "}";

	if(time === 1) {
		var displayTime = `1 millisecond`;
	} else {
		var displayTime = `${time} milliseconds`;
	}

	$(`#content-${ver}`).append(displaySet).append("<br>");
	$(`#content-${ver}`).append(`Time to complete: ${displayTime}`);
}