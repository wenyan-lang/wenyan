<!-- GENERATED FILE, DO NOT MODIFY-->

[Back to README](../README.md)

# Standard Library Cheatsheet

Last updated: Mon, 30 Dec 2019 06:00:52 GMT


## Usage

```
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
```

## [易經](https://github.com/LingDong-/wenyan-lang/blob/master/lib/易經.wy)

| Wenyan | Javascript Equivalent |
|---|---|

## [算經](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`圓周率`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L166) | `Math.PI` |
| [`下溢`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L186) | `Math.floor` |
| [`下溢`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L191) | `Math.ceil` |
| [`正弦`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L462) | `Math.sin` |
| [`餘弦`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L492) | `Math.cos` |
| [`反餘弦`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L527) | `Math.acos` |
| [`正切`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L534) | `Math.tan` |
| [`反正切`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/算經.wy#L571) | `Math.atan` |

## [籌經](https://github.com/LingDong-/wenyan-lang/blob/master/lib/籌經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`求和`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/籌經.wy#L1) | `reduce((a,b)=>a+b)` |

## [位經](https://github.com/LingDong-/wenyan-lang/blob/master/lib/js/位經.wy)

| Wenyan | Javascript Equivalent |
|---|---|
| [`左移`](https://github.com/LingDong-/wenyan-lang/blob/master/lib/js/位經.wy#L1) | `(x=>y=>(x<<y))` |




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
