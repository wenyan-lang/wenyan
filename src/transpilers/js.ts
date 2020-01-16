import { BaseTranspiler, ModuleWrapperOptions } from "./base";
import { TranspilerOptions, ASCNodeOperator } from "../types";

export default class JSCompiler extends BaseTranspiler {
  protected moduleWrapper({
    src,
    scopeName,
    markerStart,
    markerEnd
  }: ModuleWrapperOptions) {
    return `${markerStart} var ${scopeName} = new function(){ ${src} };${markerEnd}`;
  }

  transpile(options: Partial<TranspilerOptions> = {}) {
    var imports = options.imports || [];
    var js = ``; //`"use strict";`;
    var prevfun = "";
    var prevfunpublic = false;
    var prevobj = "";
    var prevobjpublic = false;
    var curlvl = 0;
    var strayvar = [];
    var took = 0;
    var funcurlvls = [];
    var errcurlvls = [];

    function getval(x) {
      if (x === undefined) {
        return "";
      }
      if (x[0] == "ans") {
        var ans = strayvar[strayvar.length - 1];
        strayvar = [];
        return ans;
      }
      return x[1];
    }

    for (var i = 0; i < this.asc.length; i++) {
      var a = this.asc[i];
      if (a.op == "var") {
        for (var j = 0; j < a.count; j++) {
          if (a.values[j] === undefined) {
            a.values[j] = [];
          }
          var name = a.names[j];
          var value = a.values[j][1];
          if (name === undefined) {
            name = this.nextTmpVar();
            strayvar.push(name);
          }
          if (value === undefined) {
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
            } else if (a.type == "any") {
              value = "undefined";
            }
          }
          js += `${a.public ? `var ${name} = this.` : "var "}${name}=${value};`;
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
        // console.log(curlvl);
        funcurlvls.push(curlvl);
        js += `${
          prevfunpublic ? `${prevfun} = this.` : ""
        }${prevfun} =function(`;
        for (var j = 0; j < a.arity; j++) {
          js += a.args[j].name;
          if (j != a.arity - 1) {
            js += "){return function(";
            curlvl++;
          }
        }
        js += "){";
        curlvl++;
      } else if (a.op == "funbody") {
        if (this.asc[i - 1].op != "fun") {
          funcurlvls.push(curlvl);
          js += `${
            prevfunpublic ? `${prevfun} = this.` : ""
          }${prevfun} =function(){`;
          curlvl++;
        }
      } else if (a.op == "funend") {
        // console.log(funcurlvls, curlvl);
        var cl = funcurlvls.pop();
        js += "};".repeat(curlvl - cl);
        curlvl = cl;
      } else if (a.op == "objend") {
        js += "};";
        curlvl--;
      } else if (a.op == "objbody") {
        js += `${prevobjpublic ? `${prevobj} = this.` : ""}${prevobj}={`;
        curlvl++;
      } else if (a.op == "prop") {
        js += `${a.name}:${a.value[1]},`;
      } else if (a.op == "end") {
        js += "}";
        curlvl--;
        js += ";";
      } else if (a.op == "if") {
        if (a.elseif) {
          js += "}else ";
          curlvl--;
        }
        js += "if (";
        if (a.not) {
          js += "!(";
        }
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
        if (a.not) {
          js += ")";
        }
        js += "){";
        curlvl++;
      } else if (a.op == "else") {
        js += "}else{";
      } else if (a.op == "return") {
        js += `return ${getval(a.value)};`;
      } else if (a.op.startsWith("op")) {
        let _a = a as ASCNodeOperator;
        var lhs = getval(_a.lhs);
        var rhs = getval(_a.rhs);
        var vname = this.nextTmpVar();
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
          var jj = "";
          for (var j = 0; j < took; j++) {
            jj += `(${strayvar[strayvar.length - took + j]})`;
          }
          strayvar = strayvar.slice(0, strayvar.length - took);
          took = 0;
          var vname = this.nextTmpVar();
          if (!jj.length) {
            jj = "()";
          }
          js += `var ${vname}=${getval(a.fun)}` + jj + ";";
          strayvar.push(vname);
        } else {
          var vname = this.nextTmpVar();
          js += `var ${vname}=${getval(a.fun)}(${a.args
            .map(x => getval(x))
            .join(")(")});`;
          strayvar.push(vname);
        }
      } else if (a.op == "subscript") {
        var idx = getval(a.value);
        if (idx == "rest") {
          var vname = this.nextTmpVar();
          js += `var ${vname}=${getval(a.container)}.slice(1);`;
          strayvar.push(vname);
        } else {
          var vname = this.nextTmpVar();
          js += `var ${vname}=${getval(a.container)}[${idx}${
            a.value[0] == "lit" ? "" : "-1"
          }];`;
          strayvar.push(vname);
        }
      } else if (a.op == "cat") {
        var vname = this.nextTmpVar();
        js +=
          `var ${vname}=${getval(a.containers[0])}.concat(` +
          a.containers
            .slice(1)
            .map(x => x[1])
            .join(").concat(") +
          ");";
        strayvar.push(vname);
      } else if (a.op == "push") {
        js += `${getval(a.container)}.push(${a.values
          .map(x => getval(x))
          .join(",")});`;
      } else if (a.op == "for") {
        js += `for (var ${a.iterator} of ${getval(a.container)}){`;
        curlvl++;
      } else if (a.op == "whiletrue") {
        js += "while (true){";
        curlvl++;
      } else if (a.op == "whilen") {
        var v = this.randVar();
        js += `for (var ${v}=0;${v}<${getval(a.value)};${v}++){`;
        curlvl++;
      } else if (a.op == "break") {
        js += "break;";
      } else if (a.op == "continue") {
        js += "continue;";
      } else if (a.op == "not") {
        let v = getval(a.value);
        var vname = this.nextTmpVar();
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
        var vname = this.nextTmpVar();
        js += `var ${vname}=${getval(a.container)}.length;`;
        strayvar.push(vname);
      } else if (a.op == "temp") {
        var vname = this.nextTmpVar();
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
      } else if (a.op == "try") {
        js += `try{`;
        curlvl++;
      } else if (a.op == "catch") {
        var r = this.randVar();
        errcurlvls.push([curlvl, r]);
        js += `}catch(${r}){`;
        strayvar = [];
      } else if (a.op == "catcherr") {
        var ec = errcurlvls[errcurlvls.length - 1];
        if (a.error === undefined) {
          var vname = this.nextTmpVar();
          strayvar.push(vname);
          if (curlvl != ec[0]) {
            js += `}else{`;
          }
          js += `var ${vname}=${ec[1]}.name;`;
        } else {
          if (curlvl != ec[0]) {
            js += `}else `;
            curlvl--;
          }
          js += `if (${ec[1]}.name==${a.error[1]}){`;
          curlvl++;
        }
      } else if (a.op == "tryend") {
        var ec = errcurlvls.pop();
        if (curlvl != ec[0]) {
          js += `}`;
          curlvl--;
        }
        js += `}`;
        curlvl--;
        strayvar = [];
      } else if (a.op == "throw") {
        var r = this.randVar();
        js += `var ${r} = new Error(); ${r}.name=${a.error[1]}; throw ${r};`;
      } else if (a.op == "comment") {
        js += `/*${getval(a.value)}*/`;
      } else {
        console.log(a.op);
      }
      // js+="\n"
    }
    return { result: js, imports };
  }
}
