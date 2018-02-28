function getTriangleNumber(num: number): number {
  let sum: number = 0;
  for (let i: number = 1; i <= num; i++ ) {
    sum += i;
  }
  return sum;
}

function getNumberOfFactors(num: number): number {
  let factors: number = 1;
  let inc: number = num % 2 === 0 ? 1 : 2;
  for (let i: number = 1; i <= Math.ceil(num/2); i += inc ) {
    if (num % i === 0) factors++;
  }
  return factors;
}

function findTriangleNumberWithNFactors(num: number): number {
  for (let i: number = 1; true; i++) {
    let triangleNumber: number = getTriangleNumber(i);
    let factorCount: number = getNumberOfFactors(triangleNumber);
    if (i % 100 === 0) console.log(`num: ${i}   tNum: ${triangleNumber}   factors: ${factorCount}`);
    if(factorCount > num) return triangleNumber;
  }
}

let solution: number = findTriangleNumberWithNFactors(500);
console.log( solution );
console.log( getNumberOfFactors(solution) );
