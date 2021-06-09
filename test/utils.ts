import { execute, compile } from "../src/parser";
import { CompileOptions } from "../src/types";

var utils = require("../tools/utils");
const lib = utils.loadlib();

export interface Options {
  prefix: string;
  suffix: string;
  compileOptions: Partial<CompileOptions>;
  stringProcess: (x: string) => string;
}

function createTestUtil(options: Partial<Options> = {}) {
  const {
    prefix = "",
    suffix = "書之",
    compileOptions = {},
    stringProcess = (x: string) => x.trim()
  } = options;

  function expectOutput(source: string, expected: any) {
    let output = "";

    const code = prefix + source + suffix;

    execute(code, {
      lang: "js",
      scoped: true,
      lib,
      logCallback: () => 0,
      ...compileOptions,
      output: (...args) => (output += args.join(" ") + "\n")
    });

    if (typeof expected === "string") {
      expect(stringProcess(output)).toEqual(stringProcess(expected));
    } else if (typeof expected === "number") {
      expect(+output).toEqual(+expected);
    } else {
      expect(JSON.parse(output)).toEqual(expected);
    }
  }

  return { expectOutput };
}

function compileLib(name: string, options: Partial<CompileOptions> = {}) {
  const jsCode = compile(lib[name], {
    lang: "js",
    romanizeIdentifiers: "none",
    logCallback: () => {},
    errorCallback: () => {},
    lib,
    strict: true,
    ...options
  });

  let wrapper = null;
  eval(`wrapper = new function() { ${jsCode} };`);
  return wrapper;
}

/**
 * Assert that actual result is equal to the expected.
 * @param {number} actual - Actual value.
 * @param {number} expected - Expected value.
 * @param {string} [message] - Debug message.
 */
function assertNumberEqual(actual: number, expected: number, message?: string) {
  try {
    if (Number.isNaN(expected)) {
      expect(actual).toBeNaN();
    } else {
      expect(actual === expected).toBeTruthy();
    }
  } catch (e) {
    if (message) throw new Error(message);
    else throw e;
  }
}

function compareResults(x: number | number[], y: number | number[]) {
  const ax = [].concat(x);
  const ay = [].concat(y);
  const len = Math.min(ax.length, ay.length);
  for (let i = 0; i < len; ++i) {
    if (ax[i] != ay[i]) {
      if (ax[i] < ay[i]) {
        return -1;
      } else if (ax[i] > ay[i]) {
        return 1;
      } else {
        return NaN;
      }
    }
  }
  return 0;
}

function isOnCorrectSide(
  actual: number | number[],
  expected: number | number[],
  boundary: number | number[]
) {
  return (
    compareResults(actual, boundary) * compareResults(expected, boundary) >= 0
  );
}

function calcError(actual: number, expected: number | number[]) {
  if (Array.isArray(expected)) {
    return expected.reduce((err, y) => err - y, actual);
  } else {
    return actual - expected;
  }
}

function nearlyEqual(
  actual: number,
  expected: number | number[],
  options: {
    relTol?: number;
    absTol?: number;
    bounds?: number[] | number[][];
  } = {}
) {
  const {
    relTol = Number.EPSILON, // relative error
    absTol = 0, // absolute error
    bounds = [] // boundary values (shall not cross into the wrong side)
  } = options;

  const expectedSingle = Array.isArray(expected) ? expected[0] : expected;
  if (Number.isFinite(expectedSingle)) {
    const err = calcError(actual, expected);
    const maxErr = Math.abs(expectedSingle) * relTol + absTol;
    return (
      Math.abs(err) <= maxErr &&
      // @ts-expect-error
      bounds.every(x => isOnCorrectSide(actual, expected, x))
    );
  } else {
    if (Number.isNaN(expectedSingle)) {
      return Number.isNaN(actual);
    } else {
      return actual === expectedSingle;
    }
  }
}

/**
 * Assert that actual result is close to the expected.
 * Tolerance = abs(expected) * relTol + absTol
 * @param {number} actual - Actual value
 * @param {(number|number[])} expected - Expected value (number or multi-word number)
 * @param {object} [options] - Options
 *   @param {number} [options.relTol = Number.EPSILON] - Relative error tolerance
 *   @param {number} [options.absTol = 0] - Absolute error tolerance
 *   @param {number[]|number[][]} [options.alts] - Array of alternative acceptable results
 *   @param {number[]|number[][]} [options.bounds] - Array of boundary values.
 *     The actual result shall not be on the different side of the boundary then the expected.
 * @param {string} [message] - Debug message.
 */
function assertNearlyEqual(
  actual: number,
  expected: number | number[],
  options: {
    relTol?: number;
    absTol?: number;
    alts?: number[] | number[][];
    bounds?: number[] | number[][]; // boundary values (shall not cross into the wrong side)
  } = {},
  message?: string
) {
  const {
    relTol = Number.EPSILON, // relative error
    absTol = 0, // absolute error
    alts = [], // alternative acceptable results
    bounds = [] // boundary values (shall not cross into the wrong side)
  } = options;

  try {
    expect(
      [expected]
        .concat(alts)
        .some(e => nearlyEqual(actual, e, { relTol, absTol, bounds }))
    ).toBeTruthy();
  } catch (e) {
    if (message) throw new Error(message);
    else throw e;
  }
}

export { createTestUtil, compileLib, assertNumberEqual, assertNearlyEqual };
