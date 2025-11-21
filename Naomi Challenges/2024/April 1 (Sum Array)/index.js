
/**
 * 
 * @param {Number} num 
 * @returns {Boolean}
 */
function isValidNumber(num) {
  if (num > 10 || num < 0) {
    return false;
  }
  if (num % 1 !== 0) {
    return false;
  }
  return true;
}


/**
 * 
 * @param {Number[]} firstArray 
 * @param {Number[]} secondArray
 */
function sumArray(firstArray, secondArray) {
  const arrayOneValid = firstArray.every(isValidNumber);
  const arrayTwoValid = secondArray.every(isValidNumber);
  if (!arrayOneValid || !arrayTwoValid) {
    return null;
  }
  let numberOne = BigInt(firstArray.join(""));
  let numberTwo = BigInt(secondArray.join(""));
  let result = numberOne + numberTwo;
  return Array.from(String(result), Number);
}

console.log(sumArray([2, 3, 3], [5, 4, 4])); 