import assert from 'node:assert';
import { mock, test } from 'node:test';
import {eggify,crackEgg} from "../egg.js";


test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test("Hello message egg", function ()
{
  assert.strictEqual(eggify("Hello to the freeCodeCamp Discord"),"Heggeleggleggo teggo tegghegge feggreggeeCeggodeggeCeggameggpegg Deggiseggceggoreggdegg")
})

test("Harder egg", function () {
  assert.strictEqual(eggify("Naomi needs to come up with harder challenges"), "Neggaomeggi neggeedeggsegg teggo ceggomegge upegg weggitegghegg heggareggdeggeregg ceggheggaleggleggenegggeggesegg")
})


test("Star Wars egg", function () {
  assert.strictEqual(eggify("Maybe if she spent less time playing Star Wars she could"), "Meggayeggbegge ifegg segghegge seggpeggeneggtegg leggeseggsegg teggimegge peggleggayegginegggegg Seggteggaregg Weggareggsegg segghegge ceggouleggdegg")
})

test("Crack hello message", function ()
{
  assert.strictEqual(crackEgg("Heggeleggleggo teggo tegghegge feggreggeeCeggodeggeCeggameggpegg Deggiseggceggoreggdegg"),"Hello to the freeCodeCamp Discord")
})
test("Crack Harder", function () {
  assert.strictEqual(crackEgg("Neggaomeggi neggeedeggsegg teggo ceggomegge upegg weggitegghegg heggareggdeggeregg ceggheggaleggleggenegggeggesegg"), "Naomi needs to come up with harder challenges")
})

test("Crack Star Wars", function ()
{
  assert.strictEqual(crackEgg("Meggayeggbegge ifegg segghegge seggpeggeneggtegg leggeseggsegg teggimegge peggleggayegginegggegg Seggteggaregg Weggareggsegg segghegge ceggouleggdegg"), "Maybe if she spent less time playing Star Wars she could")
})