import { mutation } from "../mutations.js";
import {describe,it} from "node:test"; 
import assert from "node:assert";

describe("mutation function", () =>
{
    it('`mutation(["hello", "hey"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["hello", "hey"]),false);
    })
    it('`mutation(["hello", "Hello"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["hello", "Hello"]),true);
    })
    it('`mutation(["Mary", "Army"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["Mary", "Army"]),true);
    })
    it('`mutation(["Mary", "Aarmy"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["Mary", "Aarmy"]),true);
    })
    it('`mutation(["Alien", "line"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["Alien", "line"]),true);
    })
    it('`mutation(["floor", "for"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["floor", "for"]),true);
    })
    it('`mutation(["hello", "neo"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["hello", "neo"]),false);
    })
    it('`mutation(["voodoo", "no"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["voodoo", "no"]),false);
    })
    it('`mutation(["voodoo", "no"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["voodoo", "no"]),false);
    })
    it('`mutation(["ate", "date"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["ate", "date"]),false);
    })
    it('`mutation(["Tiger", "Zebra"])` should return `false`', () =>
    {
        assert.strictEqual(mutation(["Tiger", "Zebra"]),false);
    })
    it('`mutation(["Noel", "Ole"])` should return `true`', () =>
    {
        assert.strictEqual(mutation(["Noel", "Ole"]),true);
    })
})
