var { num2hanzi, bool2hanzi } = require("./hanzi2num");

function isLangSupportedForEval(lang) {
  if (lang !== "js")
    throw new Error(
      `Executing for target language "${lang}" is not supported in current environment`
    );
  return true;
}

function hanzinize(value) {
  if (typeof value == "number") {
    return num2hanzi(value);
  } else if (typeof value == "boolean") {
    return bool2hanzi(value);
  } else if (Array.isArray(value)) {
    return value.map(i => hanzinize(i)).join("。");
  } else {
    return value;
  }
}

function outputHanziWrapper(log, outputHanzi) {
  return function output(...args) {
    log(...args.map(i => (outputHanzi ? hanzinize(i) : i)));
  };
}

function evalCompiled(compiledCode, options = {}) {
  const {
    outputHanzi = true,
    scoped = false,
    lang = "js",
    output = console.log
  } = options;

  isLangSupportedForEval(lang);

  let code = compiledCode;

  (() => {
    const _console_log = console.log;
    console.log = outputHanziWrapper(output, outputHanzi);
    try {
      if (!scoped && "window" in this) {
        window.eval(code);
      } else {
        eval(code);
      }
    } catch (e) {
      throw e;
    } finally {
      console.log = _console_log;
    }
  })();
}

module.exports = {
  isLangSupportedForEval,
  evalCompiled
};
