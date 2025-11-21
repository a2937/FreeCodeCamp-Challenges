import assert from 'node:assert';
import { mock, test } from 'node:test';
import nameColors from "../color.js";


test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test("With Naomi, return #F43A58", (t) =>
{
  assert.strictEqual(nameColors("Naomi"), "#F43A58");
})

test("With NAOMI, return #74BAD8", (t) => {
  assert.strictEqual(nameColors("NAOMI"), "#74BAD8");
})

test("With Rain, return #8A1CE6", (t) => {
  assert.strictEqual(nameColors("Rain"), "#8A1CE6");
})

test("With Kaitlyn, return #DC6046", (t) => {
  assert.strictEqual(nameColors("Kaitlyn"), "#DC6046");
})

test("With Sadashi, return #BDA017", (t) => {
  assert.strictEqual(nameColors("Sadashi"), "#BDA017");
})

test("With freeCodeCamp, return #9E00D2", (t) => {
  assert.strictEqual(nameColors("freeCodeCamp"), "#9E00D2");
})