(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Highlighter"] = factory();
	else
		root["Highlighter"] = factory();
})((typeof self !== "undefined" ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var { num2hanzi } = __webpack_require__(1);
var { NUMBER_KEYWORDS, KEYWORDS } = __webpack_require__(2);

var DEFAULT_COLORS = {
  ctrl: "#F92672",
  lop: "#FFF",
  name: "#FFF",
  cmp: "#FFF",
  decl: "#FFF",
  print: "#FFF",
  rassgn: "#FFF",
  ctnr: "#66D9EF",
  comment: "#FFF",
  type: "#66D9EF",
  call: "#FFF",
  assgn: "#FFF",
  discard: "#FFF",
  endl: "#75715E",
  ans: "#A6E22E",
  expr: "#FFF",
  op: "#FFF",
  not: "#FFF",
  operand: "#FFF",
  bool: "#AE81FF",
  data: "#75715E",
  iden: "#A6E22E",
  quot: "#A6E22E",
  num: "#AE81FF"
};

var setTheme = function(theme) {
  DEFAULT_COLORS = theme;
};

var semantic = function(txt) {
  var off = 0;
  var out = [];
  var i = 0;
  while (i < txt.length) {
    if (txt[i] == "「" || txt[i] == "『") {
      off++;
      out.push("quot");
    } else if (txt[i] == "」" || txt[i] == "』") {
      off--;
      out.push("quot");
    } else {
      if (off) {
        out.push("iden");
      } else {
        var ok = false;
        for (var k in KEYWORDS) {
          ok = true;
          for (var j = 0; j < k.length; j++) {
            if (k[j] != txt[i + j]) {
              ok = false;
              break;
            }
          }
          if (ok) {
            for (var j = 0; j < k.length; j++) {
              out.push(KEYWORDS[k][0]);
              i++;
            }
            i--;
            break;
          }
        }
        if (ok == false) {
          if (NUMBER_KEYWORDS.includes(txt[i])) {
            out.push("num");
          } else {
            out.push("data");
          }
        }
      }
    }
    i++;
  }
  return out;
};

var NNL = 0;

function newEditor(txt) {
  var div = document.createElement("pre");
  div.contentEditable = "true";
  div.autoComplete = "off";
  div.autoCorrect = "off";
  div.autoCapitalize = "off";
  div.spellCheck = "off";
  div.onkeyup = function() {
    if (event.keyCode == 13) {
      NNL += 1;
    }
  };
  div.innerHTML = txt;
  highlight([div]);
  // setInterval(()=>highlight([div]),20000);
  return div;
}

var highlight = function(codes) {
  function getCaretPosition(element, mode) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;

    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      if (mode == "start") {
        preCaretRange.setEnd(range.endContainer, range.endOffset);
      } else {
        preCaretRange.setEnd(range.startContainer, range.startOffset);
      }
      caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  }

  function setCaretPosition(element, i, j, ie, je) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(element.childNodes[i], j);
    range.setEnd(element.childNodes[ie], je);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  for (var i = 0; i < codes.length; i++) {
    var c = getCaretPosition(codes[i], "start") + NNL;
    var ce = getCaretPosition(codes[i], "end") + NNL;
    NNL = 0;
    var cc = codes[i].innerText;
    var nc = "";
    var sm = semantic(cc);

    for (var j = 0; j < cc.length; j++) {
      nc += `<x style="color:${DEFAULT_COLORS[sm[j]]}">${cc[j]}</x>`;
    }
    // console.log(cc);
    // console.log(nc);
    codes[i].innerHTML = nc;
    if (document.activeElement == codes[i]) {
      var c0 = Math.min(c, ce);
      var c1 = Math.max(c, ce);
      try {
        setCaretPosition(codes[i], c0, 0, c1, 0);
        // console.log(c0,0,c1,0)
      } catch (e) {
        for (var eee = 0; eee < 10; eee++) {
          try {
            codes[i].innerHTML += "<i></i>";
            setCaretPosition(codes[i], c0, 0, c1, 0);
            break;
          } catch (e) {}
        }
      }
    }
  }
};

function newLineNo(ed) {
  var div = document.createElement("pre");
  div.style.float = "left";
  div.style.textAlign = "right";
  div.style.color = DEFAULT_COLORS.endl;
  function isRoman(x) {
    return x.replace(/[ -~\t]/g, "").length == 0;
  }
  function genLineNo() {
    var ls = ed.innerText.split("\n");
    var n = ls.length;
    div.innerText = "";
    for (var i = 0; i < n; i++) {
      if (!isRoman(ls[i])) {
        div.innerText += num2hanzi(i + 1) + " ";
      }
      if (i != n - 1) {
        div.innerText += "\n";
      }
    }
  }
  setInterval(genLineNo, 1000);
  genLineNo();
  return div;
}

module.exports = {
  semantic,
  highlight,
  newLineNo,
  DEFAULT_COLORS,
  newEditor,
  setTheme
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool2hanzi = exports.num2hanzi = exports.hanzi2num = exports.hanzi2numstr = exports.NumberTokenType = void 0;
var NumberTokenType;
(function (NumberTokenType) {
    NumberTokenType[NumberTokenType["SIGN"] = 0] = "SIGN";
    NumberTokenType[NumberTokenType["DIGIT"] = 1] = "DIGIT";
    NumberTokenType[NumberTokenType["DECIMAL"] = 2] = "DECIMAL";
    NumberTokenType[NumberTokenType["INT_MULT"] = 3] = "INT_MULT";
    NumberTokenType[NumberTokenType["FRAC_MULT"] = 4] = "FRAC_MULT";
    NumberTokenType[NumberTokenType["DELIM"] = 5] = "DELIM";
    NumberTokenType[NumberTokenType["ZERO"] = 6] = "ZERO";
    // pseudo tokens
    NumberTokenType[NumberTokenType["BEGIN"] = 7] = "BEGIN";
    NumberTokenType[NumberTokenType["END"] = 8] = "END"; // <END>
})(NumberTokenType = exports.NumberTokenType || (exports.NumberTokenType = {}));
var NUM_TOKENS = (_a = {
        負: { type: NumberTokenType.SIGN, sign: -1 },
        "·": { type: NumberTokenType.DECIMAL, exp: 0 },
        又: { type: NumberTokenType.DELIM },
        有: { type: NumberTokenType.DELIM },
        零: { type: NumberTokenType.ZERO, digit: "0" },
        一: { type: NumberTokenType.DIGIT, digit: "1" },
        二: { type: NumberTokenType.DIGIT, digit: "2" },
        三: { type: NumberTokenType.DIGIT, digit: "3" },
        四: { type: NumberTokenType.DIGIT, digit: "4" },
        五: { type: NumberTokenType.DIGIT, digit: "5" },
        六: { type: NumberTokenType.DIGIT, digit: "6" },
        七: { type: NumberTokenType.DIGIT, digit: "7" },
        八: { type: NumberTokenType.DIGIT, digit: "8" },
        九: { type: NumberTokenType.DIGIT, digit: "9" },
        十: { type: NumberTokenType.INT_MULT, exp: 1 },
        百: { type: NumberTokenType.INT_MULT, exp: 2 },
        千: { type: NumberTokenType.INT_MULT, exp: 3 },
        萬: { type: NumberTokenType.INT_MULT, exp: 4 },
        億: { type: NumberTokenType.INT_MULT, exp: 8 },
        兆: { type: NumberTokenType.INT_MULT, exp: 12 },
        京: { type: NumberTokenType.INT_MULT, exp: 16 },
        垓: { type: NumberTokenType.INT_MULT, exp: 20 },
        秭: { type: NumberTokenType.INT_MULT, exp: 24 },
        穰: { type: NumberTokenType.INT_MULT, exp: 28 },
        溝: { type: NumberTokenType.INT_MULT, exp: 32 },
        澗: { type: NumberTokenType.INT_MULT, exp: 36 },
        正: { type: NumberTokenType.INT_MULT, exp: 40 },
        載: { type: NumberTokenType.INT_MULT, exp: 44 },
        極: { type: NumberTokenType.INT_MULT, exp: 48 },
        分: { type: NumberTokenType.FRAC_MULT, exp: -1 },
        釐: { type: NumberTokenType.FRAC_MULT, exp: -2 },
        毫: { type: NumberTokenType.FRAC_MULT, exp: -3 },
        絲: { type: NumberTokenType.FRAC_MULT, exp: -4 },
        忽: { type: NumberTokenType.FRAC_MULT, exp: -5 },
        微: { type: NumberTokenType.FRAC_MULT, exp: -6 },
        纖: { type: NumberTokenType.FRAC_MULT, exp: -7 },
        沙: { type: NumberTokenType.FRAC_MULT, exp: -8 },
        塵: { type: NumberTokenType.FRAC_MULT, exp: -9 },
        埃: { type: NumberTokenType.FRAC_MULT, exp: -10 },
        渺: { type: NumberTokenType.FRAC_MULT, exp: -11 },
        漠: { type: NumberTokenType.FRAC_MULT, exp: -12 }
    },
    // eslint-disable-next-line no-useless-computed-key
    _a["〇"] = { type: NumberTokenType.DIGIT, digit: "0" } // U+3007 Ideographic Number Zero
,
    _a);
var NEG_WORD = "負";
var INF_WORD = "無限大數";
var NAN_WORD = "不可算數";
var DECIMAL_WORD = {
    readout: "又"
};
var DIGIT_WORDS = {
    readout: {
        0: "零",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九"
    }
};
var MULT_WORDS = {
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
var eMultState = {
    NONE: "NONE",
    FRAC: "FRAC",
    INT: "INT",
    DONE: "DONE",
    SIGN: "SIGN"
};
var eDigitState = {
    NONE: "NONE",
    MULT: "MULT",
    MULT_AMBIG: "MULT_AMBIG",
    DIGIT: "DIGIT",
    DIGIT_WITH_ZERO: "DIGIT_WITH_ZERO",
    DELIM: "DELIM",
    ZERO: "ZERO",
    SIGN: "SIGN",
    ZERO_MULT_AMBIG: "ZERO_MULT_AMBIG" // 零十 (ambiguous: 零一十 or 零十 or 〇十)
};
var RESULT_2_TO_63 = {
    sign: 1,
    exp: 0,
    digits: "9223372036854775808".split("").reverse()
};
function hanzi2numstr(s) {
    // returns array of tokens on success, null on invalid string
    function tokenize(s) {
        var result = [{ type: NumberTokenType.BEGIN }];
        for (var i = 0; i < s.length; ++i) {
            var tokenStr = s.charAt(i);
            if (!NUM_TOKENS[tokenStr]) {
                return null;
            }
            result.push(NUM_TOKENS[tokenStr]);
        }
        result.push({ type: NumberTokenType.END });
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
        var digitState = eDigitState.NONE;
        // multiplier stack, keep track of all active multiplier exponents
        var multStack = {
            isEmpty: function () {
                return this._exps.length === 0;
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
                }
                else if (this._exps[0] < 0) {
                    return eMultState.FRAC;
                }
                else if (this._exps[0] < Infinity) {
                    return eMultState.INT;
                }
                else {
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
        // result, with different convension of exp for internal use
        var result = {
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
            // digit: number or array of numbers
            push: function (digit) {
                if (Array.isArray(digit)) {
                    this._digits = this._digits.concat(digit);
                    this._exp += digit.length;
                }
                else {
                    this._digits.push(digit);
                    ++this._exp;
                }
            },
            fillZeros: function (newExp) {
                this.push(Array(newExp - this._exp).fill("0"));
            },
            resetExp: function (newExp) {
                this._exp = newExp;
            },
            // the result is sign * 0.{digits[length-1..0]} * 10^exp
            _sign: 1,
            _exp: 0,
            _digits: [] // lowest to highest
        };
        var _loop_1 = function (i) {
            var token = tokens[i - 1];
            // sign should be the first char
            if (multStack.state() === eMultState.SIGN &&
                token.type !== NumberTokenType.BEGIN) {
                return { value: null };
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
                        case NumberTokenType.BEGIN:
                        case NumberTokenType.SIGN:
                        case NumberTokenType.DELIM:
                        case NumberTokenType.DECIMAL:
                        case NumberTokenType.FRAC_MULT:
                            result.push("1");
                            digitState = eDigitState.DIGIT;
                            break;
                        // 一(一?)十 -> 一十
                        case NumberTokenType.DIGIT:
                            digitState = eDigitState.MULT;
                            break;
                        // 百(一?)十 -> 百一十
                        // 千(一?)十 -> 千一十
                        // 百(一?)萬 -> 百萬
                        case NumberTokenType.INT_MULT:
                            if (multStack.top() < (token.exp || 1)) {
                                result.push("1");
                                digitState = eDigitState.DIGIT;
                            }
                            else {
                                digitState = eDigitState.MULT;
                            }
                            break;
                        // 零(一?)十 -> 零(一?)十
                        case NumberTokenType.ZERO:
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
                        case NumberTokenType.BEGIN:
                        case NumberTokenType.SIGN:
                        case NumberTokenType.DIGIT:
                        case NumberTokenType.DELIM:
                        case NumberTokenType.ZERO:
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
                        case NumberTokenType.DECIMAL:
                        case NumberTokenType.FRAC_MULT:
                            if (multStack.total() + 1 < token.exp) {
                                result.push("1");
                                result.push("0");
                                digitState = eDigitState.ZERO;
                            }
                            else if (multStack.total() + 1 === token.exp) {
                                result.push("0");
                                digitState = eDigitState.DIGIT_WITH_ZERO;
                            }
                            else {
                                return { value: null };
                            }
                            break;
                        // 千(零一|零|〇)十 -> 千零一十
                        // 百(零一|零|〇)十 -> 百〇十
                        // 萬(零一|零|〇)萬 -> 萬零萬
                        // 百(零一|零|〇)萬 -> 百零萬
                        case NumberTokenType.INT_MULT:
                            if (token.exp == null) {
                                return { value: null };
                            }
                            if (multStack.top() + 1 < token.exp) {
                                result.push("1");
                                result.push("0");
                                digitState = eDigitState.ZERO;
                            }
                            else if (multStack.top() + 1 === token.exp) {
                                result.push("0");
                                digitState = eDigitState.DIGIT_WITH_ZERO;
                            }
                            else {
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
            if (multStack.state() === eMultState.NONE) {
                switch (token.type) {
                    case NumberTokenType.INT_MULT:
                        // exponent is correct
                        break;
                    case NumberTokenType.DECIMAL:
                    case NumberTokenType.FRAC_MULT:
                        if (token.exp != null) {
                            result.resetExp(token.exp);
                        }
                        break;
                    default:
                        break;
                }
            }
            // determine the current exponent and update exponent stack
            var currExp = (function () {
                switch (token.type) {
                    case NumberTokenType.BEGIN:
                    case NumberTokenType.SIGN:
                        switch (digitState) {
                            // <BEGIN>微 -> error
                            // 負微 -> error
                            case eDigitState.MULT:
                                return null;
                            default:
                                multStack.markDone();
                                return multStack.total();
                        }
                    case NumberTokenType.DIGIT:
                    case NumberTokenType.ZERO:
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
                    case NumberTokenType.DELIM:
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
                    case NumberTokenType.DECIMAL:
                    case NumberTokenType.FRAC_MULT:
                        if (digitState === eDigitState.MULT) {
                            return null;
                        }
                        else {
                            multStack.clear();
                            multStack.push(token.exp);
                            return multStack.total();
                        }
                    case NumberTokenType.INT_MULT:
                        switch (digitState) {
                            // 百又...絲 -> 百
                            // 萬又...百萬億 -> 萬萬億
                            case eDigitState.DELIM:
                                if (multStack.state() === eMultState.FRAC) {
                                    multStack.clear();
                                    multStack.push(token.exp);
                                }
                                else {
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
                                while (!multStack.isEmpty() &&
                                    multStack.top() < token.exp &&
                                    multStack.top() >= 0) {
                                    multStack.pop();
                                }
                                multStack.push(token.exp);
                                break;
                        }
                        return multStack.total();
                }
            })();
            if (currExp == null) {
                return { value: null };
            }
            // check for overlapping decimal places
            if (currExp < result.exp()) {
                return { value: null };
            }
            // check for disallowed missing decimal places
            if (currExp > result.exp()) {
                var check = function () {
                    if (token.type === NumberTokenType.BEGIN ||
                        token.type === NumberTokenType.SIGN) {
                        return true;
                    }
                    if (digitState === eDigitState.DELIM ||
                        digitState === eDigitState.ZERO) {
                        return true;
                    }
                    if (token.type === NumberTokenType.INT_MULT) {
                        return true;
                    }
                    if (token.type === NumberTokenType.FRAC_MULT ||
                        token.type === NumberTokenType.DECIMAL) {
                        return true;
                    }
                    return false;
                };
                if (!check()) {
                    return { value: null };
                }
                if (multStack.state() !== eMultState.DONE) {
                    result.fillZeros(currExp);
                }
            }
            // push the digit, update parser state
            switch (token.type) {
                case NumberTokenType.BEGIN:
                    break;
                case NumberTokenType.SIGN:
                    result.applySign(token.sign);
                    digitState = eDigitState.SIGN;
                    break;
                case NumberTokenType.DIGIT:
                    result.push(token.digit);
                    if (digitState === eDigitState.ZERO ||
                        digitState === eDigitState.DIGIT_WITH_ZERO) {
                        digitState = eDigitState.DIGIT_WITH_ZERO;
                    }
                    else {
                        digitState = eDigitState.DIGIT;
                    }
                    break;
                case NumberTokenType.DECIMAL:
                    digitState = eDigitState.NONE;
                    break;
                case NumberTokenType.INT_MULT:
                    digitState = eDigitState.MULT_AMBIG;
                    break;
                case NumberTokenType.FRAC_MULT:
                    digitState = eDigitState.MULT;
                    break;
                case NumberTokenType.DELIM:
                    digitState = eDigitState.DELIM;
                    break;
                case NumberTokenType.ZERO:
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
        };
        // parses the number string backwards, discarding <END>
        for (var i = tokens.length - 1; i > 0; --i) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (result.digits().length === 0) {
            return null;
        }
        return {
            sign: result.sign(),
            exp: result.exp() - result.digits().length,
            digits: result.digits()
        };
    }
    function getDigit(result, exp) {
        var idx = exp - result.exp;
        if (idx >= 0 && idx < result.digits.length) {
            return result.digits[idx];
        }
        else {
            return "0";
        }
    }
    function compareMagnitude(resultA, resultB) {
        var getMaxExp = function (result) {
            return result.exp + (result.digits.length - 1);
        };
        var maxExp = Math.max(getMaxExp(resultA), getMaxExp(resultB));
        for (var i = maxExp; i >= resultA.exp || i >= resultB.exp; --i) {
            var digitA = Number(getDigit(resultA, i));
            var digitB = Number(getDigit(resultB, i));
            if (digitA > digitB) {
                return 1;
            }
            else if (digitA < digitB) {
                return -1;
            }
        }
        return 0;
    }
    // parse
    var tokens = tokenize(s);
    if (tokens == null) {
        return null;
    }
    var result = parse(tokens);
    if (result == null) {
        return null;
    }
    // build decimal string
    if (!Number.isFinite(result.sign)) {
        // infinity/NaN
        return result.sign.toString();
    }
    var str = result.sign < 0 ? "-" : "";
    // no fractional digits (including zero) and fits in int64?
    var printAsInt = (function () {
        if (result.exp < 0) {
            return false;
        }
        var c = compareMagnitude(result, RESULT_2_TO_63);
        return result.sign < 0 ? c <= 0 : c < 0;
    })();
    // digit range, leading and trailing zeros trimmed
    var rend = result.digits.findIndex(function (x) { return x !== "0"; });
    if (rend < 0) {
        str += "0";
        return str;
    }
    var rendExp = result.exp + rend;
    var rbegin = result.digits.length;
    while (result.digits[rbegin - 1] === "0") {
        --rbegin;
    }
    var rbeginExp = result.exp + rbegin;
    // compute length of fixed and scientific format
    var expStr = "";
    var printAsScientific = false;
    if (!printAsInt) {
        var scientificExp = result.exp + (rbegin - 1);
        expStr =
            (scientificExp < 0 ? "e-" : "e+") + Math.abs(scientificExp).toString();
        var fixedLen = rendExp < 0 ? Math.max(rbeginExp, 1) - rendExp + 1 : rbeginExp;
        var scientificMagLen = rbegin - rend > 1 ? rbegin - rend + 1 : 1;
        if (scientificMagLen + expStr.length < fixedLen) {
            printAsScientific = true;
        }
    }
    if (printAsScientific) {
        str += result.digits[rbegin - 1];
        if (rbegin - 1 > rend) {
            str += ".";
            for (var i = rbegin - 1; i > rend; --i) {
                str += result.digits[i - 1];
            }
        }
        str += expStr;
        return str;
    }
    else {
        for (var i = Math.max(rbeginExp, 1); i > 0; --i) {
            str += getDigit(result, i - 1);
        }
        if (rendExp < 0) {
            str += ".";
            for (var i = 0; i > rendExp; --i) {
                str += getDigit(result, i - 1);
            }
        }
        return str;
    }
}
exports.hanzi2numstr = hanzi2numstr;
function hanzi2num(s) {
    var str = hanzi2numstr(s);
    if (str == null) {
        return NaN;
    }
    else {
        return Number(str);
    }
}
exports.hanzi2num = hanzi2num;
function num2hanzi(n, format, precision) {
    if (format === void 0) { format = ""; }
    if (precision === void 0) { precision = undefined; }
    if (!Number.isFinite(n)) {
        if (n === Infinity) {
            return INF_WORD;
        }
        else if (n === -Infinity) {
            return NEG_WORD + INF_WORD;
        }
        else {
            return NAN_WORD;
        }
    }
    // the same format as hanzi2numstr.parse
    function parseNumStr(str) {
        function myIndexOf(str, val) {
            var idx = str.indexOf(val);
            return idx < 0 ? str.length : idx;
        }
        var sign = str.charAt(0) === "-" ? -1 : 1;
        var digitIndex = "+-".includes(str.charAt(0)) ? 1 : 0;
        var expIndex = myIndexOf(str, "e");
        var scientificExp = expIndex === str.length ? 0 : Number(str.substring(expIndex + 1));
        var decimalIndex = myIndexOf(str.substring(0, expIndex), ".");
        var intStr = str.substring(digitIndex, decimalIndex);
        var intDigits = intStr.split("").reverse();
        var fracStr = str.substring(Math.min(decimalIndex + 1, expIndex), expIndex);
        var fracDigits = fracStr.split("").reverse();
        return {
            sign: sign,
            exp: scientificExp - fracDigits.length,
            digits: fracDigits.concat(intDigits)
        };
    }
    // reserved for future extension
    var chineseFormat = "readout";
    var multWords = MULT_WORDS[chineseFormat];
    var digitWords = DIGIT_WORDS[chineseFormat];
    var decimalWord = DECIMAL_WORD[chineseFormat];
    var numStr = precision === undefined ? n.toString() : n.toFixed(precision);
    var result = parseNumStr(numStr);
    var signStr = result.sign < 0 ? NEG_WORD : "";
    var rend = result.digits.findIndex(function (x) { return x !== "0"; });
    if (rend < 0) {
        return signStr + digitWords["0"];
    }
    var rbegin = result.digits.length;
    while (result.digits[rbegin - 1] === "0") {
        --rbegin;
    }
    // is this beyond the lowest fractional unit we can represent?
    var minMultExp = multWords[multWords.length - 1].exp;
    if (result.exp + rend < minMultExp) {
        // cap to lowest fractional unit and retry
        numStr = n.toFixed(-minMultExp);
        result = parseNumStr(numStr);
        signStr = result.sign < 0 ? NEG_WORD : "";
        rend = result.digits.findIndex(function (x) { return x !== "0"; });
        if (rend < 0) {
            return signStr + digitWords["0"];
        }
        rbegin = result.digits.length;
        while (result.digits[rbegin - 1] === "0") {
            --rbegin;
        }
    }
    // convert digits to readout format
    var str = signStr;
    var pendingZero = false;
    var i = rbegin;
    var intToReadout = function (expBias) {
        if (expBias === void 0) { expBias = 0; }
        var hasOutput = false;
        while (i !== rend) {
            var mult = multWords.find(function (x) { return x.exp + expBias <= result.exp + (i - 1); });
            if (mult === undefined || mult.exp < 0) {
                // done with int part
                break;
            }
            else if (mult.exp > 0) {
                // needs higher multiplier
                if (intToReadout(expBias + mult.exp)) {
                    // 零 is omitted here (100 0000 -> 一百萬)
                    pendingZero = false;
                    // write the multiplier
                    str += mult.str;
                    hasOutput = true;
                }
            }
            else if (mult.exp === 0) {
                if (result.digits[i - 1] !== "0") {
                    // insert 零 if necessary
                    if (pendingZero) {
                        str += digitWords["0"];
                        pendingZero = false;
                    }
                    // write the digit
                    str += digitWords[result.digits[i - 1]];
                    hasOutput = true;
                }
                else {
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
    var fracToReadout = function () {
        // eslint-disable-next-line no-unmodified-loop-condition
        while (i !== rend) {
            var mult = multWords.find(function (x) { return x.exp <= result.exp + (i - 1); });
            if (mult === undefined) {
                break;
            }
            if (intToReadout(mult.exp)) {
                str += mult.str;
                pendingZero = false;
            }
        }
    };
    var hasInt = intToReadout();
    pendingZero = false;
    if (i !== rend) {
        if (hasInt) {
            str += decimalWord;
        }
        // avoid 又零
        while (i !== rend && result.digits[i - 1] === "0") {
            --i;
        }
        fracToReadout();
    }
    return str;
}
exports.num2hanzi = num2hanzi;
function bool2hanzi(b) {
    return b ? "陽" : "陰";
}
exports.bool2hanzi = bool2hanzi;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYWORDS = exports.KEYWORDS_DEFINE = exports.NUMBER_KEYWORDS = void 0;
exports.NUMBER_KEYWORDS = Array.from("負·又零〇一二三四五六七八九十百千萬億兆京垓秭穰溝澗正載極分釐毫絲忽微纖沙塵埃渺漠");
exports.KEYWORDS_DEFINE = {
    吾有: ["decl", "uninit"],
    今有: ["decl", "public"],
    物之: ["decl", "prop"],
    有: ["decl", "init"],
    數: ["type", "num"],
    列: ["type", "arr"],
    言: ["type", "str"],
    術: ["type", "fun"],
    爻: ["type", "bol"],
    物: ["type", "obj"],
    元: ["type", "any"],
    書之: ["print", undefined],
    名之曰: ["name", undefined],
    施: ["call", "r"],
    以施: ["call", "l"],
    曰: ["assgn", undefined],
    噫: ["discard", undefined],
    取: ["take", undefined],
    昔之: ["rassgn", "a"],
    今: ["rassgn", "b"],
    是矣: ["rassgn", "c"],
    不復存矣: ["rassgn", "delete"],
    其: ["ans", undefined],
    乃得: ["ctrl", "ret"],
    乃得矣: ["ctrl", "retprev"],
    乃歸空無: ["ctrl", "retvoid"],
    是謂: ["ctrl", "bigend"],
    之術也: ["ctrl", "funend"],
    必先得: ["ctrl", "funarg"],
    是術曰: ["ctrl", "funbody"],
    乃行是術曰: ["ctrl", "funbody"],
    欲行是術: ["ctrl", "funstart"],
    也: ["ctrl", "end"],
    云云: ["ctrl", "end"],
    凡: ["ctrl", "for"],
    中之: ["ctrl", "forin"],
    恆為是: ["ctrl", "whiletrue"],
    為是: ["ctrl", "whilen0"],
    遍: ["ctrl", "whilen1"],
    乃止: ["ctrl", "break"],
    乃止是遍: ["ctrl", "continue"],
    若非: ["ctrl", "else"],
    若: ["ctrl", "if"],
    者: ["ctrl", "conj"],
    若其然者: ["ctrl", "iftrue"],
    若其不然者: ["ctrl", "iffalse"],
    或若: ["ctrl", "elseif"],
    其物如是: ["ctrl", "objbody"],
    之物也: ["ctrl", "objend"],
    夫: ["expr", undefined],
    等於: ["cmp", "=="],
    不等於: ["cmp", "!="],
    不大於: ["cmp", "<="],
    不小於: ["cmp", ">="],
    大於: ["cmp", ">"],
    小於: ["cmp", "<"],
    加: ["op", "+"],
    減: ["op", "-"],
    乘: ["op", "*"],
    除: ["op", "/"],
    中有陽乎: ["lop", "||"],
    中無陰乎: ["lop", "&&"],
    變: ["not", undefined],
    所餘幾何: ["mod", undefined],
    以: ["opord", "l"],
    於: ["opord", "r"],
    之長: ["ctnr", "len"],
    之: ["ctnr", "subs"],
    充: ["ctnr", "push"],
    銜: ["ctnr", "cat"],
    其餘: ["ctnr", "rest"],
    陰: ["bool", "false"],
    陽: ["bool", "true"],
    吾嘗觀: ["import", "file"],
    中: ["import", "in"],
    之書: ["import", "fileend"],
    方悟: ["import", "iden"],
    之義: ["import", "idenend"],
    嗚呼: ["throw", "a"],
    之禍: ["throw", "b"],
    姑妄行此: ["try", "try"],
    如事不諧: ["try", "catch"],
    豈: ["try", "catcherr0"],
    之禍歟: ["try", "catcherr1"],
    不知何禍歟: ["try", "catchall"],
    乃作罷: ["try", "end"],
    或云: ["macro", "from"],
    蓋謂: ["macro", "to"],
    注曰: ["comment", undefined],
    疏曰: ["comment", undefined],
    批曰: ["comment", undefined]
};
var ke = Object.entries(exports.KEYWORDS_DEFINE);
ke.sort(function (a, b) { return b[0].length - a[0].length; });
if (!Object.fromEntries) {
    Object.fromEntries = function (l) {
        var o = {};
        l.map(function (x) { return (o[x[0]] = x[1]); });
        return o;
    };
}
exports.KEYWORDS = Object.fromEntries(ke);


/***/ })
/******/ ]);
});
//# sourceMappingURL=highlight.js.map