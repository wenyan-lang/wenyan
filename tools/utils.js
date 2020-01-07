const fs = require("fs");
const path = require("path");
var execSync = require("child_process").execSync;

function loadlib(libDir = path.resolve(__dirname, "../lib/")) {
  var lib = {};
  var srcs = fs.readdirSync(libDir);
  for (var i = 0; i < srcs.length; i++) {
    const subPath = path.join(libDir, srcs[i]);
    if (srcs[i].endsWith(".wy")) {
      lib[srcs[i].split(".")[0]] = fs.readFileSync(subPath).toString();
    } else if (fs.lstatSync(subPath).isDirectory()) {
      lib[srcs[i]] = loadlib(subPath);
    }
  }
  return lib;
}

function pyeval(py) {
  fs.writeFileSync("tmp.py", py);
  var ret = execSync(
    "which python3; if [ $? == 0 ]; then python3 tmp.py; else python tmp.py; fi;",
    { encoding: "utf-8" }
  );
  return ret;
}

function rbeval(rb) {
  fs.writeFileSync("tmp.rb", rb);
  let ret = execSync("ruby tmp.rb", { encoding: "utf-8" });
  execSync("rm tmp.rb");
  return ret;
}

module.exports = {
  loadlib,
  pyeval,
  rbeval
};
