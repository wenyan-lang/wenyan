const raw = require.context("../lib", false, /.*\.wy$/);

const STDLIB = {};

raw.keys().forEach(key => (STDLIB[key.slice(0, -3)] = raw(key)));

module.exports = STDLIB;
