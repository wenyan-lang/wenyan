var NUMS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var MULTS1 = ["十", "百", "千"];
var MULTS4 = [
  "萬",
  "億",
  "兆",
  "京",
  "垓",
  "秭",
  "穰",
  "溝",
  "澗",
  "正",
  "載",
  "極",
  "恆河沙",
  "阿僧祇",
  "那由他",
  "不可思議",
  "無量大數"
];
var FRACS1 = ["分", "釐", "毫", "絲", "忽", "微", "纖", "沙"];
var FRACS4 = [
  "塵",
  "埃",
  "渺",
  "漠",
  "模糊",
  "逡巡",
  "須臾",
  "瞬息",
  "彈指",
  "剎那",
  "六德",
  "虛",
  "空",
  "清",
  "淨"
];

const eTokenType = {
  SIGN: "SIGN",           // 負
  DIGIT: "DIGIT",         // 一二三...
  DECIMAL: "DECIMAL",     // ·
  INT_MULT: "INT_MULT",   // 十百千萬億...
  FRAC_MULT: "FRAC_MULT", // 分釐毫...
  DELIM: "DELIM",         // 又
  ZERO: "ZERO",           // 零

  // pseudo tokens
  BEGIN: "BEGIN",         // <BEGIN>
  END: "END"              // <END>
};

const NUM_TOKENS = {
  "負": { type: eTokenType.SIGN, sign: -1 },
  "·": { type: eTokenType.DECIMAL, exp: 0 }, // U+00B7 Middle Dot
  "又": { type: eTokenType.DELIM },
  "有": { type: eTokenType.DELIM },
  "零": { type: eTokenType.ZERO, digit: 0 },
  "〇": { type: eTokenType.DIGIT, digit: 0 }, // U+3007 Ideographic Number Zero
  "一": { type: eTokenType.DIGIT, digit: 1 },
  "二": { type: eTokenType.DIGIT, digit: 2 },
  "三": { type: eTokenType.DIGIT, digit: 3 },
  "四": { type: eTokenType.DIGIT, digit: 4 },
  "五": { type: eTokenType.DIGIT, digit: 5 },
  "六": { type: eTokenType.DIGIT, digit: 6 },
  "七": { type: eTokenType.DIGIT, digit: 7 },
  "八": { type: eTokenType.DIGIT, digit: 8 },
  "九": { type: eTokenType.DIGIT, digit: 9 },
  "十": { type: eTokenType.INT_MULT, exp: 1 },
  "百": { type: eTokenType.INT_MULT, exp: 2 },
  "千": { type: eTokenType.INT_MULT, exp: 3 },
  "萬": { type: eTokenType.INT_MULT, exp: 4 },
  "億": { type: eTokenType.INT_MULT, exp: 8 },
  "兆": { type: eTokenType.INT_MULT, exp: 12 },
  "京": { type: eTokenType.INT_MULT, exp: 16 },
  "垓": { type: eTokenType.INT_MULT, exp: 20 },
  "秭": { type: eTokenType.INT_MULT, exp: 24 },
  "穰": { type: eTokenType.INT_MULT, exp: 28 },
  "溝": { type: eTokenType.INT_MULT, exp: 32 },
  "澗": { type: eTokenType.INT_MULT, exp: 36 },
  "正": { type: eTokenType.INT_MULT, exp: 40 },
  "載": { type: eTokenType.INT_MULT, exp: 44 },
  "極": { type: eTokenType.INT_MULT, exp: 48 },
  "分": { type: eTokenType.FRAC_MULT, exp: -1 },
  "釐": { type: eTokenType.FRAC_MULT, exp: -2 },
  "毫": { type: eTokenType.FRAC_MULT, exp: -3 },
  "絲": { type: eTokenType.FRAC_MULT, exp: -4 },
  "忽": { type: eTokenType.FRAC_MULT, exp: -5 },
  "微": { type: eTokenType.FRAC_MULT, exp: -6 },
  "纖": { type: eTokenType.FRAC_MULT, exp: -7 },
  "沙": { type: eTokenType.FRAC_MULT, exp: -8 },
  "塵": { type: eTokenType.FRAC_MULT, exp: -9 },
  "埃": { type: eTokenType.FRAC_MULT, exp: -10 },
  "渺": { type: eTokenType.FRAC_MULT, exp: -11 },
  "漠": { type: eTokenType.FRAC_MULT, exp: -12 }
};

