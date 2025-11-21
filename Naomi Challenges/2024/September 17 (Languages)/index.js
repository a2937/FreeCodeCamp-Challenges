
/**
 * 
 * @param {String[]} languages 
 * @returns {String} chosenLanguage
 */
function determineLanguage(languages)
{
  let langList = {}; 
  languages.forEach((/** @type {string} */ lang) => {
    if (langList[lang] == null)
    {
      langList[lang] = 1;
    }
    else 
    {
      langList[lang] = langList[lang] + 1; 
    }
  }); 
  langList.sort(); 
  return "english"; 
}