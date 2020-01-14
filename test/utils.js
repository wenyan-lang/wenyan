const { compile, execute } = require("../src/parser");
const { expect } = require("chai");
var utils = require("../tools/utils");

var lib = utils.loadlib();

function createTestUtil(options = {}) {
  const { prefix = "", suffix = "書之", compileOptions = {} } = options;

  function expectOutput(source, expected) {
    let output = "";
    execute(prefix + source + suffix, {
      lang: "js",
      scoped: true,
      lib,
      logCallback: () => 0,
      ...compileOptions,
      output: (...args) => (output += args.join(" ") + "\n")
    });

    expect(output.trim()).eq(expected.trim());
  }

  return { expectOutput };
}

function compileLib(name, options = {}) {
  const jsCode = compile(lib[name], {
    lang: "js",
    romanizeIdentifiers: "none",
    logCallback: () => { },
    errorCallback: () => { },
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
function assertNumberEqual(actual, expected, message = undefined) {
  if (Number.isNaN(expected)) {
    expect(actual, message).NaN;
  } else {
    expect(actual, message).eq(expected);
  }
}

function compareResults(x, y) {
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

function isOnCorrectSide(actual, expected, boundary) {
  return compareResults(actual, boundary) * compareResults(expected, boundary) >= 0;
}

function calcError(actual, expected) {
  if (Array.isArray(expected)) {
    return expected.reduce((err, y) => err - y, actual);
  } else {
    return actual - expected;
  }
}

function nearlyEqual(actual, expected, options = {}) {
  const {
    relTol = Number.EPSILON,   // relative error
    absTol = 0,                // absolute error
    bounds = []                // boundary values (shall not cross into the wrong side)
  } = options;

  const expectedSingle = Array.isArray(expected) ? expected[0] : expected;
  if (Number.isFinite(expectedSingle)) {
    const err = calcError(actual, expected);
    const maxErr = Math.abs(expectedSingle) * relTol + absTol;
    return Math.abs(err) <= maxErr && bounds.every(x => isOnCorrectSide(actual, expected, x));
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
function assertNearlyEqual(actual, expected, options = {}, message = undefined) {
  const {
    relTol = Number.EPSILON,   // relative error
    absTol = 0,                // absolute error
    alts = [],                 // alternative acceptable results
    bounds = []                // boundary values (shall not cross into the wrong side)
  } = options;

  expect(actual, message)
    .satisfy(a => [expected].concat(alts).some(e => nearlyEqual(a, e, { relTol, absTol, bounds })));
}

module.exports = {
  createTestUtil,
  compileLib,
  assertNumberEqual,
  assertNearlyEqual
};
