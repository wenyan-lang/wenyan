try {
  process.chdir("./tools");
} catch (e) {}

var fs = require("fs");
var parser = require("../src/parser");
var execSync = require("child_process").execSync;
var utils = require("./utils");

function readOtherExample(x) {
  return fs.readFileSync("../examples/" + x + ".wy").toString();
}

function runExample(lang, name) {
  var txt = fs.readFileSync("../examples/" + name + ".wy").toString();
  var sourceCode = parser.compile(lang, txt, {
    romanizeIdentifiers: true,
    lib: utils.loadlib(),
    reader: readOtherExample
  });
  console.log("=== COMPILED ===");
  console.log(sourceCode);
  console.log("=== EVAL ===");
  switch (lang) {
    case "py":
      console.log(utils.pyeval(sourceCode));
      break;
    case "js":
      eval(sourceCode);
      break;
    case "rb":
      console.log(utils.rbeval(sourceCode));
      break;
    default:
      break;
  }
}

function runAll(lang) {
  var files = fs.readdirSync("../examples/").filter(x => x.endsWith(".wy"));
  console.log(files);
  for (var i = 0; i < files.length; i++) {
    console.log(`======= Progress ${i + 1}/${files.length} =======`);
    runExample(lang, files[i].split(".")[0]);
  }
}

// runExample("js", "turing");
runAll("js");

// runExample("js", "../../../Downloads/local_test");
// runExample("js", "import");
