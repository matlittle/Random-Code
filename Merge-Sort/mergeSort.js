

// starting with a list
    // split list in half continually, until it can no longer be split

    // combine items recursively with next highest, ordering items when combining



function mergeSort(arr) {
    let splitArr = buildStartingArray(arr);

    compare
}

function buildStartingArray(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i += 2) {
        let tempArr = [];

        if(arr[i+1]) {
            if(arr[i] < arr[i+1]) {
                return ( [ arr[i], arr[i+1] ] );
            } else {
                return ( [ arr[i+1], arr[i] ] );
            }
        }

        newArr.push(tempArr);
    }

    return newArr;
}


const arr = [4, 3, 7, 1, 9, 2, 8, 6, 5];

mergeSort(arr);


