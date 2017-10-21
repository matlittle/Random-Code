$("#prime-factor").click( function() {
	$("#content-1").empty();

	var inputNum = parseInt($("#input-num-1").val());

	if(validateInput(inputNum)){

		setTimeout(function() {
			var time0 = performance.now();
			var factors = findPrimeFactors1(inputNum);
			var time1 = performance.now();
			buildDisplay(factors, Math.ceil(time1 - time0), "1");
		}, 100);

	}else {
		$("#content-1").text("Enter a valid number, which is greater than zero")
	}
});


$("#prime-factor-2").click( function() {
	$("#content-2").empty();

	var inputNum = parseInt($("#input-num-2").val());

	if(validateInput(inputNum)){

		setTimeout(function() {
			var time0 = performance.now();
			var factors = findPrimeFactors2(inputNum);
			var time1 = performance.now();
			buildDisplay(factors, Math.ceil(time1 - time0), "2");
		}, 100);

	}else {
		$("#content-2").text("Enter a valid number, which is greater than zero")
	}
});


function findPrimeFactors1(number) {

	var possPrimes = getPossiblePrimes(number);
	var foundFactors = findFactors(possPrimes);

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

function findPrimeFactors2(number) {

	if(number === 1) {
		return null;
	}

	// start with input number, empty set, and beginning prime number, 2.
	var factors = new Set();
	var newNum = number;
	
	// use 2 as start of prime arr.
	var primes = [2]; 

	do {

		var checkPrime = primes[primes.length - 1];

		testPrime(checkPrime, newNum);

		findNextPrime(checkPrime);

	} while(newNum > 1)


	return factors;


	// test if last prime in primes is a factor
	function testPrime(prime, number) {
		// divide number to check by prime,
		// if it's a factor
		if(number % prime === 0) {
			// store quotient
			newNum = number/prime;
			// check if the quotient can be divided by prime as well
			while(newNum % prime === 0 && newNum >= prime) {
				// store new quotient if it can be, repeat
				newNum /= prime;
			}
			
			// add prime to the set when no longer divisible
			factors.add(prime);
		}
	}
 

	// find next prime (number not divisible by any other prime)
	function findNextPrime(lastPrime) {
		// looping from the last number in the prime arr + 1
		if(lastPrime % 2 === 0) { 
			var nextCheck = lastPrime + 1; 
		}else {
			// or + 2 if last prime was odd
			var nextCheck = lastPrime + 2;
		}

		// check if number is prime
		while (true) {
			var isPrime = true;

			for(var k = 0; k < primes.length; k += 1){
				if(nextCheck % primes[k] === 0) {
					isPrime = false;
				}
			}

			if(isPrime){
				primes.push(nextCheck);
				break;
			}

			nextCheck += 2;
		}
	}
}

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

	if(typeof set !== undefined){
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

