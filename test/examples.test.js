var fs = require("fs-extra");
var parser = require("../src/parser");
var execSync = require("child_process").execSync;
var { expect } = require("chai");

const exampleDir = "./examples/";
const outputDir = "./test/temp/examples/";
const python = getPythonExecutable();

const examplesContainsRandom = ["divination"];

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

function runExample(lang, name) {
  var txt = fs.readFileSync(exampleDir + name + ".wy").toString();
  var compiled = parser.compile(lang, txt, { logCallback: () => {} });
  // expect(compiled).to.matchSnapshot();
  const filename = `${outputDir}${name}.${lang}`;
  fs.writeFileSync(filename, compiled, "utf-8");

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
  if (!examplesContainsRandom.includes(name)) expect(output).to.matchSnapshot();
}

function runAll(lang) {
  var files = fs.readdirSync(exampleDir);
  for (const file of files) {
    const filename = file.split(".")[0];
    it(filename, () => runExample(lang, filename));
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
