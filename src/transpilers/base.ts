import { ASCNode, TranspilerOptions } from "../types";

export interface ModuleWrapperOptions {
  src: string;
  moduleName: string;
  scopeName: string;
  markerStart: string;
  markerEnd: string;
}

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

  wrapModule(name: string, src: string): string {
    const moduleName = name.replace(/\//g, "_");
    const scopeName = name.split("/").slice(-1)[0];
    const markerStart = `/*___wenyan_module_${moduleName}_start___*/`;
    const markerEnd = `/*___wenyan_module_${moduleName}_end___*/`;
    return this.moduleWrapper({
      src,
      moduleName,
      scopeName,
      markerStart,
      markerEnd
    });
  }

  protected moduleWrapper({ src }: ModuleWrapperOptions) {
    return src;
  }
}
