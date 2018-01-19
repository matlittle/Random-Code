var qCounter = 0;
var mCounter = 0;
var bCounter = 0;



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



function mergeSort(arr, step = 2) {

  if (step > arr.length * 2) {
    return arr;
  }

  for (let i = 0; i < arr.length; i += step) {
    let x = 0;
    let y = step/2;

    var newArr = [];

    while ( (x < step/2 && arr[i+x] !== undefined ) || (y < step && arr[i+y] !== undefined) ) {
      mCounter++;

      if (y >= step || arr[i+y] === undefined) {
        newArr.push( arr[i+x] );
        x++;
        continue;
      }
      
      if (x >= step/2 || arr[i+x] === undefined) {
        newArr.push( arr[i+y])
        y++;
        continue;
      }
      
      if(arr[i+x] < arr[i+y]) {
        newArr.push( arr[i+x] );
        x++;
      } else {
        newArr.push( arr[i+y])
        y++;
      }
    }

    let checkLen = arr.length;
    arr = arr.slice(0, i).concat(newArr).concat( arr.slice(i+step, checkLen) );
  }

  return mergeSort(arr, step*2);
}



function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      bCounter++;

      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return arr;
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



var qArr = buildRandArr(500, 0, 1000);
var mArr = [];
var bArr = [];

qArr.forEach(el => { bArr.push(el); } );
qArr.forEach(el => { mArr.push(el); } );

//console.log(`Test array:  ${qArr}\n`);

quickSort(qArr);
console.log(`Quick counter:  ${qCounter}\n`);
console.log(`Sorted: ${qArr}\n`);

mArr = mergeSort(mArr);
console.log(`Merge counter: ${mCounter}\n`);
console.log(`Sorted: ${mArr}\n`);


bubbleSort(bArr);
console.log(`Bubble counter:  ${bCounter}\n`);
console.log(`Sorted: ${bArr}\n`);















