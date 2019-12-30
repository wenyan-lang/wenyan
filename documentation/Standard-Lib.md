<!-- GENERATED FILE, DO NOT MODIFY-->

[Back to README](../README.md)

# Standard Library Cheatsheet

Last updated: Mon, 30 Dec 2019 15:32:37 GMT


## Usage

```
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
```

## [易經](../lib/易經.wy)

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
| [`正弦`](../lib/算經.wy#L472) | `Math.sin` |
| [`餘弦`](../lib/算經.wy#L502) | `Math.cos` |
| [`反正弦`](../lib/算經.wy#L510) | `Math.asin` |
| [`反餘弦`](../lib/算經.wy#L537) | `Math.acos` |
| [`正切`](../lib/算經.wy#L544) | `Math.tan` |
| [`反正切`](../lib/算經.wy#L581) | `Math.atan` |
| [`勾股求角`](../lib/算經.wy#L615) | `Math.atan2` |
| [`勾股求弦`](../lib/算經.wy#L633) | `Math.hypot` |
| [`對數`](../lib/算經.wy#L670) | `Math.log` |
| [`指數`](../lib/算經.wy#L713) | `Math.exp` |
| [`冪`](../lib/算經.wy#L749) | `Math.pow` |
| [`平方根`](../lib/算經.wy#L773) | `Math.sqrt` |
| [`絕對`](../lib/算經.wy#L834) | `Math.abs` |
| [`取頂`](../lib/算經.wy#L839) | `Math.ceil` |
| [`取底`](../lib/算經.wy#L844) | `Math.floor` |
| [`取整`](../lib/算經.wy#L859) | `Math.round, but rounded away from zero when the fractional part is exactly 0.5` |
| [`捨餘`](../lib/算經.wy#L873) | `Math.trunc` |
| [`正負`](../lib/算經.wy#L883) | `Math.sign` |

## [籌經](../lib/籌經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`求和`](../lib/籌經.wy#L1) | `reduce((a,b)=>a+b)` |

## [位經](../lib/js/位經.wy)

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
npm run docs:update
```

Check the output document out and submit a pull request. Thank you!
