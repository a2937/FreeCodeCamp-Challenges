/**
 * 
 * @param {String} phrase 
 */
function isEclipse(phrase) {
  const keyword = "eclipse".split('');
  let myExpression = phrase.toLowerCase().replace(/[^eclips]/ig, "");
  myExpression.split('').forEach(letter => {
    let index = keyword.indexOf(letter);
    if (index != -1 && keyword.length > 0) {
      keyword.splice(index, 1);
    }
  });
  return keyword.length == 0;
}

console.log(
  isEclipse("The drifting moon clambers past the sun"));
