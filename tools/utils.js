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

function pyeval(py){
	fs.writeFileSync("tmp.py",py);
	var ret = execSync("which python3; if [ $? == 0 ]; then python3 tmp.py; else python tmp.py; fi;",{ encoding: 'utf-8' })
	return ret;
}

function rbeval(rb){
	fs.writeFileSync("tmp.rb",rb);
	let ret = execSync("ruby tmp.rb", { encoding: 'utf-8' })
	execSync("rm tmp.rb");
	return ret;
}

function beautifier() {
  remotelib([
    "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.2/beautify.js"
  ]);
  return js_beautify;
}

module.exports = { uglifier, beautifier, catsrc, remotelib, pyeval,rbeval };
