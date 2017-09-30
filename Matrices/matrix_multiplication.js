function matrixProd( mx1, mx2 ) {

	//get basic structures of given matrices.  
	var mx1Rows = mx1.length;
	var mx1Cols = mx1[0].length;
	var mx2Rows = mx2.length;
	var mx2Cols = mx2[0].length;

	//check that matrices are valid
	var structureCheck = checkMatrices(mx1, mx2);
	if(structureCheck !== true) {
		return structureCheck;
	}

	//create final product array with amount of rows from mx1
	var product = new Array(mx1Rows);
	//loop through final product array, creating number of columns from mx2
	for(index=0; index < mx1Rows ; index+=1) {
		product[index] = new Array(mx2Cols);
	}

	for(i=0; i<mx1Rows; i+=1){

		for(k=0; k<mx2Cols; k+=1){

			var tempSum = 0;
			for(m=0; m<mx1Cols; m+=1){

				tempSum = tempSum + (mx1[i][m] * mx2[m][k]);
			}
			product[i][k] = tempSum;
		}
	}
	return product;
}


function checkMatrices(mx1, mx2) {

	var mx1Rows = mx1.length;
	var mx1Cols = mx1[0].length;
	var mx2Rows = mx2.length;

	if( mx1Cols !== mx2Rows) {
		return "Error. Provide matrices with valid structures for multiplication. (i.e. NxM * MxP)"
	}

	for(var i=0; i < mx1Rows-1; i+=1) {
		if(mx1[i].length!=mx1[i+1].length) {
			return "Error. The first matrix does not have a valid structure. Row " + (i+2) + " does not have the same length as the first row."
		}
	}
	for(var i=0; i < mx2Rows-1; i+=1) {
		if(mx2[i].length!=mx2[i+1].length) {
			return "Error. The second matrix does not have a valid structure. Row " + (i+2) + " does not have the same length as the first row."
		}
	}

	return true;
}


function createMatrix(rows, cols, autoFill = false, lowRange = 0, highRange = 100) {
	//create final matrix with amount of rows given
	var finalMatrix = new Array(rows);
	//loop through matrix and insert number of cols in each row
	for(i=0; i<rows; i+=1) {
		finalMatrix[i] = new Array(cols);

		//if autoFill is passed as true, automatically generate number
		if(autoFill) {
			for(i2=0; i2<cols; i2+=1) {
				//generate number based on given range
				finalMatrix[i][i2] = Math.floor( Math.random() * ((highRange-lowRange+1) - lowRange));
			}
		}
	}
	return finalMatrix;
}


var a = [[1,2],[3,4],[5,6],[7,8]];
var b = createMatrix(2,8,true,0,10);

console.log(a);
console.log(b);

console.log(matrixProd(a, b));