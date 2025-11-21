
/**
 * 
 * @param {number} n 
 */
function squares(n) {
  let sum = n * (n + 1) * (2 * n + 1);
  return sum / 6;
}

function squaredMathwise(n) {
  return (n * (n + 1) * (n * 2 + 1)) / 6
}


console.log(squaredMathwise(25));