var assert = require("assert");
var { compile } = require("../src/parser");

describe("calendar", () => {
  describe("言彼之時刻", () => {
    it("should test calendar stuff", () => {
      assert.strictEqual(
        compile(
          "吾嘗觀「「曆法」」之書。方悟「言彼之時刻」之義。施「言彼之時刻」於四千七百一十四。書之"
        ),
        ""
      );
    });
  });

  describe("num2hanzi(0.5)", () => {
    it("should test some more calendar stuff", () => {
      assert.strictEqual(num2hanzi(0.5), "五分");
    });
  });
});
