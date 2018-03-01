/*
  Starting in the top left corner of a 2×2 grid, and only being able to
  move to the right and down, there are exactly 6 routes to the bottom right corner.


  How many such routes are there through a 20×20 grid?
*/
function getNumberOfPaths(gridSize) {
    let x = 1;
    let y = 1;
    return -1;
}
function checkNextPoint(x, y, end, paths) {
    if (x === end && y === end) {
        return 1;
    }
    else if (x > end || y > ) {
        return 0;
    }
}
function checkIfValidPoint(x, y, max) {
    if (x <= max && y <= max) {
        return true;
    }
    return false;
}
