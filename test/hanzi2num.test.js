var assert = require("assert");
var { num2hanzi, hanzi2num } = require("../src/hanzi2num");

describe("hanzi2num", () => {
  describe("num2hanzi(0.53212121222)", () => {
    it("should translate float number to hanzi correctly", () => {
      assert.equal(num2hanzi(0.53212121222), "五分三釐二毫一絲二忽一微二纖一沙二塵二埃二渺");
    });
  });

  describe("num2hanzi(0.5)", () => {
    it("should translate float number to hanzi correctly", () => {
      assert.equal(num2hanzi(0.5), "五分");
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
        "二十一京二千三百四十五兆六千七百八十億零九百萬零二百六十"
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
      assert.equal(num2hanzi(-0.765433), "負七分六釐五毫四絲三忽三微");
    });
  });

  describe('hanzi2num("負一又二分三釐四毫五絲六忽七微")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("負一又二分三釐四毫五絲六忽七微"), -1.234567);
    });
  });

  describe('hanzi2num("一沙一塵")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一沙一塵"), 1.1e-8);
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

  describe('hanzi2num("極")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("極"), 1e+48);
    });
  });

  describe('hanzi2num("三十二又一分")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三十二又一分"), 32.1);
    });
  });

  describe('hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三塵一埃")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(
        hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三塵一埃"),
        0.2731234531
      );
    });
  });

  describe('hanzi2num("一漠")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一漠"), 1e-12);
    });
  });

  describe('hanzi2num("三千萬埃")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三千萬埃"), 0.003);
    });
  });

  describe('hanzi2num("三十二")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三十二"), 32);
    });
  });

  describe('hanzi2num("極極極極極極")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("極極極極極極"), 1e288);
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
      assert.equal(hanzi2num("二百五"), 205);
    });
  });

  describe('hanzi2num("二百零五")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("二百零五"), 205);
    });
  });

  describe('hanzi2num("三千七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三千七"), 3007);
    });
  });

  describe('hanzi2num("五萬三千七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("五萬三千七"), 53007);
    });
  });

  describe('hanzi2num("五萬三千零七")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("五萬三千零七"), 53007);
    });
  });

  describe('hanzi2num("十萬")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("十萬"), 1e+5);
    });
  });

  describe('hanzi2num("萬十")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("萬十"), 10010);
    });
  });

  describe('hanzi2num("萬億")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("萬億"), 1e+12);
    });
  });

  describe('hanzi2num("億萬")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("億萬"), 100010000);
    });
  });

  describe('hanzi2num("三·一四一五九二六五三五八九七九三")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("三·一四一五九二六五三五八九七九三"), Math.PI);
    });
  });

  describe('hanzi2num("一二京三四五六兆七〇〇〇億")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一二京三四五六兆七〇〇〇億"), 1.234567e+17);
    });
  });

  describe('hanzi2num("一二京三四五六兆七〇〇〇〇億")', () => {
    it("should reject invalid hanzi", () => {
      assert.ok(Number.isNaN(hanzi2num("一二京三四五六兆七〇〇〇〇億")));
    });
  });

  describe('hanzi2num("一百又五絲")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一百又五絲"), 100.0005);
    });
  });

  describe('hanzi2num("一百零五絲")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一百零五絲"), 0.0105);
    });
  });

  describe('hanzi2num("一千又五百")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一千又五百"), 1500);
    });
  });

  describe('hanzi2num("一千零五百")', () => {
    it("should reject invalid hanzi", () => {
      assert.ok(Number.isNaN(hanzi2num("一千零五百")));
    });
  });

  describe('hanzi2num("五毫絲")', () => {
    it("should reject invalid hanzi", () => {
      assert.ok(Number.isNaN(hanzi2num("五毫絲")));
    });
  });

  describe('hanzi2num("五又十分")', () => {
    it("should reject invalid hanzi", () => {
      assert.ok(Number.isNaN(hanzi2num("五又十分")));
    });
  });

  describe('hanzi2num("十分")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("十分"), 1);
    });
  });

  describe('hanzi2num("一分十")', () => {
    it("should reject invalid hanzi", () => {
      assert.ok(Number.isNaN(hanzi2num("一分十")));
    });
  });

  describe('hanzi2num("一分十絲")', () => {
    it("should translate hanzi to number correctly", () => {
      assert.equal(hanzi2num("一分十絲"), 0.101);
    });
  });
});
