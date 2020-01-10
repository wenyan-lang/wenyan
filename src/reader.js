const URL = require("url");

const isClient = typeof window !== "undefined";

const INDEX_FILENAME = "序";

function isHostTrusted(url, trustedHosts) {
  for (const host of trustedHosts) {
    // FIXME: it can be bypassed by relative path resolving,
    // for examples: https://trusted.com/a/../../hijack.com/a/
    if (url.startsWith(host)) return true;
  }
  return false;
}

function isHttpURL(uri) {
  return !!uri.match(/^https?\:\/\//);
}

function fetchTextSync(url, timeout) {
  let XHR;
  if (typeof window !== "undefined" && "XMLHttpRequest" in window)
    XHR = window.XMLHttpRequest;
  else XHR = eval("require")("xmlhttprequest").XMLHttpRequest;

  var xmlHttp = new XHR();
  xmlHttp.timeout = timeout;
  xmlHttp.open("GET", url, false); // false for synchronous request
  xmlHttp.send(null);

  if (xmlHttp.status >= 200 && xmlHttp.status < 300)
    return xmlHttp.responseText;

  throw new URIError(xmlHttp.responseText);
}

function defaultImportReader(
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
    let uri = dir;

    if (isClient) {
      uri = URL.resolve(window.document.location, uri);
    }

    if (uri.endsWith("/")) uri = uri.slice(0, -1);

    if (isHttpURL(uri)) {
      if (!allowHttp && !isHostTrusted(uri, trustedHosts)) {
        throw new URIError(
          `URL request "${uri}" is blocked by default for security purpose. ` +
            `You can turn it on by specify the "allowHttp" option.`
        );
      }

      try {
        return fetchTextSync(
          `${uri}/${encodeURIComponent(moduleName)}.wy`,
          requestTimeout
        );
      } catch (e) {}
      try {
        return fetchTextSync(
          `${uri}/${encodeURIComponent(moduleName)}/${encodeURIComponent(
            INDEX_FILENAME
          )}.wy`,
          requestTimeout
        );
      } catch (e) {}
    } else {
      try {
        return eval("require")("fs").readFileSync(
          `${dir}/${moduleName}.wy`,
          "utf-8"
        );
      } catch (e) {}
      try {
        return eval("require")("fs").readFileSync(
          `${dir}/${moduleName}/${INDEX_FILENAME}.wy`,
          "utf-8"
        );
      } catch (e) {}
    }
  }

  throw new ReferenceError(
    `Module "${moduleName}" is not found. Searched in ${importPaths}`
  );
}

module.exports = {
  defaultImportReader
};
