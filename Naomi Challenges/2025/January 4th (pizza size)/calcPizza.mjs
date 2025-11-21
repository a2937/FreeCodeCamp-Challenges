/**
 * 
 *  
 * @param {Number} diameter 
 * @param {Number} cost 
 */
function calculatePizzaArea( diameter,cost)
{
  const radius = diameter / 2; 
  const area = Math.PI * Math.pow(radius, 2); 
  return parseFloat((cost / area).toPrecision(2)); 
}

export default { calculatePizzaArea };