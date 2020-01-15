function printType(t, n = 0, d = 0) {
  if (d > 100) {
    return "...";
  }
  if (t.type == "any") {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    if (n < 26) {
      return "'" + abc[n];
    } else {
      return "'" + abc[Math.floor(n / 26)] + abc[n % 26];
    }
  }
  if (t.type == "arr") {
    return "(" + printType(t.element, n, d + 1) + ") arr";
  }
  if (t.type == "fun") {
    return (
      "(" +
      printType(t.in, n, d + 1) +
      ") -> (" +
      printType(t.out, n + 1, d + 1) +
      ")"
    );
  }
  if (t.type == "obj") {
    let s = "{ ";
    let m = 0;
    for (let k in t.fields) {
      s += k + " : (" + printType(t.fields[k], n + m, d + 1) + "), ";
      m++;
    }
    if (s.length > 2) {
      s = s.slice(0, -2);
    }
    s += " }";
    return s;
  }
  return t.type;
}

function printSignature(signature) {
  let s = "";
  signature = signature.filter(x => Object.keys(x[1]).length);
  signature.sort((x, y) => x[0][0] - y[0][0]);
  for (let i = 0; i < signature.length; i++) {
    for (let j = signature.length - 1; j >= 0; j--) {
      if (signature[j][0][1] <= signature[i][0][0]) {
        signature[j][0][1] = 1 / 0;
        s += "  ".repeat(signature[j][0][2]) + "}\n";
      }
    }
    s +=
      "  ".repeat(signature[i][0][2]) +
      `[${signature[i][0][0]}-${signature[i][0][1]}] {\n`;
    for (let k in signature[i][1]) {
      s +=
        "  ".repeat(signature[i][0][2] + 1) +
        k +
        " : " +
        printType(signature[i][1][k]) +
        "\n";
    }
  }
  for (let j = signature.length - 1; j >= 0; j--) {
    if (signature[j][0][1] < 1 / 0) {
      s += "  ".repeat(signature[j][0][2]) + "}\n";
    }
  }
  return s;
}

