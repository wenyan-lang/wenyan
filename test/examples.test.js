var fs = require("fs-extra");
var path = require("path");
var parser = require("../dist/core/index.min.js");
var execSync = require("child_process").execSync;
var { expect } = require("chai");

const exampleDir = path.resolve(__dirname, "../examples/");
const outputDir = path.resolve(__dirname, "../test/temp/examples/");
const python = getPythonExecutable();

const ignoreExamples = [
  "divination", // contains randomness
  "tree2", // DOM manipulate
  "tree" // DOM manipulate
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

function runExample(lang, name, options = {}) {
  var txt = fs.readFileSync(path.join(exampleDir, name + ".wy")).toString();

  var compiled = parser.compile(lang, txt, {
    logCallback: () => {},
    ...options
  });
  // expect(compiled).to.matchSnapshot();
  const filename = `${outputDir}${name}.${lang}`;
  fs.writeFileSync(filename, compiled, "utf-8");

  if (ignoreExamples.includes(name)) return;

  let output = undefined;
  if (lang == "py") {
    output = execSync(`${python} ${filename}`, {
      encoding: "utf-8"
    }).toString();
  } else if (lang == "js") {
    output = execSync(`node ${filename}`, {
      encoding: "utf-8"
    }).toString();
  }
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
  before(() => {
    fs.removeSync(outputDir);
    fs.ensureDirSync(outputDir);
  });

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
