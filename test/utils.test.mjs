import { test } from "node:test";
import assert from "node:assert/strict";

import { slugify } from "../src/utils.js";

test("slugify strips the trailing hyphen from trailing punctuation", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("slugify strips the leading hyphen from leading whitespace", () => {
  assert.equal(slugify("  Hi"), "hi");
});

test("slugify collapses internal delimiter runs into a single hyphen", () => {
  assert.equal(slugify("Hello -- World"), "hello-world");
});

test("slugify lowercases the input", () => {
  assert.equal(slugify("HELLO World"), "hello-world");
});
