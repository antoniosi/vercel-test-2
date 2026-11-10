import test from "node:test";
import assert from "node:assert/strict";

import { subtract } from "../src/utils.js";

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(7, 3), 4);
});

test("subtract returns a negative result when b is greater than a", () => {
  assert.equal(subtract(3, 7), -4);
});
