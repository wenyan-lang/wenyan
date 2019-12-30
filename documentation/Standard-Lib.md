<!-- GENERATED FILE, DO NOT MODIFY-->

[Back to README](../README.md)

# Standard Library Cheatsheet

Last updated: Mon, 30 Dec 2019 12:04:13 GMT


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
| [`正弦`](../lib/算經.wy#L460) | `Math.sin` |
| [`餘弦`](../lib/算經.wy#L490) | `Math.cos` |
| [`反正弦`](../lib/算經.wy#L498) | `Math.asin` |
| [`反餘弦`](../lib/算經.wy#L525) | `Math.acos` |
| [`正切`](../lib/算經.wy#L532) | `Math.tan` |
| [`反正切`](../lib/算經.wy#L569) | `Math.atan` |
| [`對數`](../lib/算經.wy#L656) | `Math.log` |
| [`冪`](../lib/算經.wy#L734) | `Math.pow` |
| [`平方根`](../lib/算經.wy#L758) | `Math.sqrt` |
| [`絕對`](../lib/算經.wy#L819) | `Math.abs` |
| [`取頂`](../lib/算經.wy#L824) | `Math.ceil` |
| [`取底`](../lib/算經.wy#L829) | `Math.floor` |
| [`取整`](../lib/算經.wy#L844) | `Math.round` |
| [`取整`](../lib/算經.wy#L858) | `Math.trunc` |

## [籌經](../lib/籌經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`求和`](../lib/籌經.wy#L1) | `reduce((a,b)=>a+b)` |

## [位經](../lib/js/位經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`左移`](../lib/js/位經.wy#L1) | `x<<y` |
| [`右移`](../lib/js/位經.wy#L6) | `x>>y` |
| [`補零右移`](../lib/js/位經.wy#L11) | `x>>>y` |
| [`位与`](../lib/js/位經.wy#L16) | `x&y` |
| [`位或`](../lib/js/位經.wy#L21) | `x\|y` |
| [`异或`](../lib/js/位經.wy#L26) | `x^y` |
| [`与非`](../lib/js/位經.wy#L31) | `~(x&y)` |
| [`位變`](../lib/js/位經.wy#L36) | `~x` |




## Help update this cheatsheet

This cheatsheet is generated direct from stdlibs. There are still a lot of functions are not listed above. If you would like to hep update this cheatsheet, here is the steps.

Add comments in the stdlib files (one line above the function/value), the format should look like this:
```
疏曰「「下溢。同犀之Math.floor也。」」
```

After you fill the comments, you need to run
```bash
npm run docs:update
```
to update the document.

Then you can submit a pull request. Thank you!
