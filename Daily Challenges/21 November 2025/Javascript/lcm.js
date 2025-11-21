
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
export function lcm(a, b) {
    let matchFound = false; 
    let bMultiples = [b]; 
    let aMultiples = [a]; 
    let loopCount = 1; 
    do 
    {
        aMultiples.push(a * loopCount); 
        bMultiples.push(b * loopCount); 
        matchFound = aMultiples.some((value) => bMultiples.includes(value)); 
        loopCount++; 
    } while(!matchFound);
    const result = aMultiples.filter((value) => bMultiples.includes(value))[0];
    return result;
}