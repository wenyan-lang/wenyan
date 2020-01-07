require("set-tz")("UTC");

const { createTestUtil } = require("./utils");

const { expectOutput } = createTestUtil({
  prefix: "吾嘗觀「「曆法」」之書。",
  suffix: "書之"
});

describe("stdlib", () => {
  describe("calendar", () => {
    it("言彼之時刻", () => {
      expectOutput(
        "方悟「言彼之時刻」之義。施「言彼之時刻」於四千七百一十四",
        "丑初一刻三分三十四秒"
      );
    });

    it("言彼之日時", () => {
      expectOutput(
        "方悟「言彼之日時」之義。施「言彼之日時」於四千七百一十四",
        "西元一九六九年己酉年十一月二十四日辛巳日丑初一刻三分三十四秒"
      );
    });
  });
});
