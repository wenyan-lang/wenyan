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