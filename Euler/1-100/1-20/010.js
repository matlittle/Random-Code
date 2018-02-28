/* 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function findPrimesUnderNum(num) {
  const primes = [2, 3, 5, 7];

  while (true) {
    let nextPrime = findNextPrime( primes )
    if (nextPrime > num) {
      break;
    } 
    primes.push( nextPrime );
    if (primes.length % 1000 === 0) console.log(primes[primes.length - 1]);
  }

  return primes;
}

function findNextPrime(primeArray) {
  let notPrime = true;
  let checkNum = primeArray[primeArray.length - 1];

  while(notPrime) {
    notPrime = false
    checkNum += 2;

    for (let i = 0; i < primeArray.length; i++) {
      if (checkNum % primeArray[i] === 0) {
        notPrime = true;
        break;
      }
    }
  }

  return checkNum;
}

let primeArr = findPrimesUnderNum(2000000);

let sum = 0;
primeArr.forEach(prime => sum += prime);

console.log( sum );
