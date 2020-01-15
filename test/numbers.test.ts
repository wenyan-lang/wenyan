var assert = require("assert");
var { num2hanzi, hanzi2num, hanzi2numstr } = require("../src/hanzi2num");

describe("number conventions", () => {
  describe("hanzi2num", () => {
    it("負一又二分三釐四毫五絲六忽七微", () => {
      assert.strictEqual(
        hanzi2num("負一又二分三釐四毫五絲六忽七微"),
        -1.234567
      );
    });

    it("一沙一塵", () => {
      assert.strictEqual(hanzi2num("一沙一塵"), 1.1e-8);
    });

    it("極", () => {
      assert.strictEqual(hanzi2num("極"), 1e48);
    });

    it("三十二又一分", () => {
      assert.strictEqual(hanzi2num("三十二又一分"), 32.1);
    });

    it("二分七釐三毫一絲二忽三微四纖五沙三塵一埃", () => {
      assert.strictEqual(
        hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三塵一埃"),
        0.2731234531
      );
    });

    //渺、埃、尘 (塵)、沙、纤(纖)、微
    it("一微", () => {
      assert.strictEqual(hanzi2num("一微"), 1e-6);
    });

    it("一纖", () => {
      assert.strictEqual(hanzi2num("一纖"), 1e-7);
    });

    it("一沙", () => {
      assert.strictEqual(hanzi2num("一沙"), 1e-8);
    });

    it("一塵", () => {
      assert.strictEqual(hanzi2num("一塵"), 1e-9);
    });

    it("一埃", () => {
      assert.strictEqual(hanzi2num("一埃"), 1e-10);
    });

    it("一渺", () => {
      assert.strictEqual(hanzi2num("一渺"), 1e-11);
    });
    // ended 渺、埃、尘、沙、纤、微

    it("一漠", () => {
      assert.strictEqual(hanzi2num("一漠"), 1e-12);
    });

    it("三千萬埃", () => {
      assert.strictEqual(hanzi2num("三千萬埃"), 0.003);
    });

    it("三十二", () => {
      assert.strictEqual(hanzi2num("三十二"), 32);
    });

    it("極極極極極極", () => {
      assert.strictEqual(hanzi2num("極極極極極極"), 1e288);
    });

    it("一萬", () => {
      assert.strictEqual(hanzi2num("一萬"), 10000);
    });

    it("零", () => {
      assert.strictEqual(hanzi2num("零"), 0);
    });

    it("二百五", () => {
      assert.strictEqual(hanzi2num("二百五"), 205);
    });

    it("二百零五", () => {
      assert.strictEqual(hanzi2num("二百零五"), 205);
    });

    it("三千七", () => {
      assert.strictEqual(hanzi2num("三千七"), 3007);
    });

    it("五萬三千七", () => {
      assert.strictEqual(hanzi2num("五萬三千七"), 53007);
    });

    it("五萬三千零七", () => {
      assert.strictEqual(hanzi2num("五萬三千零七"), 53007);
    });

    it("十萬", () => {
      assert.strictEqual(hanzi2num("十萬"), 1e5);
    });

    it("萬十", () => {
      assert.strictEqual(hanzi2num("萬十"), 10010);
    });

    it("萬億", () => {
      assert.strictEqual(hanzi2num("萬億"), 1e12);
    });

    it("億萬", () => {
      assert.strictEqual(hanzi2num("億萬"), 100010000);
    });

    it("三·一四一五九二六五三五八九七九三", () => {
      assert.strictEqual(
        hanzi2num("三·一四一五九二六五三五八九七九三"),
        Math.PI
      );
    });

    it("一二京三四五六兆七〇〇〇億", () => {
      assert.strictEqual(hanzi2num("一二京三四五六兆七〇〇〇億"), 1.234567e17);
    });

    it("一二京三四五六兆七〇〇〇〇億", () => {
      assert.ok(Number.isNaN(hanzi2num("一二京三四五六兆七〇〇〇〇億")));
    });

    it("一百又五絲", () => {
      assert.strictEqual(hanzi2num("一百又五絲"), 100.0005);
    });

    it("一百零五絲", () => {
      assert.strictEqual(hanzi2num("一百零五絲"), 0.0105);
    });

    it("一千又五百", () => {
      assert.strictEqual(hanzi2num("一千又五百"), 1500);
    });

    it("一千零五百", () => {
      assert.ok(Number.isNaN(hanzi2num("一千零五百")));
    });

    it("五毫絲", () => {
      assert.ok(Number.isNaN(hanzi2num("五毫絲")));
    });

    it("五又十分", () => {
      assert.ok(Number.isNaN(hanzi2num("五又十分")));
    });

    it("十分", () => {
      assert.strictEqual(hanzi2num("十分"), 1);
    });

    it("一分十", () => {
      assert.ok(Number.isNaN(hanzi2num("一分十")));
    });

    it("一分十絲", () => {
      assert.strictEqual(hanzi2num("一分十絲"), 0.101);
    });
  });

  describe("num2hanzi", () => {
    it("(0.53212121222)", () => {
      assert.strictEqual(
        num2hanzi(0.53212121222),
        "五分三釐二毫一絲二忽一微二纖一沙二塵二埃二渺"
      );
    });

    it("(0.5)", () => {
      assert.strictEqual(num2hanzi(0.5), "五分");
    });

    it("(-(1e+10 + 99))", () => {
      assert.strictEqual(num2hanzi(-(1e10 + 99)), "負一百億零九十九");
    });

    it("(0)", () => {
      assert.strictEqual(num2hanzi(0), "零");
    });

    it("(-0.765433)", () => {
      assert.strictEqual(num2hanzi(-0.765433), "負七分六釐五毫四絲三忽三微");
    });
  });

  describe("hanzi2numstr", () => {
    it("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一", () => {
      assert.strictEqual(
        hanzi2numstr(
          "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
        ),
        "212345678009000251"
      );
    });

    it("一極零二", () => {
      assert.strictEqual(
        hanzi2numstr("一極零二"),
        "1000000000000000000000000000000000000000000000002"
      );
    });

    it("一極零二又三漠", () => {
      assert.strictEqual(
        hanzi2numstr("一極零二又三漠"),
        "1000000000000000000000000000000000000000000000002.000000000003"
      );
    });

    it("一極零二京", () => {
      assert.strictEqual(
        hanzi2numstr("一極零二京"),
        "1.00000000000000000000000000000002e+48"
      );
    });
  });

  describe("hanzi2num & num2hanzi", () => {
    it("hanzi2num(num2hanzi(0.532))", () => {
      assert.strictEqual(hanzi2num(num2hanzi(0.532)), 0.532);
    });

    it('num2hanzi(hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"))', () => {
      assert.strictEqual(
        num2hanzi(
          hanzi2num(
            "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
          )
        ),
        "二十一京二千三百四十五兆六千七百八十億零九百萬零二百六十"
      );
    });
  });
});
