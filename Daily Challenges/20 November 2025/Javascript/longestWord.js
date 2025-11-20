
/**
 * Determines the longest word in a sentence
 * @param {string} sentence 
 * @returns {string}
 */
export function longestWord(sentence) 
{
    const mySentence = sentence.replace(/[^a-z\s]/ig,"")
    let words = mySentence.split(" "); 
    words.sort((a,b) => b.length - a.length);  
    return words[0];
}
