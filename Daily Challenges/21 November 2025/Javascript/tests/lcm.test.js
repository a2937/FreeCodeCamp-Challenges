import { describe, it } from "node:test";
import assert from "node:assert";
import { lcm } from "../lcm.js";

describe("lcm  function", () => {
    it('should work', () => {
        assert.strictEqual(1, 1);
    });    
   it("`lcm(4, 6)` should return `12`", () =>
    {
        assert.strictEqual(lcm(4, 6), 12);
    });
    it("`lcm(10, 100)` should return `100`", () =>
    {
        assert.strictEqual(lcm(10, 100), 100);
    });
    it("`lcm(13, 17)` should return `221`", () =>
    {
        assert.strictEqual(lcm(13, 17), 221);
    });
    it("`lcm(45, 70)` should return `630`", () =>
    {
        assert.strictEqual(lcm(45, 70), 630);
    });
}); 