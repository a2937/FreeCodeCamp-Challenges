/**
 * 
 * @param {String} phrase 
 */
export default function vaporwave(phrase) {
  return phrase.replace(/[\s]/g,"").split("").join("  ").toUpperCase();
}
