import assert from "node:assert"
import { describe, it } from "node:test"
import index from "../calcPizza.mjs"

describe("testing", () => {
  it("pizza", () => {
    assert.strictEqual(index.calculatePizzaArea(7,4.3), 0.11)
  })
})