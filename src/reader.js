async function defaultImportReader(moduleName, importPaths = []) {
  let fs, path;
  try {
    fs = eval("require")("fs");
    path = eval("require")("path");
  } catch (e) {
    throw new Error(
      `Cannot import ${moduleName}, please specify the "reader" option in compile. ${e}`
    );
  }

  if (typeof importPaths === "string") importPaths = [importPaths];

  for (dir of importPaths) {
    try {
      return fs.readFileSync(path.join(dir, moduleName + ".wy"), "utf-8");
    } catch (e) {}
  }

  try {
    return fs.readFileSync(moduleName + ".wy", "utf-8");
  } catch (e) {
    throw new Error(
      `Module "${moduleName}" is not found. Searched in ${importPaths}`
    );
  }
}

try {
  module.exports = {
    defaultImportReader
  };
} catch (e) {}
