const eTokenType = {
  SIGN: "SIGN", // 負
  DIGIT: "DIGIT", // 一二三...
  DECIMAL: "DECIMAL", // ·
  INT_MULT: "INT_MULT", // 十百千萬億...
  FRAC_MULT: "FRAC_MULT", // 分釐毫...
  DELIM: "DELIM", // 又
  ZERO: "ZERO", // 零

  // pseudo tokens
  BEGIN: "BEGIN", // <BEGIN>
  END: "END" // <END>
};

var NUM_TOKENS = {
  負: { type: eTokenType.SIGN, sign: -1 },
  "·": { type: eTokenType.DECIMAL, exp: 0 }, // U+00B7 Middle Dot
  又: { type: eTokenType.DELIM },
  有: { type: eTokenType.DELIM },
  零: { type: eTokenType.ZERO, digit: "0" },
  一: { type: eTokenType.DIGIT, digit: "1" },
  二: { type: eTokenType.DIGIT, digit: "2" },
  三: { type: eTokenType.DIGIT, digit: "3" },
  四: { type: eTokenType.DIGIT, digit: "4" },
  五: { type: eTokenType.DIGIT, digit: "5" },
  六: { type: eTokenType.DIGIT, digit: "6" },
  七: { type: eTokenType.DIGIT, digit: "7" },
  八: { type: eTokenType.DIGIT, digit: "8" },
  九: { type: eTokenType.DIGIT, digit: "9" },
  十: { type: eTokenType.INT_MULT, exp: 1 },
  百: { type: eTokenType.INT_MULT, exp: 2 },
  千: { type: eTokenType.INT_MULT, exp: 3 },
  萬: { type: eTokenType.INT_MULT, exp: 4 },
  億: { type: eTokenType.INT_MULT, exp: 8 },
  兆: { type: eTokenType.INT_MULT, exp: 12 },
  京: { type: eTokenType.INT_MULT, exp: 16 },
  垓: { type: eTokenType.INT_MULT, exp: 20 },
  秭: { type: eTokenType.INT_MULT, exp: 24 },
  穰: { type: eTokenType.INT_MULT, exp: 28 },
  溝: { type: eTokenType.INT_MULT, exp: 32 },
  澗: { type: eTokenType.INT_MULT, exp: 36 },
  正: { type: eTokenType.INT_MULT, exp: 40 },
  載: { type: eTokenType.INT_MULT, exp: 44 },
  極: { type: eTokenType.INT_MULT, exp: 48 },
  分: { type: eTokenType.FRAC_MULT, exp: -1 },
  釐: { type: eTokenType.FRAC_MULT, exp: -2 },
  毫: { type: eTokenType.FRAC_MULT, exp: -3 },
  絲: { type: eTokenType.FRAC_MULT, exp: -4 },
  忽: { type: eTokenType.FRAC_MULT, exp: -5 },
  微: { type: eTokenType.FRAC_MULT, exp: -6 },
  纖: { type: eTokenType.FRAC_MULT, exp: -7 },
  沙: { type: eTokenType.FRAC_MULT, exp: -8 },
  塵: { type: eTokenType.FRAC_MULT, exp: -9 },
  埃: { type: eTokenType.FRAC_MULT, exp: -10 },
  渺: { type: eTokenType.FRAC_MULT, exp: -11 },
  漠: { type: eTokenType.FRAC_MULT, exp: -12 }
};
NUM_TOKENS["〇"] = { type: eTokenType.DIGIT, digit: "0" }; // U+3007 Ideographic Number Zero

const NEG_WORD = "負";
const INF_WORD = "無限大數";
const NAN_WORD = "不可算數";

const DECIMAL_WORD = {
  readout: "又"
};

const DIGIT_WORDS = {
  readout: {
    "0": "零",
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "七",
    "8": "八",
    "9": "九"
  }
};

