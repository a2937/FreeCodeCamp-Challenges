
/**
 * 
 * @param {Number[]} costs 
 * @param {Number} budget 
 */
function secondLargest(costs, budget) {
  if (costs.every(x => x > budget)) {
    return 0;
  }
  else {
    let properCosts = costs.filter(x => x <= budget);
    if (properCosts.length > 1) {
      let largest = 0;
      let secondLargest = 0;
      for (let i = 0; i < properCosts.length; i++) {
        if (largest < properCosts[i]) {
          secondLargest = largest;
          largest = properCosts[i];
        }
      }
      return secondLargest;
    }
    else {
      return properCosts[0];
    }
  }
}

console.log(secondLargest([10, 40, 30, 20, 50], 100));