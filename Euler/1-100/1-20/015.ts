/*
  Starting in the top left corner of a 2×2 grid, and only being able to 
  move to the right and down, there are exactly 6 routes to the bottom right corner.

  How many such routes are there through a 20×20 grid?
*/
const saved: {} = {};

function getNumberOfPaths(gridSize: number): number {
  const x: number = 0;
  const y: number = 0;

  const paths = checkNextPoint(x, y, gridSize);

  return paths;
}

function checkNextPoint(x: number, y: number, end: number): number {
  //console.log(`x: ${x}  y: ${y}`);

  if( (x === end && y === end) || x+1 > end || y+1 > end) {
    return 1;

  } else if ( saved[`${x}_${y}`] ) {
    return saved[`${x}_${y}`];

  } else {
    saved[`${x}_${y}`] = checkNextPoint(x+1, y, end) + checkNextPoint(x, y+1, end);
    return saved[`${x}_${y}`];
  }
}


console.log( getNumberOfPaths(20) );
console.log( saved );
