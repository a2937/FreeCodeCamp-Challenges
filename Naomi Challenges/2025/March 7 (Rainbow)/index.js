
/**
 * 
 * @param {Number} red 
 * @param {Number} blue
 * @param {Number} green
 */
function rgb(red, blue, green)
{
  const actualRed = Math.min(Math.max(0,red),255); 
  const actualBlue = Math.min(Math.max(0, blue), 255);
  const actualGreen = Math.min(Math.max(0, green), 255);

  const hexRed = actualRed.toString(16).toUpperCase(); 
  const hexBlue = actualBlue.toString(16).toUpperCase();
  const hexGreen = actualGreen.toString(16).toUpperCase(); 

  if (hexRed[0] == hexRed[1] && hexBlue[0] == hexBlue[1] && hexGreen[0] == hexGreen[1])
  {
    return "#" + hexGreen[0] + hexBlue[0] + hexBlue[0]; 
  }
  else 
  {
    return "#" + hexRed + hexGreen + hexBlue;
  }
}

console.log(rgb(173, 255, 47))