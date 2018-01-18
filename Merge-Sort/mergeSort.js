

// starting with a list
    // split list in half continually, until it can no longer be split

    // combine items recursively with next highest, ordering items when combining



function mergeSort(arr) {
    let mergeArr = [];
    arr.forEach(el => {
        mergeArr.push( [el] );
    });

    console.log(mergeArr);
}


const arr = [4, 3, 7, 9, 2, 6, 5];

mergeSort(arr);


