import { compile, evalCompiled } from "../src/parser";
import { TargetLanguages, CompileOnlyOptions } from "../src/types";

var fs = require("fs-extra");
var path = require("path");
var utils = require("../tools/utils");

var lib = utils.loadlib();
const exampleDir = path.resolve(__dirname, "../examples/");

const ignoreExamples = [
  "divination", // contains randomness
  "import", // prints current time
  "tree2", // DOM manipulate
  "tree", // DOM manipulate
  "clock" // DOM manipulate
];

async function runExample(lang, name, options = {}) {
  var code = fs
    .readFileSync(path.join(exampleDir, name + ".wy"), "utf-8")
    .toString();

  var compiled = compile(code, {
    lang,
    logCallback: () => {},
    importPaths: [
      path.resolve(__dirname, "../lib/"),
      path.resolve(__dirname, "../examples/")
    ],
    lib: lib,
    ...options
  });

  if (ignoreExamples.includes(name)) return;

  let output = "";

  evalCompiled(compiled, {
    scoped: true,
    lang,
    output: (...args) => (output += args.join(" ") + "\n"),
    ...options
  });

  expect(output).toMatchSnapshot();
}

function runAll(
  lang: TargetLanguages,
  options: Partial<CompileOnlyOptions> = {}
) {
  var files = fs.readdirSync(exampleDir).filter(x => x.endsWith(".wy"));
  for (const file of files) {
    const filename = file.split(".")[0];
    it(filename, () => runExample(lang, filename, options));
  }
}

describe("examples", () => {
  describe("javascript", () => {
    runAll("js");
  });

  //describe("romanizeIdentifiers", () => {
  //  runAll("js", { romanizeIdentifiers: "pinyin" });
  //});

  /* FIXME: there are errors for python compiler
  if (python) {
    describe("python", () => {
      runAll("py");
    })
  }
  else {
    describe("python", () => {
      it("skipped", ()=>{})
    })
  }
  */
});
