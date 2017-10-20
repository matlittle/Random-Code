var time0, time1, iter = 0;

$("#prime-factor").click( function() {
	$("#content").empty();

	var inputNum = parseInt($("#input-num").val());

	if(validateInput(inputNum)){

		setTimeout(function() {
			var factors = findPrimeFactors1(inputNum);
			buildDisplay1(factors, Math.ceil(time1 - time0));
		}, 100);

	}else {
		$("#content").text("Enter a valid number, which is greater than zero")
	}
});


$("#prime-factor-2").click( function() {
	$("#content").empty();

	var inputNum = parseInt($("#input-num-2").val());

	if(validateInput(inputNum)){

		setTimeout(function() {
			var factors = findPrimeFactors1(inputNum);
			buildDisplay1(factors, Math.ceil(time1 - time0));
		}, 100);

	}else {
		$("#content-2").text("Enter a valid number, which is greater than zero")
	}
});


function findPrimeFactors1(number) {

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

		// check if number is prime
		for(var i = 3; i <= num; i += 2) {
			var isPrime = true;

			for(var k = 0; k < primes.length; k += 1){
				iter += 1;

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
			iter += 1;
			if(number % prime === 0) {
				factors.add(prime);
			}
		});

		return factors;
	}
}

function findPrimeFactors2(number) {

	if(number === 1) {
		return null;
	}

	// start with input number, empty set, and beginning prime number, 2.
	var factors = new Set();
	
	// use 2 as start of prime arr.
	var primes = [2]; 


	testPrime();

	function testPrime() {
		// get last number of prime array
		var currPrime = primes[primes.length - 1];
		// divide number to check by prime,
		// if it's a factor
		if(number % currPrime === 0)
			// store quotient
			var newNum = number/currPrime;
			// check if the quotient can be divided by prime as well
			while(newNum % currPrime === 0 && newNum > currPrime) {
				// store new quotient if it can be, repeat
				newNum /= currPrime;
			}
			
			// add prime to the set when no longer divisible
			factors.add(currPrime);
			// if number to check is equal to prime we're checking against
			if(newNum === currPrime){
				// we've reached end of factoring
				return factors;
			}
	}

	// if not divisible by prime, 
	findNextPrime();
		// looping from the last number in the prime arr + 1
		// find next prime (number not divisible by any other prime)
		// restart division check 

	function

}

function validateInput(num) {
	if(typeof num === 'number' && num > 0){
		return true;
	} else {
		return false;
	}
}


function buildDisplay1(set, time) {
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

	$("#content").append(displaySet).append("<br>");
	$("#content").append(`Time to complete: ${displayTime}`).append("<br>");
	$("#content").append(`Iterations: ${iter}`);
}

