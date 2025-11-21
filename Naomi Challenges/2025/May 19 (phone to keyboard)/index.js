/**
 * 
 * @param {String} input 
 */
function convertCharacters(input)
{
  let expression = ""; 
  const keyboardInputs = [
      "7", "8", "9",             
      "4", "5", "6",             
      "1", "2","3",            
      "0", "0", "."
  ]

  const phoneInputs = [
          "1" ,"2", "3",
          "4", "5", "6",
          "7", "8", "9",
          "*", "0", "#"
  ]

  for (let i = 0; i < input.length; i++)
  {
    const number = input[i];
    const index = phoneInputs.indexOf(number); 
    expression += keyboardInputs[index]; 
  }
  return expression; 
}

console.log(convertCharacters("#####")); 