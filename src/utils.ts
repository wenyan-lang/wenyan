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
