const { hanzi2num, num2hanzi } = require("./hanzi2num");
const hanzi2pinyin = require("./hanzi2pinyin");
const STDLIB = require("./stdlib");
const { NUMBER_KEYWORDS, KEYWORDS } = require("./meta");
const version = require("./version");

var tmpVarCnt = 0;
var randVarCnt = 0;
function randVar() {
  randVarCnt++;
  return "_rand" + randVarCnt;
}
function currTmpVar() {
  return "_ans" + tmpVarCnt;
}
function nextTmpVar() {
  tmpVarCnt++;
  return "_ans" + tmpVarCnt;
}
function prevTmpVar(n) {
  return "_ans" + (tmpVarCnt - n + 1);
}

function wy2tokens(txt) {
  var tokens = [];
  var tok = "";
  var idt = false;
  var num = false;
  var data = false;

  var i = 0;

  function enddata() {
    if (data) {
      tokens.push(["data", tok, i]);
      data = false;
      tok = "";
    }
  }
  function endnum() {
    if (num) {
      tokens.push(["num", hanzi2num(tok), i]);
      tok = "";
      num = false;
    }
  }

  while (i < txt.length) {
    if (
      txt[i] == "。" ||
      txt[i] == "\n" ||
      txt[i] == "\r" ||
      txt[i] == "\t" ||
      txt[i] == " "
    ) {
      if (idt || data) {
        tok += txt[i];
      }
    } else if (txt[i] == "「" && txt[i + 1] == "「") {
      enddata();
      endnum();
      idt = true;
      tok = "";
      i++;
    } else if (txt[i] == "」" && txt[i + 1] == "」") {
      tokens.push(["lit", `"${tok}"`, i + 1]);
      idt = false;
      tok = "";
      i++;
    } else if (txt[i] == "「") {
      enddata();
      endnum();
      idt = true;
      tok = "";
    } else if (txt[i] == "」") {
      tokens.push(["iden", tok, i]);
      idt = false;
      tok = "";
    } else {
      if (idt) {
        tok += txt[i];
      } else if (num) {
        if (NUMBER_KEYWORDS.includes(txt[i])) {
          tok += txt[i];
        } else {
          endnum();
          i--;
        }
      } else {
        var ok = false;
        for (var k in KEYWORDS) {
          ok = true;
          for (var j = 0; j < k.length; j++) {
            if (txt[i + j] != k[j]) {
              ok = false;
              break;
            }
          }
          if (ok) {
            enddata();
            var kinfo = KEYWORDS[k];
            while (kinfo.length < 2) {
              kinfo.push(undefined);
            }
            i += k.length - 1;
            tokens.push(kinfo.concat([i]));
            break;
          }
        }
        if (!ok) {
          if (NUMBER_KEYWORDS.includes(txt[i])) {
            num = true;
            tok = txt[i];
          } else {
            tok += txt[i];
            data = true;
          }
        }
      }
    }
    i++;
  }
  if (tok.length) {
    if (num) {
      tokens.push(["num", hanzi2num(tok)]);
    } else if (data) {
      tokens.push(["data", tok]);
    } else {
      console.log("[Tokenizer Error] Unterminated identifier.");
    }
  }
  return tokens;
}

var idenMap = {};
function tokenRomanize(tokens, method) {
  function noDup(x) {
    for (var k in idenMap) {
      if (idenMap[k] == x) {
        return false;
      }
    }
    return true;
  }
  function isRoman(x) {
    return x.replace(/[ -~]/g, "").length == 0;
  }
  function hanzi2unicodeEntry(s) {
    var y = "";
    for (var c of s) {
      y +=
        "U" +
        c
          .charCodeAt(0)
          .toString(16)
          .toUpperCase();
    }
    return y;
  }
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i][0] == "iden" && !isRoman(tokens[i][1])) {
      var r = idenMap[tokens[i][1]];
      var key = tokens[i][1];
      if (r != undefined) {
        tokens[i][1] = r;
      } else {
        if (method == "pinyin") {
          r = hanzi2pinyin(tokens[i][1]);
        } else if (method == "unicode") {
          r = hanzi2unicodeEntry(tokens[i][1]);
        } else {
          r = hanzi2pinyin(tokens[i][1]); // legacy
          //console.log("Unrecognized Romanization method");
          //return;
        }
        while (!noDup(r)) {
          r += "_";
        }
        tokens[i][1] = r;
      }
      idenMap[key] = r;
    }
  }
}

