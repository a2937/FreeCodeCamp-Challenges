
/**
 * 
 * @param {String[][]} floor 
 */
function burnItDown(floor) {

  let spreadCount = 0;
  while (floor.flat().indexOf(".") != -1) {
    spreadCount++;
    for (let rowCount = 0; rowCount < floor.length; rowCount++) {
      for (let columnCount = 0; columnCount < floor[rowCount].length; columnCount++) {
        if (floor[rowCount][columnCount].trim() == "#") {
          if (columnCount != 0) {
            floor[rowCount][columnCount - 1] = "#";
          }
          if (columnCount != floor[rowCount].length - 1) {
            floor[rowCount][columnCount + 1] = "#";
          }

          if (rowCount != 0) {
            floor[rowCount - 1][columnCount] = "#";
          }
          if (rowCount != floor.length - 1) {
            floor[rowCount + 1][columnCount] = "#";
          }
        }
      }
    }
  }
  return spreadCount;
}

console.log(burnItDown([[".", ".", "."], [".", "#", "."], [".", ".", "."]]));