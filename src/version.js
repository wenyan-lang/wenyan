try {
  var package = require("../package.json");
} catch (e) {
  var package = { version: 'Unknown' };
}

module.exports = package.version;

