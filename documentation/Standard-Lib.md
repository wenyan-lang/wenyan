<!-- GENERATED FILE, DO NOT MODIFY-->

[Back to README](../README.md)

# Standard Library Cheatsheet

Last updated: Sat, 04 Jan 2020 12:49:12 GMT


## Usage

```
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
```

## [列經](../lib/列經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [易經](../lib/易經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [曆法](../lib/曆法.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`今何紀元時`](../lib/曆法.wy#L9) | `Date.now() / 1000` |
| [`言今之日時`](../lib/曆法.wy#L14) | `new Date().toString(), in Chinese calendar` |
| [`言今之年月日`](../lib/曆法.wy#L19) | `new Date().toDateString(), in Chinese calendar` |
| [`言今之時刻`](../lib/曆法.wy#L24) | `new Date().toTimeString(), in Chinese calendar` |
| [`今年何年號`](../lib/曆法.wy#L29) | `"西元" for modern dates` |
| [`今年何年`](../lib/曆法.wy#L34) | `new Date().getFullYear() for modern dates, in Chinese calendar` |
| [`今年何干支`](../lib/曆法.wy#L40) | `Get index (1 to 60) of this year in the 60-year cycle` |
| [`今年積何年`](../lib/曆法.wy#L46) | `new Date().getFullYear() + 2697, in Chinese calendar` |
| [`今月何月`](../lib/曆法.wy#L53) | `new Date().getMonth() + 1, N + 0.5 for leap months, in Chinese calendar` |
| [`今月積何月`](../lib/曆法.wy#L60) | `Get continuously counting month number of this month` |
| [`今日何日`](../lib/曆法.wy#L67) | `new Date().getDate(), in Chinese calendar` |
| [`今日何干支`](../lib/曆法.wy#L74) | `Get index (1 to 60) of today in the 60-day cycle` |
| [`今日積何日`](../lib/曆法.wy#L80) | `Get continuously counting day number of today` |
| [`今時何時`](../lib/曆法.wy#L87) | `Get index (1 to 12) of current time in the 12 divisions of day` |
| [`今時何小時`](../lib/曆法.wy#L94) | `new Date().getHours()` |
| [`今刻何刻`](../lib/曆法.wy#L101) | `Math.floor(new Date().getMinutes() / 15)` |
| [`今分何分`](../lib/曆法.wy#L108) | `new Date().getMinutes() % 15` |
| [`今秒何秒`](../lib/曆法.wy#L113) | `new Date().getSeconds()` |
| [`言彼之日時`](../lib/曆法.wy#L232) | `new Date(x * 1000).toString(), in Chinese calendar` |
| [`言彼之年月日`](../lib/曆法.wy#L241) | `new Date(x * 1000).toDateString(), in Chinese calendar` |
| [`言彼之時刻`](../lib/曆法.wy#L248) | `new Date(x * 1000).toTimeString(), in Chinese calendar` |
| [`彼年何年號`](../lib/曆法.wy#L255) | `"西元" for modern dates` |
| [`彼年何年`](../lib/曆法.wy#L260) | `new Date(x * 1000).getFullYear() for modern dates, in Chinese calendar` |
| [`彼年何干支`](../lib/曆法.wy#L265) | `Get index (1 to 60) in the 60-year cycle` |
| [`彼年積何年`](../lib/曆法.wy#L271) | `new Date(x * 1000).getFullYear() + 2697, in Chinese calendar` |
| [`彼月何月`](../lib/曆法.wy#L278) | `new Date(x * 1000).getMonth() + 1, N + 0.5 for leap months, in Chinese calendar` |
| [`彼月積何月`](../lib/曆法.wy#L289) | `Get continuously counting month number` |
| [`彼日何日`](../lib/曆法.wy#L294) | `new Date(x * 1000).getDate(), in Chinese calendar` |
| [`彼日何干支`](../lib/曆法.wy#L300) | `Get index (1 to 60) in the 60-day cycle` |
| [`彼日積何日`](../lib/曆法.wy#L306) | `Get continuously counting day number` |
| [`彼時何時`](../lib/曆法.wy#L313) | `Get index (1 to 12) in the 12 divisions of day` |
| [`彼時何小時`](../lib/曆法.wy#L322) | `new Date(x * 1000).getHours()` |
| [`彼刻何刻`](../lib/曆法.wy#L330) | `Math.floor(new Date(x * 1000).getMinutes() / 15)` |
| [`彼分何分`](../lib/曆法.wy#L338) | `new Date(x * 1000).getMinutes() % 15` |
| [`彼秒何秒`](../lib/曆法.wy#L346) | `new Date(x * 1000).getSeconds()` |

## [曆表](../lib/曆表.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [算經](../lib/算經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`圓周率`](../lib/算經.wy#L166) | `Math.PI` |
| [`倍圓周率`](../lib/算經.wy#L169) | `Math.PI * 2` |
| [`半圓周率`](../lib/算經.wy#L172) | `Math.PI / 2` |
| [`四分圓周率`](../lib/算經.wy#L175) | `Math.PI / 4` |
| [`自然常數`](../lib/算經.wy#L177) | `Math.E` |
| [`歐拉常數`](../lib/算經.wy#L179) | `0.5772156649015329` |
| [`黃金分割數`](../lib/算經.wy#L181) | `1.618033988749895` |
| [`二之平方根`](../lib/算經.wy#L183) | `Math.SQRT2` |
| [`二之對數`](../lib/算經.wy#L185) | `Math.LN2` |
| [`十之對數`](../lib/算經.wy#L187) | `Math.LN10` |
| [`不可算數乎`](../lib/算經.wy#L190) | `Number.isNaN` |
| [`浮點移位`](../lib/算經.wy#L392) | `x * Math.pow(2, y), y is integer` |
| [`析浮點數`](../lib/算經.wy#L428) | `N/A` |
| [`取底除`](../lib/算經.wy#L474) | `{ 商: Math.floor(x / y), 餘: x - y * quo }` |
| [`取整除`](../lib/算經.wy#L491) | `{ 商: Math.round(x / y), 餘: x - y * quo }` |
| [`正弦`](../lib/算經.wy#L565) | `Math.sin` |
| [`餘弦`](../lib/算經.wy#L593) | `Math.cos` |
| [`反正弦`](../lib/算經.wy#L621) | `Math.asin` |
| [`反餘弦`](../lib/算經.wy#L648) | `Math.acos` |
| [`正切`](../lib/算經.wy#L655) | `Math.tan` |
| [`反正切`](../lib/算經.wy#L693) | `Math.atan` |
| [`勾股求角`](../lib/算經.wy#L727) | `Math.atan2` |
| [`勾股求弦`](../lib/算經.wy#L745) | `Math.hypot` |
| [`對數`](../lib/算經.wy#L782) | `Math.log` |
| [`指數`](../lib/算經.wy#L825) | `Math.exp` |
| [`冪`](../lib/算經.wy#L861) | `Math.pow` |
| [`平方根`](../lib/算經.wy#L885) | `Math.sqrt` |
| [`絕對`](../lib/算經.wy#L946) | `Math.abs` |
| [`取頂`](../lib/算經.wy#L951) | `Math.ceil` |
| [`取底`](../lib/算經.wy#L956) | `Math.floor` |
| [`取整`](../lib/算經.wy#L971) | `Math.round, but rounded away from zero when the fractional part is exactly 0.5` |
| [`捨餘`](../lib/算經.wy#L985) | `Math.trunc` |
| [`正負`](../lib/算經.wy#L995) | `Math.sign` |

## [籌經](../lib/籌經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`求和`](../lib/籌經.wy#L1) | `reduce((a,b)=>a+b)` |

## [位經](../lib/js/位經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [畫譜](../lib/js/畫譜.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [西曆法](../lib/js/西曆法.wy)

| Wenyan | Javascript Equivalent |
|---|---|




## Help update this cheatsheet

This cheatsheet is generated direct from stdlibs. There are still a lot of functions are not listed above. If you would like to hep update this cheatsheet, here is the steps.

Add comments in the stdlib files (one line above the function/value), the format should look like this:
```
注曰「「餘弦。同Javascript之Math.cos也。」」
```

After you fill the comments, you need to update the document by running
```bash
npm run build:docs
```

Check the output document out and submit a pull request. Thank you!
