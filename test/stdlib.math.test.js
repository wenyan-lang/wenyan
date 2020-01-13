const { compileLib, assertNumberEqual, assertNearlyEqual } = require("./utils");
const cases = require("./stdlib.math.test.cases");

const 算經 = compileLib("算經");

const MIN_NORMAL_VALUE = Number.MIN_VALUE / Number.EPSILON;
const MAX_POW_OF_2 = Number.MAX_VALUE / (2 - Number.EPSILON);

describe("stdlib", () => {
  describe("math", () => {
    // consts
    const mathConsts = {
      圓周率: Math.PI,
      倍圓周率: Math.PI * 2,
      半圓周率: Math.PI / 2,
      四分圓周率: Math.PI / 4,
      自然常數: Math.E,
      歐拉常數: 0.5772156649015329,
      黃金分割數: 1.618033988749895,
      二之平方根: Math.SQRT2,
      二之對數: Math.LN2,
      十之對數: Math.LN10,
    };

    describe("consts", () => {
      for (const x in mathConsts) {
        it(
          x,
          () => assertNumberEqual(算經[x], mathConsts[x], `Expect ${x} = ${mathConsts[x]}, actually ${算經[x]}`)
        );
      }
    });

    // Exact: floor, ceil, round, trunc, abs, sign
    // Correctly rounded: sqrt
    const testExactFunc = (name, truthFunc, cases) => {
      describe(name, () => {
        for (const x of cases) {
          const expected = truthFunc(x);
          const actual = 算經[name](x);
          it(
            x.toString(),
            () => assertNumberEqual(actual, expected, `Expect ${name}(${x}) = ${expected}, actually ${actual}`)
          );
        }
      });
    };

    testExactFunc("取底", Math.floor, cases.ROUND);
    testExactFunc("取頂", Math.ceil, cases.ROUND);
    // 取整(-(N+0.5)) = -(N+1), Math.round(-(N+0.5)) = -N
    testExactFunc("取整", x => Math.sign(x) * Math.round(Math.abs(x)), cases.ROUND);
    testExactFunc("捨餘", Math.trunc, cases.ROUND);
    testExactFunc("絕對", Math.abs, cases.ROUND);
    testExactFunc("正負", Math.sign, cases.ROUND);

    testExactFunc("平方根", Math.sqrt, cases.SQRT);

    // sin
    describe("正弦", () => {
      for (const c of cases.TRIG) {
        const x = c.x;
        const expected = c.sin;
        const actual = 算經.正弦(x);
        // error caused by inaccurate mod pi/2
        // TODO: remove absTol when implementation is improved
        const dx = Math.abs(x) * Number.EPSILON * Number.EPSILON * 53;
        const absTol = Math.abs(Math.cos(x)) * dx + Math.abs(Math.sin(x)) * (dx * dx / 2);
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            bounds: [[-1, 0], [1, 0]],
            relTol: Number.EPSILON * 1.5,
            absTol: absTol
          }, `Expect 正弦(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });

    // cos
    describe("餘弦", () => {
      for (const c of cases.TRIG) {
        const x = c.x;
        const expected = c.cos;
        const actual = 算經.餘弦(x);
        // error caused by inaccurate mod pi/2
        // TODO: remove absTol when implementation is improved
        const dx = Math.abs(x) * Number.EPSILON * Number.EPSILON * 53;
        const absTol = Math.abs(Math.sin(x)) * dx + Math.abs(Math.cos(x)) * (dx * dx / 2);
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            bounds: [[-1, 0], [1, 0]],
            relTol: Number.EPSILON * 1.5,
            absTol: absTol
          }, `Expect 餘弦(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });

    // tan
    describe("正切", () => {
      for (const c of cases.TRIG) {
        const x = c.x;
        const expected = c.tan;
        const actual = 算經.正切(x);
        // error caused by inaccurate mod pi/2
        // TODO: remove absTol when implementation is improved
        const dx = Math.abs(x) * Number.EPSILON * Number.EPSILON * 53;
        const absTol = (() => {
          if (dx >= Math.PI / 2) {
            return Infinity;
          }
          const t = Math.tan(dx);
          const u = t * Math.abs(expected[0]);
          if (u >= 1) {
            return Infinity;
          }
          return t * (1 + expected[0] * expected[0]) / (1 - u);
        })();
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            relTol: Number.EPSILON * 2.5,
            absTol: absTol
          }, `Expect 正切(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });

    // asin
    describe("反正弦", () => {
      for (const c of cases.ASIN_ACOS) {
        const x = c.x;
        const expected = c.asin;
        const actual = 算經.反正弦(x);
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            bounds: [
              [-1.5707963267948966, -6.123233995736766e-17],
              [0, 0],
              [1.5707963267948966, 6.123233995736766e-17]
            ],
            relTol: Number.EPSILON * 2
          }, `Expect 反正弦(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });

    // acos
    describe("反餘弦", () => {
      for (const c of cases.ASIN_ACOS) {
        const x = c.x;
        const expected = c.acos;
        const actual = 算經.反餘弦(x);
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            bounds: [
              [0, 0],
              [1.5707963267948966, 6.123233995736766e-17],
              [3.1415926535897931, 1.2246467991473532e-16]
            ],
            relTol: Number.EPSILON * 2
          }, `Expect 反餘弦(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });

    // atan
    describe("反正切", () => {
      for (const c of cases.ATAN) {
        const x = c.x;
        const expected = c.expected;
        const actual = 算經.反正切(x);
        it(
          x.toString(),
          () => assertNearlyEqual(actual, expected, {
            bounds: [
              [-1.5707963267948966, -6.123233995736766e-17],
              [0, 0],
              [1.5707963267948966, 6.123233995736766e-17]
            ],
            relTol: Number.EPSILON * 2
          }, `Expect 反正切(${x}) = ${expected[0]}, actually ${actual}`)
        );
      }
    });
  });
});
