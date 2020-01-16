import {
  ImportOptions,
  CacheObject,
  CompileOptions,
  ImportedModule
} from "./types";

const INDEX_FILENAME = "序";

function isHostTrusted(url: string, trustedHosts: string[]) {
  for (const host of trustedHosts) {
    // FIXME: it can be bypassed by relative path resolving,
    // for examples: https://trusted.com/a/../../hijack.com/a/
    if (url.startsWith(host)) return true;
  }
  return false;
}

function isHttpURL(uri: string) {
  return !!uri.match(/^https?\:\/\//);
}

function fetchTextSync(url: string, timeout: number) {
  let XHR;
  if (typeof window !== "undefined" && "XMLHttpRequest" in window)
    XHR = window.XMLHttpRequest;
  else XHR = eval("require")("xmlhttprequest").XMLHttpRequest;

  var xmlHttp = new XHR();
  // xmlHttp.timeout = timeout;
  xmlHttp.open("GET", url, false); // false for synchronous request
  xmlHttp.send(null);

  if (xmlHttp.status >= 200 && xmlHttp.status < 300)
    return xmlHttp.responseText;

  throw new URIError(xmlHttp.responseText);
}

function fetchSync(uri: string, cache: CacheObject, requestTimeout: number) {
  if (cache[uri]) return cache[uri];

  const data = isHttpURL(uri)
    ? fetchTextSync(uri, requestTimeout)
    : eval("require")("fs").readFileSync(uri, "utf-8");

  cache[uri] = data;

  return data;
}

export function importReader(
  moduleName: string,
  importOptions: Partial<ImportOptions> = {}
): ImportedModule {
  const {
    allowHttp = false,
    entryFilepath,
    importPaths = [],
    importCache = {},
    importContext = {},
    trustedHosts = [],
    requestTimeout = 2000
  } = importOptions;

  const context = importContext[moduleName];
  if (context) {
    if (typeof context === "string") {
      return {
        src: context,
        moduleName
      };
    }

    if (context.entry) {
      return {
        moduleName,
        entry: context.entry,
        src: context.src
          ? context.src
          : fetchSync(context.entry, importCache, requestTimeout)
      };
    }

    throw new SyntaxError("Failed to parse context: " + context);
  }

  const pathes: string[] = [];

  if (typeof importPaths === "string") {
    pathes.push(importPaths);
  } else {
    pathes.push(...importPaths);
  }

  if (entryFilepath)
    pathes.push(
      entryFilepath
        .replace(/\\/g, "/")
        .split("/")
        .slice(0, -1)
        .join("/")
    );

  for (const dir of pathes) {
    let uri = dir;
    let entries = [];
    let src;

    if (uri.endsWith("/")) uri = uri.slice(0, -1);

    if (isHttpURL(uri)) {
      if (!allowHttp && !isHostTrusted(uri, trustedHosts)) {
        throw new URIError(
          `URL request "${uri}" is blocked by default for security purpose. ` +
            `You can turn it on by specify the "allowHttp" option.`
        );
      }
      entries = [
        `${uri}/${encodeURIComponent(moduleName)}.wy`,
        `${uri}/${encodeURIComponent(moduleName)}/${encodeURIComponent(
          INDEX_FILENAME
        )}.wy`
      ];
    } else {
      entries = [
        `${uri}/${moduleName}.wy`,
        `${uri}/${moduleName}/${INDEX_FILENAME}.wy`
      ];
    }

    for (const entry of entries) {
      try {
        src = fetchSync(entry, importCache, requestTimeout);
        return { src, entry, moduleName };
      } catch (e) {}
    }
  }

  throw new ReferenceError(
    `Module "${moduleName}" is not found. Searched in ${importPaths}`
  );
}

export function bundleImports(
  imports: string[],
  options: { lib: CompileOptions["lib"]; lang: CompileOptions["lang"] },
  importOptions: ImportOptions
): ImportedModule[] {
  const { lib, lang } = options;

  return imports.map(moduleName => {
    if (lib[lang][moduleName]) {
      return {
        moduleName,
        src: lib[lang][moduleName]
      };
    }

    if (lib[moduleName]) {
      return {
        moduleName,
        src: lib[moduleName]
      };
    }

    return importReader(moduleName, importOptions);
  });
}
