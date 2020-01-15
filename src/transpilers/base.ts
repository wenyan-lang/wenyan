import { ASCNode, TranspilerOptions } from "../types";

export class BaseTranspiler {
  asc: ASCNode[];
  tmpVarCnt = 0;
  randVarCnt = 0;
  lib = "";

  constructor(asc: ASCNode[]) {
    this.asc = asc;
  }

  randVar() {
    return `_rand${++this.randVarCnt}`;
  }

  currTmpVar() {
    return `_ans${this.tmpVarCnt}`;
  }

  nextTmpVar() {
    return `_ans${++this.tmpVarCnt}`;
  }

  transpile(
    options: Partial<TranspilerOptions> = {}
  ): { result: string; imports: string[] } {
    throw Error("No Implementation");
  }
}
