import assert from 'node:assert';
import { mock, test } from 'node:test';
import { findRain } from "../spy.js";

test("Find Rain in room 1 first chair", function ()
{
  assert.deepEqual(findRain([[1, 0, 0], [0, 0, 0], [0, 0, 0]]), [0, 0]); 
})

test("Find Rain in room 2 second chair", function () {
  assert.deepEqual(findRain([[0, 0, 0], [0, 1, 0], [0, 0, 0]]), [1, 1]);
})

test("Find Rain in room 3 second chair", function () {
  assert.deepEqual(findRain([[0, 0, 0], [0, 0, 0], [0, 1, 0]]), [2, 1]);
})
test("Find Rain in room 3 third chair", function () {
  assert.deepEqual(findRain([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]), [2, 2]);
})