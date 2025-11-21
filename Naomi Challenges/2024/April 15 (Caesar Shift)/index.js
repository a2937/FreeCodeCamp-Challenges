/**
 * 
 * @param {String} message 
 * @param {Number} shift 
 */
function decode(message,shift)
{
    const capitalACode = 65;    
    const capitalZCode = 90; 
    const lowerACode = 97;
 
    const lowerZCode =  122; 
    let properMessage = "";
    for(let i = 0 ;i < message.length; i++)
    {
        let symbol = message.charAt(i);
        let code = message.charCodeAt(i); 
        const actualShift = shift % 26; 

        //console.log("Input code: " + code);
        if(symbol.match(/[A-Za-z]/))
        {
            // Smallest it could be ; capital letter 
            if (code - actualShift < capitalACode) {
              code = capitalZCode;
              properMessage += String.fromCharCode(code - actualShift);
            }
            // Safe Zone one ; capital letter
            else if (
              code - actualShift <= capitalZCode &&
              code - actualShift >= capitalACode
            ) {
              properMessage += String.fromCharCode(code - actualShift);
            }
            // The in-between
            else if (
              code - actualShift > capitalZCode &&
              code - actualShift < lowerACode
            ) {
              if (symbol.toUpperCase() == symbol) {
                // It's an uppercase letter

                code = capitalACode;
                
                properMessage += String.fromCharCode(code - actualShift - 1);
              } else {
                // It's lowercase
                code = lowerZCode;
                properMessage += String.fromCharCode(code - actualShift + 1);
              }
            }
            // Safe Zone two ; lowercase letter
            else if (
              code - actualShift >= lowerACode &&
              code - actualShift <= lowerZCode
            ) {
              properMessage += String.fromCharCode(code - actualShift);
            }
            // Largest it could be
            else if (code - actualShift > lowerZCode) {
              code = lowerACode;
              properMessage += String.fromCharCode(code + actualShift + 1);
            } 
        }
        else 
        {
            properMessage += symbol; 
        }
    }
    return properMessage; 
}

console.log(decode("z cfmv pfl", 17));