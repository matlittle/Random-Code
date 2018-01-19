
var mCounter = 0;

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



//var testArr = buildRandArr(21, 0, 100);

testArr = [11,19,40,14,43,22,78,73,49,17,68,28,25,30,18,94,56,91,75,20,80];

console.log(`Test array: ${testArr}\n`);

testArr = mergeSort(testArr);

console.log(`\nMerge counter: ${mCounter}`)
console.log(`Sorted array: ${testArr}`);

