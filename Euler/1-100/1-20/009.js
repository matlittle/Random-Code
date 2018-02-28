/* 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/



function pythagorean(a, b) {
  const c = Math.sqrt( (a**2) + (b**2) )
  return (a + b + c);
}

function checkTripWithOneStatic(staticNum, numToCheck) {
  for (let i = 1; i < 1000; i++) {
    if ( pythagorean(staticNum, i) === numToCheck ) {
      return i;
    }
  }

  return false;
}

function findTripThatEqualsArg(num) {
  for (let i = 1; i < 1000; i++) {
    let b = checkTripWithOneStatic(i, num);
    if ( b ) {
      return { a: i, b: b };
    }
  }
  return false;
}

function findPYTC(a, b) {
  return Math.sqrt( (a**2) + (b**2) )
}

let ab = findTripThatEqualsArg(1000);
let c = findPYTC(ab.a, ab.b);

console.log( ab.a, ab.b, c );
console.log( ab.a * ab.b * c);

