/**
 * 
 * @param {Number} size
 */
function generateTable(size)
{
  let results = []; 
  for (let x = 1; x <= size; x++)
  {
    let multiples = [];
    for (let y = 1; y <= size; y++)
    {
      multiples.push(y * x); 
    }
    results.push(multiples); 
  }
  return results;
}

/**
 * 
 * @param {Number} size
 * @param {Number} dimensions
 */
function generateTwoTable(size,dimensions = 1) {
  let results = []; 
  for (let dimension = 0; dimension < dimensions; dimension++)
  {
    let table = [];
    for (let x = 1; x <= size; x++)
    {
      let multiples = [];
      for (let y = 1; y <= size; y++) {
        multiples.push(y * ((dimension + 1) * x));
      }
      table.push(multiples);
    }
    results.push(table); 
  }
  return results; 
}

console.log(generateTwoTable(3,1)); 