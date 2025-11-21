
/**
 * 
 * @param {String} name 
 */
export default function convertNameToColor(name)
{
  const letters = name.split("").map(x => x[0].charCodeAt(0)); 
  const bitOne = letters.reduce((previous, current) => previous + current) % 256; 
  const bitTwo = letters.reduce((previous, current) => previous * current) % 256;
  const bitThree = Math.abs(letters.reduce((previous, current) => previous - current)) % 256;
  return "#" + bitOne.toString(16).toUpperCase().padEnd(2, "0") + bitTwo.toString(16).toUpperCase().padEnd(2, "0") + bitThree.toString(16).toUpperCase().padEnd(2, "0"); 
}