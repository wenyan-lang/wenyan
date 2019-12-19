const fs = require("fs");
var execSync = require("child_process").execSync;

function remotelib(urls) {
  var src = urls
    .map(url => execSync(`curl -s ${url}`, { encoding: "utf-8" }).toString())
    .join("\n")
    .replace(/"use strict"/g, /"use shit"/);
  (1, eval)(src);
}

function catsrc() {
  var s = "";
  var srcs = fs.readdirSync("../src/");
  for (var i = 0; i < srcs.length; i++) {
    if (srcs[i].endsWith(".js")) {
      s +=
        fs
          .readFileSync("../src/" + srcs[i])
          .toString()
          .replace(/const/g, "var") + ";\n";
    }
  }
  return s;
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

function beautifier() {
  remotelib([
    "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.2/beautify.js"
  ]);
  return js_beautify;
}

module.exports = { uglifier, beautifier, catsrc, remotelib };
