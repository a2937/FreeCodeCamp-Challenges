import assert from 'node:assert';
import { mock, test } from 'node:test';
import vaporwave from "../basic.js";


test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});



test("Every message sample", function ()
{
  assert.strictEqual(vaporwave("What if we send every Discord message like this?"), "W  H  A  T  I  F  W  E  S  E  N  D  E  V  E  R  Y  D  I  S  C  O  R  D  M  E  S  S  A  G  E  L  I  K  E  T  H  I  S  ?");
})

test("Chaos sample", function () {
  assert.strictEqual(vaporwave("Wouldn't that be super chaotic?!"), "W  O  U  L  D  N  '  T  T  H  A  T  B  E  S  U  P  E  R  C  H  A  O  T  I  C  ?  !");
})

test("Mods sample", function () {
  assert.strictEqual(vaporwave("Don't actually do it or you'll get Naomi in trouble with the mods."), "D  O  N  '  T  A  C  T  U  A  L  L  Y  D  O  I  T  O  R  Y  O  U  '  L  L  G  E  T  N  A  O  M  I  I  N  T  R  O  U  B  L  E  W  I  T  H  T  H  E  M  O  D  S  .");
})