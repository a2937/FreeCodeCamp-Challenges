


class NailBook {
  /**
   * @type String[][]
   * `A` being the first row (or first sub-array
   * with `1` being the first column 
   */
  nails = [];

  letterToIndex =
    {
      "A": 0,
      "B": 1,
      "C": 2,
      "D": 3,
      "E": 4,
      "F": 5,
      "G": 6,
      "H": 7,
      "I": 8,
      "J": 9,
    }

  /**
   * 
   * @param {String} color 
   * @param {String} row  The letter of the row 
   * @param {Number} column 1 - 10 for the column
   */
  addColor(color, row, column) {
    var rowIndex = this.letterToIndex[row];
    if (this.nails[rowIndex][column - 1] != "") {
      throw new Error("Nail color already in spot")
    }
    else {
      this.nails[rowIndex][column - 1] = color;
    }
  }

  /**
   * 
   * @param {Number} rowNumber : using 1 - 10 
   */
  resetRow(rowNumber) {
    this.nails[rowNumber - 1] = [];
  }


  display() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("  | " + numbers.join("|") + " |");
    for (let i = 0; i < this.nails.length; i++) {
      var letter = Object.keys(this.letterToIndex)[i];
      console.log(letter + "|" + this.nails[i].join("|") + " |");
    }
  }

  /**
   * 
   * @param {String} nailColor 
   */
  find(nailColor) {
    let row = this.nails.filter(x => x.includes(nailColor))[0];
    if (row.length > 0) {
      var actualRow = this.nails.indexOf(row);
      var letter = Object.keys(this.letterToIndex)[actualRow];
      var column = row.indexOf(nailColor);
      return letter + column.toString();
    }
    else {
      throw new Error("Nail color " + nailColor + " not found")
    }
  }
}