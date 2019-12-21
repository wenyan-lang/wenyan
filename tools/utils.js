const fs = require("fs");
var execSync = require("child_process").execSync;

function remotelib(urls) {
  var src = urls
    .map(url => execSync(`curl -s ${url}`, { encoding: "utf-8" }).toString())
    .join("\n")
    .replace(/"use strict"/g, /"use shit"/);
  (1, eval)(src);
}

const catsrc = ({ only2js = false } = {}) => fs.readdirSync("../src/")
  .filter(file => file.endsWith(".js"))
  .filter(file => !file.includes("cli"))
  .filter(file => !file.includes("2rb") || !only2js)
  .filter(file => !file.includes("2py") || !only2js)
  .map(file => fs.readFileSync("../src/" + file))
  .map(String)
  .map(txt => txt.replace(/const/g, "var"))
  .join(";\n")

function loadlib() {
  var lib = {};
  var srcs = fs.readdirSync("../lib/");
  for (var i = 0; i < srcs.length; i++) {
    if (srcs[i].endsWith(".wy")) {
      lib[srcs[i].split(".")[0]] = fs
        .readFileSync("../lib/" + srcs[i])
        .toString();
    }
  }
  return lib;
}

function uglifier() {
  remotelib([
    "https://skalman.github.io/UglifyJS-online/uglify/lib/utils.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/ast.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/parse.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/transform.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/scope.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/output.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/compress.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/propmangle.js",
    "https://skalman.github.io/UglifyJS-online/uglify/lib/minify.js"
  ]);
  return minify;
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

function beautifier() {
  remotelib([
    "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.2/beautify.js"
  ]);
  return js_beautify;
}

module.exports = {
  uglifier,
  beautifier,
  catsrc,
  loadlib,
  remotelib,
  pyeval,
  rbeval
};
