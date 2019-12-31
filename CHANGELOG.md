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