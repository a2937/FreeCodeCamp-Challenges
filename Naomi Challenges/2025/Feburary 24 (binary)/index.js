/**
 * 
 * @param {Number} number 
 */
function countBits(number)
{
  const binary = number.toString(2); 
  const bits = binary.split("").filter(x => x === "1"); 
  return bits.length; 
}

console.log(countBits(392902058))