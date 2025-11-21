/**
 * 
 * @param {String} list 
 * @returns 
 */

function splitPair(list)
{
  var array = list.split(""); 
  array = array.flatMap((x, index,arr) =>
  {
    if (index % 2 == 0 && index + 1 < arr.length )
    {
      return [x + arr[index + 1]]; 
    }
    else if (index % 2 == 0 && index + 1 == arr.length)
    {
      return [x + "_"]; 
    }
    return [];
  })
  return array; 
}

console.log(splitPair("")); 