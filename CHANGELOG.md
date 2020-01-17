# v0.3.0

## BREAKING CHANGE: `compile` API change

As we mentioned in the [v0.2.0 release](https://github.com/wenyan-lang/wenyan/releases/tag/v0.2.0), the support of using `lang` as the first argument of  `compile` is now REMOVED. Please use the new API instead.

```js
// before
compile('js', source, { ... })
// after
compile(source, { lang: 'js', ... })
```

## [New Online IDE](https://wy-lang.org/ide)
The fresh new Online IDE is now landed. With file explorer, rendering, a better editor, auto-complete, [wyg](https://github.com/wenyan-lang/wyg) support, dark mode and more. Please do check it out! (PR #515 #526 #535 #536 #537 #546 #551 #552) 

![](https://user-images.githubusercontent.com/7929704/72163213-68d0a480-3391-11ea-9196-9e21e5270149.png)
![](https://user-images.githubusercontent.com/7929704/72163214-68d0a480-3391-11ea-989f-21322555294c.png)

## We are now moved to Typescript! 

We have rewritten our codebase to Typescript. The typing declaration file is also shipped in [@wanyanlang/code](https://www.npmjs.com/package/@wenyanlang/core).

Check out for #543 for more details.

### Features
- Importing nested modules structure is now landed (PR #534, thanks @antfu)

### Fixes
- Functions containing elseif is miscompiled (PR #523, thanks @statementreply)

### Stdlib
- New 格物 library (PR #553, thanks @Fros1er)
- Fix atan2(Infinity, Infinity) (PR #538 , thanks @statementreply)

### Tests
- A lot of tests have been added (#527, #530, thanks @statementreply)

### Examples
- Clock (#545, thanks @antfu)
- Chinese-sqrt (增乘開平方術) (#550, thanks @jingkecn)


# v0.2.4

## import in, elseif, if true, if false, any

Thanks to everyone who contributed their ideas, a selection of proposed new syntaxes are now added

| js/c++ | wenyan | issue |
|-|-|-|
| `continue` | `乃止是遍` | #392  |
| `else if` | `或若` | #365 |
| `if (ans) {` | `若其然者` | #513 |
| `if (!ans) {` | `若其不然者` | ditto |
| `auto` | `元` | #486 |
| `require('path/to/something')` | `吾嘗觀「「某樓」」中「「某閣」」中「「某書」」之書。` | #475 |

refer to #519 for more details

# v0.2.3

## 序.wy

Think `序.wy` the Wenyan version of `index.js`.

For example, the reader now will search for a module `四庫全書` for a given path `/tmp/examples`

- `/tmp/examples/四庫全書.wy`
- `/tmp/examples/四庫全書/序.wy`

The first match will be imported. Refer to #512 for more details.

## 藏書樓

Think `藏書樓` the Wenyan version of `node_modules`.

`藏書樓` will be included as `importPaths` by CLI automatically. It will do an up searching for `藏書樓` from the cwd (just as node did)


# v0.2.2

## New Website Domain http://wy-lang.org!

We are now using Netlify to build our website & IDE. The legacy links will redirect to http://wy-lang.org automatically.

- New spec page, [check it out](https://wy-lang.org/spec)

## Features
- New option `importPaths` for specifying the import searching directories, (PR #499, by @antfu)
- New option `allowHttp` for allowing import scripts from the web (default to `false`). refer to #499 for more details.

## Fixes
- Fix for mismatched scope begin/end in typecheck (PR #496, thanks @statementreply)
- Stdlib: Fix for some 曆法 functions (PR #503, thanks @statementreply)
- Stdlib: Improve asin, acos and atan (PR #511, thanks @statementreply)

## Examples
- New example Pascal Triangle (PR #498, thanks @MerakDipper)

# v0.2.1

## Static Type Inference

When the option is turned on, the compiler will now raise exceptions if your code does not typecheck. Also it is capable of producing type signatures for inspection, e.g. ./example/quicksort.wy produces the following:

```
[0-347] {
  快排 : (('a) arr) -> (('a) arr)
  己 : (num) arr
  [33-285] {
    首 : ('a) arr
    頷 : ('a) arr
    尾 : ('a) arr
    甲一 : 'a
    甲餘 : ('a) arr
    乙 : ('a) arr
    [136-201] {
      丁 : 'a
    }
  }
}
```

For more detail, please refer to #486 

### Standard Library

- Fundamental Calendar library (PR #466, thanks @statementreply), check out [Standard Library cheatsheet](https://github.com/LingDong-/wenyan-lang/blob/master/documentation/Standard-Lib.md) for more details.

### 3rd Party Compilers

- [JVM compiler](https://github.com/MagicLu550/wenyan-lang_jvm) by [MagicLu550](https://github.com/MagicLu550)

### Fixes

- Stdlib was not bundled correctly. (PR #481, thanks @antfu)


# v0.2.0

## ⚠ BREAKING CHANGE: `compile` API change
The first argument lang move to option, please switch to new API.

```js
//before
compile('js', source, { ... })
// after
compile(source, { lang: 'js', ... })
```

The old API is still functional for temporary backward compatible, the support **will be REMOVED in the next minor update.**

## Wenyan Snippets Site, #459

Please do check it out. Any feedbacks are welcome!

![](https://user-images.githubusercontent.com/7929704/71650125-049f4800-2ce2-11ea-9f44-31c9b7e626d7.png)

## New Execute API
Check out [API Document](https://github.com/LingDong-/wenyan-lang/blob/master/documentation/Compiler-API.md) and #473


### Fixes
- Fix compiler crash with 0-argument macros (PR #453, thanks @statementreply)
- stdlib: Improve sin, cos and tan (^/1/3) (PR #457, thanks @statementreply)
- bool2hanzi (PR #465, thanks @Fros1er)

### Docs
- Auto generates examples for README.md (PR #448, thanks @cuixiping)


# v0.1.3

## Macros (Experimental)

As you might (not) have noticed, *wenyan-lang* strives to be more readable (for ancient Chinese people). **Macros** provide syntactic sugars to bring the 文采 of your code to the next level.

E.g. Now you can patch wenyan-lang's notorius print function like so:

```
或云「「書「甲」焉」」。
蓋謂「「吾有一言。曰「甲」。書之」」。

書「「問天地好在」」焉。
```

Since we're beating JavaScript to macros, here is a rough C equivalence:

```
#define   書(甲)焉   吾有一言。曰甲。書之
書("問天地好在")焉。
```

See [**Full Documation**](https://github.com/LingDong-/wenyan-lang/blob/master/documentation/Macros.md), #440 for more details.

### Standard Library
A new standard library `畫譜` that manipulates canvas on web pages. Check out the demo on Online IDE!

### Browser Runtime
New package [`@wenyanlang/runtime`](https://github.com/LingDong-/wenyan-lang/blob/master/documentation/Runtime.md) allowing you to run Wenyan direct in `<script>` tag of html! (PR #433, thanks @antfu)

### Docs
- [**Standard library document**](https://github.com/LingDong-/wenyan-lang/blob/master/documentation/Standard-Lib.md) added. (PR #432, thanks @antfu @statementreply)

### Examples
- New example 劉徽割圓術 (PR #431, thanks @cuixiping)

### Testing
- More testing cases for hanzi2num added (PR #442, thanks @kaiyuan01)


# v0.1.2

## Overhauled `hanzi2num` (PR #413, thanks [@statementreply](https://github.com/statementreply))
- `塵埃渺漠` are now 10x each
- The character for 10^28 is changed to `穰` (U+7A70).
- `一百一` = 101 now
- Multi-character multipliers are no longer supported.
- Omitting `一` before fractional multipliers is no longer allowed. It's unclear whether `五毫絲` means 0.0051 or 5e-7, so I just disallowed it for now.
- Allow multiple multipliers: `一萬萬` = 1e+8, `一百絲` = 0.01.
- Add support for positional notation: `一三三七` = 1337
- Add digit zero `〇` (exactly one digit of zero) and decimal separator `·`: `三五〇〇·〇一` = 3500.01
- "又" can be used at more places: 三十又六 = 36

### New Features
- `『』` is now supported as string literals, an alternate of `「「」」` (5f698df434133d12b7c6027a197db634b91ace53), resolves #81 
- `、` is now supported sentence separators. (5f698df434133d12b7c6027a197db634b91ace53), resolves #15, resolves #129, resolves #348
- Platform-specific stdlib steup (1cecae9de1919486f34241f379248ed402b4fa96)
- Changelog added

### Fixes
- Nest comments (32b0f3abd1beb55cd28c369ad74b79e677248cc7) resolves #403
- Stdlib: Implement correctly rounded sqrt (4/4/4), (PR #424, thanks [@statementreply](https://github.com/statementreply))

### Examples
- New example "DrawHeart" (PR #410, thanks [@BHMulberry](https://github.com/BHMulberry))