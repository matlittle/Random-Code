
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

		var time0 = performance.now();
		var time1 = performance.now();

		var defObj = $.Deferred();

		defObj.done(function(e) {
			console.log(e);
		});

		defObj.promise(findPrimeFactors2);

		defObj.resolve(inputNum);


		/*var factors = findPrimeFactors2(inputNum);
		var time1 = performance.now();
		buildDisplay(factors, Math.ceil(time1 - time0), "2")*/

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

	console.log(set);

	var displaySet = "{";

	/*if(set !== null) {
		set.forEach(function(entry) {
			displaySet += `${entry}, `;
		});

		displaySet = displaySet.slice(0, -2); 
	}*/

	displaySet += "}";

	if(time === 1) {
		var displayTime = `1 millisecond`;
	} else {
		var displayTime = `${time} milliseconds`;
	}

	$(`#content-${ver}`).append(displaySet).append("<br>");
	$(`#content-${ver}`).append(`Time to complete: ${displayTime}`);
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

	testPrime(primes[primes.length - 1], newNum);

	while(newNum > 1) {

		var newPrime = findNextPrime(primes[primes.length - 1]);

		testPrime(newPrime, newNum);

	} 

	return factors;


	// test if last prime in primes arr is a factor
	function testPrime(prime, number) {
		// divide number to check by given prime
		if(number % prime === 0) {
			// if it's a factor store quotient
			newNum = number/prime;
			// check if the quotient can be divided again
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
		// increment last prime by 1 if it was 2,
		if(lastPrime === 2) { 
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
					break;
				}
			}

			if(isPrime){
				primes.push(nextCheck);
				break;
			}

			nextCheck += 2;
		}

		return nextCheck;
	}
}