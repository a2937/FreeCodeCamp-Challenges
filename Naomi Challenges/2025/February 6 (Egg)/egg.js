/**
 * 
 * @param {String} phrase 
 * @returns {String}
 */
export function eggify(phrase)
{
  return phrase.replace(/([^AEIOU\s\.\?])/gi, "$1egg"); 
}

/**
 * 
 * @param {String} eggPhrase 
 * @returns {String}
 */
export function crackEgg(eggPhrase)
{
  return eggPhrase.replace(/([^AEIOU\s\.\?])egg/gi, "$1");
}
