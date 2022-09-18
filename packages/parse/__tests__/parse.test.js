"use strict";

const parse = require("..");
const assert = require("assert").strict;

assert.strictEqual(parse(), "Hello from parse");
console.info("parse tests passed");
