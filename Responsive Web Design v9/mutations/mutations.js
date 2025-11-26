/**
 * 
 * @param {String[]} changes 
 */
export function mutation(changes)
{
    const original = new Set(changes[0].toLowerCase().split(""));
    const result = new Set(changes[1].toLowerCase().split("")); 
    return result.isSubsetOf(original); 
}
