import { countCharacters } from "../countCharacter.js";
import { describe, it } from "node:test";
import assert from "node:assert";


describe('`countCharacters function', () =>
{
    it('`countCharacters("hello world")` should return `["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"]`', () =>
    {
        assert.deepEqual(countCharacters("hello world"), ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"]); 
    })
    it('`countCharacters("I love coding challenges!")` should return `["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"]`', () =>
    {
            assert.deepEqual(countCharacters("I love coding challenges!"), ["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"]); 
    })
    it('`countCharacters("// TODO: Complete this challenge ASAP!")` should return `["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"]`', () =>
    {
        assert.deepEqual(countCharacters("// TODO: Complete this challenge ASAP!"), ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"]); 
    })     
})
