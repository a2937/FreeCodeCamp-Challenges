/**
 * 
 * @param {Number[][]} locations 
 */
function findRain(locations)
{
  for (let arrayId = 0; arrayId < locations.length; arrayId++)
  {
    for (let arrayIndex = 0; arrayIndex < locations[arrayId].length; arrayIndex++)
    {
      if (locations[arrayId][arrayIndex] == 1)
      {
        return [arrayId,arrayIndex]
      }
    }
  }
  throw new Error("Error 404: Rain not found"); 
}

module.exports = { findRain } 