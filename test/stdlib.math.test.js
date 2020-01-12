const { compileLib, assertNumberEqual, assertNearlyEqual } = require("./utils");

const 算經 = compileLib("算經");

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
        it(x, () => assertNumberEqual(算經[x], mathConsts[x], `${x} = ${mathConsts[x]}`));
      }
    });

    // floor, ceil, round, trunc, abs, sign
    const floatExactTestVals = [
      0,
      Number.MIN_VALUE,
      Number.MIN_VALUE * 2,
      Number.MIN_VALUE / Number.EPSILON + Number.MIN_VALUE * -1,
      Number.MIN_VALUE / Number.EPSILON + Number.MIN_VALUE * 0,
      Number.MIN_VALUE / Number.EPSILON + Number.MIN_VALUE * 1,
      Number.EPSILON * 0.5 + Number.EPSILON * Number.EPSILON * -0.25,
      Number.EPSILON * 0.5 + Number.EPSILON * Number.EPSILON * 0,
      Number.EPSILON * 0.5 + Number.EPSILON * Number.EPSILON * 0.5,
      Number.EPSILON + Number.EPSILON * Number.EPSILON * -0.5,
      Number.EPSILON + Number.EPSILON * Number.EPSILON * 0,
      Number.EPSILON + Number.EPSILON * Number.EPSILON * 1,
      0.5 + Number.EPSILON * -0.25,
      0.5 + Number.EPSILON * 0,
      0.5 + Number.EPSILON * 0.5,
      1 + Number.EPSILON * -0.5,
      1 + Number.EPSILON * 0,
      1 + Number.EPSILON * 1,
      1.5 + Number.EPSILON * -1,
      1.5 + Number.EPSILON * 0,
      1.5 + Number.EPSILON * 1,
      2 + Number.EPSILON * -1,
      2 + Number.EPSILON * 0,
      2 + Number.EPSILON * 2,
      2.5 + Number.EPSILON * -2,
      2.5 + Number.EPSILON * 0,
      2.5 + Number.EPSILON * 2,
      3 + Number.EPSILON * -2,
      3 + Number.EPSILON * 0,
      3 + Number.EPSILON * 2,
      3.5 + Number.EPSILON * -2,
      3.5 + Number.EPSILON * 0,
      3.5 + Number.EPSILON * 2,
      4 + Number.EPSILON * -2,
      4 + Number.EPSILON * 0,
      4 + Number.EPSILON * 4,
      Number.MAX_SAFE_INTEGER * 0.25 - 1.75,
      Number.MAX_SAFE_INTEGER * 0.25 - 1.5,
      Number.MAX_SAFE_INTEGER * 0.25 - 1.25,
      Number.MAX_SAFE_INTEGER * 0.25 - 1,
      Number.MAX_SAFE_INTEGER * 0.25 - 0.75,
      Number.MAX_SAFE_INTEGER * 0.25 - 0.5,
      Number.MAX_SAFE_INTEGER * 0.25 - 0.25,
      Number.MAX_SAFE_INTEGER * 0.25 + 0,
      Number.MAX_SAFE_INTEGER * 0.25 + 0.25,
      Number.MAX_SAFE_INTEGER * 0.25 + 0.75,
      Number.MAX_SAFE_INTEGER * 0.25 + 1.25,
      Number.MAX_SAFE_INTEGER * 0.25 + 1.75,
      Number.MAX_SAFE_INTEGER * 0.25 + 2.25,
      Number.MAX_SAFE_INTEGER * 0.5 - 1.5,
      Number.MAX_SAFE_INTEGER * 0.5 - 1,
      Number.MAX_SAFE_INTEGER * 0.5 - 0.5,
      Number.MAX_SAFE_INTEGER * 0.5 + 0,
      Number.MAX_SAFE_INTEGER * 0.5 + 0.5,
      Number.MAX_SAFE_INTEGER * 0.5 + 1.5,
      Number.MAX_SAFE_INTEGER * 0.5 + 2.5,
      Number.MAX_SAFE_INTEGER - 1,
      Number.MAX_SAFE_INTEGER + 0,
      Number.MAX_SAFE_INTEGER + 1,
      Number.MAX_SAFE_INTEGER + 3,
      Number.MAX_VALUE / (2 - Number.EPSILON) + Number.MAX_VALUE / Number.MAX_SAFE_INTEGER * -0.5,
      Number.MAX_VALUE / (2 - Number.EPSILON) + Number.MAX_VALUE / Number.MAX_SAFE_INTEGER * 0,
      Number.MAX_VALUE / (2 - Number.EPSILON) + Number.MAX_VALUE / Number.MAX_SAFE_INTEGER * 1,
      Number.MAX_VALUE - Number.MAX_VALUE / Number.MAX_SAFE_INTEGER,
      Number.MAX_VALUE,
      Infinity,
    ].reduce((a, x) => a.concat(x, -x), []).concat(NaN);

    const testExactFunc = (name, truthFunc) => {
      describe(name, () => {
        for (const x of floatExactTestVals) {
          const expected = truthFunc(x);
          const actual = 算經[name](x);
          it(x.toString(), () => assertNumberEqual(actual, expected, `${name}(${x}) = ${expected}`));
        }
      });
    };

    testExactFunc("取底", Math.floor);
    testExactFunc("取頂", Math.ceil);
    // 取整(-(N+0.5)) = -(N+1), Math.round(-(N+0.5)) = -N
    testExactFunc("取整", x => Math.sign(x) * Math.round(Math.abs(x)));
    testExactFunc("捨餘", Math.trunc);
    testExactFunc("絕對", Math.abs);
    testExactFunc("正負", Math.sign);
  });
});
