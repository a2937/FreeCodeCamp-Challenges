/**
 * 
 * @param {number[]} crowd 
 */
function findCrimeLords(crowd)
{
  const repeats = crowd.filter(x => crowd.indexOf(x) != crowd.lastIndexOf(x));
  if (repeats.length === 0) {
    return null;
  }
  else
  {
    return repeats[0]; 
    }
}

console.log(findCrimeLords([2, 5, 34, 1, 22, 1]));