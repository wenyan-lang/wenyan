var fs = require("fs-extra");
var path = require("path");
var utils = require("../tools/utils");
var execSync = require("child_process").execSync;
var { expect } = require("chai");
var { compile, evalCompiled } = require("../src/parser");

var lib = utils.loadlib();
const exampleDir = path.resolve(__dirname, "../examples/");
const python = getPythonExecutable();

const ignoreExamples = [
  "divination", // contains randomness
  "import", // prints current time
  "tree2", // DOM manipulate
  "tree", // DOM manipulate
  "clock" // DOM manipulate
];

function getPythonExecutable() {
  try {
    const output = execSync(`python3 -V`).toString();
    if (output && +output[7] === 3) return "python3";
  } catch (e) {}
  try {
    const output = execSync(`python -V`).toString();
    if (output && +output[7] === 3) return "python";
  } catch (e) {}
  return undefined;
}

async function runExample(lang, name, options = {}) {
  var code = fs
    .readFileSync(path.join(exampleDir, name + ".wy"), "utf-8")
    .toString();

  var compiled = compile(lang, code, {
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

  expect(output).to.matchSnapshot();
}

function runAll(lang, options) {
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

  describe("romanizeIdentifiers", () => {
    runAll("js", { romanizeIdentifiers: true });
  });

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
