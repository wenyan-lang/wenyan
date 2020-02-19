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
    const imports = options.imports || [];
    let js = ""; //'"use strict";'; (strict mode currently broken)
    let prevfun = "";
    let prevfunpublic = false;
    let prevobj = "";
    let prevobjpublic = false;
    let previsfun = false;
    let curlvl = 0;
    let strayvar = [];
    let took = 0;
    const errcurlvls = [];

    function getval(x) {
      if (x === undefined) {
        return "";
      }
      if (x[0] == "ans") {
        const ans = strayvar[strayvar.length - 1];
        strayvar = [];
        return ans;
      }
      return x[1];
    }

    for (const a of this.asc) {
      if (a.op == "var") {
        for (let j = 0; j < a.count; j++) {
          if (a.values[j] === undefined) {
            a.values[j] = [];
          }
          let name = a.names[j];
          let value = a.values[j][1];
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
              value = "_=>{}";
              prevfun = name;
              prevfunpublic = a.public;
            } else if (a.type == "obj") {
              value = "{}";
              prevobj = name;
              prevobjpublic = a.public;
            } else if (a.type == "any") {
              value = "void 0";
            }
          }
          js += `var ${name}=${a.public ? `this.${name}=` : ""}${value};`;
        }
      } else if (a.op == "print") {
        js += `console.log(${strayvar.join(",")});`;
        strayvar = [];
      } else if (a.op == "fun") {
        js += `${prevfun}=${prevfunpublic ? `this.${prevfun}=` : ""}${
          a.args.length == 0
            ? "()=>"
            : a.args.map(arg => `${arg.name}=>`).join("")
        }{`;
        curlvl++;
      } else if (a.op == "funbody") {
        if (!previsfun) {
          js += `${prevfun}=${prevfunpublic ? `this.${prevfun}=` : ""}()=>{`;
          curlvl++;
        }
      } else if (a.op == "funend") {
        js += "};";
        curlvl--;
      } else if (a.op == "objend") {
        js += "};";
        curlvl--;
      } else if (a.op == "objbody") {
        js += `${prevobjpublic ? `${prevobj} = this.` : ""}${prevobj}={`;
        curlvl++;
      } else if (a.op == "prop") {
        js += `${a.name}:${a.value[1]},`;
      } else if (a.op == "end") {
        js += "};";
        curlvl--;
      } else if (a.op == "if") {
        if (a.elseif) {
          js += "}else ";
          curlvl--;
        }
        js += "if (";
        if (a.not) {
          js += "!(";
        }
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
        const _a = a as ASCNodeOperator;
        const lhs = getval(_a.lhs);
        const rhs = getval(_a.rhs);
        const vname = this.nextTmpVar();
        js += `const ${vname}=${lhs}${a.op.slice(2)}${rhs};`;
        strayvar.push(vname);
      } else if (a.op == "name") {
        for (let j = 0; j < a.names.length; j++) {
          js += `var ${a.names[j]}=${
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
          const vname = this.nextTmpVar();
          if (!jj.length) {
            jj = "()";
          }
          js += `const ${vname}=${getval(a.fun)}` + jj + ";";
          strayvar.push(vname);
        } else {
          const vname = this.nextTmpVar();
          js += `const ${vname}=${getval(a.fun)}(${a.args
            .map(x => getval(x))
            .join(")(")});`;
          strayvar.push(vname);
        }
      } else if (a.op == "subscript") {
        const idx = getval(a.value);
        if (idx == "rest") {
          const vname = this.nextTmpVar();
          js += `const ${vname}=${getval(a.container)}.slice(1);`;
          strayvar.push(vname);
        } else {
          const vname = this.nextTmpVar();
          js += `const ${vname}=${getval(a.container)}[${idx}${
            a.value[0] == "lit" ? "" : "-1"
          }];`;
          strayvar.push(vname);
        }
      } else if (a.op == "cat") {
        const vname = this.nextTmpVar();
        js += `const ${vname}=${getval(a.containers[0])}.concat(${a.containers
          .slice(1)
          .map(x => x[1])
          .join(").concat(")});`;
        strayvar.push(vname);
      } else if (a.op == "push") {
        js += `${getval(a.container)}.push(${a.values
          .map(x => getval(x))
          .join(",")});`;
      } else if (a.op == "for") {
        js += `for(let ${a.iterator} of ${getval(a.container)}){`;
        curlvl++;
      } else if (a.op == "whiletrue") {
        js += "while(true){";
        curlvl++;
      } else if (a.op == "whilen") {
        const v = this.randVar();
        js += `for(let ${v}=0;${v}<${getval(a.value)};${v}++){`;
        curlvl++;
      } else if (a.op == "break") {
        js += "break;";
      } else if (a.op == "continue") {
        js += "continue;";
      } else if (a.op == "not") {
        const v = getval(a.value);
        const vname = this.nextTmpVar();
        js += `const ${vname}=!${v};`;
        strayvar.push(vname);
      } else if (a.op == "reassign") {
        if (a.del == true) {
          const lhs = getval(a.lhs);
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
        const vname = this.nextTmpVar();
        js += `const ${vname}=${getval(a.container)}.length;`;
        strayvar.push(vname);
      } else if (a.op == "temp") {
        const vname = this.nextTmpVar();
        js += `const ${vname}=${a.iden[1]};`;
        strayvar.push(vname);
      } else if (a.op == "discard") {
        strayvar = [];
      } else if (a.op == "take") {
        took = a.count;
      } else if (a.op == "import") {
        const f = a.file.replace(/"/g, "");
        for (const id of a.iden) {
          js += `var ${id}=${f}.${id};`;
        }
        imports.push(f);
      } else if (a.op == "try") {
        js += `try{`;
        curlvl++;
      } else if (a.op == "catch") {
        const r = this.randVar();
        errcurlvls.push([curlvl, r]);
        js += `}catch(${r}){`;
        js += `${r}['名']=({'SyntaxError':'文法','RangeError':'逾界','TypeError':'異類','ReferenceError':'虛指'}[${r}.name])||${r}.name;`;
        js += `${r}['文']=${r}.message; ${r}['蹤']=${r}.stack;`;
        strayvar = [];
      } else if (a.op == "catcherr") {
        const ec = errcurlvls[errcurlvls.length - 1];
        if (a.error === undefined) {
          if (curlvl != ec[0]) {
            js += `}else{`;
          }
        } else {
          if (curlvl != ec[0]) {
            js += `}else `;
            curlvl--;
          }
          js += `if (${ec[1]}.name===${a.error[1]}||${ec[1]}['名']===${a.error[1]}){`;
          curlvl++;
        }
        if (a.name != undefined) {
          js += `const ${a.name}=${ec[1]};`;
        }
      } else if (a.op == "tryend") {
        const ec = errcurlvls.pop();
        if (curlvl != ec[0]) {
          js += `}`;
          curlvl--;
        }
        js += `}`;
        curlvl--;
        strayvar = [];
      } else if (a.op == "throw") {
        const r = this.randVar();
        js += `{const ${r} = new Error(); ${r}.name=${
          a.error[1]
        }; ${r}.message=${a.message ? getval(a.message) : '""'}; throw ${r};}`;
      } else if (a.op == "comment") {
        js += `/*${getval(a.value)}*/`;
      } else {
        console.log(a.op);
      }
      previsfun = a.op == "fun";
    }
    return { result: js, imports };
  }
}
