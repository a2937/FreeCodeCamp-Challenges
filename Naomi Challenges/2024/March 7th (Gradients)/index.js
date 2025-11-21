
/**
 * @param {{ r: number; g: number; b: number; }} rgb
 */
function rgbToHex(rgb) {
  // Convert RGB color to hex
  return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
}

/**
 * 
 * @param {number} index  The current step 
 * @param {number} max total number of steps 
 * @param {string} startColor The start hex color in RRGGBB 
 * @param {string} endColor  The end hex color in RRGGBB
 */
function createGradient(index, max, startColor, endColor) {
  let colors = [];
  const hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
  const startColorExtracted = startColor.match(hexRegex) || [];
  const endColorExtracted = endColor.match(hexRegex) || [];
  let properRed = 0;
  let properBlue = 0;
  let properGreen = 0;

  let startRed = parseInt(startColorExtracted[1], 16);
  let startGreen = parseInt(startColorExtracted[2], 16);
  let startBlue = parseInt(startColorExtracted[3], 16);


  let endRed = parseInt(endColorExtracted[1], 16);
  let endGreen = parseInt(endColorExtracted[2], 16);
  let endBlue = parseInt(endColorExtracted[3], 16);



  for (let i = index; i <= max; i++) {
    let step = i / max;
    properRed = Math.round((1 - (step)) * startRed + (step) * endRed);
    properGreen = Math.round((1 - (step)) * startGreen + (step) * endGreen);
    properBlue = Math.round((1 - (step)) * startBlue + (step) * endBlue);
    colors.push(rgbToHex({ r: properRed, g: properGreen, b: properBlue }));
  }

  properRed = properRed > 255 ? 255 : properRed;
  if (properRed < 0) {
    properRed = 0;
  }

  properGreen = properGreen > 255 ? 255 : properGreen;
  if (properGreen < 0) {
    properGreen = 0;
  }

  properBlue = properBlue > 255 ? 255 : properBlue;
  if (properBlue < 0) {
    properBlue = 0;
  }
  return colors;
}

let colors = createGradient(0, 10, "#0000ff", "#ff0000");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

