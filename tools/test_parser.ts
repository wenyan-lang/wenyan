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
  var sourceCode = parser.compile(txt, {
    lang: "js",
    romanizeIdentifiers: "none", //true,
    lib: utils.loadlib(),
    reader: readOtherExample,
    strict: true,
    errorCallback: () => 0
    // logCallback: ()=>0,
  });
  console.log("=== COMPILED ===");
  console.log(sourceCode);
  console.log("=== EVAL ===");
  switch (lang) {
    case "py":
      console.log(utils.pyeval(sourceCode));
      break;
    case "js":
      parser.evalCompiled(sourceCode);
      break;
    case "rb":
      console.log(utils.rbeval(sourceCode));
      break;
    default:
      break;
  }
}

function runAll(lang, skips = []) {
  var files = fs.readdirSync("../examples/").filter(x => x.endsWith(".wy"));
  console.log(files);
  for (var i = 0; i < files.length; i++) {
    if (skips.includes(files[i].split(".")[0])) {
      console.log("SKIPPED");
      continue;
    }
    console.log(`======= Progress ${i + 1}/${files.length} =======`);
    runExample(lang, files[i].split(".")[0]);
  }
}

runExample("js", "try");
// runExample("js", "../lib/js/畫譜");
// runExample("js", "../lib/曆法");
// runAll("js", ["quine", "quine2", "tree", "tree2", "try"]);
// runAll("js", ["quine"]);

// runExample("js", "../../../Downloads/local_test");
// runExample("py", "draw_heart");
