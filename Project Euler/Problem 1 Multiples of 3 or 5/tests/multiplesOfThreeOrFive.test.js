import { multiplesOf3Or5 } from "../multiplesOfThreeOrFive.js";
import { describe, it } from "node:test";
import assert from "node:assert";



describe("multiplesOf3Or5 function", () =>
{
    it("`multiplesOf3Or5(10)` should return a number", () =>
    {
        assert.strictEqual(typeof multiplesOf3Or5(10), "number"); 
    });
    it("`multiplesOf3Or5(49)` should return 543", () =>
    {
        assert.strictEqual(multiplesOf3Or5(49),543); 
    });
    it("`multiplesOf3Or5(1000)` should return 233168", () =>
    {
        assert.strictEqual(multiplesOf3Or5(1000),233168); 
    });
    it("`multiplesOf3Or5(8456)` should return 16687353", () =>
    {
        assert.strictEqual(multiplesOf3Or5(8456),16687353); 
    });
    it("`multiplesOf3Or5(19564)` should return 89301183", () =>
    {
        assert.strictEqual(multiplesOf3Or5(19564),89301183); 
    });
})
