/**
 * 
 * @param {String} goodTroops
 * @param {String} badTroops
 */
function battle(goodTroops,badTroops)
{
  const goodTroopConversion = 
  {
    0: 1,
    1: 2,
    2: 3,
    3: 3, 
    4: 4,
    5: 10
  }

  const badTroopConversion = 
  {
    0: 1,
    1: 2,
    2: 2, 
    3: 2, 
    4: 2, 
    5: 5,
    6: 10
  }

  const goodGuys = goodTroops.split(" ").map(Number);
  const goodStrength = goodGuys.reduce((previous, current,currentIndex) => previous + goodTroopConversion[currentIndex] * current,0)


  const badGuys = badTroops.split(" ").map(Number);
  const badStrength = badGuys.reduce((previous, current,currentIndex) => previous + badTroopConversion[currentIndex] * current, 0)

  if (goodStrength > badStrength)
  {
    return "Good triumphs over Evil"
  }
  else if (goodStrength == badStrength)
  {
    return "No victory on this battlefield"
  }
  else 
  {
    return "Evil eradicates all traces of Good"
  }
}

console.log(battle('1 0 0 0 0 0', '1 0 0 0 0 0 0'))