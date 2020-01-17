import JS from "./js";
import PY from "./py";
import RB from "./rb";
import { TargetLanguages } from "../types";
import { BaseTranspiler } from "./base";

const transpilers: Record<TargetLanguages, typeof BaseTranspiler> = {
  js: JS,
  py: PY,
  rb: RB
};

export default transpilers;
