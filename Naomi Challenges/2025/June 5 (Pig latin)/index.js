
/**
 * 
 * @param {String} phrase 
 */
function swapPiggy(phrase)
{
  const words = phrase.split(" "); 
  let newPhrase = ""; 
  const vowelRegex = /[aeiou]/i; 
  if(words.every(word => word.endsWith("ay")))
  {
    // This is pig latin
    const newWord = ""; 
 
    words.forEach(word => {
      const baseLetters = word.replaceAll(/way/i, "");
    }); 
  }
  else 
  {
    // This is English
    //words.forEach(word => {
    for (let wordCount = 0; wordCount < words.length; wordCount++)
    {
      const word = words[wordCount];
      const startsUpper = word.charAt(0).toUpperCase() === word.charAt(0);
      // move all consonants before the first vowel to the end of the word 
      const letters = word.trim().split(""); 
      const startsWithVowel = word.charAt(0).match(vowelRegex); 
      if (startsWithVowel)
      {
        // Just add way to the end of the word
        newPhrase += " " + (letters.join("") + "way");  
        continue; 
      }
      else if(!word.match(vowelRegex))
      {
        // Just add ay to the end of the word 
        newPhrase += " " + (letters.join("") + "ay");  
        continue; 
      }

      // Move all consonants to the end of the word 
      for (let letterCount = 0; letterCount < letters.length; letterCount++)
      {
        
      }
      
      /*
      const isUpper = word.charAt(0).toUpperCase() === word.charAt(0);
      let newWord = ""; 
      if (isUpper)
      {
        newWord = word.toLowerCase().split("").splice(0, 1, "Ay" + word.charAt(0)).join("");
      }
      else 
      {
        newWord = word.toLowerCase().split("").splice(0, 1, "ay" + word.charAt(0)).join("")
      }
      
      newPhrase += newWord; 
      */ 
    };
    return newPhrase.trim(); 
  }
}