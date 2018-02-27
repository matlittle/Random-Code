function largestPalindrome(a, b, largest = 0) {
  console.log(a, b, largest);
  let product = a * b;

  if ( product < largest) {
    return largest;
  }

  while( product > largest && b > 0 ) {

    if(isPalindrome(product)) {
      largest = product;
      return largestPalindrome(a-1, a-1, largest);
    }

    b--;
    product = a * b;
  }

  return largestPalindrome(a-1, a-1, largest);
}

function isPalindrome(num) {
  const str = num.toString();

  for(let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[ (str.length-1) - i ]) {
      return false;
    }
  }

  return true;
}

console.log( largestPalindrome(999, 999) );


