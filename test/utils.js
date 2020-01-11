const { execute } = require("../src/parser");
const { expect } = require("chai");
var utils = require("../tools/utils");

var lib = utils.loadlib();

function createTestUtil(options = {}) {
  const { prefix = "", suffix = "書之", compileOptions = {} } = options;

  function expectOutput(source, expected) {
    let output = "";
    execute(prefix + source + suffix, {
      lang: "js",
      scoped: true,
      lib,
      logCallback: () => 0,
      ...compileOptions,
      output: (...args) => (output += args.join(" ") + "\n")
    });

    expect(output.trim()).eq(expected.trim());
  }

  return { expectOutput };
}

module.exports = {
  createTestUtil
};
