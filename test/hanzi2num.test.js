var assert = require("assert");
var { num2hanzi, hanzi2num } = require("../src/hanzi2num");

describe("hanzi2num", () => {
  describe("num2hanzi(0.53212121222)", () => {
    it("should translate float number to hanzi correctly", () => {
      assert.equal(num2hanzi(0.53212121222), "零又五分三釐二毫一絲二忽一微");
    });
  });

  describe("num2hanzi(0.5)", () => {
    it("should translate float number to hanzi correctly", () => {
      assert.equal(num2hanzi(0.5), "零又五分");
    });
  });

  describe("hanzi2num(num2hanzi(0.532))", () => {
    it("should translate float number and hanzi back and forth", () => {
      assert.equal(hanzi2num(num2hanzi(0.532)), 0.532);
    });
  });

  describe('num2hanzi(hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"))', () => {
    it("should translate float number and hanzi back and forth", () => {
      assert.equal(
        num2hanzi(
          hanzi2num(
            "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
          )
        ),
        "二十一京二千三百四十五兆六千七百八十億九百萬零二百五十六"
      );
    });
  });

  describe("num2hanzi(-(10**10+99))", () => {
    it("should translate small negative float numner to hanzi", () => {
      assert.equal(num2hanzi(-(10 ** 10 + 99)), "負一百億零九十九");
    });
  });

  describe("num2hanzi(0)", () => {
    it("should translate 0 to hanzi", () => {
      assert.equal(num2hanzi(0), "零");
    });
  });

  describe("num2hanzi(-0.765433)", () => {
    it("should translate negative float number", () => {
      assert.equal(num2hanzi(-0.765433), "負零又七分六釐五毫四絲三忽二微");
    });
  });

  describe('hanzi2num("負一又二分三釐四毫五絲六忽七微")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("負一又二分三釐四毫五絲六忽七微"), -1.234567);
    });
  });

  describe('hanzi2num("一沙一塵")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一沙一塵"), 1.0001000000000008e-8);
    });
  });

  describe('hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(
        hanzi2num(
          "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
        ),
        212345678009000260
      );
    });
  });

  describe('hanzi2num("無量大數")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("無量大數"), 1.0000000000000002e68);
    });
  });

  describe('hanzi2num("三十二又一分")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三十二又一分"), 32.1);
    });
  });

  describe('hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三千萬塵一埃")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(
        hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三千萬塵一埃"),
        0.2731234529990001
      );
    });
  });

  describe('hanzi2num("剎那")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("剎那"), 1.000000000000001e-48);
    });
  });

  describe('hanzi2num("三千萬埃")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三千萬埃"), 2.9990000000000027e-13);
    });
  });

  describe('hanzi2num("三十二")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三十二"), 32);
    });
  });

  describe('hanzi2num("不可思議")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("不可思議"), 1.0000000000000002e64);
    });
  });

  describe('hanzi2num("一萬")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一萬"), 10000);
    });
  });

  describe('hanzi2num("零")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("零"), 0);
    });
  });

  describe('hanzi2num("二百五")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("二百五"), 250);
    });
  });

  describe('hanzi2num("二百零五")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("二百零五"), 205);
    });
  });

  describe('hanzi2num("三千七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三千七"), 3700);
    });
  });

  describe('hanzi2num("五萬三千七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("五萬三千七"), 53700);
    });
  });

  describe('hanzi2num("五萬三千零七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("五萬三千零七"), 53007);
    });
  });
});
