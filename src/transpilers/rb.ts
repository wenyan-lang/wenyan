import { BaseTranspiler, ModuleWrapperOptions } from "./base";
import { TranspilerOptions, ASCNodeOperator } from "../types";

export default class RubyCompiler extends BaseTranspiler {
  protected moduleWrapper({
    src,
    markerStart,
    markerEnd
  }: ModuleWrapperOptions) {
    return `#${markerStart}\n${src}\n#${markerEnd}\n`;
  }

  rename(name) {
    return name && `${name.toLowerCase()}`;
  }

  lowerAllPinYinAndMakeItGlobal(asc) {
    for (let i = 0; i < asc.length; i++) {
      const item = asc[i];
      switch (item.op) {
        case "var":
        case "name":
          item.names = item.names.map(e => this.rename(e));
          break;
        case "call":
          if (item.fun[0] == "iden") {
            item.fun[1] = this.rename(item.fun[1]);
          }
          item.args = item.args.map(arg => {
            if (arg[0] == "iden") arg[1] = this.rename(arg[1]);
            return arg;
          });
          break;
        case "fun":
          item.args = item.args.map(arg => {
            arg.name = this.rename(arg.name);
            return arg;
          });
          break;
        case "return":
          if (item.value[0] == "iden")
            item.value[1] = this.rename(item.value[1]);
          break;
        case "cat":
          item.containers = item.containers.map(e => this.rename(e));
          break;
        case "for":
          if (item.container[0] == "iden") {
            item.container[1] = this.rename(item.container[1]);
          }
          item.iterator = this.rename(item.iterator);
          break;
        case "push":
        case "length":
          if (item.container[0] == "iden") {
            item.container[1] = this.rename(item.container[1]);
          }
          break;
        case "subscript":
          if (item.container[0] == "iden") {
            item.container[1] = this.rename(item.container[1]);
          }
          if (item.value[0] == "iden") this.rename(item.value[1]);
          break;
        case "if":
          item.test = item.test.map(condition => {
            if (condition[0] == "iden")
              condition[1] = this.rename(condition[1]);
            return condition;
          });
        default:
          break;
      }
      if (item.values) {
        item.values.forEach(value => {
          if (value[0] == "iden") value[1] = this.rename(value[1]);
        });
      }
      ["rhs", "lhs", "lhssubs", "value"].forEach(key => {
        if (item[key] && item[key][0] == "iden")
          item[key][1] = this.rename(item[key][1]);
      });
    }
    return asc;
  }

