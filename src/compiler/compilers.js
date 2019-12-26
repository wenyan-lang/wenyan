try {
  var JS = require("./js");
  var PY = require("./py");
  var RB = require("./rb");
} catch (e) {}
const compilers = {
  js: JS,
  py: PY,
  rb: RB
};

try {
  module.exports = compilers;
} catch (e) {}
