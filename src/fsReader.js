module.exports = function fsReader(x) {
  try {
    const fs = require("fs");
    try {
      return fs.readFileSync(x + ".wy").toString();
    } catch (e) {
      var files = fs.readdirSync("./");
      for (var i = 0; i < files.length; i++) {
        if (fs.lstatSync(files[i]).isDirectory()) {
          try {
            return fs.readFileSync(files[i] + "/" + x + ".wy").toString();
          } catch (e) {}
        }
      }
    }
  } catch (e) {}
  console.log("Cannot import ", x);
};
