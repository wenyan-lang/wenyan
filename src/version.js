try {
  const package = require("../package.json");

  module.exports = package.version;
} catch (e) {}
