
/**
 * 
 * @param {Number[]} prices
 */
function secondLargest(prices) {
  let sorted = prices.sort((a, b) => b - a);
  let second = sorted[1];
  return second;
}

/**
 * 
 * @param {Number[]} prices
 */
function secondLargestNoSort(prices) {
  let currentLargest = prices[0];
  let secondLargest = prices[1];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > currentLargest) {
      secondLargest = currentLargest;
      currentLargest = prices[i];
    }
    else if (prices[i] < currentLargest && prices[i] > secondLargest) {
      secondLargest = prices[i];
    }
  }
  return secondLargest;
}

console.log("Second largest: " + secondLargestNoSort([25, 143, 89, 13, 105]));