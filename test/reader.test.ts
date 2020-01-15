import { importReader as reader } from "../src/reader";

const helloworldContent = "吾有一言。曰「「問天地好在。」」。書之。";

describe("reader", () => {
  describe("local", () => {
    it("import local files", () => {
      const { src } = reader("helloworld", { importPaths: "./examples" });

      expect(src).toEqual(helloworldContent);
    });

    it("search for files", () => {
      const { src } = reader("helloworld", {
        importPaths: ["./some/invalid/dir", "./lib", "./examples"]
      });

      expect(src).toEqual(helloworldContent);
    });

    it("not found", () => {
      try {
        reader("not_exists", { importPaths: "./examples" });
      } catch (e) {
        expect(e).toBeInstanceOf(ReferenceError);
      }
    });
  });

  describe("cache", () => {
    it("saves cache", () => {
      const importCache = {};
      reader("helloworld", { importPaths: "./examples", importCache });

      expect(importCache["./examples/helloworld.wy"]).toEqual(
        helloworldContent
      );
    });

    it("loads cache", () => {
      const mockSrc = "you have been hacked!";
      const importCache = { "./examples/helloworld.wy": mockSrc };
      const { src } = reader("helloworld", {
        importPaths: "./examples",
        importCache
      });

      expect(src).toEqual(mockSrc);
    });
  });

  describe("context", () => {
    it("loads from context", () => {
      const mockSrc = "you have been hacked!";
      const importContext = { helloworld: mockSrc };
      const { src } = reader("helloworld", {
        importPaths: "./examples",
        importContext
      });

      expect(src).toEqual(mockSrc);
    });
  });

  describe("http", () => {
    it("block http imports by default", async () => {
      try {
        reader("helloworld", {
          importPaths:
            "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/"
        });
      } catch (e) {
        expect(e).toBeInstanceOf(URIError);
      }
    });

    it("load http contents", () => {
      const { src } = reader("helloworld", {
        importPaths:
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/",
        allowHttp: true
      });

      expect(src).toEqual(helloworldContent);
    });

    it("load http contents in trusted hosts", () => {
      const { src } = reader("helloworld", {
        importPaths:
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/",
        trustedHosts: [
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples"
        ]
      });

      expect(src).toEqual(helloworldContent);
    });

    it("search for http contents", () => {
      const { src } = reader("helloworld", {
        importPaths: [
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/lib/",
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/"
        ],
        trustedHosts: [
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master"
        ]
      });

      expect(src).toEqual(helloworldContent);
    });
  });
});
