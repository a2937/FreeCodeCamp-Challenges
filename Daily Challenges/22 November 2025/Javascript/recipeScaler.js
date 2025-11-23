
/**
 * 
 * @param {String[]} ingredients (Format quantity unit ingredient i.e 2 C Flour) 
 * @param {Number} scale 
 * @return {String[]}
 */
export function scaleRecipe(ingredients, scale)
{
    let scaledRecipe = []; 
    const ingredientRegex = /(\d+\.?\d*) \w \w/;  
    for(let i = 0 ; i < ingredients.length; i++)
    {
        const matches = ingredients[i].match(ingredientRegex); 
        const quantity = parseFloat(matches[1]) * scale; 
        scaledRecipe.push(ingredients[i].replace(matches[1], quantity)); 
    }
  
    return scaledRecipe; 
}