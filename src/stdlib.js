try {
  function loadStdlib() {
    const STDLIB = {};

    const raw = require.context("../lib", true, /.*\.wy$/);

    raw.keys().forEach(key => {
      const parts = key.slice(2, -3).split("/");
      const data = raw(key).default;
      let lib = STDLIB;
      for (const part of parts.slice(0, -1)) {
        if (!lib[part]) lib[part] = {};
        lib = lib[part];
      }
      lib[parts[parts.length - 1]] = data;
    });

    return STDLIB;
  }

  module.exports = loadStdlib();
} catch (e) {}
