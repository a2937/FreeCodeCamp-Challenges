import { describe, it } from "node:test";
import assert from "node:assert";
import { longestWord } from "../longestWord.js";

describe("longestWord  function", () => {
    it('should work', () => {
        assert.strictEqual(1, 1);
    });    
    it('`longestWord("The quick red fox")` should return "quick"', () =>
    {
        assert.strictEqual(longestWord("The quick red fox"),"quick"); 
    })
    it('longestWord("Hello coding challenge.") should return "challenge"', () =>
    {
        assert.strictEqual(longestWord("Hello coding challenge."),"challenge"); 
    })
    it('longestWord("Do Try This At Home.") should return "This"', () =>
    {
        assert.strictEqual(longestWord("Do Try This At Home."),"This"); 
    })
    it('longestWord("Do Try This At Home.") should return "This"', () =>
    {
        assert.strictEqual(longestWord("Do Try This At Home."),"This"); 
    })
    it('longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation"', () =>
    {
        assert.strictEqual(longestWord("This sentence... has commas, ellipses, and an exlamation point!"),"exlamation"); 
    })
    it('longestWord("A tie? No way!") should return "tie"', () =>
    {
        assert.strictEqual(longestWord("A tie? No way!"),"tie"); 
    })
    it(`longestWord("Wouldn't you like to know.") should return "Wouldnt"`, () =>
    {
        assert.strictEqual(longestWord("Wouldn't you like to know."),"Wouldnt"); 
    })
}); 