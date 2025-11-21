/**
 * 
 * @param {String} phrase 
 */
function getPass(phrase) {
  let pass = "";
  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase.charCodeAt(i);
    let transformedLetter = letter ^ 42;
    pass += String.fromCharCode(transformedLetter);
  }
  return pass;
}

