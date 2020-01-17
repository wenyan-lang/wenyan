import { MarcoOptions, MacroDefinition } from "./types";
import { bundleImports } from "./reader";
import { match } from "./utils";

export function extractMacros(src: string, options: MarcoOptions) {
  const { lib, lang, importOptions } = options;

  function getImports(): string[] {
    var imports = [];
    var qlvl = 0;
    for (var i = 0; i < src.length; i++) {
      if (src[i] == "「") {
        qlvl++;
      } else if (src[i] == "」") {
        qlvl--;
      } else if (src[i] == "『") {
        qlvl += 2;
      } else if (src[i] == "』") {
        qlvl -= 2;
      }
      if (qlvl != 0) {
        continue;
      }
      if (match(src, i, "吾嘗觀")) {
        var imp = src
          .slice(i + 3)
          .split("之書")[0]
          .split("中")
          .map(x => x.replace(/[「」『』]/g, ""))
          .join("/");
        imports.push(imp);
      }
    }
    return imports;
  }
  function getMacros() {
    var macros: MacroDefinition[] = [];
    var qlvl = 0;
    for (var i = 0; i < src.length; i++) {
      if (src[i] == "「") {
        qlvl++;
      } else if (src[i] == "」") {
        qlvl--;
      } else if (src[i] == "『") {
        qlvl += 2;
      } else if (src[i] == "』") {
        qlvl -= 2;
      }
      if (qlvl != 0) {
        continue;
      }
      if (src[i] == "或" && src[i + 1] == "云") {
        const grabLit = () => {
          var lvl = 0;
          var s = "";
          while (true) {
            if (src[j] == "「") {
              lvl++;
            } else if (src[j] == "」") {
              lvl--;
            } else if (src[j] == "『") {
              lvl += 2;
            } else if (src[j] == "』") {
              lvl -= 2;
            }
            s += src[j];
            j++;
            if (lvl == 0) {
              break;
            }
            if (j >= src.length) {
              return s;
            }
          }
          return s;
        };
        var j = i + 2;
        var s0 = grabLit();
        while (!(src[j] == "蓋" && src[j + 1] == "謂")) {
          j++;
          if (j >= src.length) {
            return macros;
          }
        }
        j += 2;
        var s1 = grabLit();

        const stripQuotes = s => {
          if (s[0] == "「") {
            s = s.slice(2);
          } else {
            s = s.slice(1);
          }
          if (s[s.length - 1] == "」") {
            s = s.slice(0, -2);
          } else {
            s = s.slice(0, -1);
          }
          return s;
        };
        s0 = stripQuotes(s0);
        s1 = stripQuotes(s1);
        var ins = s0.match(/「[甲乙丙丁戊己庚辛壬癸]」/g);
        var ous = s1.match(/「[甲乙丙丁戊己庚辛壬癸]」/g);

        if (ins !== null && ous !== null) {
          for (var k = 0; k < ous.length; k++) {
            var ii = ins.indexOf(ous[k]);
            if (ii >= 0) {
              s1 = s1.replace(new RegExp(ous[k], "g"), `\$${ii + 1}`);
            }
          }
        }
        s0 = s0.replace(/「[甲乙丙丁戊己庚辛壬癸]」/g, "(.+?)");
        macros.push([s0, s1]);
        i = j;
      }
    }
    return macros;
  }
  const imports = getImports();
  const macros = getMacros();

  bundleImports(imports, { lib, lang }, importOptions).forEach(
    ({ src, entry }) => {
      const moduleMacros = extractMacros(src, {
        ...options,
        importOptions: {
          ...importOptions,
          entryFilepath: entry
        }
      });
      macros.push(...moduleMacros);
    }
  );

  return macros;
}

function calcBracketStarts(src: string) {
  const starts: number[] = [];
  let level = 0;
  for (var i = 0; i < src.length; i++) {
    let c = src[i];
    if (c == "「") {
      level++;
    } else if (c == "」") {
      level--;
    } else if (c == "『") {
      level += 2;
    } else if (c == "』") {
      level -= 2;
    }
    if (level > 0) starts.push(i);
  }
  return starts;
}

export function expandMacros(src: string, macros: MacroDefinition[]) {
  for (const [from, to] of macros) {
    let re = new RegExp(from);
    const expand = ntxt => {
      let starts = calcBracketStarts(ntxt);
      let idx = ntxt.search(re);
      if (idx == -1) {
        return ntxt;
      }
      if (starts.includes(idx)) {
        // console.log("refused to expand macro inside string")
        let nxtend = idx + 1;
        while (starts.includes(nxtend) && nxtend < starts.length) {
          nxtend++;
        }
        nxtend++;
        ntxt = ntxt.slice(0, nxtend) + expand(ntxt.slice(nxtend));
      } else {
        ntxt = expand(ntxt.replace(re, to));
      }
      return ntxt;
    };
    src = expand(src);
  }
  return src;
}