const eMultState = {
  NONE: "NONE",   // <END>, 一 (ambiguous: 一萬一 or 一十一 or 一·一 or 一絲一)
  FRAC: "FRAC",   // ...微
  INT: "INT",     // ...萬, ...·,
  DONE: "DONE"    // 負一
};

const eDigitState = {
  NONE: "NONE",                       // <END>, ·
  MULT: "MULT",                       // 微
  MULT_AMBIG: "MULT_AMBIG",           // 十 (ambiguous: ...十 or 一十)
  DIGIT: "DIGIT",                     // 一
  DIGIT_WITH_ZERO: "DIGIT_WITH_ZERO", // 一...零, 零零， 零一...零,
  DELIM: "DELIM",                     // 又
  ZERO: "ZERO",                       // 零<END>, 零·, 零又, 零微, 零一
  SIGN: "SIGN",                       // 負
  ZERO_MULT_AMBIG: "ZERO_MULT_AMBIG"  // 零十 (ambiguous: 零一十 or 零十 or 〇十)
};

function hanzi2numstr(s) {
  function tokenize(s, assert) {
    let result = [{ type: eTokenType.BEGIN }];
    for (let i = 0; i < s.length; ++i) {
      let tokenStr = s.charAt(i);
      if (!NUM_TOKENS.hasOwnProperty(tokenStr)) {
        return;
      }
      result.push(NUM_TOKENS[tokenStr]);
    }
    result.push({ type: eTokenType.END });
    return result;
  }

  // parses the number string backwards, from lowest to highest digit
  function parse(tokens) {
    // parser state
    let digitState = eDigitState.NONE;

    // multiplier stack, keep track of all active multiplier exponents
    let multStack = {
      isEmpty: function () {
        return this._exps.length == 0;
      },
      total: function () {
        return this._expAdd;
      },
      top: function () {
        return this._exps[this._exps.length - 1];
      },
      state: function () {
        if (this.isEmpty()) {
          return eMultState.NONE;
        } else if (this._exps[0] < 0) {
          return eMultState.FRAC;
        } else if (this._exps[0] < Infinity) {
          return eMultState.INT;
        } else {
          return eMultState.DONE;
        }
      },

      push: function (exp) {
        this._expAdd += exp;
        this._exps.push(exp);
      },
      pop: function () {
        this._expAdd -= this.top();
        this._exps.pop();
      },
      clear: function () {
        this._expAdd = 0;
        this._exps = [];
      },
      markDone: function () {
        this.clear();
        this.push(Infinity);
      },

      _exps: [],
      _expAdd: 0
    };

    // result
    let result = {
      sign: function () {
        return this._sign;
      },
      exp: function () {
        return this._exp;
      },
      digits: function () {
        return this._digits;
      },

      applySign: function (newSign) {
        this._sign *= newSign;
      },
      push: function (digit) {
        this._digits.push(digit);
        ++this._exp;
      },
      fillZeros: function (newExp) {
        this._digits = this._digits.concat(Array(newExp - this._exp).fill(0));
        this._exp = newExp;
      },
      resetExp: function (newExp) {
        this._exp = newExp;
      },

      // the result is sign * 0.{digits[length-1..0]} * 10^exp
      _sign: 1,   // +1/-1
      _exp: 0,    // one plus exponent of the highest digit
      _digits: [] // lowest to highest
    };

    // parses the number string backwards, discarding <END>
    for (let i = tokens.length - 1; i > 0; --i) {
      let token = tokens[i - 1];

      // sign should be the first char
      if (multStack.state() == eMultState.SIGN && token.type != eTokenType.BEGIN) {
        return;
      }

      // disambiguate omitted 一
      switch (digitState) {
        case eDigitState.MULT_AMBIG:
          switch (token.type) {
            // <BEGIN>(一?)十 -> <BEGIN>一十
            // 負(一?)十 -> 負一十
            // 又(一?)十 -> 又一十
            // ·(一?)十 -> ·一十
            // 分(一?)萬 -> 分一萬
            case eTokenType.BEGIN:
            case eTokenType.SIGN:
            case eTokenType.DELIM:
            case eTokenType.DECIMAL:
            case eTokenType.FRAC_MULT:
              result.push(1);
              digitState = eDigitState.DIGIT;
              break;

            // 一(一?)十 -> 一十
            case eTokenType.DIGIT:
              digitState = eDigitState.MULT;
              break;

            // 百(一?)十 -> 百一十
            // 千(一?)十 -> 千一十
            // 百(一?)萬 -> 百萬
            case eTokenType.INT_MULT:
              if (multStack.top() < token.exp) {
                result.push(1);
                digitState = eDigitState.DIGIT;
              } else {
                digitState = eDigitState.MULT;
              }
              break;

            // 零(一?)十 -> 零(一?)十
            case eTokenType.ZERO:
              digitState = eDigitState.MULT_AMBIG;
              break;

            default:
              break;
          }
          break;

        case eDigitState.ZERO_MULT_AMBIG:
          switch (token.type) {
            // <BEGIN>(零一|〇)十 -> <BEGIN>〇十
            // 負(零一|〇)十 -> 負〇十
            // 一(零一|〇)十 -> 一〇十
            // 又(零一|〇)十 -> 又〇十
            // ·(零一|〇)十 -> ·〇十
            // 分(零一|〇)十 -> 分〇十 (error)
            // 零(零一|〇)十 -> 〇〇十
            case eTokenType.BEGIN:
            case eTokenType.SIGN:
            case eTokenType.DIGIT:
            case eTokenType.DECIMAL:
            case eTokenType.FRAC_MULT:
            case eTokenType.DELIM:
            case eTokenType.ZERO:
              result.push(0);
              digitState = eDigitState.DIGIT_WITH_ZERO;
              break;

            // 百(零一|〇)十 -> 百〇十
            // 千(零一|〇)十 -> 千零一十
            // 百(零一|〇)萬 -> 百零萬
            case eTokenType.INT_MULT:
              if (multStack.top() < token.exp) {
                if (multStack.top() == token.exp - 1) {
                  result.push(0);
                  digitState = eDigitState.DIGIT_WITH_ZERO;
                } else {
                  result.push(1);
                  result.push(0);
                  digitState = eDigitState.ZERO;
                }
              } else {
                result.push(0);
                digitState = eDigitState.ZERO;
              }
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }

      // determine the exponent of tail digits
      if (multStack.state() == eMultState.NONE) {
        switch (token.type) {
          case eTokenType.INT_MULT:
            // exponent is correct
            break;

          case eTokenType.DECIMAL:
          case eTokenType.FRAC_MULT:
            result.resetExp(token.exp);
            break;

          default:
            break;
        }
      }

      // determine the current exponent and update exponent stack
      let currExp = function () {
        switch (token.type) {
          case eTokenType.BEGIN:
          case eTokenType.SIGN:
            switch (digitState) {
              // <BEGIN>微 -> error
              // 負微 -> error
              case eDigitState.MULT:
                return;

              default:
                multStack.markDone();
                return multStack.total();
            }

          case eTokenType.DIGIT:
          case eTokenType.ZERO:
            switch (digitState) {
              // 一又 -> 一·
              // 零又 -> 零·
              case eDigitState.DELIM:
                multStack.clear();
                multStack.push(0);
                return multStack.total();

              default:
                return result.exp();
            }

          case eTokenType.DELIM:
            switch (digitState) {
              // 又又 -> error
              case eDigitState.DELIM:
                return;

              default:
                return result.exp();
            }

          // ·...絲 -> ·
          // 釐...絲 -> 釐
          // ·絲 -> error
          // 釐絲 -> error
          case eTokenType.DECIMAL:
          case eTokenType.FRAC_MULT:
            if (digitState == eDigitState.MULT) {
              return;
            } else {
              multStack.clear();
              multStack.push(token.exp);
              return multStack.total();
            }

          case eTokenType.INT_MULT:
            switch (digitState) {
              // 百又...絲 -> 百
              // 萬又...百萬億 -> 萬萬億
              case eDigitState.DELIM:
                if (multStack.state() == eMultState.FRAC) {
                  multStack.clear();
                  multStack.push(token.exp);
                } else {
                  while (!multStack.isEmpty() && multStack.top() < token.exp) {
                    multStack.pop();
                  }
                  multStack.push(token.exp);
                }
                break;

              // 萬...百萬億 -> 萬萬億
              // 萬零...百萬億 -> 萬萬億
              // 百...十絲 -> 百絲
              // 千零...十絲 -> 千絲
              case eDigitState.NONE:
              case eDigitState.MULT:
              case eDigitState.MULT_AMBIG:
              case eDigitState.DIGIT:
              case eDigitState.DIGIT_WITH_ZERO:
              case eDigitState.ZERO:
              case eDigitState.ZERO_MULT_AMBIG:
                while (!multStack.isEmpty() && multStack.top() < token.exp && multStack.top() >= 0) {
                  multStack.pop();
                }
                multStack.push(token.exp);
                break;
            }
            return multStack.total();
        }
      }();
      if (currExp === undefined) {
        return;
      }

      // check for overlapping decimal places
      if (currExp < result.exp()) {
        return;
      }

      // check for disallowed missing decimal places
      if (currExp > result.exp()) {
        let check = function () {
          if (token.type == eTokenType.BEGIN || token.type == eTokenType.SIGN) {
            return true;
          }
          if (digitState == eDigitState.DELIM || digitState == eDigitState.ZERO) {
            return true;
          }
          if (token.type == eTokenType.INT_MULT) {
            return true;
          }
          if (token.type == eTokenType.FRAC_MULT || token.type == eTokenType.DECIMAL) {
            return true;
          }
          return false;
        };

        if (!check()) {
          return;
        }
        if (multStack.state() != eMultState.DONE) {
          result.fillZeros(currExp);
        }
      }

      // push the digit, update parser state
      switch (token.type) {
        case eTokenType.BEGIN:
          break;

        case eTokenType.SIGN:
          result.applySign(token.sign);
          digitState = eDigitState.SIGN;
          break;

        case eTokenType.DIGIT:
          result.push(token.digit);
          if (digitState == eDigitState.ZERO || digitState == eDigitState.DIGIT_WITH_ZERO) {
            digitState = eDigitState.DIGIT_WITH_ZERO;
          } else {
            digitState = eDigitState.DIGIT;
          }
          break;

        case eTokenType.DECIMAL:
          digitState = eDigitState.NONE;
          break;

        case eTokenType.INT_MULT:
          digitState = eDigitState.MULT_AMBIG;
          break;

        case eTokenType.FRAC_MULT:
          digitState = eDigitState.MULT;
          break;

        case eTokenType.DELIM:
          digitState = eDigitState.DELIM;
          break;

        case eTokenType.ZERO:
          switch (digitState) {
            case eDigitState.NONE:
            case eDigitState.MULT:
            case eDigitState.DIGIT:
            case eDigitState.DELIM:
              result.push(token.digit);
              digitState = eDigitState.ZERO;
              break;

            case eDigitState.DIGIT_WITH_ZERO:
            case eDigitState.ZERO:
              result.push(token.digit);
              digitState = eDigitState.ZERO;
              break;

            case eDigitState.MULT_AMBIG:
              digitState = eDigitState.ZERO_MULT_AMBIG;
              break;
          }
          break;
      }
    }

    // build decimal string
    const digits = result.digits();
    if (digits.length == 0) {
      return;
    }

    const sign = result.sign();
    if (!Number.isFinite(sign)) {
      return sign.toString();
    }
    let str = sign < 0 ? "-" : "";

    const rend = digits.findIndex(x => x != 0);
    if (rend < 0) {
      str += "0e+0";
      return str;
    }

    let rbegin = digits.length;
    while (digits[rbegin - 1] == 0) {
      --rbegin;
    }
    str += digits[rbegin - 1].toString();

    if (rbegin - 1 > rend) {
      str += ".";
      for (let i = rbegin - 1; i > rend; --i) {
        str += digits[i - 1].toString();
      }
    }

    const exp = result.exp() - (digits.length - rbegin) - 1;
    str += exp < 0 ? "e-" : "e+";
    str += Math.abs(exp).toString();
    return str;
  }

  let tokens = tokenize(s);
  if (tokens === undefined) {
    return;
  }
  let str = parse(tokens);
  return str;
}

function hanzi2num(s) {
  return Number(hanzi2numstr(s));
}

function num2hanzi(n, nfrac = 6) {
  function int2hanzi(n) {
    if (n < 10) {
      return NUMS[n];
    }
    var s = "";
    var z = -1;
    for (var i = MULTS4.length - 1; i >= 0; i--) {
      var m = Math.pow(10000, i + 1);
      var k = Math.floor(n / m);
      if (k > 0) {
        n = n % m;
        s += int2hanzi(k) + MULTS4[i];
        z = 0;
      } else if (z == 0) {
        s += "零";
        z = 1;
      }
    }
    for (var i = MULTS1.length - 1; i >= 0; i--) {
      var m = Math.pow(10, i + 1);
      var k = Math.floor(n / m);
      if (k > 0) {
        n = n % m;
        s += int2hanzi(k) + MULTS1[i];
        z = 0;
      } else if (z == 0) {
        s += "零";
        z = 1;
      }
    }
    if (n) {
      s += int2hanzi(n);
    }
    if (s[s.length - 1] == "零") {
      s = s.slice(0, s.length - 1);
    }
    return s;
  }
  function frac2hanzi(n) {
    var mfrac = Math.pow(0.1, nfrac);
    var s = "";
    var z = -1;
    for (var i = 0; i < FRACS1.length; i++) {
      var m = Math.pow(0.1, i + 1);
      if (m < mfrac) {
        break;
      }
      var k = Math.floor(n / m);
      if (k > 0) {
        n -= k * m;
        s += int2hanzi(k) + FRACS1[i];
        z = 0;
      } else if (z == 0) {
        s += "零";
        z = 1;
      }
    }
    for (var i = 0; i < FRACS4.length; i++) {
      var m = Math.pow(0.0001, i + 1) * 1e-8;
      if (m < mfrac) {
        break;
      }
      var k = Math.floor(n / m);
      if (k > 0) {
        n -= k * m;
        s += int2hanzi(k) + FRACS4[i];
        z = 0;
      } else if (z == 0) {
        s += "零";
        z = 1;
      }
    }
    if (s[s.length - 1] == "零") {
      s = s.slice(0, s.length - 1);
    }
    return s;
  }

  if (n < 0) {
    return "負" + num2hanzi(-n);
  }
  var intn = Math.floor(n);
  if (intn == n) {
    return int2hanzi(n);
  } else {
    return int2hanzi(intn) + "又" + frac2hanzi(n - intn);
  }
}

try {
  module.exports = { hanzi2num, hanzi2numstr, num2hanzi };
} catch (e) { }