const MULT_WORDS = {
  readout: [
    { str: "極", exp: 48 },
    { str: "載", exp: 44 },
    { str: "正", exp: 40 },
    { str: "澗", exp: 36 },
    { str: "溝", exp: 32 },
    { str: "穰", exp: 28 },
    { str: "秭", exp: 24 },
    { str: "垓", exp: 20 },
    { str: "京", exp: 16 },
    { str: "兆", exp: 12 },
    { str: "億", exp: 8 },
    { str: "萬", exp: 4 },
    { str: "千", exp: 3 },
    { str: "百", exp: 2 },
    { str: "十", exp: 1 },
    { str: "", exp: 0 },
    { str: "分", exp: -1 },
    { str: "釐", exp: -2 },
    { str: "毫", exp: -3 },
    { str: "絲", exp: -4 },
    { str: "忽", exp: -5 },
    { str: "微", exp: -6 },
    { str: "纖", exp: -7 },
    { str: "沙", exp: -8 },
    { str: "塵", exp: -9 },
    { str: "埃", exp: -10 },
    { str: "渺", exp: -11 },
    { str: "漠", exp: -12 }
  ]
};

const eMultState = {
  NONE: "NONE", // <END>, 一 (ambiguous: 一萬一 or 一十一 or 一·一 or 一絲一)
  FRAC: "FRAC", // ...微
  INT: "INT", // ...萬, ...·,
  DONE: "DONE", // 負一,
  SIGN: "SIGN"
};

const eDigitState = {
  NONE: "NONE", // <END>, ·
  MULT: "MULT", // 微
  MULT_AMBIG: "MULT_AMBIG", // 十 (ambiguous: ...十 or 一十)
  DIGIT: "DIGIT", // 一
  DIGIT_WITH_ZERO: "DIGIT_WITH_ZERO", // 一...零, 零零， 零一...零,
  DELIM: "DELIM", // 又
  ZERO: "ZERO", // 零<END>, 零·, 零又, 零微, 零一
  SIGN: "SIGN", // 負
  ZERO_MULT_AMBIG: "ZERO_MULT_AMBIG" // 零十 (ambiguous: 零一十 or 零十 or 〇十)
};

const RESULT_2_TO_63 = {
  sign: 1,
  exp: 0,
  digits: "9223372036854775808".split("").reverse()
};

