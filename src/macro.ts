import { MarcoOptions } from "./types";
import { importReader } from "./reader";

export function extractMacros(txt, options: MarcoOptions) {
  const { lib, lang, importOptions } = options;

  function getImports() {
    var imps = [];
    var qlvl = 0;
    for (var i = 0; i < txt.length; i++) {
      if (txt[i] == "「") {
        qlvl++;
      } else if (txt[i] == "」") {
        qlvl--;
      } else if (txt[i] == "『") {
        qlvl += 2;
      } else if (txt[i] == "』") {
        qlvl -= 2;
      }
      if (qlvl != 0) {
        continue;
      }
      if (txt[i] == "吾" && txt[i + 1] == "嘗" && txt[i + 2] == "觀") {
        var imp = txt
          .slice(i + 3)
          .split("之書")[0]
          .split("中")
          .map(x => x.replace(/[「」『』]/g, ""))
          .join("/");
        imps.push(imp);
      }
    }
    return imps;
  }
  function getMacros() {
    var macs = [];
    var qlvl = 0;
    for (var i = 0; i < txt.length; i++) {
      if (txt[i] == "「") {
        qlvl++;
      } else if (txt[i] == "」") {
        qlvl--;
      } else if (txt[i] == "『") {
        qlvl += 2;
      } else if (txt[i] == "』") {
        qlvl -= 2;
      }
      if (qlvl != 0) {
        continue;
      }
      if (txt[i] == "或" && txt[i + 1] == "云") {
        const grabLit = () => {
          var lvl = 0;
          var s = "";
          while (true) {
            if (txt[j] == "「") {
              lvl++;
            } else if (txt[j] == "」") {
              lvl--;
            } else if (txt[j] == "『") {
              lvl += 2;
            } else if (txt[j] == "』") {
              lvl -= 2;
            }
            s += txt[j];
            j++;
            if (lvl == 0) {
              break;
            }
            if (j >= txt.length) {
              return s;
            }
          }
          return s;
        };
        var j = i + 2;
        var s0 = grabLit();
        while (!(txt[j] == "蓋" && txt[j + 1] == "謂")) {
          j++;
          if (j >= txt.length) {
            return macs;
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
        macs.push([s0, s1]);
        i = j;
      }
    }
    return macs;
  }
  var imports = getImports();
  var macros = getMacros();
  for (var i = 0; i < imports.length; i++) {
    var isrc, entry;
    if (lib[lang][imports[i]]) {
      isrc = lib[lang][imports[i]];
    } else if (imports[i] in lib) {
      isrc = lib[imports[i]];
    } else {
      const file = importReader(imports[i], importOptions);
      isrc = file.src;
      entry = file.entry;
    }
    macros = macros.concat(
      extractMacros(isrc, {
        ...options,
        importOptions: {
          ...importOptions,
          entryFilepath: entry
        }
      })
    );
  }
  return macros;
}

export function expandMacros(txt, macros) {
  function calclmask(ntxt) {
    var lmask = [];
    var qlvl = 0;
    for (var i = 0; i < ntxt.length; i++) {
      if (ntxt[i] == "「") {
        qlvl++;
      } else if (ntxt[i] == "」") {
        qlvl--;
      } else if (ntxt[i] == "『") {
        qlvl += 2;
      } else if (ntxt[i] == "』") {
        qlvl -= 2;
      }
      lmask.push(qlvl > 0);
    }
    return lmask;
  }
  for (var i = 0; i < macros.length; i++) {
    const doit = ntxt => {
      var lmask = calclmask(ntxt);
      var re = new RegExp(macros[i][0]);
      var idx = ntxt.search(re);
      if (idx == -1) {
        return ntxt;
      }
      if (lmask[idx]) {
        // console.log("refused to expand macro inside string")
        var nxtend = idx;
        while (lmask[nxtend] == true && nxtend < lmask.length) {
          nxtend++;
        }
        nxtend++;
        ntxt = ntxt.slice(0, nxtend) + doit(ntxt.slice(nxtend));
      } else {
        ntxt = doit(ntxt.replace(re, macros[i][1]));
      }
      return ntxt;
    };
    txt = doit(txt);
  }
  return txt;
}
