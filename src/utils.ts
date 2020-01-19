/**
 * To check match of a part of string
 */
export function match(src: string, startAt: number, target: string) {
  let length = target.length;
  for (let i = 0; i < length; i++) {
    if (src[startAt + i] !== target[i]) return false;
  }
  return true;
}

export const defaultAssertLogger: (...messages: any[]) => void = console.log;

export const defaultAssert = (logger = defaultAssertLogger) => (
  msg: string,
  pos: number,
  b: any
) => {
  if (!b) logger(`ERROR@${pos}: ${msg}`);
};

export function isRoman(x: string) {
  return x.replace(/[ -~]/g, "").length == 0;
}
