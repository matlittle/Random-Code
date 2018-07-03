/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/
function twoToGivenPower(power) {
    if (power === 0)
        return '1';
    if (power === 1)
        return '2';
    let newStr = '2';
    for (let i = 2; i <= power; i++) {
        newStr = stringAddition(newStr, newStr);
    }
    return newStr;
}
function stringAddition(str1, str2) {
    let newString = "";
    let longStr = str1.length >= str2.length ? str1 : str2;
    const longLen = longStr.length - 1;
    let shortStr = str1.length < str2.length ? str1 : str2;
    const shortLen = shortStr.length - 1;
    let carryOver = 0;
    for (let i = 0; i < longStr.length; i++) {
        let sumStr;
        if (shortStr.length - i >= 0) {
            sumStr = (carryOver + parseInt(shortStr[shortLen - i]) + parseInt(longStr[longLen - i])).toString();
        }
        else {
            sumStr = (carryOver + parseInt(longStr[longLen - i])).toString();
        }
        newString = sumStr[sumStr.length - 1] + newString;
        carryOver = sumStr.length > 1 ? parseInt(sumStr[0]) : 0;
    }
    newString = (carryOver > 0 ? carryOver.toString() : "") + newString;
    return newString;
}
function getSumOfNumbersInString(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}
const twoTo1000 = twoToGivenPower(1000);
console.log(twoTo1000);
console.log("===================");
console.log(getSumOfNumbersInString(twoTo1000));
