
$("#prime-factor").click( function() {

	loadingGif();

	var inputNum = parseInt($("#input-num").val());

	var time0, time1;

	if(validateInput(inputNum)){

		setTimeout(function() {
			var factors = findPrimeFactors(inputNum);
			console.log(time0, time1);
			buildDisplay(factors, Math.ceil(time1 - time0));
		}, 1000);

	}else {
		$("#content").text("Enter a valid number, which is greater than zero")
	}

});


function findPrimeFactors(number) {

	time0 = performance.now();
	var possPrimes = getPossiblePrimes(number);
	var foundFactors = findFactors(possPrimes);
	time1 = performance.now();

	return foundFactors;

	// get all the possible primes that could be factors of given number
	function getPossiblePrimes(num) {

		// 1 is not a prime number, therefore there are no primes
		if(num === 1) {
			return null;
		} 

		// start prime array with first prime number, 2
		var primes = [2];

		// check if number is 
		for(var i = 3; i <= num; i += 2) {
			var isPrime = true;

			for(var k = 0; k < primes.length; k += 1){
				if(primes[k] > i/2) { 
					break; 
				}

				if(i % primes[k] === 0) {
					isPrime = false;
				}
			}

			if(isPrime){
				primes.push(i);
			}
		}

		return primes;
	}

	// find primes
	function findFactors(arr) {
		var factors = new Set();

		arr.forEach(function(prime) {
			if(number % prime === 0) {
				factors.add(prime);
			}
		});

		return factors;
	}

}


function validateInput(num) {
	if(typeof num === 'number' && num > 0){
		return true;
	} else {
		return false;
	}
}

function loadingGif() {
	var gifUrl = "https://cdn-us-east.velaro.com/Content/Images/loading.gif"
	var gif = $("<img>").attr("src", gifUrl);

	$("#content").append(gif);
}

function buildDisplay(set, time) {
	$("#content").empty();

	var displaySet = "{";

	set.forEach(function(entry) {
		displaySet += `${entry}, `;
	});

	displaySet = displaySet.slice(0, -2) + "}"; 

	if(time === 1) {
		var displayTime = `1 millisecond`;
	} else {
		var displayTime = `${time} milliseconds`;
	}

	$("#content").append(displaySet).append("<br>")
	$("#content").append(`Time to complete: ${displayTime}`);
}

