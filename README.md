<img src="screenshots/logo.png" align="right" width="100" height="100"/>

# 文言 wenyan-lang

[http://wenyan-lang.lingdong.works](http://wenyan-lang.lingdong.works)

[中文README](./README-ZH.md)

文言文編程語言。A programming language for the ancient Chinese. [Try it online.](http://wenyan-lang.lingdong.works/ide.html)

![](screenshots/screenshot01.png)

## 序

> 夫[唐](https://en.wikipedia.org/wiki/Emperor_Yao)、[虞](https://en.wikipedia.org/wiki/Emperor_Shun)之世，[結繩而足治](https://ctext.org/book-of-changes/xi-ci-xia/zh)，屈指而足算。是時豈料百代之後，計算機械之巧，精於[公輸](https://en.wikipedia.org/wiki/Lu_Ban)之[木鳶](https://en.wikipedia.org/wiki/Lu_Ban#Inventions)，善於[武侯](https://en.wikipedia.org/wiki/Zhuge_Liang)之[流馬](https://en.wikipedia.org/wiki/Wooden_ox)；程式語言之多，繁若[《天官》](https://ctext.org/shiji/tian-guan-shu/zh)之星宿，奇勝[《山經》](https://en.wikipedia.org/wiki/Classic_of_Mountains_and_Seas)之走獸。[鼠](https://golang.org/)、[蟹](https://www.rust-lang.org/)、[鑽](http://ruby-lang.org/)、[魚](https://fishshell.com/)，或以速稱。[蛇](https://www.python.org/)、[象](https://www.php.net/)、[駱](https://www.perl.org/)、[犀](http://shop.oreilly.com/product/9780596805531.do)，各爭文采。方知[鬼之所以夜哭，天之所以雨粟](https://ctext.org/huainanzi/ben-jing-xun/zh)。然以文言編程者 ，似所未有。此誠非文脈之所以傳，文心之所以保。[嗟予小子](https://zh.wikisource.org/zh-hant/%E6%A6%AE%E6%9C%A8_(%E9%99%B6%E6%B7%B5%E6%98%8E))，遂有斯志。然則數寸之烏絲猶覆於頭，[萬卷之素書未破於手](https://zh.wikisource.org/zh-hant/%E5%A5%89%E8%B4%88%E9%9F%8B%E5%B7%A6%E4%B8%9E%E4%B8%88%E4%BA%8C%E5%8D%81%E4%BA%8C%E9%9F%BB)；一身長羈於遠邦，兩耳久矌于[雅言](https://zh.wikipedia.org/wiki/%E9%9B%85%E9%9F%B3)。然夫文章者吾之所宿好，程式者偶承時人之謬譽。故[希孟](https://en.wikipedia.org/wiki/Wang_Ximeng)不慚年少，[莊生](https://en.wikipedia.org/wiki/Zhuang_Zhou)不望[無涯](https://ctext.org/zhuangzi/nourishing-the-lord-of-life/zh)。乃作斯言。誠未能嘔瀝[長吉](https://en.wikipedia.org/wiki/Li_He)之[心血](https://zh.wikisource.org/zh-hant/%E6%9D%8E%E8%B3%80%E5%B0%8F%E5%82%B3)，亦庶幾免於[義山](https://en.wikipedia.org/wiki/Li_Shangyin)之[流沫](https://zh.wikisource.org/zh-hant/%E9%9F%93%E7%A2%91)。既成之後，復學[干將鑄劍](https://zh.wikisource.org/wiki/%E9%91%84%E5%8A%8D)而自飼，[越王嚐糞](https://ctext.org/wu-yue-chun-qiu/yue-wang-gou-jian-wu-nian/zh)而當先。自謂偶追[《十書》](https://en.wikipedia.org/wiki/Ten_Computational_Canons)之筆意，但恨少[八家](https://en.wikipedia.org/wiki/Eight_Masters_of_the_Tang_and_Song)之淋漓。此[子山](https://en.wikipedia.org/wiki/Yu_Xin)所謂[士衡抚掌而甘心，平子見陋而固宜](https://zh.wikisource.org/zh-hant/%E5%93%80%E6%B1%9F%E5%8D%97%E8%B3%A6)。然則雖實[覆甕](https://zh.wikisource.org/zh-hant/%E6%99%89%E6%9B%B8/%E5%8D%B7092#%E5%B7%A6%E6%80%9D)之質，尚存斧正之望；雖乏[呂相](https://en.wikipedia.org/wiki/L%C3%BC_Buwei)之金，[易字](https://zh.wikisource.org/zh/%E5%8F%B2%E8%A8%98/%E5%8D%B7085)之渴蓋同。此亦開源之大義，吾輩之所以勉勵也。一笑。


## Helloworld

Wenyan:

```
吾有一數。曰三。名之曰「甲」。
為是「甲」遍。
	吾有一言。曰「「問天地好在。」」。書之。
云云。
```
Equivalent JavaScript:

```JavaScript
var n = 3;
for (var i = 0; i < n; i++) {
	console.log("問天地好在。");
}
```

Output:

```
問天地好在。
問天地好在。
問天地好在。
```

Punctuations and newlines are completely optional (just like they are in Classical Chinese), so the above code is equivalent to:

```
吾有一數曰三名之曰「甲」為是「甲」遍吾有一言曰「「問天地好在」」書之云云
```

More sophisticated examples, such as the Sieve of Eratosthenes, Quicksort, Mandelbrot set, and Tower of Hanoi, can be found in the `./examples` folder.

## Features
- An [NLP](https://en.wikipedia.org/wiki/Natural-language_programming) sharing the grammar of [Classical Chinese](https://en.wikipedia.org/wiki/Classical_Chinese)
- Compiles to [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) or [Python](https://python.org)
- [Turing complete](https://github.com/LingDong-/wenyan-lang/blob/master/examples/turing.wy)
- An [online IDE](http://wenyan-lang.lingdong.works/ide.html)
- [Examples](https://github.com/LingDong-/wenyan-lang/tree/master/examples) to get started


## Installation

### The Compiler

Clone the repo, (OR simply download `./build/wenyan.js` and set its executable bit using the terminal command `chmod +x wenyan.js`). Then run `./build/wenyan.js` to compile your wenyan souce code to target language. Calling the compiler without arguments prints the help message, reproduced below:

```
Usage: wenyan [options] [input files]

Options:
--eval    -e <string>  : Give a string instead of a file (default: `')
--exec    -x <boolean> : Execute output (default: `false')
--inspect -i <boolean> : Interactive REPL (default: `false')
--lang    -l <string>  : Language: js/py (default: `js')
--log        <string>  : Log file (default: `/dev/null')
--output  -o <string>  : Output file (default: `/dev/stdout')
--roman   -r <boolean> : Romanize identifiers (default: `true')
```
Try building the included examples first, e.g.:

```
./build/wenyan.js examples/helloworld.wy -o helloworld.js
```

#### Building platform-specific binaries

- Clone the repo
- `npm install`
- `npm run make_cmdline`

The macOS, Windows and Linux binaries will be in the `./build` folder.


### [The online IDE](http://wenyan-lang.lingdong.works/ide.html)

![](screenshots/screenshot02.png)


## Syntax Cheatsheet

A context-free grammar description is under construction. Meanwhile, please check the cheatsheet below, or look into `src/parser.js` to learn about the syntax. Be sure to check out the examples from the online IDE too!

### Variables

| wenyan | JavaScript |
|---|---|
|`吾有一數。曰三。名之曰「甲」。` | `var a = 3;` |
|`有數五十。名之曰「大衍」。` | `var dayan = 50;` |
|`昔之「甲」者。今「大衍」是矣。` | `a = dayan;` |
|`吾有一言。曰「「噫吁戲」」。名之曰「乙」。` | `var b = "alas!";` |
|`吾有一爻。曰陰。名之曰「丙」。` | `var c = false;` |
|`吾有一列。名之曰「丁」。` | `var d = [];` |
|`吾有三數。曰一。曰三。曰五。名之曰「甲」曰「乙」曰「丙」。` | `var a=1,b=3,c=5;` |


### Control

| wenyan | JavaScript |
|---|---|
|`若三大於二者。乃得「「想當然耳」」也。` | `if (3>2){ return "of course"; }` |
|`若三不大於五者。乃得「「想當然耳」」。若非。乃得「「怪哉」」也。` | `if(3<=5){return "of course"}else{return "no way"}` |
|`為是百遍。⋯⋯ 云云。` | `for (var i = 0; i < 100; i++){ ... }` |
|`恆為是。⋯⋯ 云云。` | `while (true) { ... }` |
|`凡「天地」中之「人」。⋯⋯ 云云。` | `for (var human of world){ ... }` |
|`乃止。` | `break;` |


### Math

| wenyan | JavaScript |
|---|---|
|`加一以二。` | `1+2` |
|`加一於二。` | `2+1` |
|`加一以二。乘其以三。` | `(1+2)*3` |
|`除十以三。所餘幾何。` | `10%3` |
|`減七百五十六以四百三十三。名之曰「甲」。` | `var a = 756-433;` |
|`夫「甲」「乙」中有陽乎。` | `a \|\| b` |
|`夫「甲」「乙」中無陰乎。` | `a && b` |


### Containers
Arrays are 1-indexed.

| wenyan | JavaScript |
|---|---|
|`吾有一列。名之曰「甲」。充「甲」以四。以二。` | `var a = []; a.push(4, 2);` |
|`銜「甲」以「乙」。以「丙」` | `a.concat(b).concat(c);` |
|`夫「甲」之一。` | `a[0]` |
|`夫「甲」之其餘。` | `a.slice(1);` |
|`夫「玫瑰」之「「名」」。` | `rose["name"]` |
|`夫「寶劍」之長。` | `sword.length;` |


### Functions
| wenyan | JavaScript |
|---|---|
|`吾有一術。名之曰「吸星大法」。是術曰。⋯⋯是謂「吸星大法」之術也。`|`function f(){...}`|
|`吾有一術。名之曰「六脈神劍」。欲行是術。必先得六數。曰「甲」。曰「乙」。曰「丙」。曰「丁」。曰「戊」。曰「己」乃行是術曰。⋯⋯是謂「六脈神劍」之術也。`|`function f(a,b,c,d,e,f){...}`|
|`吾有一術。名之曰「翻倍」。欲行是術。必先得一數。曰「甲」。乃行是術曰。乘「甲」以二。名之曰「乙」。乃得「乙」。是謂「翻倍」之術也。`|`function double(a){var b = a * 2; return b;}`|
|`施「翻倍」於「大衍」。`|`double(dayan);`|
|`吾有一數。曰五。書之。`|`console.log(5);`|

## Renderer

`src/render.js` can render a wenyan program into an image that resembles pages from historical printed books. It can also parse the resultant SVG file back to the original program. Below is the rendering of the Universal Turing Machine written in wenyan:

![](screenshots/screenshot03.png)


## Contributed Tools

- [Plugin for VSCode](https://github.com/antfu/wenyan-lang-vscode) by [antfu](https://github.com/antfu)
- [Plugin for Vim](https://github.com/voldikss/vim-wenyan) by [voldikss](https://github.com/voldikss)

## Test

Install Mochajs

```Shell
npm install --global mocha
```

Go to src/test folder, run

```Shell
mocha
```



## Feature Requests

Before opening an Issue, please check if it belongs to the below categories:

|Name|Priority|Help needed|
|---|---|---|
|[Language Spec](https://github.com/LingDong-/wenyan-lang/issues/1)|  ***** |  |
|[Class](https://github.com/LingDong-/wenyan-lang/issues/31) / [Object literals](https://github.com/LingDong-/wenyan-lang/issues/20) |  *** | |
|[Import statements](https://github.com/LingDong-/wenyan-lang/issues/100) |  *** | |
|Standard library ([Math](https://github.com/LingDong-/wenyan-lang/issues/55)/[Bitwise ops](https://github.com/LingDong-/wenyan-lang/issues/2)/[Random](https://github.com/LingDong-/wenyan-lang/issues/87)) |  ***** | |
|[Test suite](https://github.com/LingDong-/wenyan-lang/issues/38)|  **** | √  |
|[Switch statements](https://github.com/LingDong-/wenyan-lang/issues/53)|  *** | |
|[Functional programming](https://github.com/LingDong-/wenyan-lang/issues/99) |  *** | |
|Stricter compiler |  **** | |
|Compiler for other languages |  ** | √ |
|[Plugins for editors](https://github.com/LingDong-/wenyan-lang/issues/77) |  ** | √ |
|Convert [js](https://github.com/LingDong-/wenyan-lang/issues/47)/[py](https://github.com/LingDong-/wenyan-lang/issues/67)/[anything](https://github.com/LingDong-/wenyan-lang/issues/73) back to wenyan |  * | √ |
|[Escaping](https://github.com/LingDong-/wenyan-lang/issues/84)/[generating](https://github.com/LingDong-/wenyan-lang/issues/128) special characters |  *** | |
|[Alternative syntax for 「「」」](https://github.com/LingDong-/wenyan-lang/issues/81)|  ** | |
|[Alternative symbols for 。](https://github.com/LingDong-/wenyan-lang/issues/93)|  ** | |
|Online IDE [fonts](https://github.com/LingDong-/wenyan-lang/issues/5) and [vertical text](https://github.com/LingDong-/wenyan-lang/issues/9) |  ** | |
|[Rendering comment as small inline text](https://github.com/LingDong-/wenyan-lang/issues/148) | ** | |
|More examples | ** | √ |

If you could help implement a feature with a `√` under `help needed`, please feel free to submit a pull request. It would be very much appreciated! If you would like to help out on other features, please let me know too! Thanks.


## Known bugs
|Name|Priority|Help needed|
|---|---|---|
|[hanzi2num conversion error](https://github.com/LingDong-/wenyan-lang/issues/114)|  ***** | |
|[hanzi2num multi-character numbers not included](https://github.com/LingDong-/wenyan-lang/issues/130) |  *** | |


