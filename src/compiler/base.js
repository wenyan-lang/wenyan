class BaseCompiler {
  constructor(asc) {
    this.asc = asc;
    this.tmpVarCnt = 0;
    this.randVarCnt = 0;
  }

  randVar() {
    return `_rand${++this.randVarCnt}`
  }
  currTmpVar() {
    return `_ans${this.tmpVarCnt}`
  }
  nextTmpVar() {
    return `_ans${++this.tmpVarCnt}`
  }
  prevTmpVar(n) {
    return `_ans${this.tmpVarCnt - n + 1}`
  }

  compile(options = {}) {
    throw Error("No Implementation");
  }
}
module.exports = BaseCompiler;
