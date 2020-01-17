import { num2hanzi, hanzi2num, hanzi2numstr } from "../src/converts/hanzi2num";

describe("number conventions", () => {
  describe("hanzi2num", () => {
    it("負一又二分三釐四毫五絲六忽七微", () => {
      expect(hanzi2num("負一又二分三釐四毫五絲六忽七微")).toEqual(-1.234567);
    });

    it("一沙一塵", () => {
      expect(hanzi2num("一沙一塵")).toEqual(1.1e-8);
    });

    it("極", () => {
      expect(hanzi2num("極")).toEqual(1e48);
    });

    it("三十二又一分", () => {
      expect(hanzi2num("三十二又一分")).toEqual(32.1);
    });

    it("二分七釐三毫一絲二忽三微四纖五沙三塵一埃", () => {
      expect(hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三塵一埃")).toEqual(
        0.2731234531
      );
    });

    //渺、埃、尘 (塵)、沙、纤(纖)、微
    it("一微", () => {
      expect(hanzi2num("一微")).toEqual(1e-6);
    });

    it("一纖", () => {
      expect(hanzi2num("一纖")).toEqual(1e-7);
    });

    it("一沙", () => {
      expect(hanzi2num("一沙")).toEqual(1e-8);
    });

    it("一塵", () => {
      expect(hanzi2num("一塵")).toEqual(1e-9);
    });

    it("一埃", () => {
      expect(hanzi2num("一埃")).toEqual(1e-10);
    });

    it("一渺", () => {
      expect(hanzi2num("一渺")).toEqual(1e-11);
    });
    // ended 渺、埃、尘、沙、纤、微

    it("一漠", () => {
      expect(hanzi2num("一漠")).toEqual(1e-12);
    });

    it("三千萬埃", () => {
      expect(hanzi2num("三千萬埃")).toEqual(0.003);
    });

    it("三十二", () => {
      expect(hanzi2num("三十二")).toEqual(32);
    });

    it("極極極極極極", () => {
      expect(hanzi2num("極極極極極極")).toEqual(1e288);
    });

    it("一萬", () => {
      expect(hanzi2num("一萬")).toEqual(10000);
    });

    it("零", () => {
      expect(hanzi2num("零")).toEqual(0);
    });

    it("二百五", () => {
      expect(hanzi2num("二百五")).toEqual(205);
    });

    it("二百零五", () => {
      expect(hanzi2num("二百零五")).toEqual(205);
    });

    it("三千七", () => {
      expect(hanzi2num("三千七")).toEqual(3007);
    });

    it("五萬三千七", () => {
      expect(hanzi2num("五萬三千七")).toEqual(53007);
    });

    it("五萬三千零七", () => {
      expect(hanzi2num("五萬三千零七")).toEqual(53007);
    });

    it("十萬", () => {
      expect(hanzi2num("十萬")).toEqual(1e5);
    });

    it("萬十", () => {
      expect(hanzi2num("萬十")).toEqual(10010);
    });

    it("萬億", () => {
      expect(hanzi2num("萬億")).toEqual(1e12);
    });

    it("億萬", () => {
      expect(hanzi2num("億萬")).toEqual(100010000);
    });

    it("三·一四一五九二六五三五八九七九三", () => {
      expect(hanzi2num("三·一四一五九二六五三五八九七九三")).toEqual(Math.PI);
    });

    it("一二京三四五六兆七〇〇〇億", () => {
      expect(hanzi2num("一二京三四五六兆七〇〇〇億")).toEqual(1.234567e17);
    });

    it("一二京三四五六兆七〇〇〇〇億", () => {
      expect(hanzi2num("一二京三四五六兆七〇〇〇〇億")).toBeNaN();
    });

    it("一百又五絲", () => {
      expect(hanzi2num("一百又五絲")).toEqual(100.0005);
    });

    it("一百零五絲", () => {
      expect(hanzi2num("一百零五絲")).toEqual(0.0105);
    });

    it("一千又五百", () => {
      expect(hanzi2num("一千又五百")).toEqual(1500);
    });

    it("一千零五百", () => {
      expect(hanzi2num("一千零五百")).toBeNaN();
    });

    it("五毫絲", () => {
      expect(hanzi2num("五毫絲")).toBeNaN();
    });

    it("五又十分", () => {
      expect(hanzi2num("五又十分")).toBeNaN();
    });

    it("十分", () => {
      expect(hanzi2num("十分")).toEqual(1);
    });

    it("一分十", () => {
      expect(hanzi2num("一分十")).toBeNaN();
    });

    it("一分十絲", () => {
      expect(hanzi2num("一分十絲")).toEqual(0.101);
    });
  });

  describe("num2hanzi", () => {
    it("(0.53212121222)", () => {
      expect(num2hanzi(0.53212121222)).toEqual(
        "五分三釐二毫一絲二忽一微二纖一沙二塵二埃二渺"
      );
    });

    it("(0.5)", () => {
      expect(num2hanzi(0.5)).toEqual("五分");
    });

    it("(-(1e+10 + 99))", () => {
      expect(num2hanzi(-(1e10 + 99))).toEqual("負一百億零九十九");
    });

    it("(0)", () => {
      expect(num2hanzi(0)).toEqual("零");
    });

    it("(-0.765433)", () => {
      expect(num2hanzi(-0.765433)).toEqual("負七分六釐五毫四絲三忽三微");
    });
  });

  describe("hanzi2numstr", () => {
    it("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一", () => {
      expect(
        hanzi2numstr(
          "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
        )
      ).toEqual("212345678009000251");
    });

    it("一極零二", () => {
      expect(hanzi2numstr("一極零二")).toEqual(
        "1000000000000000000000000000000000000000000000002"
      );
    });

    it("一極零二又三漠", () => {
      expect(hanzi2numstr("一極零二又三漠")).toEqual(
        "1000000000000000000000000000000000000000000000002.000000000003"
      );
    });

    it("一極零二京", () => {
      expect(hanzi2numstr("一極零二京")).toEqual(
        "1.00000000000000000000000000000002e+48"
      );
    });
  });

  describe("hanzi2num & num2hanzi", () => {
    it("hanzi2num(num2hanzi(0.532))", () => {
      expect(hanzi2num(num2hanzi(0.532))).toEqual(0.532);
    });

    it('num2hanzi(hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"))', () => {
      expect(
        num2hanzi(
          hanzi2num(
            "二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"
          )
        )
      ).toEqual("二十一京二千三百四十五兆六千七百八十億零九百萬零二百六十");
    });
  });
});
