var counter = 0;

function quickSort(arr, pvt = true) {

    counter++;
    console.log("counter: ", counter)

    if (arr.length > 1) {
        const mid = (pvt ? arr[0] : arr[arr.length - 1]);
        var lowArr = [];
        var highArr =[];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] <= mid) {
                lowArr.push( arr[i] );
            } else {
                highArr.push( arr[i] );
            }
        }

        return ( quickSort( lowArr, !pvt ).concat( quickSort( highArr, !pvt ) ) );
        
    } else {
        return arr;
    }
}


const testArr = [3,7,2,4,5,9,0,1,8]
console.log(testArr);
console.log( quickSort(testArr) );
