
/**
 * 
 * @param {String} sentence 
 */
export function countCharacters(sentence)
{
    const reformattedSentence = sentence.toLowerCase().replace(/[^\w]/g,"").split("").sort(); 
    const characterCount = []; 
    for(let i = 0 ; i < reformattedSentence.length; i++)
    {
       const letter = reformattedSentence[i]; 
       if(characterCount[letter] == null)
       {
            characterCount[letter] = 1;
       }
       else 
       {
            characterCount[letter] = characterCount[letter] + 1; 
       }
    }
    return Object.entries(characterCount).map((entry) => entry[0] + " " + entry[1]); 
}
