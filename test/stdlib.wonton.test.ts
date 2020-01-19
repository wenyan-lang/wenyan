import { createTestUtil } from "./utils";

const { expectOutput: 食渾沌 } = createTestUtil({
  prefix: "吾嘗觀「「渾沌經」」之書。方悟「食渾沌」之義。施「食渾沌」於",
  suffix: "。名之曰「餛飩」。施「JSON.stringify」於「餛飩」。書之。"
});

describe("stdlib", () => {
  describe("wonton", () => {
    describe("deserialization", () => {
      it("empty", () => {
        食渾沌("「「物 也」」", {});
      });
    });
  });
});
