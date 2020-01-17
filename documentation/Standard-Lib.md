<!-- GENERATED FILE, DO NOT MODIFY-->

# Standard Library Cheatsheet

Last updated: Thu, 16 Jan 2020 21:33:41 GMT


## Usage

```wenyan
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
```

## [列經](https://github.com/wenyan-lang/wenyan/tree/master/lib/列經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [易經 - Random](https://github.com/wenyan-lang/wenyan/tree/master/lib/易經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [曆法 - Calendar](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy)

> 💬 This library uses your system timezone setting

| Wenyan | Javascript Equivalent |
|---|---|
| [`今何紀元時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L9) | `Date.now() / 1000` |
| [`言今之日時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L14) | `new Date().toString(), in Chinese calendar` |
| [`言今之年月日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L19) | `new Date().toDateString(), in Chinese calendar` |
| [`言今之時刻`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L24) | `new Date().toTimeString(), in Chinese calendar` |
| [`今年何年號`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L29) | `"西元" for modern dates` |
| [`今年何年`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L34) | `new Date().getFullYear() for modern dates, in Chinese calendar` |
| [`今年何干支`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L40) | `Get index (1 to 60) of this year in the 60-year cycle` |
| [`今年積何年`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L46) | `new Date().getFullYear() + 2697, in Chinese calendar` |
| [`今月何月`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L53) | `new Date().getMonth() + 1, N + 0.5 for leap months, in Chinese calendar` |
| [`今月積何月`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L60) | `Get continuously counting month number of this month` |
| [`今日何日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L67) | `new Date().getDate(), in Chinese calendar` |
| [`今日何干支`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L74) | `Get index (1 to 60) of today in the 60-day cycle` |
| [`今日積何日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L80) | `Get continuously counting day number of today` |
| [`今時何時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L87) | `Get index (1 to 12) of current time in the 12 divisions of day` |
| [`今時何小時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L94) | `new Date().getHours()` |
| [`今刻何刻`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L101) | `Math.floor(new Date().getMinutes() / 15)` |
| [`今分何分`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L108) | `new Date().getMinutes() % 15` |
| [`今秒何秒`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L113) | `new Date().getSeconds()` |
| [`言彼之日時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L234) | `new Date(x * 1000).toString(), in Chinese calendar` |
| [`言彼之年月日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L243) | `new Date(x * 1000).toDateString(), in Chinese calendar` |
| [`言彼之時刻`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L250) | `new Date(x * 1000).toTimeString(), in Chinese calendar` |
| [`彼年何年號`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L257) | `"西元" for modern dates` |
| [`彼年何年`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L262) | `new Date(x * 1000).getFullYear() for modern dates, in Chinese calendar` |
| [`彼年何干支`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L267) | `Get index (1 to 60) in the 60-year cycle` |
| [`彼年積何年`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L273) | `new Date(x * 1000).getFullYear() + 2697, in Chinese calendar` |
| [`彼月何月`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L280) | `new Date(x * 1000).getMonth() + 1, N + 0.5 for leap months, in Chinese calendar` |
| [`彼月積何月`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L291) | `Get continuously counting month number` |
| [`彼日何日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L296) | `new Date(x * 1000).getDate(), in Chinese calendar` |
| [`彼日何干支`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L302) | `Get index (1 to 60) in the 60-day cycle` |
| [`彼日積何日`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L308) | `Get continuously counting day number` |
| [`彼時何時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L315) | `Get index (1 to 12) in the 12 divisions of day` |
| [`彼時何小時`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L324) | `new Date(x * 1000).getHours()` |
| [`彼刻何刻`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L332) | `Math.floor(new Date(x * 1000).getMinutes() / 15)` |
| [`彼分何分`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L340) | `new Date(x * 1000).getMinutes() % 15` |
| [`彼秒何秒`](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆法.wy#L348) | `new Date(x * 1000).getSeconds()` |

## [曆表](https://github.com/wenyan-lang/wenyan/tree/master/lib/曆表.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [算經 - Math](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`圓周率`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L166) | `Math.PI` |
| [`倍圓周率`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L169) | `Math.PI * 2` |
| [`半圓周率`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L172) | `Math.PI / 2` |
| [`四分圓周率`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L175) | `Math.PI / 4` |
| [`自然常數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L177) | `Math.E` |
| [`歐拉常數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L179) | `0.5772156649015329` |
| [`黃金分割數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L181) | `1.618033988749895` |
| [`二之平方根`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L183) | `Math.SQRT2` |
| [`二之對數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L185) | `Math.LN2` |
| [`十之對數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L187) | `Math.LN10` |
| [`不可算數乎`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L190) | `Number.isNaN` |
| [`浮點移位`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L392) | `x * Math.pow(2, y), y is integer` |
| [`析浮點數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L428) | `N/A` |
| [`取底除`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L474) | `{ 商: Math.floor(x / y), 餘: x - y * quo }` |
| [`取整除`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L491) | `{ 商: Math.round(x / y), 餘: x - y * quo }` |
| [`正弦`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L565) | `Math.sin` |
| [`餘弦`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L594) | `Math.cos` |
| [`反正弦`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L637) | `Math.asin` |
| [`反餘弦`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L663) | `Math.acos` |
| [`正切`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L694) | `Math.tan` |
| [`反正切`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L748) | `Math.atan` |
| [`勾股求角`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L781) | `Math.atan2` |
| [`勾股求弦`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L804) | `Math.hypot` |
| [`對數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L841) | `Math.log` |
| [`指數`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L884) | `Math.exp` |
| [`冪`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L920) | `Math.pow` |
| [`平方根`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L944) | `Math.sqrt` |
| [`絕對`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1005) | `Math.abs` |
| [`取頂`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1010) | `Math.ceil` |
| [`取底`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1015) | `Math.floor` |
| [`取整`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1030) | `Math.round, but rounded away from zero when the fractional part is exactly 0.5` |
| [`捨餘`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1044) | `Math.trunc` |
| [`正負`](https://github.com/wenyan-lang/wenyan/tree/master/lib/算經.wy#L1054) | `Math.sign` |

## [籌經 - Collection Operations](https://github.com/wenyan-lang/wenyan/tree/master/lib/籌經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`求和`](https://github.com/wenyan-lang/wenyan/tree/master/lib/籌經.wy#L1) | `reduce((a,b)=>a+b)` |

## [位經 - Bit Manipulation](https://github.com/wenyan-lang/wenyan/tree/master/lib/js/位經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [畫譜 - Canvas](https://github.com/wenyan-lang/wenyan/tree/master/lib/js/畫譜.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [西曆法](https://github.com/wenyan-lang/wenyan/tree/master/lib/js/西曆法.wy)

| Wenyan | Javascript Equivalent |
|---|---|




## Help update this cheatsheet

This cheatsheet is generated direct from stdlibs. There are still a lot of functions are not listed above. If you would like to hep update this cheatsheet, here is the steps.

Add comments in the stdlib files (one line above the function/value), the format should look like this:

```wenyan
注曰「「餘弦。同Javascript之Math.cos也。」」
```

After you fill the comments, commit and open a pull request. Thank you!
