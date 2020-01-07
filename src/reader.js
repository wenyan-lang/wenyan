function isHostTrusted(url, trustedHosts) {
  // TODO:
  return false;
}
function isHttpURL(uri) {
  return !!uri.match(/^https?\:\/\//);
}

async function defaultImportReader(
  moduleName,
  importPaths = [],
  requestOptions = {}
) {
  const {
    allowHttp = false,
    trustedHosts = [],
    requestTimeout = 2000
  } = requestOptions;

  if (typeof importPaths === "string") importPaths = [importPaths];

  for (dir of importPaths) {
    const uri = dir + "/" + moduleName + ".wy";
    if (isHttpURL(uri)) {
      if (!allowHttp && !isHostTrusted(uri, trustedHosts)) {
        throw new Error(
          `URL request "${uri}" is blocked by default for security purpose.` +
            `You can turn it on by specify the "allowHttp" option.`
        );
      }

      try {
        const res = await axios(uri, {
          responseType: "text",
          timeout: requestTimeout
        });
        return res.data;
      } catch (e) {}
    } else {
      try {
        return await eval("require")("fs").promises.readFile(uri, "utf-8");
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