  transpile(options: Partial<TranspilerOptions> = {}) {
    let imports = options.imports || [];
    let asc = this.asc;
    let lop = {
      "||": " or ",
      "&&": " and "
    };
    let rb = this.lib;
    var prevfun = "";
    var prevobj = "";
    var prevobjpublic = false;
    let curlvl = 0;
    let strayvar = [];
    let lambdaList = [];
    let methodIndex = 0;
    let took = 0;
    asc = this.lowerAllPinYinAndMakeItGlobal(asc);
    const getval = x => {
      if (!x) return "";
      if (x[0] == "ans") {
        var ans = strayvar[strayvar.length - 1];
        strayvar = [];
        return ans;
      }
      if (x[0] == "iden") return this.rename(x[1]);
      if (x[1] === undefined) return "nil";
      return x[1];
    };
    for (let i = 0; i < asc.length; i++) {
      let a = asc[i];
      if (a.op == "var") {
        for (let j = 0; j < a.count; j++) {
          if (a.values[j] === undefined) {
            a.values[j] = [];
          }
          let name = a.names[j];
          if (a.type == "fun") {
            prevfun = name;
            continue;
          }
          let value = getval(a.values[j]);
          if (name === undefined) {
            name = this.nextTmpVar();
            strayvar.push(name);
          }
          if ([undefined, "nil"].includes(value)) {
            if (a.type == "arr") {
              value = "Ctnr.new";
            } else if (a.type == "num") {
              value = "0";
            } else if (a.type == "str") {
              value = `""`;
            } else if (a.type == "bol") {
              value = "false";
            }
          }
          rb += "\t".repeat(curlvl);
          rb += `${name}=${value}\n`;
        }
      } else if (a.op == "print") {
        rb += "\t".repeat(curlvl);
        rb += `p([`;
        rb += strayvar.join(", ");
        rb += "].join)\n";
        strayvar = [];
      } else if (a.op == "fun") {
        rb += "\t".repeat(curlvl);
        let argsStr = a.args.map(arg => arg.name).join(",");
        if (methodIndex == 0) {
          rb += `def ${prevfun}(${argsStr})`;
        } else {
          lambdaList.push(prevfun);
          rb += `${prevfun} = proc {|${argsStr}|`;
        }
        methodIndex++;
      } else if (a.op == "funbody") {
        rb += "\t".repeat(curlvl);
        if (asc[i - 1].op != "fun") {
          if (methodIndex == 0) {
            rb += `def ${prevfun}()`;
          } else {
            lambdaList.push(prevfun);
            rb += `${prevfun} = proc {|_|`;
          }
          methodIndex++;
        }
        rb += "\n";
        curlvl++;
      } else if (a.op == "funend") {
        curlvl--;
        methodIndex--;
        if (methodIndex == 0) {
          rb += `${"\t".repeat(curlvl)}end\n`;
        } else {
          rb += `${"\t".repeat(curlvl)}}`;
        }
        rb += "\n";
      } else if (a.op == "end") {
        curlvl--;
        rb += `${"\t".repeat(curlvl)}end \n`;
      } else if (a.op == "if") {
        rb += "\t".repeat(curlvl);
        rb += "if ";
        let j = 0;
        while (j < a.test.length) {
          if (a.test[j][0] == "cmp") {
            rb += a.test[j][1];
          } else if (a.test[j][0] == "ctnr") {
            if (a.test[j][1] == "subs") {
              if (a.test[j + 1][1] == "rest") {
                rb += ".slice(1)";
              } else {
                if (a.test[j + 1][0] == "lit") {
                  rb += "[" + a.test[j + 1][1] + "]";
                } else {
                  rb += "[" + a.test[j + 1][1] + "-1]";
                }
              }
              j++;
            } else if (a.test[j][1] == "len") {
              rb += ".length";
            }
          } else {
            rb += a.test[j][1];
          }
          j++;
        }
        rb += "\n";
        curlvl++;
      } else if (a.op == "else") {
        rb += "\t".repeat(curlvl - 1);
        rb += "else\n";
      } else if (a.op == "return") {
        rb += "\t".repeat(curlvl);
        rb += `return ${getval(a.value)}\n`;
      } else if (a.op.startsWith("op")) {
        rb += "\t".repeat(curlvl);
        let _a = a as ASCNodeOperator;
        var lhs = getval(_a.lhs);
        var rhs = getval(_a.rhs);
        var vname = this.nextTmpVar();
        rb += `${vname}=${lhs}${a.op.slice(2)}${rhs};`;
        strayvar.push(vname);
      } else if (a.op == "name") {
        for (var j = 0; j < a.names.length; j++) {
          rb += "\n";
          rb += "\t".repeat(curlvl);
          rb += `${a.names[j]}=${
            strayvar[strayvar.length - a.names.length + j]
          };`;
        }
        strayvar = strayvar.slice(0, strayvar.length - a.names.length);
      } else if (a.op == "call") {
        rb += "\t".repeat(curlvl);
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
          rb += `${vname}=${getval(a.fun)}` + jj + ";";
          strayvar.push(vname);
        } else {
          var vname = this.nextTmpVar();
          rb += `${vname}=${getval(a.fun)}(${a.args
            .map(x => getval(x))
            .join(")(")});`;
          strayvar.push(vname);
        }
      } else if (a.op == "subscript") {
        var idx = getval(a.value);
        var vname = this.nextTmpVar();
        if (idx == "rest") {
          rb += `${vname}=${getval(a.container)}.slice(1);`;
        } else {
          rb += `${vname}=${getval(a.container)}[${idx}${
            a.value[0] == "lit" ? "" : "-1"
          }];`;
        }
        strayvar.push(vname);
      } else if (a.op == "cat") {
        var vname = this.nextTmpVar();
        rb +=
          `${vname}=${getval(a.containers[0])}.concat(` +
          a.containers
            .slice(1)
            .map(x => x[1])
            .join(").concat(") +
          ");";
        strayvar.push(vname);
      } else if (a.op == "push") {
        rb += "\t".repeat(curlvl);
        rb += `${getval(a.container)}.push(${a.values
          .map(x => getval(x))
          .join(",")})\n`;
      } else if (a.op == "for") {
        rb += "\t".repeat(curlvl);
        rb += `${getval(a.container)}.each do |${a.iterator.toLowerCase()}|\n`;
        curlvl++;
      } else if (a.op == "whiletrue") {
        rb += "\t".repeat(curlvl);
        rb += "while true do\n";
        curlvl++;
      } else if (a.op == "whilen") {
        rb += "\t".repeat(curlvl);
        let v = this.randVar();
        rb += `${getval(a.value)}.times do |${v}|\n`;
        curlvl++;
      } else if (a.op == "break") {
        rb += "\t".repeat(curlvl);
        rb += "break\n";
      } else if (a.op == "not") {
        rb += "\t".repeat(curlvl);
        var v = getval(a.value);
        var vname = this.nextTmpVar();
        rb += `${vname}=!${v};`;
        strayvar.push(vname);
      } else if (a.op == "reassign") {
        rb += "\t".repeat(curlvl);
        let rhs = getval(a.rhs);
        let lhs = getval(a.lhs);
        if (a.lhssubs) {
          lhs += `[${a.lhssubs[1]}${a.lhssubs[0] == "lit" ? "" : "-1"}]`;
        }
        rb += `${lhs}=${rhs}\n`;
      } else if (a.op == "temp") {
        var vname = this.nextTmpVar();
        rb += `${vname}=${a.iden[1]};`;
        strayvar.push(vname);
      } else if (a.op == "discard") {
        strayvar = [];
      } else if (a.op == "take") {
        took = a.count;
      } else if (a.op == "import") {
        var f = a.file.replace(/"/g, "");
        for (var j = 0; j < a.iden.length; j++) {
          rb += `${a.iden[j]}=${f}.${a.iden[j]};`;
        }
        imports.push(f);
      } else if (a.op == "length") {
        var vname = this.nextTmpVar();
        rb += `${vname}=${getval(a.container)}.length;`;
        strayvar.push(vname);
      } else if (a.op == "comment") {
        rb += "\t".repeat(curlvl);
        rb += `# ${getval(a.value)}\n`;
        rb += "\t".repeat(curlvl);
      } else {
      }
    }
    return { result: rb, imports };
  }

  lib = `# encoding: UTF-8
require 'forwardable'
class Ctnr
  extend Forwardable
  attr_accessor :dict, :length, :it
  def initialize()
    @dict = {}
    @length = 0
    @it = -1
  end
  def push(*args)
    args.each do |arg|
      @dict[@length.to_s] = arg
      @length += 1
    end
  end
  def [](i)
    @dict[i.to_s]
  end
  def []=(i,x)
    @dict[i.to_s] = x
  end
  def slice(i)
    result = Ctnr.new;
    i.times {|index| result.push(self[index])}
    return result
  end
  def concat(other)
    other.length.times {|i| push(other[i]) }
    self
  end
  def values
    @dict.values
  end
  def to_s
    "[#{@dict.values.join(", ")}]"
  end
  def_delegators :values, :each
end
module Math
  def self.random(*args)
    rand(*args)
  end
  def self.floor(number)
    number.floor
  end
end
#####
`;
}
