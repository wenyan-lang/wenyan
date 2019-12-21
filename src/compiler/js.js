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
function asc2js(asc, imports = []) {
  var js = ``; //`"use strict";`;
  var prevfun = "";
  var prevfunpublic = false;
  var prevobj = "";
  var prevobjpublic = false;
  var curlvl = 0;
  var strayvar = 0;

  function getval(x) {
    if (x == undefined) {
      return "";
    }
    if (x[0] == "ans") {
      strayvar = 0;
      return currTmpVar();
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
          strayvar++;
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
      for (var j = 0; j < strayvar; j++) {
        js += `${prevTmpVar(strayvar - j)}`;
        if (j != strayvar - 1) {
          js += ",";
        }
      }
      js += ");";
      strayvar = 0;
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
          js += a.test[j][1];
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

      js += `var ${nextTmpVar()}=${lhs}${a.op.slice(2)}${rhs};`;
      strayvar++;
    } else if (a.op == "name") {
      for (var j = 0; j < a.names.length; j++) {
        js += `var ${a.names[j]}=${prevTmpVar(strayvar - j)};`;
      }
      strayvar -= a.names.length;
    } else if (a.op == "call") {
      js += `var ${nextTmpVar()}=${a.fun}(${a.args
        .map(x => getval(x))
        .join(",")});`;
      strayvar++;
    } else if (a.op == "subscript") {
      var idx = getval(a.value);
      if (idx == "rest") {
        js += `var ${nextTmpVar()}=${a.container}.slice(1);`;
        strayvar++;
      } else {
        js += `var ${nextTmpVar()}=${a.container}[${idx}${
          a.value[0] == "lit" ? "" : "-1"
        }];`;
        strayvar++;
      }
    } else if (a.op == "cat") {
      js +=
        `var ${nextTmpVar()}=${a.containers[0]}.concat(` +
        a.containers.slice(1).join(").concat(") +
        ");";
      strayvar++;
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
      js += `var ${nextTmpVar()}=!${v};`;

      strayvar++;
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
        js += `${lhs}=${rhs};`;
      }
    } else if (a.op == "length") {
      js += `var ${nextTmpVar()}=${a.container}.length;`;
      strayvar++;
    } else if (a.op == "discard") {
      strayvar = 0;
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
