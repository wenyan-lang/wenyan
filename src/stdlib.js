const raw = require.context("../lib", false, /.*\.wy$/);

const STDLIB = {};

raw.keys().forEach(key => (STDLIB[key.slice(2, -3)] = raw(key).default));

module.exports = STDLIB;