function typecheck(
  asc,
  assert = (msg, pos, b) => {
    if (!b) console.log(`ERROR@${pos}: ${msg}`);
  }
) {
  let imported = [];
  let strayvar = [];
  let scope = [{}];
  let scopestarts = [{ pos: 0, op: "global" }];
  let signature = [];
  let funstack = [];
  let funretcnt = [];
  let prevobj = "";
  let took = 0;

  function checkscopei(i, name) {
    if (scope[i][name]) {
      return scope[i][name];
    }
    if (!scope[i - 1]) {
      return;
    }
    for (let j = funstack.length - 1; j >= 0; j--) {
      if (scope[i - 1][funstack[j]]) {
        let ptr = scope[i - 1][funstack[j]];
        while (ptr.type == "fun") {
          if (ptr.in.name == name) {
            return ptr.in;
          }
          ptr = ptr.out;
        }
      }
    }
  }

  function isRoman(x) {
    return x.replace(/[ -~]/g, "").length == 0;
  }

  function checkscopeall(name) {
    for (let i = scope.length - 1; i >= 0; i--) {
      let b = checkscopei(i, name);
      if (b) {
        return b;
      }
    }
    if (imported.includes(name)) {
      return inittype("any"); //for now
    }
    if (isRoman(name)) {
      //backdoor for native code
      return inittype("any");
    }

    return undefined;
  }
  function checkscopethis(name, pos) {
    assert(
      "Scope stack depleted, possibly due to extraneous end-block statement.",
      pos,
      scope.length
    );
    return checkscopei(scope.length - 1, name);
  }

  function inittype(type) {
    if (type == "any") {
      return { type: "any" };
    }
    if (type == "nil") {
      return { type: "nil" };
    }
    let x: any = { type: type };
    if (type == "fun") {
      x.in = { type: "any" };
      x.out = { type: "any" };
    } else if (type == "obj") {
      x.fields = {};
    } else if (type == "arr") {
      x.element = { type: "any" };
    }
    return x;
  }

  function gettype(tok) {
    if (tok[0] == "lit") {
      return inittype("str");
    } else if (tok[0] == "bool") {
      return inittype("bol");
    } else if (tok[0] == "num") {
      return inittype("num");
    } else if (tok[0] == "iden") {
      return checkscopeall(tok[1]);
    } else if (tok[0] == "ans") {
      var s = strayvar[strayvar.length - 1];
      // strayvar = [];
      return s;
    }
    assert(`[Type] Expecting value, found '${tok[0]}'`, tok[2], false);
  }

  function objfield(t, x) {
    if (t.isarg) {
      t.fields[x] = inittype("any");
    }
    return t.fields[x];
  }

  function scopepush(tok) {
    scope.push({});
    scopestarts.push(tok);
  }

  function scopepop(tok, ...acceptScopeStartOps) {
    let ss = scopestarts.pop();
    let s = scope.pop();
    assert(
      `[Type] Unexpected '${tok.op}' in '${ss.op}' block`,
      tok.pos,
      acceptScopeStartOps.indexOf(ss.op) >= 0
    );
    signature.push([[ss.pos, tok.pos, scope.length], s]);
  }

  function logscope() {
    console.dir(scope, { depth: null, maxArrayLength: null });
  }

  function typeeq(a, b) {
    if (a == "any" || a.type == "any") {
      return b;
    }
    if (b == "any" || b.type == "any") {
      return a;
    }
    if (a.type != b.type) {
      return false;
    }
    if (a.type == b.type) {
      if (a.type == "arr") {
        if (typeeq(a.element, b.element)) {
          return a;
        }
        if (a.element == "any" && b.element) {
          return b;
        }
        if (a.element && b.element == "any") {
          return a;
        }
      }
      if (a.type == "obj") {
        var x;
        var y;
        if (Object.keys(a.fields).length > Object.keys(b.fields).length) {
          [x, y] = [b, a];
        } else {
          [x, y] = [a, b];
        }
        for (var k in x.fields) {
          if (!typeeq(x.fields[k], y.fields[k])) {
            return false;
          }
        }
        return y;
      }
      return a;
    }
    return false;
  }

  function typeassert(who, want, got, pos) {
    let t = gettype(got);
    assert(`[Type] Undeclared variable '${got[1]}'`, pos, t);

    let ok = false;
    let ut = [];
    for (let i = 0; i < want.length; i++) {
      ut.push("(" + printType(want[i]) + ")");
      if (typeeq(want[i], t)) {
        ok = true;
        break;
      }
    }
    assert(
      `[Type] ${who} expecting ${ut.join("|")}, found '${got[1]}' : ${printType(
        t
      )}`,
      pos,
      ok
    );
  }

  for (let i = 0; i < asc.length; i++) {
    var a = asc[i];
    // console.log(',,,,,,,',a)

    if (a.op == "var") {
      // console.log(a)
      for (let j = 0; j < a.count; j++) {
        if (j >= a.names.length) {
          strayvar.push(inittype(a.type));
          continue;
        }

        assert(
          `[Type] Variable '${a.names[j]}' redeclared in the same scope`,
          a.pos,
          !checkscopethis(a.names[j], a.pos)
        );

        scope[scope.length - 1][a.names[j]] = inittype(a.type);
        if (a.type == "fun") {
          funstack.push(a.names[j]);
          funretcnt.push(0);
        } else if (a.type == "obj") {
          prevobj = a.names[j];
        }
      }
    } else if (a.op == "print") {
      //pass
    } else if (a.op == "fun") {
      let ptr = scope[scope.length - 1][funstack[funstack.length - 1]];
      for (let j = 0; j < a.arity; j++) {
        ptr.in = inittype(a.args[j].type);
        if (a.args[j].type == "obj") {
          ptr.in.isarg = true;
        }
        ptr.in.name = a.args[j].name;
        if (j != a.arity - 1) {
          ptr.out = inittype("fun");
          ptr = ptr.out;
        }
      }
    } else if (a.op == "funbody") {
      if (asc[i - 1].op != "fun") {
        let ptr = scope[scope.length - 1][funstack[funstack.length - 1]];
        ptr.in = inittype("nil");
      }
      scopepush(a);
    } else if (a.op == "funend") {
      var f = funstack.pop();
      var n = funretcnt.pop();
      scopepop(a, "funbody");

      if (n == 0) {
        var ptr = scope[scope.length - 1][f];
        while (ptr.out.type == "fun") {
          ptr = ptr.out;
        }
        ptr.out = inittype("nil");
      }
    } else if (a.op == "objend") {
      //pass
    } else if (a.op == "objbody") {
      //pass
    } else if (a.op == "prop") {
      scope[scope.length - 1][prevobj].fields[a.name.slice(1, -1)] = inittype(
        a.type
      );
    } else if (a.op == "end") {
      scopepop(a, "if", "else", "for", "whiletrue", "whilen");
    } else if (a.op == "if") {
      if (a.elseif) {
        scopepop(a, "if");
      }
      scopepush(a);
    } else if (a.op == "else") {
      scopepop(a, "if");
      scopepush(a);
    } else if (a.op == "return") {
      funretcnt[funretcnt.length - 1]++;
      let ptr;
      for (let j = 1; j < scope.length; j++) {
        ptr = scope[scope.length - 1 - j][funstack[funstack.length - 1]];
        if (ptr) {
          break;
        }
      }
      while (ptr.out.type == "fun") {
        ptr = ptr.out;
      }
      if (a.value == undefined) {
        ptr.out = inittype("nil");
      } else {
        let ty = gettype(a.value);
        // console.log(strayvar)
        // console.log(funstack[funstack.length-1],ty,ptr)
        if (ptr.out.type == "any" || ptr.out.type == "nil") {
          ptr.out = Object.assign({}, ty);
          delete ptr.out.name;
        } else {
          // console.log(ptr.out.type,ty.type)
          typeassert(`Function return`, [ptr.out], a.value, a.pos);

          ptr.out = typeeq(ptr.out, gettype(a.value));
        }
      }
    } else if (a.op.startsWith("op")) {
      let op = a.op.slice(2);
      let tl = gettype(a.lhs);
      let tr = gettype(a.rhs);

      let otype;
      if (op == "+") {
        typeassert(
          `${op} operator`,
          [inittype("num"), inittype("str")],
          a.lhs,
          a.pos
        );
        typeassert(
          `${op} operator`,
          [inittype("num"), inittype("str")],
          a.rhs,
          a.pos
        );
        otype = Object.assign({}, typeeq(gettype(a.lhs), gettype(a.rhs)));
      } else if (["-", "*", "/", "%"].includes(op)) {
        typeassert(`${op} operator`, [inittype("num")], a.lhs, a.pos);
        typeassert(`${op} operator`, [inittype("num")], a.rhs, a.pos);
        otype = inittype("num");
      } else if (["||", "&&"].includes(op)) {
        typeassert(`${op} operator`, [inittype("bol")], a.lhs, a.pos);
        typeassert(`${op} operator`, [inittype("bol")], a.rhs, a.pos);
        otype = inittype("bol");
      }
      strayvar.push(otype);
      // console.log(strayvar)
    } else if (a.op == "name") {
      for (let j = a.names.length - 1; j >= 0; j--) {
        scope[scope.length - 1][a.names[j]] = strayvar.pop();
      }
    } else if (a.op == "call") {
      let ty = gettype(a.fun);

      if (ty == undefined) {
        // damn hoisting
        strayvar.push(inittype("any"));
      } else {
        typeassert(`Call function`, [inittype("fun")], a.fun, a.pos);

        let args = [];
        if (a.args) {
          args = a.args.slice();
        }
        if (a.pop) {
          for (let j = 0; j < took; j++) {
            args.unshift(strayvar.pop());
          }
        }

        let ptr = ty;

        for (let j = 0; j < args.length; j++) {
          if (ptr.type == "any") {
            ptr = inittype("fun");
          }
          let ta = ptr.in;
          if (a.pop) {
            assert(
              `Function argument expecting ${printType(ta)}, found ${printType(
                args[j]
              )}`,
              a.pos,
              typeeq(args[j], ta)
            );
          } else {
            typeassert(`Function argument`, [ta], args[j], a.pos);
          }
          ptr = ptr.out;
        }

        if (args.length == 0 && ptr.type == "fun") {
          ptr = ptr.out;
        }

        strayvar.push(Object.assign({}, ptr));
      }
    } else if (a.op == "subscript") {
      // typeassert(`Subscript operator LHS`,[inittype('arr'),inittype('obj')],a.container,a.pos)

      if (a.value[0] == "ctnr" && a.value[1] == "rest") {
        typeassert(
          `Subscript operator LHS`,
          [inittype("arr")],
          a.container,
          a.pos
        );

        let ty = gettype(a.container);
        strayvar.push(Object.assign({}, ty));
      } else {
        typeassert(
          `Subscript operator RHS`,
          [inittype("num"), inittype("str")],
          a.value,
          a.pos
        );

        if (gettype(a.value).type == "str") {
          typeassert(
            `Subscript operator LHS`,
            [inittype("obj")],
            a.container,
            a.pos
          );
          let ty = gettype(a.container);
          if (ty.type == "any") {
            ty.type = "obj";
            ty.fields = {};
            ty.fields[a.value[1].slice(1, -1)] = inittype("any");
            ty.isarg = true;
          }
          assert(
            `[Type] Property ${a.value[1]} does not exist in obj ${printType(
              ty
            )}`,
            a.pos,
            objfield(ty, a.value[1].slice(1, -1))
          );

          strayvar.push(Object.assign({}, ty.fields[a.value[1].slice(1, -1)]));
        } else {
          typeassert(
            `Subscript operator LHS`,
            [inittype("arr"), inittype("str")],
            a.container,
            a.pos
          );
          let ty = gettype(a.container);

          if (ty.type == "str") {
            strayvar.push(inittype("str"));
          } else {
            if (ty.type == "any") {
              // ty = inittype('arr')
              ty.type = "arr";
              ty.element = { type: "any" };
              // console.log(gettype(a.container))
              // console.log(ty)
              // process.exit()
              // strayvar.push(inittype('any'))
            }
            strayvar.push(Object.assign({}, ty.element));
          }
        }
      }
    } else if (a.op == "cat") {
      typeassert(`Concat`, [inittype("arr")], a.containers[0], a.pos);
      let typ = gettype(a.containers[0]);
      let olt = typ;
      for (let j = 1; j < a.containers.length; j++) {
        typ = typeeq(typ, gettype(a.containers[j]));
        if (!typ) {
          typeassert(`Concat`, [olt], a.containers[j], a.pos);
        }
        olt = typ;
      }
      strayvar.push(Object.assign({}, typ));
    } else if (a.op == "push") {
      typeassert(`Push LHS`, [inittype("arr")], a.container, a.pos);
      let typ = gettype(a.container).element;
      let olt = typ;
      for (let j = 0; j < a.values.length; j++) {
        // console.log(a.values[j],gettype(a.values[j]))
        typ = typeeq(typ, gettype(a.values[j]));
        if (!typ) {
          typeassert(`Push RHS`, [olt], a.values[j], a.pos);
        }
        olt = typ;
      }

      gettype(a.container).element = Object.assign({}, typ);
    } else if (a.op == "for") {
      scopepush(a);
      typeassert(`For-each LHS`, [inittype("arr")], a.container, a.pos);
      scope[scope.length - 1][a.iterator] =
        gettype(a.container).element || inittype("any");
    } else if (a.op == "whiletrue") {
      scopepush(a);
    } else if (a.op == "whilen") {
      scopepush(a);
    } else if (a.op == "break") {
      //pass
    } else if (a.op == "continue") {
      //pass
    } else if (a.op == "not") {
      strayvar.push(inittype("bol"));
    } else if (a.op == "reassign") {
      let tl = gettype(a.lhs);

      let tlv = tl;

      if (a.lhssubs) {
        let tls = gettype(a.lhssubs);
        typeassert(
          `Reassignment LHS subscript`,
          [inittype("str"), inittype("num")],
          a.lhssubs,
          a.pos
        );

        if (tls.type == "str") {
          typeassert(
            `Reassignment LHS container`,
            [inittype("obj")],
            a.lhs,
            a.pos
          );
          if (tl.type == "any") {
            tlv = inittype("any");
          } else {
            tlv = objfield(tl, a.lhssubs[1].slice(1, -1));
          }
        } else {
          typeassert(
            `Reassignment LHS container`,
            [inittype("arr")],
            a.lhs,
            a.pos
          );
          if (tl.type == "any") {
            tlv = inittype("any");
          } else {
            tlv = tl.element;
          }
        }
      }
      if (a.del) {
      } else {
        let tr = gettype(a.rhs);
        let trv = tr;
        if (a.rhssubs) {
          let trs = gettype(a.rhssubs);

          typeassert(
            `Reassignment RHS subscript`,
            [inittype("str"), inittype("num")],
            a.rhssubs,
            a.pos
          );
          if (trs.type == "str") {
            typeassert(
              `Reassignment RHS container`,
              [inittype("obj")],
              a.rhs,
              a.pos
            );
            if (tr.type == "any") {
              trv = inittype("any");
            } else {
              trv = objfield(tr, a.rhssubs[1].slice(1, -1));
            }
          } else {
            typeassert(
              `Reassignment RHS container`,
              [inittype("arr")],
              a.rhs,
              a.pos
            );
            if (tr.type == "any") {
              trv = inittype("any");
            } else {
              trv = tr.element;
            }
          }
        }
        assert(`[Type] Reassignment LHS is not declared`, a.pos, tlv);
        assert(`[Type] Reassignment RHS is not declared`, a.pos, trv);
        // console.log(a,tlv,trv,tl,tr)
        let typ = typeeq(tlv, trv);
        // console.log(a.lhs,a.rhs,gettype(a.rhs),tl,tr,tlv,trv)
        assert(
          `[Type] Reassignment type mismatch: LHS:${printType(
            tlv
          )} RHS:${printType(trv)}`,
          a.pos,
          typ
        );
      }
    } else if (a.op == "length") {
      typeassert(
        `Length operator`,
        [inittype("arr"), inittype("str")],
        a.container,
        a.pos
      );
      strayvar.push(inittype("num"));
    } else if (a.op == "temp") {
      strayvar.push(gettype(a.iden));
    } else if (a.op == "discard") {
      strayvar = [];
    } else if (a.op == "take") {
      took = a.count;
    } else if (a.op == "import") {
      imported = imported.concat(a.iden);
    } else if (a.op == "try") {
      scopepush(a);
    } else if (a.op == "catch") {
      scopepop(a, "try");
      scopepush(a);
    } else if (a.op == "catcherr") {
      scopepop(a, "catch", "catcherr");
      scopepush(a);
      if (a.error === undefined) {
        strayvar.push(inittype("str"));
      }
    } else if (a.op == "tryend") {
      scopepop(a, "catch", "catcherr");
    } else if (a.op == "throw") {
    } else if (a.op == "comment") {
      //pass
    } else {
    }
  }
  if (a) {
    scopepop({ pos: a.pos, op: "EOF" }, "global");
  }
  // console.log(scope.length)
  // console.dir(signature,{maxArrayLength:null,depth:null})

  // console.log(printSignature(signature))
  // process.exit()
  return signature;
}

export { typecheck, printType, printSignature };
