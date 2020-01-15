export type TargetLanguages = 'js' | 'py'|'rb'
export type RomanizeIdentifiers = 'none' | 'pinyin' | 'unicode' | 'baxter'
export type LogCallback = (...args: any[]) => void

export interface CompileOptions {
  lang: TargetLanguages,
  romanizeIdentifiers: RomanizeIdentifiers,
  resetVarCnt: boolean,
  logCallback: LogCallback,
  errorCallback: LogCallback
  lib: Record<string, string>
  strict: Boolean

  // import options
  entryFilepath?: string
  importPaths: string | string[]
  importCache: object
  importContext: Record<string, string | {entry: string, src?:string}>
  allowHttp: boolean
  trustedHosts: string[]
  requestTimeout: number
}

export interface ExecuteOptions {
  lang: TargetLanguages,
  outputHanzi: boolean
  scoped: boolean
  output: LogCallback
}

export type ASCType 
= "str"
| "name"
| "whiletrue"
| "break"
| "end"
| "if"
| "comment"
| "decl"

export type ASCOperator 
= "fun"
| "num"
| "str"
| "funbody"
| "var"
| "op+"
| "op-"
| "op/"
| "op*"

export type TokenType 
= "name"
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
| "decl"

export type Token = [
  TokenType,
  string | undefined,
  number
]

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