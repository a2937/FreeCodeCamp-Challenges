const NATO = {
  A: "Alfa", N: "November",
  B: "Bravo", O: "Oscar", C: "Charlie", P: "Papa",
  D: "Delta", Q: "Quebec", E: "Echo", R: "Romeo",
  F: "Foxtrot", S: "Sierra", G: "Golf", T: "Tango",
  H: "Hotel", U: "Uniform", I: "India", V: "Victor",
  J: "Juliet", W: "Whiskey", K: "Kilo", X: "Xray",
  L: "Lima", Y: "Yankee", M: "Mike", Z: "Zulu"
};

/**
 * 
 * @param {String} phrase 
 */
function toNato(phrase)
{
  let actualPhrase = phrase.toUpperCase(); 
  return actualPhrase.split("").map(letter => NATO[letter] != null ? NATO[letter] + " " : letter.trim()).join("").trim(); 
}

console.log(toNato("Go hang a salami, I'm a lasagna hog~!")); 