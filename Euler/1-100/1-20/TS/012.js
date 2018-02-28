function getTriangleNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
function getNumberOfFactors(num) {
    var factors = 1;
    var inc = num % 2 === 0 ? 1 : 2;
    for (var i = 1; i <= Math.ceil(num / 2); i += inc) {
        if (num % i === 0)
            factors++;
    }
    return factors;
}
function findTriangleNumberWithNFactors(num) {
    for (var i = 1; true; i++) {
        var triangleNumber = getTriangleNumber(i);
        var factorCount = getNumberOfFactors(triangleNumber);
        if (i % 100 === 0)
            console.log("num: " + i + "   tNum: " + triangleNumber + "   factors: " + factorCount);
        if (factorCount > num)
            return triangleNumber;
    }
}
var solution = findTriangleNumberWithNFactors(500);
console.log(solution);
console.log(getNumberOfFactors(solution));