function tokens2asc(
  tokens,
  assert = (msg, pos, b) => console.log(`ERROR@${pos}: ${msg}`)
) {
  var asc = [];
  var i = 0;
  while (i < tokens.length) {
    var pos = gettok(i, 2);
    var cmd = gettok(i, 0);

    function gettok(idx, jdx) {
      if (tokens[idx] == undefined) {
        assert(`Unexpected EOF`, pos, false);
      }
      return tokens[idx][jdx];
    }

    function typeassert(idx, good, reason) {
      var typ = gettok(idx, 0);
      assert(
        `<${cmd}> Expecting ${good.join("/")}${
          reason ? " for " + reason : ""
        }, found ${typ}`,
        pos,
        good.includes(typ)
      );
    }

    if (
      gettok(i, 0) == "decl" &&
      (gettok(i, 1) == "uninit" || gettok(i, 1) == "public")
    ) {
      typeassert(i + 1, ["num", "iden"], "variable count");
      typeassert(i + 2, ["type"], "variable type");

      var x = {
        op: "var",
        count: gettok(i + 1, 1),
        type: gettok(i + 2, 1),
        values: [],
        names: [],
        public: gettok(i, 1) == "public",
        pos
      };
      i += 3;
      while (tokens[i] && gettok(i, 0) == "assgn") {
        x.values.push(tokens[i + 1]);
        i += 2;
      }
      if (tokens[i] && gettok(i, 0) == "name") {
        x.names.push(gettok(i + 1, 1));
        i += 2;
      }
      while (tokens[i] && gettok(i, 0) == "assgn") {
        x.names.push(gettok(i + 1, 1));
        i += 2;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "decl" && gettok(i, 1) == "init") {
      typeassert(i + 1, ["type"], "variable type");
      typeassert(
        i + 2,
        ["data", "num", "lit", "iden", "bool"],
        "variable initialization"
      );

      var x = {
        op: "var",
        count: 1,
        type: gettok(i + 1, 1),
        values: [tokens[i + 2]],
        public: false,
        pos
      };
      i += 3;
      if (tokens[i] != undefined && gettok(i, 0) == "name") {
        x.names = [gettok(i + 1, 1)];
        i += 2;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "decl" && gettok(i, 1) == "prop") {
      typeassert(i + 1, ["lit"], "property key");
      typeassert(i + 3, ["type"], "property type");
      typeassert(i + 4, ["assgn"], "property value");
      var x = {
        op: "prop",
        type: gettok(i + 3, 1),
        name: tokens[i + 1][1],
        value: tokens[i + 5],
        pos
      };
      i += 6;
      asc.push(x);
    } else if (gettok(i, 0) == "print") {
      asc.push({ op: "print", pos });
      i++;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funstart") {
      var x = { op: "fun", arity: 0, args: [], pos };
      i++;
      if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funarg") {
        i++;
        while (!(gettok(i, 0) == "ctrl" && gettok(i, 1) == "funbody")) {
          if (gettok(i, 0) == "num") {
            typeassert(i + 1, ["type"], "argument type");
            var typ = gettok(i + 1, 1);
            var cnt = gettok(i, 1);
            x.arity += cnt;
            i += 2;
            for (var j = 0; j < cnt; j++) {
              typeassert(i + j * 2, ["assgn"], "another argument");
              typeassert(i + j * 2 + 1, ["iden"], "argument");
              x.args.push({ name: tokens[i + j * 2 + 1][1], type: typ });
            }
            i += cnt * 2;
          }
        }
      }
      asc.push(x);
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "funbody") {
      asc.push({ op: "funbody", pos });
      i++;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "bigend") {
      assert(
        `<${cmd}> Incorrect function/object end`,
        pos,
        gettok(i + 2, 0) == "ctrl" && gettok(i + 1, 0) == "iden"
      );
      asc.push({ op: gettok(i + 2, 1), pos });
      i += 3;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "objbody") {
      asc.push({ op: "objbody", pos });
      i++;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "if") {
      var x = { op: "if", test: [], pos };
      i++;
      while (!(gettok(i, 0) == "ctrl" && gettok(i, 1) == "conj")) {
        x.test.push(tokens[i]);
        i++;
      }
      i++;
      asc.push(x);
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "end") {
      asc.push({ op: "end", pos });
      i++;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "ret") {
      asc.push({ op: "return", value: tokens[i + 1], pos });
      i += 2;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "retvoid") {
      asc.push({ op: "return", pos });
      i += 1;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "break") {
      asc.push({ op: "break", pos });
      i += 1;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "else") {
      asc.push({ op: "else", pos });
      i += 1;
    } else if (gettok(i, 0) == "op") {
      typeassert(i + 2, ["opord"]);
      var x = {};
      if (gettok(i + 2, 1) == "l") {
        x.lhs = tokens[i + 1];
        x.rhs = tokens[i + 3];
      } else {
        x.lhs = tokens[i + 3];
        x.rhs = tokens[i + 1];
      }
      if (gettok(i, 1) == "/" && gettok(i + 4, 0) == "mod") {
        x.op = "op" + "%";
        i += 5;
      } else {
        x.op = "op" + gettok(i, 1);
        i += 4;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "not") {
      asc.push({ op: "not", value: tokens[i + 1], pos });
      i += 2;
    } else if (gettok(i, 0) == "name") {
      typeassert(i + 1, ["iden"]);
      var x = { op: "name", names: [gettok(i + 1, 1)], pos };
      i += 2;
      while (tokens[i] && gettok(i, 0) == "assgn") {
        x.names.push(gettok(i + 1, 1));
        i += 2;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "call" && gettok(i, 1) == "r") {
      var x = { op: "call", fun: gettok(i + 1, 1), args: [], pos };
      i += 2;
      while (tokens[i] && gettok(i, 0) == "opord" && gettok(i, 1) == "r") {
        typeassert(i + 1, ["data", "num", "lit", "iden", "bool"]);
        x.args.push(tokens[i + 1]);
        i += 2;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "call" && gettok(i, 1) == "l") {
      asc.push({ op: "call", pop: true, fun: gettok(i + 1, 1), pos });
      i += 2;
    } else if (gettok(i, 0) == "ctnr" && gettok(i, 1) == "push") {
      typeassert(i + 2, ["opord"]);
      assert(`<${cmd}> Only opord l allowed`, pos, gettok(i + 2, 1) == "l");
      var x = {
        op: "push",
        container: gettok(i + 1, 1),
        values: [tokens[i + 3]],
        pos
      };
      i += 4;
      while (tokens[i] && gettok(i, 0) == "opord" && gettok(i, 1) == "l") {
        x.values.push(tokens[i + 1]);
        i += 2;
      }
      asc.push(x);
    } else if (
      gettok(i, 0) == "expr" &&
      tokens[i + 2] &&
      gettok(i + 2, 0) == "ctnr" &&
      gettok(i + 2, 1) == "subs"
    ) {
      typeassert(i + 1, ["iden", "lit"]);
      var x = {
        op: "subscript",
        container: gettok(i + 1, 1),
        value: tokens[i + 3],
        pos
      };
      asc.push(x);
      i += 4;
    } else if (
      gettok(i, 0) == "expr" &&
      tokens[i + 2] &&
      gettok(i + 2, 0) == "ctnr" &&
      gettok(i + 2, 1) == "len"
    ) {
      typeassert(i + 1, ["iden", "lit"]);
      var x = { op: "length", container: gettok(i + 1, 1), pos };
      asc.push(x);
      i += 3;
    } else if (
      gettok(i, 0) == "expr" &&
      tokens[i + 3] &&
      gettok(i + 3, 0) == "lop"
    ) {
      var x = {
        op: "op" + gettok(i + 3, 1),
        lhs: tokens[i + 1],
        rhs: tokens[i + 2],
        pos
      };
      asc.push(x);
      i += 4;
    } else if (gettok(i, 0) == "expr") {
      asc.push({ op: "temp", iden: tokens[i + 1] });
      i += 2;
    } else if (gettok(i, 0) == "ctnr" && gettok(i, 1) == "cat") {
      var x = { op: "cat", containers: [gettok(i + 1, 1)], pos };
      i += 2;
      while (gettok(i, 0) == "opord" && gettok(i, 1) == "l") {
        x.containers.push(gettok(i + 1, 1));
        i += 2;
      }
      asc.push(x);
    } else if (
      gettok(i, 0) == "ctrl" &&
      gettok(i, 1) == "for" &&
      gettok(i + 2, 0) == "ctrl" &&
      gettok(i + 2, 1) == "forin"
    ) {
      var x = {
        op: "for",
        container: gettok(i + 1, 1),
        iterator: gettok(i + 3, 1),
        pos
      };
      i += 4;
      asc.push(x);
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "whiletrue") {
      asc.push({ op: "whiletrue", pos });
      i++;
    } else if (gettok(i, 0) == "ctrl" && gettok(i, 1) == "whilen0") {
      assert(
        `<${cmd}> Incorrect loop start`,
        pos,
        gettok(i + 2, 1) == "whilen1"
      );
      asc.push({ op: "whilen", value: tokens[i + 1], pos });
      i += 3;
    } else if (gettok(i, 0) == "rassgn" && gettok(i, 1) == "a") {
      var x = { op: "reassign", lhs: tokens[i + 1], pos };
      if (gettok(i + 2, 0) == "ctnr" && gettok(i + 2, 1) == "subs") {
        x.lhssubs = tokens[i + 3];
        if (gettok(i + 6, 0) == "rassgn" && gettok(i + 6, 1) == "delete") {
          x.rhs = undefined;
          x.del = true;
          i += 7;
        } else {
          x.rhs = tokens[i + 6];
          if (
            tokens[i + 7] &&
            gettok(i + 7, 0) == "ctnr" &&
            gettok(i + 7, 1) == "subs"
          ) {
            x.rhssubs = tokens[i + 8];
            i += 10;
          } else {
            i += 8;
          }
        }
      } else {
        assert(
          `<${cmd}> Missing conj`,
          pos,
          gettok(i + 2, 0) == "ctrl" && gettok(i + 2, 1) == "conj"
        );
        x.rhs = tokens[i + 4];
        if (
          tokens[i + 5] &&
          gettok(i + 5, 0) == "ctnr" &&
          gettok(i + 5, 1) == "subs"
        ) {
          x.rhssubs = tokens[i + 6];
          i += 8;
        } else {
          i += 6;
        }
      }
      asc.push(x);
    } else if (gettok(i, 0) == "discard") {
      asc.push({ op: "discard", pos });
      i++;
    } else if (gettok(i, 0) == "take") {
      asc.push({ op: "take", count: gettok(i + 1, 1), pos });
      i += 2;
    } else if (gettok(i, 0) == "import" && gettok(i, 1) == "file") {
      typeassert(i + 2, ["import"]);
      var x = { op: "import", file: gettok(i + 1, 1), iden: [], pos };
      i += 3;
      if (tokens[i] && gettok(i, 0) == "import" && gettok(i, 1) == "iden") {
        i++;
        while (!(gettok(i, 0) == "import" && gettok(i, 1) == "idenend")) {
          typeassert(i, ["iden"]);
          x.iden.push(gettok(i, 1));
          i++;
        }
        i++;
      }
      asc.push(x);
    } else if (gettok(i, 0) == "comment") {
      asc.push({ op: "comment", value: tokens[i + 1], pos });
      i += 2;
    } else {
      //console.log("Unrecognized",tokens[i])
      i++;
    }
  }
  return asc;
}

function asc2js(asc, imports = []) {
  var js = ``; //`"use strict";`;
  var prevfun = "";
  var prevfunpublic = false;
  var prevobj = "";
  var prevobjpublic = false;
  var curlvl = 0;
  var strayvar = [];
  var took = 0;

  function getval(x) {
    if (x == undefined) {
      return "";
    }
    if (x[0] == "ans") {
      var ans = strayvar[strayvar.length - 1];
      strayvar = [];
      return ans;
    }
    return x[1];
  }

  for (var i = 0; i < asc.length; i++) {
    var a = asc[i];
    if (a.op == "var") {
      for (var j = 0; j < a.count; j++) {
        if (a.values[j] == undefined) {
          a.values[j] = [];
        }
        var name = a.names[j];
        var value = a.values[j][1];
        if (name == undefined) {
          name = nextTmpVar();
          strayvar.push(name);
        }
        if (value == undefined) {
          if (a.type == "arr") {
            value = "[]";
          } else if (a.type == "num") {
            value = "0";
          } else if (a.type == "str") {
            value = `""`;
          } else if (a.type == "bol") {
            value = "false";
          } else if (a.type == "fun") {
            value = "()=>0";
            prevfun = name;
            prevfunpublic = a.public;
          } else if (a.type == "obj") {
            value = "{}";
            prevobj = name;
            prevobjpublic = a.public;
          }
        }
        js += `${a.public ? "this." : "var "}${name}=${value};`;
      }
    } else if (a.op == "print") {
      js += `console.log(`;
      for (var j = 0; j < strayvar.length; j++) {
        js += `${strayvar[j]}`;
        if (j != strayvar.length - 1) {
          js += ",";
        }
      }
      js += ");";
      strayvar = [];
    } else if (a.op == "fun") {
      js += `${prevfunpublic ? "this." : ""}${prevfun} =function(`;
      for (var j = 0; j < a.arity; j++) {
        js += a.args[j].name;
        if (j != a.arity - 1) {
          js += ",";
        }
      }
      js += ")";
    } else if (a.op == "funbody") {
      if (asc[i - 1].op != "fun") {
        js += `${prevfunpublic ? "this." : ""}${prevfun} =function()`;
      }
      js += "{";
      curlvl++;
    } else if (a.op == "funend") {
      js += "};";
      curlvl--;
    } else if (a.op == "objend") {
      js += "};";
    } else if (a.op == "objbody") {
      js += `${prevobjpublic ? "this." : ""}${prevobj}={`;
    } else if (a.op == "prop") {
      js += `${a.name}:${a.value[1]},`;
    } else if (a.op == "end") {
      js += "}";
      curlvl--;
      js += ";";
    } else if (a.op == "if") {
      js += "if (";
      var j = 0;
      while (j < a.test.length) {
        if (a.test[j][0] == "cmp") {
          js += a.test[j][1];
        } else if (a.test[j][0] == "ctnr") {
          if (a.test[j][1] == "subs") {
            if (a.test[j + 1][1] == "rest") {
              js += ".slice(1)";
            } else {
              if (a.test[j + 1][0] == "lit") {
                js += "[" + a.test[j + 1][1] + "]";
              } else {
                js += "[" + a.test[j + 1][1] + "-1]";
              }
            }
            j++;
          } else if (a.test[j][1] == "len") {
            js += ".length";
          }
        } else {
          js += getval(a.test[j]);
        }
        j++;
      }
      js += "){";
      curlvl++;
    } else if (a.op == "else") {
      js += "}else{";
    } else if (a.op == "return") {
      js += `return ${getval(a.value)}`;
    } else if (a.op.startsWith("op")) {
      var lhs = getval(a.lhs);
      var rhs = getval(a.rhs);
      var vname = nextTmpVar();
      js += `var ${vname}=${lhs}${a.op.slice(2)}${rhs};`;
      strayvar.push(vname);
    } else if (a.op == "name") {
      for (var j = 0; j < a.names.length; j++) {
        js += `var ${a.names[j]}=${
          strayvar[strayvar.length - a.names.length + j]
        };`;
      }
      strayvar = strayvar.slice(0, strayvar.length - a.names.length);
    } else if (a.op == "call") {
      if (a.pop) {
        console.log(took, strayvar);
        var jj = "";
        for (var j = 0; j < took; j++) {
          jj += `${strayvar[strayvar.length - took + j]}`;
          if (j != took - 1) {
            jj += ",";
          }
        }
        strayvar = strayvar.slice(0, strayvar.length - took);
        took = 0;
        var vname = nextTmpVar();
        js += `var ${vname}=${a.fun}(` + jj + ");";
        strayvar.push(vname);
      } else {
        var vname = nextTmpVar();
        js += `var ${vname}=${a.fun}(${a.args.map(x => getval(x)).join(",")});`;
        strayvar.push(vname);
      }
    } else if (a.op == "subscript") {
      var idx = getval(a.value);
      if (idx == "rest") {
        var vname = nextTmpVar();
        js += `var ${vname}=${a.container}.slice(1);`;
        strayvar.push(vname);
      } else {
        var vname = nextTmpVar();
        js += `var ${vname}=${a.container}[${idx}${
          a.value[0] == "lit" ? "" : "-1"
        }];`;
        strayvar.push(vname);
      }
    } else if (a.op == "cat") {
      var vname = nextTmpVar();
      js +=
        `var ${vname}=${a.containers[0]}.concat(` +
        a.containers.slice(1).join(").concat(") +
        ");";
      strayvar.push(vname);
    } else if (a.op == "push") {
      js += `${a.container}.push(${a.values.map(x => getval(x)).join(",")});`;
    } else if (a.op == "for") {
      js += `for (var ${a.iterator} of ${a.container}){`;
      curlvl++;
    } else if (a.op == "whiletrue") {
      js += "while (true){";
      curlvl++;
    } else if (a.op == "whilen") {
      var v = randVar();
      js += `for (var ${v}=0;${v}<${getval(a.value)};${v}++){`;
      curlvl++;
    } else if (a.op == "break") {
      js += "break;";
    } else if (a.op == "not") {
      var v = getval(a.value);
      var vname = nextTmpVar();
      js += `var ${vname}=!${v};`;

      strayvar.push(vname);
    } else if (a.op == "reassign") {
      if (a.del == true) {
        var lhs = getval(a.lhs);
        js += `delete ${lhs}[${a.lhssubs[1]}${
          a.lhssubs[0] == "lit" ? "" : "-1"
        }];`;
      } else {
        var rhs = getval(a.rhs);
        var lhs = getval(a.lhs);
        if (a.lhssubs) {
          lhs += `[${a.lhssubs[1]}${a.lhssubs[0] == "lit" ? "" : "-1"}]`;
        }
        if (a.rhssubs) {
          rhs += `[${a.rhssubs[1]}${a.rhssubs[0] == "lit" ? "" : "-1"}]`;
        }
        js += `${lhs}=${rhs};`;
      }
    } else if (a.op == "length") {
      var vname = nextTmpVar();
      js += `var ${vname}=${a.container}.length;`;
      strayvar.push(vname);
    } else if (a.op == "temp") {
      var vname = nextTmpVar();
      js += `var ${vname}=${a.iden[1]};`;
      strayvar.push(vname);
    } else if (a.op == "discard") {
      strayvar = [];
    } else if (a.op == "take") {
      took = a.count;
    } else if (a.op == "import") {
      var f = a.file.replace(/"/g, "");
      for (var j = 0; j < a.iden.length; j++) {
        js += `var ${a.iden[j]}=${f}.${a.iden[j]};`;
      }
      imports.push(f);
    } else if (a.op == "comment") {
      js += `/*${getval(a.value)}*/`;
    } else {
      console.log(a.op);
    }
    // js+="\n"
  }
  return js;
}

function jsWrapModule(name, src) {
  return `var ${name} = new function(){ ${src} };`;
}

function undefinedReader(x) {
  console.error(
    `Cannot import ${x}, please specify the "reader" option in compile.`
  );
}

function compile(
  lang,
  txt,
  {
    romanizeIdentifiers = "none",
    resetVarCnt,
    logCallback = x =>
      typeof x == "string"
        ? console.log(x)
        : console.dir(x, { depth: null, maxArrayLength: null }),
    errorCallback = process.exit,
    lib = STDLIB,
    reader = undefinedReader
  } = {}
) {
  if (resetVarCnt) {
    tmpVarCnt = 0;
    randVarCnt = 0;
  }
  txt = (txt || "").replace(/\r\n/g, "\n");

  var tokens = wy2tokens(txt);

  logCallback("\n\n=== [PASS 1] TOKENIZER ===");
  logCallback(tokens);

  if (romanizeIdentifiers != "none") {
    tokenRomanize(tokens, romanizeIdentifiers);
  }

  var txtlines = txt.split("\n");
  function assert(msg, pos, b) {
    var errmsg = "";
    if (!b) {
      errmsg += `[Syntax Error] ${msg}\n`;
      var l = 0;
      for (var i = 0; i < txtlines.length; i++) {
        l += txtlines[i].length + 1;
        if (l > pos) {
          errmsg += `Line ${1 + i}, Character ${1 +
            pos -
            (l - txtlines[i].length)}:${txtlines[i]}`;
          break;
        }
      }
      logCallback(errmsg);
    }
    if (errmsg.length) {
      if (errorCallback) {
        errorCallback(errmsg);
      }
      return errmsg;
    }
    return 0;
  }

  var asc = tokens2asc(tokens, assert);

  logCallback("\n\n=== [PASS 2] ABSTRACT SYNTAX CHAIN ===");
  logCallback(asc);

  logCallback("\n\n=== [PASS 3] COMPILER ===");
  var targ;
  var imports = [];
  var mwrapper;
  switch (lang) {
    case "js":
      targ = asc2js(asc, imports);
      mwrapper = jsWrapModule;
      break;
    case "py":
      try {
        asc2py = require("./asc2py.js");
      } catch (e) {}
      targ = asc2py(asc, imports);
      mwrapper = x => x;
      break;
    case "rb":
      try {
        asc2rb = require("./asc2rb.js");
      } catch (e) {}
      targ = asc2rb(asc, imports);
      mwrapper = x => x;
      break;
    default:
      logCallback("Target language not supported.");
  }
  logCallback(targ);
  imports = Array.from(new Set(imports));
  // console.log(imports);
  for (var i = 0; i < imports.length; i++) {
    var isrc;
    if (imports[i] in lib) {
      isrc = lib[imports[i]];
    } else {
      isrc = reader(imports[i]);
    }
    targ =
      mwrapper(
        imports[i],
        compile(lang, isrc, {
          romanizeIdentifiers,
          resetVarCnt: false,
          logCallback,
          errorCallback,
          lib
        })
      ) + targ;
  }

  return targ;
}

var parser = {
  compile,
  version,
  wy2tokens,
  tokens2asc,
  hanzi2num,
  num2hanzi,
  hanzi2pinyin,
  KEYWORDS,
  NUMBER_KEYWORDS,
  BOOK_COLORS,
  STDLIB
};
try {
  module.exports = parser;
} catch (e) {}
