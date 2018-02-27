/* 
2520 is the smallest number that can be divided by 
each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly 
divisible by all of the numbers from 1 to 20? 
*/

function smallestDivisible(num) {
  let bool = true;
  let newNum = num;

  while (bool) {
    bool = false
    for(let i = 1; i <= 20; i++) {
      if (newNum % i !== 0) {
        newNum += 20;
        bool = true;
        break;
      }
    }
  }

  return newNum;
}

console.log( `result: ${smallestDivisible(20)}` );

