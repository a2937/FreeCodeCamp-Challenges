

interface Color 
{
  red: number,
  green: number,
  blue: number,
}

interface Paint 
{
  colour: Color; 
  volume: number; 
}


export function blendColors(...colors) : Paint
{
  let totalVolume = 0; 
  let red = 0; 
  let blue = 0; 
  let green = 0; 
  colors.forEach(color => totalVolume += color.volume);
  
  for (let i = 0; i < colors.length; i++)
  {
    let currentColor = colors[i].colour; 
    let volume = colors[i].volume
    red += currentColor.red * (volume / totalVolume);
    blue += currentColor.blue * (volume / totalVolume);
    green += currentColor.green * (volume / totalVolume);
  }

  return { colour: { red: Math.round(red), blue: Math.round(blue), green: Math.round(green) }, volume: Math.round(totalVolume) };
}
