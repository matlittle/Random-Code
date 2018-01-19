var qCounter = 0;
var bCounter = 0;

function quickSort(arr, low, high) {

	const pivotIndex = Math.floor(arr.length / 2);

	let i = low;
	let j = high;

	while(i < j) {

		while(arr[i] < arr[pivotIndex]) {
			i++;
		}

		while(arr[j] > arr[pivotIndex]) {
			j--;
		}

		if(i < j) {
			if(i === pivotIndex) {
				pivotIndex = j;
			} else if (j === pivotIndex) {
				pivotIndex = i;
			}
			swap(arr, i, j);
		}
	}

	console.log(`arr: , ${arr}`);
	console.log(`low: , ${low}`);
	console.log(`pivotIndex: , ${pivotIndex}`);
	console.log(`high: , ${high}`);


	quickSort(arr, low, pivotIndex-1);
	quickSort(arr, pivotIndex+1, high);
}

function swap(arr, lowIndex, highIndex) {
	let temp = arr[lowIndex];
	arr[lowIndex] = arr[highIndex];
	arr[highIndex] = arr[lowIndex];
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


function buildRandArr(len) {
	let tempArr = [];

	for (let i = 0; i < len; i++) {
		tempArr.push(Math.floor(Math.random() * 100) + 1);
	}

	return tempArr;
}



const testArr = buildRandArr(10);

console.log("Test array: ", testArr);

quickSort(testArr);
console.log("Quick counter: ", qCounter);


bubbleSort(testArr)
console.log("Bubble counter: ", bCounter);
