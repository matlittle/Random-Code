var qCounter = 0;
var bCounter = 0;

function quickSort(arr, pvt = true) {

    if (arr.length <= 1) {
        return arr;
    }

    const mid = (pvt ? arr[0] : arr[arr.length - 1]);
    let lowArr = [];
    let highArr =[];

    for(let i = 0; i < arr.length; i++) {
        qCounter++;

        if(arr[i] <= mid) {
            lowArr.push( arr[i] );
        } else {
            highArr.push( arr[i] );
        }
    }

    return quickSort( lowArr, !pvt ).concat( quickSort( highArr, pvt ) );

}

function bubbleSort(arr) {
    let sorted = false;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i < arr.length - 1; i++) {
            bCounter++;

            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }
    }

    return arr;
}

function buildRandArr(len) {
    let tempArr = [];

    for(let i = 0; i < len; i++) {
        tempArr.push( Math.floor( Math.random() * 100 ) + 1 );
    }

    return tempArr;
}


const testArr = buildRandArr(10);

quickSort(testArr);
console.log("Quick counter: ", qCounter);


bubbleSort(testArr)
console.log("Bubble counter: ", bCounter);
