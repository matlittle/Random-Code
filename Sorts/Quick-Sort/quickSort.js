var qCounter = 0;

function quickSort(arr, low = 0, high = false) {
  if (!high) {
    high = arr.length - 1;
  }

  if (low >= high) {
    return;
  }

  const pivot = arr[Math.floor((low + high) / 2)];

  let i = low;
  let j = high;

  while(i < j) {
    while(arr[i] < pivot) {
      i++;
      qCounter++;
    }

    while(arr[j] > pivot) {
      j--;
      qCounter++;
    }

    if(i < j) {
      qCounter++;
      swap(arr, i, j);
    }
  }

  quickSort(arr, low, i-1);
  quickSort(arr, j+1, high);
}

function swap(arr, lowIndex, highIndex) {
  let temp = arr[lowIndex];
  arr[lowIndex] = arr[highIndex];
  arr[highIndex] = temp;
}


function buildRandArr(len, l = 0, h = 99) {
  let tempArr = [];

  while (tempArr.length < len) {
    let rand = (Math.floor(Math.random() * (h - l) ) - l);

    if (tempArr.indexOf(rand) < 0) {
      tempArr.push(rand);
    }
  }

  return tempArr;
}



const qArr = buildRandArr(100, 0, 1000);

console.log(`Test array:  ${qArr}\n`);

quickSort(qArr);
console.log("Quick counter: ", qCounter);
console.log(`Sorted: ${qArr}\n`);


