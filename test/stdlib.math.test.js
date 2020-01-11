const { createTestUtil } = require("./utils");

const { expectOutput } = createTestUtil({
  prefix: "吾嘗觀「「算經」」之書。",
  suffix: "書之"
});

describe("stdlib", () => {
  describe("math", () => {
    it("取整", () => {
      expectOutput("方悟「取整」之義。施「取整」於一百又五絲", "一百");
    });
  });
});
