/* 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

function findPrimeByIndex(idx) {
  const primes = [2, 3, 5, 7];

  while (primes[idx-1] === undefined) {
    primes.push( findNextPrime( primes ) );
  }

  /* for(let i = 0; i < primes.length; i++) {
    console.log(`Prime # ${i+1}: ${primes[i]}`);
  } */

  return primes[idx-1];
}

function findNextPrime(primeArray) {
  let bool = true;
  let checkNum = primeArray[primeArray.length - 1];
  while(bool) {
    bool = false
    checkNum += 2;

    primeArray.forEach(prime => {
      if (checkNum % prime === 0) {
        bool = true;
      }
    });
  }

  return checkNum;
}

console.log( findPrimeByIndex(10001) );