export function hanzi2numstr(s: string): string {
  // returns array of tokens on success, null on invalid string
  function tokenize(s) {
    let result = [{ type: eTokenType.BEGIN }];
    for (let i = 0; i < s.length; ++i) {
      let tokenStr = s.charAt(i);
      if (!NUM_TOKENS.hasOwnProperty(tokenStr)) {
        return null;
      }
      result.push(NUM_TOKENS[tokenStr]);
    }
    result.push({ type: eTokenType.END });
    return result;
  }

  // returns:
  //   on success: {
  //     sign:   +1/-1/+Infinity/-Infinity/NaN,
  //     exp:    power of 10,
  //     digits: array of digit chars from lowest to highest, with leading and trailing zeros
  //   }
  //   on invalid string: null
  // result = sign * {digits[length-1..0]} * 10^exp
  // e.g. 負零又五毫零絲 = { sign: -1, exp: -4, digits: ["0", "5", "0", "0, "0"] } = -00050e-4 = -0.005
  function parse(tokens) {
    // parses the number string backwards, from lowest to highest digit
    // parser state
    let digitState = eDigitState.NONE;

    // multiplier stack, keep track of all active multiplier exponents
    let multStack = {
      isEmpty: function() {
        return this._exps.length == 0;
      },
      total: function() {
        return this._expAdd;
      },
      top: function() {
        return this._exps[this._exps.length - 1];
      },
      state: function() {
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

      push: function(exp) {
        this._expAdd += exp;
        this._exps.push(exp);
      },
      pop: function() {
        this._expAdd -= this.top();
        this._exps.pop();
      },
      clear: function() {
        this._expAdd = 0;
        this._exps = [];
      },
      markDone: function() {
        this.clear();
        this.push(Infinity);
      },

      _exps: [],
      _expAdd: 0
    };

    // result, with different convension of exp for internal use
    let result = {
      sign: function() {
        return this._sign;
      },
      exp: function() {
        return this._exp;
      },
      digits: function() {
        return this._digits;
      },

      applySign: function(newSign) {
        this._sign *= newSign;
      },
      // digit: number or array of numbers
      push: function(digit) {
        if (Array.isArray(digit)) {
          this._digits = this._digits.concat(digit);
          this._exp += digit.length;
        } else {
          this._digits.push(digit);
          ++this._exp;
        }
      },
      fillZeros: function(newExp) {
        this.push(Array(newExp - this._exp).fill("0"));
      },
      resetExp: function(newExp) {
        this._exp = newExp;
      },

      // the result is sign * 0.{digits[length-1..0]} * 10^exp
      _sign: 1, // +1/-1
      _exp: 0, // one plus exponent of the highest digit
      _digits: [] // lowest to highest
    };

    // parses the number string backwards, discarding <END>
    for (let i = tokens.length - 1; i > 0; --i) {
      let token = tokens[i - 1];

      // sign should be the first char
      if (
        multStack.state() == eMultState.SIGN &&
        token.type != eTokenType.BEGIN
      ) {
        return null;
      }

      // disambiguate omitted 一
      switch (digitState) {
        case eDigitState.MULT_AMBIG:
          switch (token.type) {
            // <BEGIN>(一?)十 -> <BEGIN>一十
            // 負(一?)十 -> 負一十
            // 又(一?)十 -> 又一十
            // ·(一?)十 -> ·一十
            // 分(一?)十絲 -> 分一十絲
            case eTokenType.BEGIN:
            case eTokenType.SIGN:
            case eTokenType.DELIM:
            case eTokenType.DECIMAL:
            case eTokenType.FRAC_MULT:
              result.push("1");
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
                result.push("1");
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
            // <BEGIN>(零一|零|〇)十 -> <BEGIN>〇十
            // 負(零一|零|〇)十 -> 負〇十
            // 一(零一|零|〇)十 -> 一〇十
            // 又(零一|零|〇)十 -> 又〇十
            // 零(零一|零|〇)十 -> 〇〇十
            case eTokenType.BEGIN:
            case eTokenType.SIGN:
            case eTokenType.DIGIT:
            case eTokenType.DELIM:
            case eTokenType.ZERO:
              result.push("0");
              digitState = eDigitState.DIGIT_WITH_ZERO;
              break;

            // ·(零一|零|〇)十絲 -> ·零一十絲
            // ·(零一|零|〇)十釐 -> ·〇十釐
            // ·(零一|零|〇)十分 -> error
            // ·(零一|零|〇)百分 -> error
            // 分(零一|零|〇)十絲 -> 分零一十絲
            // 分(零一|零|〇)十毫 -> 分〇十絲
            // 分(零一|零|〇)十釐 -> error
            // 分(零一|零|〇)十分 -> error
            case eTokenType.DECIMAL:
            case eTokenType.FRAC_MULT:
              if (multStack.total() + 1 < token.exp) {
                result.push("1");
                result.push("0");
                digitState = eDigitState.ZERO;
              } else if (multStack.total() + 1 == token.exp) {
                result.push("0");
                digitState = eDigitState.DIGIT_WITH_ZERO;
              } else {
                return null;
              }
              break;

            // 千(零一|零|〇)十 -> 千零一十
            // 百(零一|零|〇)十 -> 百〇十
            // 萬(零一|零|〇)萬 -> 萬零萬
            // 百(零一|零|〇)萬 -> 百零萬
            case eTokenType.INT_MULT:
              if (multStack.top() + 1 < token.exp) {
                result.push("1");
                result.push("0");
                digitState = eDigitState.ZERO;
              } else if (multStack.top() + 1 == token.exp) {
                result.push("0");
                digitState = eDigitState.DIGIT_WITH_ZERO;
              } else {
                result.push("0");
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
      let currExp = (function() {
        switch (token.type) {
          case eTokenType.BEGIN:
          case eTokenType.SIGN:
            switch (digitState) {
              // <BEGIN>微 -> error
              // 負微 -> error
              case eDigitState.MULT:
                return null;

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
                return null;

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
              return null;
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
                while (
                  !multStack.isEmpty() &&
                  multStack.top() < token.exp &&
                  multStack.top() >= 0
                ) {
                  multStack.pop();
                }
                multStack.push(token.exp);
                break;
            }
            return multStack.total();
        }
      })();
      if (currExp == null) {
        return null;
      }

      // check for overlapping decimal places
      if (currExp < result.exp()) {
        return null;
      }

      // check for disallowed missing decimal places
      if (currExp > result.exp()) {
        let check = function() {
          if (token.type == eTokenType.BEGIN || token.type == eTokenType.SIGN) {
            return true;
          }
          if (
            digitState == eDigitState.DELIM ||
            digitState == eDigitState.ZERO
          ) {
            return true;
          }
          if (token.type == eTokenType.INT_MULT) {
            return true;
          }
          if (
            token.type == eTokenType.FRAC_MULT ||
            token.type == eTokenType.DECIMAL
          ) {
            return true;
          }
          return false;
        };

        if (!check()) {
          return null;
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
          if (
            digitState == eDigitState.ZERO ||
            digitState == eDigitState.DIGIT_WITH_ZERO
          ) {
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

    if (result.digits().length == 0) {
      return null;
    }
    return {
      sign: result.sign(),
      exp: result.exp() - result.digits().length,
      digits: result.digits()
    };
  }

  function getDigit(result, exp) {
    const idx = exp - result.exp;
    if (idx >= 0 && idx < result.digits.length) {
      return result.digits[idx];
    } else {
      return "0";
    }
  }

  function compareMagnitude(resultA, resultB) {
    const getMaxExp = result => result.exp + (result.digits.length - 1);

    const maxExp = Math.max(getMaxExp(resultA), getMaxExp(resultB));
    for (let i = maxExp; i >= resultA.exp || i >= resultB.exp; --i) {
      const digitA = Number(getDigit(resultA, i));
      const digitB = Number(getDigit(resultB, i));
      if (digitA > digitB) {
        return 1;
      } else if (digitA < digitB) {
        return -1;
      }
    }
    return 0;
  }

  // parse
  let tokens = tokenize(s);
  if (tokens == null) {
    return null;
  }
  let result = parse(tokens);
  if (result == null) {
    return null;
  }

  // build decimal string
  if (!Number.isFinite(result.sign)) {
    // infinity/NaN
    return result.sign.toString();
  }
  let str = result.sign < 0 ? "-" : "";

  // no fractional digits (including zero) and fits in int64?
  const printAsInt = (function() {
    if (result.exp < 0) {
      return false;
    }
    const c = compareMagnitude(result, RESULT_2_TO_63);
    return result.sign < 0 ? c <= 0 : c < 0;
  })();

  // digit range, leading and trailing zeros trimmed
  const rend = result.digits.findIndex(x => x != "0");
  if (rend < 0) {
    str += "0";
    return str;
  }
  const rendExp = result.exp + rend;

  let rbegin = result.digits.length;
  while (result.digits[rbegin - 1] == "0") {
    --rbegin;
  }
  const rbeginExp = result.exp + rbegin;

  // compute length of fixed and scientific format
  let expStr = "";
  let printAsScientific = false;
  if (!printAsInt) {
    const scientificExp = result.exp + (rbegin - 1);
    expStr =
      (scientificExp < 0 ? "e-" : "e+") + Math.abs(scientificExp).toString();
    const fixedLen =
      rendExp < 0 ? Math.max(rbeginExp, 1) - rendExp + 1 : rbeginExp;
    const scientificMagLen = rbegin - rend > 1 ? rbegin - rend + 1 : 1;
    if (scientificMagLen + expStr.length < fixedLen) {
      printAsScientific = true;
    }
  }

  if (printAsScientific) {
    str += result.digits[rbegin - 1];
    if (rbegin - 1 > rend) {
      str += ".";
      for (let i = rbegin - 1; i > rend; --i) {
        str += result.digits[i - 1];
      }
    }
    str += expStr;
    return str;
  } else {
    for (let i = Math.max(rbeginExp, 1); i > 0; --i) {
      str += getDigit(result, i - 1);
    }
    if (rendExp < 0) {
      str += ".";
      for (let i = 0; i > rendExp; --i) {
        str += getDigit(result, i - 1);
      }
    }
    return str;
  }
}

export function hanzi2num(s: string): number {
  const str = hanzi2numstr(s);
  if (str == null) {
    return NaN;
  } else {
    return Number(str);
  }
}

export function num2hanzi(
  n: number,
  format = "",
  precision = undefined
): string {
  if (!Number.isFinite(n)) {
    if (n == Infinity) {
      return INF_WORD;
    } else if (n == -Infinity) {
      return NEG_WORD + INF_WORD;
    } else {
      return NAN_WORD;
    }
  }

  // the same format as hanzi2numstr.parse
  function parseNumStr(str) {
    function myIndexOf(str, val) {
      const idx = str.indexOf(val);
      return idx < 0 ? str.length : idx;
    }
    const sign = str.charAt(0) == "-" ? -1 : 1;
    const digitIndex = "+-".includes(str.charAt(0)) ? 1 : 0;
    const expIndex = myIndexOf(str, "e");
    const scientificExp =
      expIndex == str.length ? 0 : Number(str.substring(expIndex + 1));
    const decimalIndex = myIndexOf(str.substring(0, expIndex), ".");
    const intStr = str.substring(digitIndex, decimalIndex);
    const intDigits = intStr.split("").reverse();
    const fracStr = str.substring(
      Math.min(decimalIndex + 1, expIndex),
      expIndex
    );
    const fracDigits = fracStr.split("").reverse();
    return {
      sign: sign,
      exp: scientificExp - fracDigits.length,
      digits: fracDigits.concat(intDigits)
    };
  }

  // reserved for future extension
  const chineseFormat = "readout";
  const multWords = MULT_WORDS[chineseFormat];
  const digitWords = DIGIT_WORDS[chineseFormat];
  const decimalWord = DECIMAL_WORD[chineseFormat];

  let numStr = precision === undefined ? n.toString() : n.toFixed(precision);
  let result = parseNumStr(numStr);
  let signStr = result.sign < 0 ? NEG_WORD : "";
  let rend = result.digits.findIndex(x => x != "0");
  if (rend < 0) {
    return signStr + digitWords["0"];
  }
  let rbegin = result.digits.length;
  while (result.digits[rbegin - 1] == "0") {
    --rbegin;
  }

  // is this beyond the lowest fractional unit we can represent?
  const minMultExp = multWords[multWords.length - 1].exp;
  if (result.exp + rend < minMultExp) {
    // cap to lowest fractional unit and retry
    numStr = n.toFixed(-minMultExp);
    result = parseNumStr(numStr);
    signStr = result.sign < 0 ? NEG_WORD : "";
    rend = result.digits.findIndex(x => x != "0");
    if (rend < 0) {
      return signStr + digitWords["0"];
    }
    rbegin = result.digits.length;
    while (result.digits[rbegin - 1] == "0") {
      --rbegin;
    }
  }

  // convert digits to readout format
  let str = signStr;
  let pendingZero = false;
  let i = rbegin;
  const intToReadout = function(expBias = 0) {
    let hasOutput = false;
    while (i != rend) {
      const mult = multWords.find(x => x.exp + expBias <= result.exp + (i - 1));
      if (mult === undefined || mult.exp < 0) {
        // done with int part
        break;
      } else if (mult.exp > 0) {
        // needs higher multiplier
        if (intToReadout(expBias + mult.exp)) {
          // 零 is omitted here (100 0000 -> 一百萬)
          pendingZero = false;
          // write the multiplier
          str += mult.str;
          hasOutput = true;
        }
      } else if (mult.exp == 0) {
        if (result.digits[i - 1] != "0") {
          // insert 零 if necessary
          if (pendingZero) {
            str += digitWords["0"];
            pendingZero = false;
          }
          // write the digit
          str += digitWords[result.digits[i - 1]];
          hasOutput = true;
        } else {
          // mark that there are zero(s) not written yet
          // 零 will be added later if necessary
          pendingZero = true;
        }
        --i;
        break;
      }
    }
    return hasOutput;
  };
  const fracToReadout = function() {
    while (i != rend) {
      const mult = multWords.find(x => x.exp <= result.exp + (i - 1));
      if (mult === undefined) {
        break;
      }
      if (intToReadout(mult.exp)) {
        str += mult.str;
        pendingZero = false;
      }
    }
  };

  const hasInt = intToReadout();
  pendingZero = false;
  if (i != rend) {
    if (hasInt) {
      str += decimalWord;
    }
    // avoid 又零
    while (i != rend && result.digits[i - 1] == "0") {
      --i;
    }
    fracToReadout();
  }
  return str;
}

export function bool2hanzi(b: boolean): string {
  return b ? "陽" : "陰";
}
