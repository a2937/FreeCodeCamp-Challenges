class SnackCounter {

  /**
   * @type {String[]}
   */
  snacks = [];
  SnackCounter() {

  }

  eat() {
    this.snacks.splice(0, 1);
  }

  /**
   * 
   * @param {String} snackName 
   */
  buy(snackName) {
    this.snacks.push(snackName);
    if (this.snacks.length >= 5) {
      /**
       * @type {string[]}
       */
      this.snacks = [];
    }
  }

  snacksCount() {
    return this.snacks.length;
  }

  listSnacks() {
    return this.snacks.join(",");
  }


}

let snackCounter = new SnackCounter();
snackCounter.buy("Chocolate bar");
snackCounter.buy("Gummy worms");
snackCounter.eat();
console.log(snackCounter.listSnacks()); 