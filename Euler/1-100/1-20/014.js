/*
  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains
  10 terms. Although it has not been proved yet (Collatz Problem), it is thought
  that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?
*/
function collatz(num, chain) {
    if (chain === void 0) { chain = 0; }
    if (num === 1)
        return chain;
    if (num % 2 === 0) {
        return collatz(num / 2, chain + 1);
    }
    else {
        return collatz((num * 3) + 1, chain + 1);
    }
}
function findLongestCollatzChain(max) {
    var highest = 0;
    for (var i = 1; i < max; i++) {
        var chain = collatz(i);
        if (i % 50000 === 0)
            console.log("Index: " + i + "  Chain: " + chain);
        if (chain > highest) {
            highest = chain;
            console.log("New Highest: " + i);
        }
    }
    return highest;
}
console.log(findLongestCollatzChain(1000000));
