import { deepStrictEqual } from "assert";
import { describe, it } from "node:test";
import {blendColors} from '../../src/paint';

describe('Unit Test for mixing', () => {
  it('Case One', () => {
    deepStrictEqual(
      blendColors(
        { colour: { red: 100, green: 100, blue: 100 }, volume: 5 },
        { colour: { red: 200, green: 200, blue: 200 }, volume: 15 }
      ),
       { volume: 20, colour: { red: 175, green: 175, blue: 175 } }
    );
  });
  it('Case Two', () => {
      deepStrictEqual(
        blendColors(
          { colour: { red: 100, green: 100, blue: 100 }, volume: 5 },
          { colour: { red: 200, green: 200, blue: 200 }, volume: 100 }
        ),
        { volume: 105, colour: { red: 195, green: 195, blue: 195 } }
      );
  });
  it("Case Three", () => {
    deepStrictEqual(
      blendColors(
        { colour: { red: 123, green: 222, blue: 159 }, volume: 5 },
        { colour: { red: 8, green: 0, blue: 110 }, volume: 10 }
      ),
      { volume: 15, colour: { red: 46, green: 74, blue: 126 } }
    );
  });

  it('Bonus', () => {
     deepStrictEqual(
       blendColors(
         { colour: { red: 123, green: 222, blue: 159 }, volume: 5 },
         { colour: { red: 8, green: 0, blue: 110 }, volume: 10 },
         { colour: { red: 50, green: 111, blue: 88 }, volume: 7 }
       ),
       { volume: 22, colour: { red: 48, green: 86, blue: 114 } }
     );
  });
});