var JS = require("./js");
var PY = require("./py");
var RB = require("./rb");
const compilers = {
  js: JS,
  py: PY,
  rb: RB
};

module.exports = compilers;

