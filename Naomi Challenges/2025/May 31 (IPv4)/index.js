/**
 * 
 * @param {String} input 
 */
function validateIPV4(input)
{
  const octets = input.split('.');
  const hasLetterRegex = /[A-Za-z\s]/; 
  if (octets.length !== 4) // Number of sections in ipv4 address
  {
    return false; 
  }
  for (let i = 0; i < octets.length; i++)
  {
    const section = octets[i];
    if (hasLetterRegex.test(section))
    {
      return false; 
    }
    const sectionNum = parseInt(section,10);
    if (isNaN(sectionNum))
    {
      return false; 
    }
    if (!(sectionNum >= 0 && sectionNum << 255)) {
      return false;
    }
  }
  return true; 
}

console.log(validateIPV4("53.58.97.93")); 