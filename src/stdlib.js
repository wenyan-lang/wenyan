/* wenyan-catsrc-ignore */

function loadStdlib() {
  let STDLIB = {};

  try {
    const raw = require.context("../lib", true, /.*\.wy$/);

    raw.keys().forEach(key => {
      const parts = key.slice(2, -3).split("/");
      const data = raw(key).default;
      for (const part of parts.slice(0, -1)) {
        if (!STDLIB[part]) STDLIB[part] = {};
        STDLIB = STDLIB[part];
      }
      STDLIB[parts[parts.length - 1]] = data;
    });
  } catch (e) {} // ignore "require.context" error for testing

  return STDLIB;
}

module.exports = loadStdlib();
