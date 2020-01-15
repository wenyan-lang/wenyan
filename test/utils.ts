import { execute } from "../src/parser";
import { CompileOptions } from "../src/types";

var utils = require("../tools/utils");
const lib = utils.loadlib();

export interface Options {
  prefix: string;
  suffix: string;
  compileOptions: Partial<CompileOptions>;
}

export function createTestUtil(options: Partial<Options> = {}) {
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

    expect(output.trim()).toEqual(expected.trim());
  }

  return { expectOutput };
}
