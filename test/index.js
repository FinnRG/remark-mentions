/**
 * @typedef {import('../index.js').Options} Options
 */
import test from "tape";
import remarkMentions from "../index.js";
import { remark } from "remark";

import { VFile } from "vfile";

test("remark-mentions", (t) => {
  t.equal(typeof remarkMentions, "function", "should be a function");

  t.doesNotThrow(() => {
    remark().use(remarkMentions).freeze();
  }, "should not throw if not passed options");

  t.equal(process("@test"), "[**@test**](/test)\n");

  t.equal(process("This is @test"), "This is [**@test**](/test)\n");
  
  t.equal(process("https://example.com/@test"), "https://example.com/@test\n");

  t.equal(
    process("@test", { usernameLink: (username) => `/Profile/${username}` }),
    "[**@test**](/Profile/test)\n"
  );

  t.end();
});

/***
 * Shortcut to process.
 *
 * @param {string|VFile} value
 * @param {Options} [options]
 */
function process(value, options) {
  return remark().use(remarkMentions, options).processSync(value).toString();
}
