import { BaseTranspiler, ModuleWrapperOptions } from "./base";
import { TranspilerOptions, ASCNodeOperator } from "../types";

export default class PythonTranspiler extends BaseTranspiler {
  protected moduleWrapper({
    src,
    markerStart,
    markerEnd
  }: ModuleWrapperOptions) {
    return `#${markerStart}\n${src}\n#${markerEnd}\n`;
  }

  transpile(options: Partial<TranspilerOptions> = {}) {
    var imports = options.imports || [];
    var lop = {
      "||": " or ",
      "&&": " and "
    };

    var py = this.lib;
    var prevfun = "";
    var prevobj = "";
    var prevobjpublic = false;
    var curlvl = 0;
    var strayvar = [];
    var funcurlvls = [];
    var funcurnames = [];
    var took = 0;
    var globals = [];
    var locals = [];
    var funargs = [];

    const getval = x => {
      if (x === undefined) {
        return "";
      }
      if (x[0] == "ans") {
        var ans = strayvar[strayvar.length - 1];
        strayvar = [];
        return ans;
      }
      if (x[1] === undefined) {
        return undefined;
      }
      if (x[1].toString() == "true") {
        return "True";
      }
      if (x[1].toString() == "false") {
        return "False";
      }
      return x[1];
    };

    for (var i = 0; i < this.asc.length; i++) {
      var a = this.asc[i];
      if (a.op == "var") {
        for (var j = 0; j < a.count; j++) {
          if (a.values[j] === undefined) {
            a.values[j] = [];
          }
          var name = a.names[j];
          var value = getval(a.values[j]);
          if (name === undefined) {
            name = this.nextTmpVar();
            strayvar.push(name);
          }
          if (value === undefined) {
            if (a.type == "arr") {
              value = "Ctnr()";
            } else if (a.type == "num") {
              value = "0";
            } else if (a.type == "str") {
              value = `""`;
            } else if (a.type == "bol") {
              value = "False";
            } else if (a.type == "fun") {
              value = "lambda _:0";
              prevfun = name;
            } else if (a.type == "obj") {
              value = "{}";
              prevobj = name;
              prevobjpublic = a.public;
            }
          }
          py += "\t".repeat(curlvl);
          py += `${name}=${value}\n`;
          if (name[0] != "_") {
            if (curlvl == 0) {
              globals.push(name);
            } else {
              if (!locals.length) {
                locals.push([]);
              }
              locals[locals.length - 1].push(name);
            }
          }
        }
      } else if (a.op == "print") {
        py += "\t".repeat(curlvl);
        py += `print(`;
        for (var j = 0; j < strayvar.length; j++) {
          py += `${strayvar[j]}`;
          if (j != strayvar.length - 1) {
            py += ",";
          }
        }
        py += ");\n";
        strayvar = [];
      } else if (a.op == "fun") {
        funcurlvls.push(curlvl);
        py += "\t".repeat(curlvl);
        py += `def ${prevfun} (`;
        for (var j = 0; j < a.arity; j++) {
          curlvl++;
          py += `${a.args[j].name}):\n`;
          funargs.push(a.args[j].name);

          if (j != a.arity - 1) {
            py += "\t".repeat(curlvl);
            var r = this.randVar();
            py += `def ${r}(`;
            funcurnames.push(r);
          }
        }
        for (var j = 0; j < a.arity - 1; j++) {
          py += "\t".repeat(curlvl);
          py += "nonlocal " + a.args[j].name + ";\n";
        }
      } else if (a.op == "funbody") {
        if (this.asc[i - 1].op != "fun") {
          funcurlvls.push(curlvl);
          py += "\t".repeat(curlvl);
          py += `def ` + prevfun + "():\n";
          curlvl++;
        }
        // py += "):\n";
        for (var j = 0; j < globals.length; j++) {
          if (funargs.includes(globals[j])) {
            continue;
          }
          py += "\t".repeat(curlvl);
          py += "global " + globals[j] + ";\n";
        }
        if (locals.length) {
          for (var j = 0; j < locals[locals.length - 1].length; j++) {
            py += "\t".repeat(curlvl);
            py += "nonlocal " + locals[locals.length - 1][j] + ";\n";
          }
        }
        locals.push([]);
        funargs = [];
      } else if (a.op == "funend") {
        var cl = funcurlvls.pop();
        var n = curlvl - cl - 1;
        for (var j = 0; j < n; j++) {
          curlvl--;
          py += "\t".repeat(curlvl);
          py += `return ${funcurnames.pop()};\n`;
        }
        locals.pop();
        py += "\n";
        curlvl--;
      } else if (a.op == "objend") {
        py += "};\n";
      } else if (a.op == "objbody") {
        py += "\t".repeat(curlvl);
        py += `${prevobjpublic ? `${prevobj} = this.` : ""}${prevobj}={`;
      } else if (a.op == "prop") {
        py += `${a.name}:${a.value[1]},`;
      } else if (a.op == "end") {
        py += "\n";
        curlvl--;
      } else if (a.op == "if") {
        py += "\n";
        py += "\t".repeat(curlvl);
        py += "if ";
        var j = 0;
        while (j < a.test.length) {
          if (a.test[j][0] == "cmp") {
            py += a.test[j][1];
          } else if (a.test[j][0] == "ctnr") {
            if (a.test[j][1] == "subs") {
              if (a.test[j + 1][1] == "rest") {
                py += ".slice(1)";
              } else {
                if (a.test[j + 1][0] == "lit") {
                  py += "[" + a.test[j + 1][1] + "]";
                } else {
                  py += "[" + a.test[j + 1][1] + "-1]";
                }
              }
              j++;
            } else if (a.test[j][1] == "len") {
              py += ".length";
            }
          } else {
            py += getval(a.test[j]);
          }
          j++;
        }
        py += ":\n";
        curlvl++;
      } else if (a.op == "else") {
        py += "\n";
        py += "\t".repeat(curlvl - 1);
        py += "else:\n";
      } else if (a.op == "return") {
        py += "\t".repeat(curlvl);
        py += `return ${getval(a.value)}\n`;
      } else if (a.op.startsWith("op")) {
        let _a = a as ASCNodeOperator;
        py += "\t".repeat(curlvl);
        var lhs = getval(_a.lhs);
        var rhs = getval(_a.rhs);
        var vname = this.nextTmpVar();
        py += `${vname}=${lhs}${
          lop[a.op.slice(2)] ? lop[a.op.slice(2)] : a.op.slice(2)
        }${rhs};\n`;
        strayvar.push(vname);
      } else if (a.op == "name") {
        for (var j = 0; j < a.names.length; j++) {
          py += "\n";
          py += "\t".repeat(curlvl);
          py += `${a.names[j]}=${
            strayvar[strayvar.length - a.names.length + j]
          };\n`;
        }
        strayvar = strayvar.slice(0, strayvar.length - a.names.length);
      } else if (a.op == "call") {
        py += "\t".repeat(curlvl);
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
          py += `${vname}=${getval(a.fun)}` + jj + ";\n";
          strayvar.push(vname);
        } else {
          var vname = this.nextTmpVar();
          py += `${vname}=${getval(a.fun)}(${a.args
            .map(x => getval(x))
            .join(")(")});\n`;
          strayvar.push(vname);
        }
      } else if (a.op == "subscript") {
        var idx = getval(a.value);
        var vname = this.nextTmpVar();
        py += "\t".repeat(curlvl);
        if (idx == "rest") {
          py += `${vname}=${getval(a.container)}.slice(1);\n`;
        } else {
          py += `${vname}=${getval(a.container)}[${idx}${
            a.value[0] == "lit" ? "" : "-1"
          }];\n`;
        }
        strayvar.push(vname);
      } else if (a.op == "cat") {
        var vname = this.nextTmpVar();
        py += "\t".repeat(curlvl);
        py +=
          `${vname}=${getval(a.containers[0])}.concat(` +
          a.containers
            .slice(1)
            .map(x => x[1])
            .join(").concat(") +
          ");\n";
        strayvar.push(vname);
      } else if (a.op == "push") {
        py += "\t".repeat(curlvl);
        py += `${getval(a.container)}.push(${a.values
          .map(x => getval(x))
          .join(",")})\n`;
      } else if (a.op == "for") {
        py += "\t".repeat(curlvl);
        py += `for ${a.iterator} in ${getval(a.container)}:\n`;
        curlvl++;
      } else if (a.op == "whiletrue") {
        py += "\t".repeat(curlvl);
        py += "while (True):\n";
        curlvl++;
      } else if (a.op == "whilen") {
        py += "\t".repeat(curlvl);
        let v = this.randVar();
        py += `for ${v} in range(${getval(a.value)}):\n`;
        curlvl++;
      } else if (a.op == "break") {
        py += "\t".repeat(curlvl);
        py += "break\n";
      } else if (a.op == "not") {
        py += "\t".repeat(curlvl);
        var v = getval(a.value);
        var vname = this.nextTmpVar();
        py += `${vname}=not ${v};`;
        strayvar.push(vname);
      } else if (a.op == "reassign") {
        py += "\n";

        py += "\t".repeat(curlvl);
        if (a.del == true) {
          var lhs = getval(a.lhs);
          py += `del ${lhs}[${a.lhssubs[1]}${
            a.lhssubs[0] == "lit" ? "" : "-1"
          }];\n`;
        } else {
          var rhs = getval(a.rhs);
          var lhs = getval(a.lhs);
          if (a.lhssubs) {
            lhs += `[${a.lhssubs[1]}${a.lhssubs[0] == "lit" ? "" : "-1"}]`;
          }
          if (a.rhssubs) {
            rhs += `[${a.rhssubs[1]}${a.rhssubs[0] == "lit" ? "" : "-1"}]`;
          }
          py += `${lhs}=${rhs};\n`;
        }
      } else if (a.op == "temp") {
        py += "\t".repeat(curlvl);
        var vname = this.nextTmpVar();
        py += `${vname}=${a.iden[1]};\n`;
        strayvar.push(vname);
      } else if (a.op == "discard") {
        strayvar = [];
      } else if (a.op == "take") {
        took = a.count;
      } else if (a.op == "import") {
        var f = a.file.replace(/"/g, "");
        for (var j = 0; j < a.iden.length; j++) {
          py += `${a.iden[j]}=${a.iden[j]};`;
        }
        imports.push(f);
      } else if (a.op == "length") {
        py += "\t".repeat(curlvl);
        var vname = this.nextTmpVar();
        var val = getval(a.container);
        py += `${vname}=${val}.length if type(${val}) != str else len(${val});`;
        strayvar.push(vname);
      } else if (a.op == "comment") {
        py += "\t".repeat(curlvl);
        py += `""" ${getval(a.value)} """\n`;
      } else {
        console.log(a.op);
      }
      // py+="\n"
    }
    return { result: py, imports };
  }

