/**
 * 
 * @param {Number} maxValue 
 * @returns {Number} 
 */
export function multiplesOf3Or5(maxValue) {
    let sum = 0; 
    for(let i = maxValue - 1; i > 0; i--)
    {
        if(i % 3 == 0)
        {
            sum += i; 
        }
        else if(i % 5 == 0)
        {
            sum += i; 
        }
    }
    return sum; 
}
