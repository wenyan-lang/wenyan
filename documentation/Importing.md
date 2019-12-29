[Back to README](../README.md)

# Importing Scripts

## 1. Import statement (experimental)

Below is the new import syntax. Thanks everyone for the inspiration!

```
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
```

```
from math import sin, cos, pi
```

New usage of `今有`. `今有` is now used for exported/public variables, while `吾有` is private/scoped. Think of `今有` like `module.exports.x=`. Think of `吾有` like `var x=`

Example:

`易經.wy`(a.k.a. Random)

```
吾有一數。曰四十二。名之曰「運數」。

今有一術。名之曰「運」。欲行是術。必先得一數。曰「甲」。乃行是術曰。
	注曰「「運者。隨機種子也」」
	昔之「運數」者。今「甲」是矣。
是謂「運」之術也。

今有一術。名之曰「占」。是術曰。
	注曰「「線性同餘方法所得隨機數也」」
	有數四十二億九千四百九十六萬七千二百九十六。名之曰「模」。
	有數二千二百六十九萬五千四百七十七。名之曰「倍」。
	有數一。名之曰「增」。
	乘「倍」以「運數」。加其以「增」。除其以「模」。所餘幾何。昔之「運數」者。今其是矣。
	除「運數」以「模」。名之曰「卦」。
	乃得「卦」。
是謂「占」之術也。
```

`some_example.wy`(where you import random)

```
吾嘗觀「「易經」」之書。方悟「占」之義。
施「占」。書之。
```

Notice that in `易經.wy` the random seed (運數) is not exported. while its setter (運) is exported, but not imported by `some_example.wy`. Only `占` the generator is exported and imported, and can be used directly.


### JS implementation details

(Python, Ruby are not implemented yet)


JS Implementation uses `var MODULE_NAME = new function(){ ... }` trick to wrap imported modules. `今有` maps to `this.` So they can be accessed using `MOUDLE_NAME.identifier`. The import statements specifies which identifiers are actually required, and those that are are extracted from its scope using `var identifier = MODULE_NAME.identifier`. Therefore, `some_example.wy` compiles to this:

```
var 易經 = new function() {
    var 運數 = 42;
    this.運 = () => 0;
    this.運 = function(甲) {
        /*"運者。隨機種子也"*/
        運數 = 甲;
    };
    this.占 = () => 0;
    this.占 = function() {
        /*"線性同餘方法所得隨機數也"*/
        var 模 = 4294967296;
        var 倍 = 22695477;
        var 增 = 1;
        var _ans49 = 倍 * 運數;
        var _ans50 = _ans49 + 增;
        var _ans51 = _ans50 % 模;
        運數 = _ans51;
        var _ans52 = 運數 / 模;
        var 卦 = _ans52;
        return 卦
    };
};
var 占 = 易經.占;
var _ans48 = 占();
console.log(_ans48);
```

You can check out a more sophisticated example on the online IDE. In the IDE, you can import an example from another example, or the a module from standard lib.

`parser.compiler` has a new option called `reader`, which is a function you can provide to tell compiler how to read a module. The default for node.js is to look in current directory plus one directory down. For browser-side you might give it something fancy like AJAX calls or something.

When you build the CLI compiler, the source of the standard libraries are included, so you can still use it without having the `./lib` folder.

Please let me know if found any issue or have any suggestion!


## 2. Standard Library implementers needed!

You think you can write wenyan? Please join us!

Currently in the `./lib` folder there are a couple of "stubs" such as `算經`(math) `位經`(bit ops) `易經`(random).

They contain many functions to be implemented in wenyan. e.g. The `sin()` function currently contains this HACK:

```
今有一術。名之曰「正弦」。欲行是術。必先得一數。曰「甲」。乃行是術曰。
	施「Math.sin」於「甲」。名之曰「乙」。乃得「乙」。
是謂「正弦」之術也。
```

What we need to do is to replace `Math.sin` hack to a proper implementation (Taylor series?). 

Our goal is to implement the most commonly used library functions. If you are familiar with one or two of them, please submit a pull request!


## 3. Thanks!!

As you might have noticed, much of the syntax and many ideas are inspired by / borrowed from numerous posts and feature requests. Therefore, a thank you to everyone!