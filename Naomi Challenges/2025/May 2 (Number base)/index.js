
/**
 * 
 * @param {Number | String} n 
 * @param {Number} b 
 */
function validateBase(n, b)
{
  let validTerms = []; 
  for (let i = 0; i < b; i++)
  {
    if (i < 10)
    {
      validTerms.push(i.toString()); 
    }
    else 
    {
      validTerms.push(String.fromCharCode(65 + (i - 10))); // Add a letter 
    }
  }

  for (let digit = 0; digit < n.toString().length; digit++)
  {
    if (validTerms.indexOf(n.toString()[digit].toUpperCase()) === -1)
    {
      return false; 
    }
  }
  return true; 
} 

console.log(validateBase('z', 36)); 