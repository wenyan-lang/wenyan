import { TokenType } from "./types";

export const NUMBER_KEYWORDS = Array.from(
  "負·又零〇一二三四五六七八九十百千萬億兆京垓秭穰溝澗正載極分釐毫絲忽微纖沙塵埃渺漠"
);

export const KEYWORDS_DEFINE: Record<
  string,
  [TokenType, string | undefined]
> = {
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

var ke = Object.entries(KEYWORDS_DEFINE);
ke.sort((a, b) => b[0].length - a[0].length);
if (!Object.fromEntries) {
  Object.fromEntries = l => {
    var o = {};
    l.map(x => (o[x[0]] = x[1]));
    return o;
  };
}

export const KEYWORDS = Object.fromEntries(ke);
