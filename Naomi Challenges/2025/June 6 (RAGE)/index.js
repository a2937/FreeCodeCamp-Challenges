/**
 * 
 * @param {String} burnPhrase 
 */
export function rageBurn(burnPhrase)
{
  let phrase = burnPhrase.toLowerCase(); 
  if (!phrase.includes("burn") && !phrase.includes("rage"))
  {
    return "Haha! Nice day for fishin', ain't it?"
  }
  else 
  {
    let burnCount = 0;
    let burnPos = phrase.indexOf("burn");

    while (burnPos !== -1) {
      burnCount++;
      burnPos = phrase.indexOf("burn", burnPos + "burn".length);
    }

    let rageCount = 0;
    let ragePos = phrase.indexOf("rage");

    while (ragePos !== -1) {
      rageCount++;
      ragePos = phrase.indexOf("rage", ragePos + "rage".length);
    }

    let finalPhrase = ""; 
    if (burnCount > 0)
    {
      finalPhrase += "I am " + "really ".repeat(burnCount - 1) + "livid. "; 
    }

    if (rageCount > 0)
    {
      finalPhrase += "You get a paycut" + ", and you get a paycut".repeat(rageCount - 1) + "."; 
    }

    return finalPhrase; 
  }
}

console.log(rageBurn("ASDRAGEZXCVBURNQWERAGERAGEBURNYTUIOPRAGEBURNMNBBURNRAGEBURN")); 