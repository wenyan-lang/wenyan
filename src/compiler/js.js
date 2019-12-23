const Base = require("./base");
class JSCompiler extends Base {
  compile() {
    let asc = this.asc;
    let js = ``;
    let prevfun = "";
    let prevfunpublic = false;
    let prevobj = "";
    let prevobjpublic = false;
    let curlvl = 0;
    let strayvar = [];
    let took = 0;
    let funcurlvls = [];

    function getval(x) {
      if (x == undefined) {
        return "";
      }
      if (x[0] == "ans") {
        let ans = strayvar[strayvar.length - 1];
        strayvar = [];
        return ans;
      }
      return x[1];
    }

    for (let i = 0; i < asc.length; i++) {
      let a = asc[i];
      if (a.op == "var") {
        for (let j = 0; j < a.count; j++) {
          if (a.values[j] == undefined) {
            a.values[j] = [];
          }
          let name = a.names[j];
          let value = a.values[j][1];
          if (name == undefined) {
            name = this.nextTmpVar();
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
          js += `${a.public ? `let ${name} = this.` : "let "}${name}=${value};`;
        }
      } else if (a.op == "print") {
        js += `console.log(`;
        for (let j = 0; j < strayvar.length; j++) {
          js += `${strayvar[j]}`;
          if (j != strayvar.length - 1) {
            js += ",";
          }
        }
        js += ");";
        strayvar = [];
      } else if (a.op == "fun") {
        // console.log(curlvl);
        funcurlvls.push(curlvl);
        js += `${
          prevfunpublic ? `${prevfun} = this.` : ""
        }${prevfun} =function(`;
        for (let j = 0; j < a.arity; j++) {
          js += a.args[j].name;
          if (j != a.arity - 1) {
            js += "){return function(";
            curlvl++;
          }
        }
        js += "){";
        curlvl++;
      } else if (a.op == "funbody") {
        if (asc[i - 1].op != "fun") {
          funcurlvls.push(curlvl);
          js += `${
            prevfunpublic ? `${prevfun} = this.` : ""
          }${prevfun} =function(){`;
          curlvl++;
        }
      } else if (a.op == "funend") {
        // console.log(funcurlvls, curlvl);
        let cl = funcurlvls.pop();
        js += "};".repeat(curlvl - cl);
        curlvl = cl;
      } else if (a.op == "objend") {
        js += "};";
      } else if (a.op == "objbody") {
        js += `${prevobjpublic ? `${prevobj} = this.` : ""}${prevobj}={`;
      } else if (a.op == "prop") {
        js += `${a.name}:${a.value[1]},`;
      } else if (a.op == "end") {
        js += "}";
        curlvl--;
        js += ";";
      } else if (a.op == "if") {
        js += "if (";
        let j = 0;
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
        let lhs = getval(a.lhs);
        let rhs = getval(a.rhs);
        let vname = this.nextTmpVar();
        js += `let ${vname}=${lhs}${a.op.slice(2)}${rhs};`;
        strayvar.push(vname);
      } else if (a.op == "name") {
        for (let j = 0; j < a.names.length; j++) {
          js += `let ${a.names[j]}=${
            strayvar[strayvar.length - a.names.length + j]
          };`;
        }
        strayvar = strayvar.slice(0, strayvar.length - a.names.length);
      } else if (a.op == "call") {
        if (a.pop) {
          let jj = "";
          for (let j = 0; j < took; j++) {
            jj += `(${strayvar[strayvar.length - took + j]})`;
          }
          strayvar = strayvar.slice(0, strayvar.length - took);
          took = 0;
          let vname = this.nextTmpVar();
          js += `let ${vname}=${a.fun}` + jj + ";";
          strayvar.push(vname);
        } else {
          let vname = this.nextTmpVar();
          js += `let ${vname}=${a.fun}(${a.args
            .map(x => getval(x))
            .join(")(")});`;
          strayvar.push(vname);
        }
      } else if (a.op == "subscript") {
        let idx = getval(a.value);
        if (idx == "rest") {
          let vname = this.nextTmpVar();
          js += `let ${vname}=${a.container}.slice(1);`;
          strayvar.push(vname);
        } else {
          let vname = this.nextTmpVar();
          js += `let ${vname}=${a.container}[${idx}${
            a.value[0] == "lit" ? "" : "-1"
          }];`;
          strayvar.push(vname);
        }
      } else if (a.op == "cat") {
        let vname = this.nextTmpVar();
        js +=
          `let ${vname}=${getval(a.containers[0])}.concat(` +
          a.containers
            .slice(1)
            .map(x => x[1])
            .join(").concat(") +
          ");";
        strayvar.push(vname);
      } else if (a.op == "push") {
        js += `${a.container}.push(${a.values.map(x => getval(x)).join(",")});`;
      } else if (a.op == "for") {
        js += `for (let ${a.iterator} of ${a.container}){`;
        curlvl++;
      } else if (a.op == "whiletrue") {
        js += "while (true){";
        curlvl++;
      } else if (a.op == "whilen") {
        let v = this.randVar();
        js += `for (let ${v}=0;${v}<${getval(a.value)};${v}++){`;
        curlvl++;
      } else if (a.op == "break") {
        js += "break;";
      } else if (a.op == "not") {
        let v = getval(a.value);
        let vname = this.nextTmpVar();
        js += `let ${vname}=!${v};`;

        strayvar.push(vname);
      } else if (a.op == "reassign") {
        if (a.del == true) {
          let lhs = getval(a.lhs);
          js += `delete ${lhs}[${a.lhssubs[1]}${
            a.lhssubs[0] == "lit" ? "" : "-1"
          }];`;
        } else {
          let rhs = getval(a.rhs);
          let lhs = getval(a.lhs);
          if (a.lhssubs) {
            lhs += `[${a.lhssubs[1]}${a.lhssubs[0] == "lit" ? "" : "-1"}]`;
          }
          if (a.rhssubs) {
            rhs += `[${a.rhssubs[1]}${a.rhssubs[0] == "lit" ? "" : "-1"}]`;
          }
          js += `${lhs}=${rhs};`;
        }
      } else if (a.op == "length") {
        let vname = this.nextTmpVar();
        js += `let ${vname}=${a.container}.length;`;
        strayvar.push(vname);
      } else if (a.op == "temp") {
        let vname = this.nextTmpVar();
        js += `let ${vname}=${a.iden[1]};`;
        strayvar.push(vname);
      } else if (a.op == "discard") {
        strayvar = [];
      } else if (a.op == "take") {
        took = a.count;
      } else if (a.op == "import") {
        let f = a.file.replace(/"/g, "");
        for (let j = 0; j < a.iden.length; j++) {
          js += `let ${a.iden[j]}=${f}.${a.iden[j]};`;
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
}

module.exports = JSCompiler;