  lib = `# -*- coding: utf-8 -*-
  class Ctnr:
    def __init__(self):self.dict = dict();self.length = 0;self.it = -1;
    def push(self,*args):
      for arg in args:
        self.dict[str(self.length)]=arg; self.length+=1
    def __getitem__(self,i):
      try: return self.dict[str(i)]
      except: return None
    def __setitem__(self,i,x):
      self.dict[str(i)]=x
      inti = None
      try:
        inti = int(i)
        if (abs(inti - float(i))>0.0001): inti=None
      except: pass
      if (inti != None):
        self.length=inti+1
        for j in range(0,self.length):
          try:  self.dict[str(j)]
          except: self.dict[str(j)]=None
    def slice(self,i):
      ret = Ctnr();
      for i in range(i,self.length): ret.push(self[i])
      return ret
    def concat(self,other):
      ret = Ctnr();
      for i in range(0,self.length): ret.push(self[i])
      for i in range(0,other.length): ret.push(other[i])
      return ret
    def __str__(self):
      if (len(self.dict.keys())==self.length):
        ret = "["
        for k in range(0,self.length):
          v = self[k]
          if (isinstance(v,Ctnr)): ret += v.__str__()
          else: ret += str(v)
          ret+=","
        ret += "]"
        return ret;
      else:
        ret = "{"
        for k in self.dict.keys():
          ret += str(k)+":"
          v = self.dict[k]
          if (isinstance(v,Ctnr)): ret += v.__str__()
          else: ret += str(v)
          ret+=","
        ret += "}"
        return ret;
    def __repr__(self):
      return self.__str__()
    def __iter__(self):
      self.it = -1;
      return self
    def __next__(self):
      self.it += 1
      if (self.it >= self.length): raise StopIteration()
      return self[self.it]
  globals()['Ctnr']=Ctnr;
  class JSON:
    @staticmethod
    def stringify(x):
      return x;
  #####`;
}
