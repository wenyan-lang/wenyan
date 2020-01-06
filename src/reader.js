function getFetch() {
  if (typeof window != "undefined" && window.fetch) return window.fetch;
  else return eval("require")("node-fetch");
}

async function defaultImportReader(moduleName, importPaths = []) {
  const fetch = getFetch();

  if (typeof importPaths === "string") importPaths = [importPaths];

  for (dir of importPaths) {
    const filepath = dir + "/" + moduleName + ".wy";
    if (filepath.match(/^\w+\:\/\//)) {
      try {
        const data = await fetch(filepath);
        const text = await data.text();
        return text;
      } catch (e) {}
    } else {
      try {
        return eval("require")("fs").readFileSync(filepath, "utf-8");
      } catch (e) {}
    }
  }

  throw new Error(
    `Module "${moduleName}" is not found. Searched in ${importPaths}`
  );
}

try {
  module.exports = {
    normalizeImportPath,
    defaultImportReader
  };
} catch (e) {}
