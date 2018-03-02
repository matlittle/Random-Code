/*
  Starting in the top left corner of a 2×2 grid, and only being able to
  move to the right and down, there are exactly 6 routes to the bottom right corner.

  How many such routes are there through a 20×20 grid?
*/
function getNumberOfPaths(gridSize) {
    const x = 0;
    const y = 0;
    const paths = checkNextPoint(x, y, gridSize);
    return paths;
}
function checkNextPoint(x, y, end) {
    if (x === end && y === end) {
        return 1;
    }
    else if (x > end || y > end) {
        return 0;
    }
    else {
        return checkNextPoint(x + 1, y, end) + checkNextPoint(x, y + 1, end);
    }
}
console.log(getNumberOfPaths(20));
