var { expect } = require("chai");
const { defaultImportReader: reader } = require("../src/reader");

const helloworldContent = "吾有一言。曰「「問天地好在。」」。書之。";

describe("reader", () => {
  describe("local", () => {
    it("import local files", async () => {
      const content = await reader("helloworld", "./examples");

      expect(content).eq(helloworldContent);
    });

    it("search for files", async () => {
      const content = await reader("helloworld", [
        "./some/invalid/dir",
        "./lib",
        "./examples"
      ]);

      expect(content).eq(helloworldContent);
    });

    it("not found", async () => {
      try {
        await reader("not_exists", "./examples");
      } catch (e) {
        expect(e).to.be.an.instanceof(ReferenceError);
      }
    });
  });

  describe("http", () => {
    it("block http imports by default", async () => {
      try {
        await reader(
          "helloworld",
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/"
        );
      } catch (e) {
        expect(e).to.be.an.instanceof(URIError);
      }
    });

    it("load http contents", async () => {
      const content = await reader(
        "helloworld",
        "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/",
        {
          allowHttp: true
        }
      );

      expect(content).eq(helloworldContent);
    });

    it("load http contents in trusted hosts", async () => {
      const content = await reader(
        "helloworld",
        "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/",
        {
          trustedHosts: [
            "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples"
          ]
        }
      );

      expect(content).eq(helloworldContent);
    });

    it("search for http contents", async () => {
      const content = await reader(
        "helloworld",
        [
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/lib/",
          "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master/examples/"
        ],
        {
          trustedHosts: [
            "https://raw.githubusercontent.com/LingDong-/wenyan-lang/master"
          ]
        }
      );

      expect(content).eq(helloworldContent);
    });
  });
});
