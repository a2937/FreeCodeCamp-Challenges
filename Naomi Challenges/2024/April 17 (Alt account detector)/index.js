
/**
 * Returns true if the name contains the letters for "soup"
 * @param {String} username 
 */
function isAltAccount(username) {
  let validatedName = username.replace("0", "o").toLowerCase();
  if (validatedName.includes("-")) {
    return false;
  }
  let firstLetterIndex = validatedName.indexOf("s");
  let secondLetterIndex = validatedName.indexOf("o", firstLetterIndex);

  let thirdLetterIndex = validatedName.indexOf("u", secondLetterIndex);
  let fourthLetterIndex = validatedName.indexOf("p", thirdLetterIndex);

  if (firstLetterIndex < 0 || secondLetterIndex < 0 ||
    thirdLetterIndex < 0 || fourthLetterIndex < 0) {
    return false;
  }
  return true;
}




console.log(isAltAccount("puos")); 