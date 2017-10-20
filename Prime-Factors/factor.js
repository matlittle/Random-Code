
$("#prime-factor").click( function() {
	var inputNum = parseInt($("#input-num").val());

	var factors = findPrimeFactors(inputNum);

	console.log("Factor Set:", factors);
	//console.log(factors);

	console.log(factors.length);
	for(var i = 0; i < factors.length; i += 1) {
		$("#content").append("test");
	}
	
});


function findPrimeFactors(number) {

	var possPrimes = getPossiblePrimes(number);

	return findFactors(possPrimes);


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

