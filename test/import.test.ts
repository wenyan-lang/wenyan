import { createTestUtil } from "./utils";

const { expectOutput } = createTestUtil({
  prefix: "吾嘗觀「「四庫全書」」之書。",
  suffix: "書之",
  compileOptions: {
    importPaths: "./test/fixture/nested-import"
  }
});

describe("import", () => {
  it("nested import", () => {
    expectOutput(
      "方悟「草部」之義。今有一元。曰「草部」。",
      "甘草。黄芪。人参。"
    );
  });
});
