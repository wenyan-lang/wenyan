export type TargetLanguages = "js" | "py" | "rb";
export type RomanizeSystem = "none" | "pinyin" | "unicode" | "baxter";
export type LogCallback = (...args: any[]) => void;
export type CacheObject = Record<string, string>;
export type StandardLibraryObject = Record<string, string> &
  Record<TargetLanguages, Record<string, string>>;

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

export interface TranspilerOptions {
  imports: string[];
}

export interface ExecuteOptions {
  lang: TargetLanguages;
  outputHanzi: boolean;
  scoped: boolean;
  output: LogCallback;
}

export type MacroDefinition = [string, string];

export interface ImportedModule {
  moduleName: string;
  src: string;
  entry?: string;
}

export type TokenType =
  | "ans"
  | "assgn"
  | "bool"
  | "call"
  | "cmp"
  | "comment"
  | "ctnr"
  | "ctrl"
  | "data"
  | "decl"
  | "discard"
  | "expr"
  | "iden"
  | "import"
  | "lit"
  | "lop"
  | "macro"
  | "mod"
  | "name"
  | "not"
  | "num"
  | "op"
  | "opord"
  | "print"
  | "rassgn"
  | "take"
  | "try"
  | "type"
  | "throw";

export type Token = [TokenType, string | undefined, number];

export interface ASCNodeCommon {
  pos: number;
}

export interface ASCNodeOperator {
  op: "op+" | "op-" | "op/" | "op%";
  lhs?: Token;
  rhs?: Token;
}

export interface ASCNodeReturn {
  op: "return";
  value?: Token | ["ans"];
}

export interface ASCNodeIf {
  op: "if";
  test: (Token | ["ans"])[];
  elseif?: boolean;
  not?: boolean;
}

export interface ASCNodeFunction {
  op: "fun";
  arity: number;
  args: { name: string; type: string }[];
  elseif?: boolean;
  not?: boolean;
}

export interface ASCNodeWithValue {
  op: "not" | "whilen" | "comment";
  value: Token;
}

export interface ASCNodeName {
  op: "name";
  names: string[];
}

export interface ASCNodeReassign {
  op: "reassign";
  lhs: Token;
  rhs?: Token;
  lhssubs?: Token;
  rhssubs?: Token;
  del?: boolean;
}

export interface ASCNodeCat {
  op: "cat";
  containers: Token[];
}

export interface ASCNodeFor {
  op: "for";
  container: Token;
  iterator: string;
}

export interface ASCNodeCall {
  op: "call";
  fun: Token;
  args?: Token[];
  pop?: boolean;
}

export interface ASCNodeLength {
  op: "length";
  container: Token;
}

export interface ASCNodeTake {
  op: "take";
  count: number;
}

export interface ASCNodeTemp {
  op: "temp";
  iden: Token;
}

export interface ASCNodeImport {
  op: "import";
  file: string;
  iden: string[];
}

export interface ASCNodePush {
  op: "push";
  container: Token;
  values: Token[];
}

export interface ASCNodeWithError {
  op: "catcherr" | "throw";
  error?: Token;
}

export interface ASCNodeSubscript {
  op: "subscript";
  container: Token;
  value: Token;
}

export interface ASCNodeVariable {
  op: "var";
  count: number;
  type: string;
  values: (Token | [])[];
  public: boolean;
  names?: string[];
}

export interface ASCNodePropertry {
  op: "prop";
  type: string;
  name: string;
  value: Token;
}

export interface ASCNodeSimple {
  op:
    | "break"
    | "end"
    | "print"
    | "else"
    | "continue"
    | "objbody"
    | "funbody"
    | "whiletrue"
    | "try"
    | "tryend"
    | "catch"
    | "discard"
    | "funend"
    | "objend";
}

export type ASCNode = ASCNodeCommon &
  (
    | ASCNodeOperator
    | ASCNodeSimple
    | ASCNodeReturn
    | ASCNodeIf
    | ASCNodeFunction
    | ASCNodeWithValue
    | ASCNodeName
    | ASCNodeReassign
    | ASCNodeImport
    | ASCNodeTake
    | ASCNodeWithError
    | ASCNodeTemp
    | ASCNodeCat
    | ASCNodeFor
    | ASCNodeLength
    | ASCNodePush
    | ASCNodeCall
    | ASCNodeSubscript
    | ASCNodeVariable
    | ASCNodePropertry
  );
