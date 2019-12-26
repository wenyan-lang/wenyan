class BaseCompiler {
  constructor(asc) {
    this.asc = asc;
    this.tmpVarCnt = 0;
    this.randVarCnt = 0;
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
  compile(options = {}) {
    throw Error("No Implementation");
  }
}
var Base = BaseCompiler;
try {
  module.exports = Base;
} catch (e) {}
