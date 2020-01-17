import { TargetLanguages, LogCallback, ExecuteOptions } from "./types";
import { num2hanzi, bool2hanzi } from "./parser";

export function isLangSupportedForEval(lang: TargetLanguages) {
  if (lang !== "js")
    throw new Error(
      `Executing for target language "${lang}" is not supported in current environment`
    );
  return true;
}

function hanzinizeOuput(value: string) {
  if (typeof value == "number") {
    return num2hanzi(value);
  } else if (typeof value == "boolean") {
    return bool2hanzi(value);
  } else if (Array.isArray(value)) {
    return value.map(i => hanzinizeOuput(i)).join("。");
  } else {
    return value;
  }
}

function outputHanziWrapper(log: LogCallback, outputHanzi: boolean) {
  return function output(...args) {
    log(...args.map(i => (outputHanzi ? hanzinizeOuput(i) : i)));
  };
}

export function evalCompiled(
  compiledCode: string,
  options: Partial<ExecuteOptions> = {}
) {
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
