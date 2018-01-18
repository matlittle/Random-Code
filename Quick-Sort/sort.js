
function quickSort(arr) {

    if (arr.length > 1) {
        const mid = Math.floor(arr.length-1 / 2);
        var lowArr = [];
        var highArr =[];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] <= mid) {
                lowArr.push( arr[i] );
            } else {
                highArr.push( arr[i] );
            }
        }

        console.log("lowArr: ", lowArr);
        console.log("highArr: ", highArr);

        return ( quickSort( lowArr ).concat( quickSort( highArr ) ) );
        
    } else {
        return arr;
    }
}


const testArr = [3,7,2,4,5,9,0,1,8]
console.log(testArr);
console.log( quickSort(testArr) );
