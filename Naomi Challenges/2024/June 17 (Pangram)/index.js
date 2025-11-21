
/**
 * 
 * @param {String} phrase 
 */
function isPanagram(phrase) {

  let letters = "abcdefghijklmopqrstuvwxyz";
  let phraseList = phrase.toLowerCase().split("");
  phraseList.forEach(letter => {
    let letterIndex = letters.indexOf(letter);
    if (letterIndex != -1) {
      letters = letters.replace(letter, "");
    }
  });
  return letters.trim().length == 0;
}

console.log(isPanagram("Meep, just how quickly did you forgot the lazy brown dog and the clever quick fox?")); 