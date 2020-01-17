import { StandardLibraryObject } from "./types";

function loadStdlib() {
  const STDLIB = {};

  try {
    const raw = require.context("../lib", true, /.*\.wy$/);

    raw.keys().forEach(key => {
      const parts = key.slice(2, -3).split("/");
      const data = raw(key).default;
      let sublib = STDLIB;
      for (const part of parts.slice(0, -1)) {
        if (!sublib[part]) sublib[part] = {};
        sublib = sublib[part];
      }
      sublib[parts[parts.length - 1]] = data;
    });
  } catch (e) {} // ignore "require.context" error for testing

  return STDLIB as StandardLibraryObject;
}

export const STDLIB = loadStdlib();
