function getTriangleNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
function getNumberOfFactors(num) {
    let factors = 1;
    let inc = num % 2 === 0 ? 1 : 2;
    for (let i = 1; i <= Math.ceil(num / 2); i += inc) {
        if (num % i === 0)
            factors++;
    }
    return factors;
}
function findTriangleNumberWithNFactors(num) {
    for (let i = 1; true; i++) {
        let triangleNumber = getTriangleNumber(i);
        let factorCount = getNumberOfFactors(triangleNumber);
        if (i % 100 === 0)
            console.log(`num: ${i}   tNum: ${triangleNumber}   factors: ${factorCount}`);
        if (factorCount > num)
            return triangleNumber;
    }
}
let solution = findTriangleNumberWithNFactors(500);
console.log(solution);
console.log(getNumberOfFactors(solution));
