export type TargetLanguages = "js" | "py" | "rb";
export type RomanizeSystem = "none" | "pinyin" | "unicode" | "baxter";
export type LogCallback = (...args: any[]) => void;
export type CacheObject = Record<string, string>;
export type StandardLibraryObject = Record<string, string>;

export interface CompileOnlyOptions {
  lang: TargetLanguages;
  romanizeIdentifiers: RomanizeSystem;
  resetVarCnt: boolean;
  logCallback: LogCallback;
  errorCallback: LogCallback;
  lib: StandardLibraryObject;
  strict: Boolean;
}

export interface ImportOptions {
  entryFilepath?: string;
  importPaths: string | string[];
  importCache: CacheObject;
  importContext: Record<string, string | { entry: string; src?: string }>;
  allowHttp: boolean;
  trustedHosts: string[];
  requestTimeout: number;
}

export type CompileOptions = CompileOnlyOptions & ImportOptions;

export interface MarcoOptions {
  lib: CompileOnlyOptions["lib"];
  lang: TargetLanguages;
  importOptions: ImportOptions;
}

export interface ExecuteOptions {
  lang: TargetLanguages;
  outputHanzi: boolean;
  scoped: boolean;
  output: LogCallback;
}

export type ASCType =
  | "str"
  | "name"
  | "whiletrue"
  | "break"
  | "end"
  | "if"
  | "comment"
  | "decl";

export type ASCOperator =
  | "fun"
  | "num"
  | "str"
  | "funbody"
  | "var"
  | "op+"
  | "op-"
  | "op/"
  | "op*";

export type TokenType =
  | "name"
  | "iden"
  | "cmp"
  | "ctrl"
  | "ans"
  | "rassgn"
  | "op"
  | "lit"
  | "opord"
  | "num"
  | "assgn"
  | "decl"
  | "data"
  | "decl";

export type Token = [TokenType, string | undefined, number];

export type ASCNode = any;
/*
export interface ASCNode {
  op: ASCOperator,
  count: number,
  type: ASCType
  values: string[]
  names: string[]
  public: boolean
  pos: number
  lhs?: Token
  rhs?: Token
}
*/
