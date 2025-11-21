
/**
 * @param {string} boss
 * @param {{ [s: string]: number; }} coworkers
 */
function caught(coworkers, boss)
{
  let value = 0; 
  coworkers[boss] = coworkers[boss] * 2; 
  Object.values(coworkers).forEach(vote => {
    value += vote;
  }
  );
  const coworkerCount = Object.keys(coworkers).length; 
  const average = (value / coworkerCount); 
  return average <= 5 ? "GTFO!" : "You're gucci.";
}

console.log(caught({ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 },'john'))