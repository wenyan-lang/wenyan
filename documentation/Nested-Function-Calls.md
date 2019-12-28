[Back to README](../README.md)

# Nested Function Calls

## Stack-based way to nest function calls

Due to popular demand, nested function calls is now a feature. Here is a taste:

```
注曰「「辛 = 戊(甲,丁(乙,丙))」」

夫「甲」。夫「乙」。夫「丙」。取二以施「丁」。取二以施「戊」。名之曰「辛」。
```

More complex example for the courageous:

```
注曰「「壬 = 丁(己(戊(甲,丁(乙,丙))),甲,乙)」」

夫「甲」。夫「乙」。夫「丙」。取二以施「丁」。取二以施「戊」。取一以施「己」。夫「甲」。夫「乙」。取三以施「丁」。名之曰「壬」。
```

## How it works

The original syntax of wenyan already employs a stack-like behavior. You can use `其` to refer to the previous unnamed variable, you can use `書之` to print all the unnamed variables, use `名之曰` to name them etc. Therefore, it is natural to use the same system for function calls.

Now I'll refer to the "list of unnamed variables" as the "stack" for convenience.

`夫` keyword pushes a variable in into the stack. `取n` marks the last `n` items on the stack as "usable". `以施f` takes all the items marked "usable" and apply function `f` that takes those items as arguments, and push the result onto the stack. Finally you can use `名之曰` to take stuff from back the stack and give them names for later use.

Recap on other features that already existed before this update:

- `噫` Clears the stack, discarding everything.
- `其` Refers to the most recent item on the stack. It also clears the stack. The reason for this is not techincal, but is purely done from Classical Chinese readability standpoint: if you use multiple `其` in a row, it can be very confusing: `加其以其。乘其以其。昔之其者。今其是矣。`. Hence.

More examples, showing that you can also push items of an Array, math results, and so on to stack:

```
注曰「「庚 = 丁(甲+乙,癸[3],癸.length)」」

加「甲」以「乙」。夫「癸」之三。夫「癸」之長。取三以施「丁」。名之曰「庚」。
```

You can find more examples in `./examples/nested_fun.wy`

A thank you to @Lotayou and everyone for the discussion in #285 and #301. More functional programming goodies are on their way!

## Automatically curried functions

functions in wenyan are now automatically curried, that is, partially applied to return a new function.

```
吾有一術。名之曰「丁」。欲行是術。必先得三數。曰「寅」曰「卯」曰「辰」乃行是術曰。
    乘「寅」以「卯」。加其以「辰」。乃得其。
是謂「丁」之術也。

施「丁」於一於二。名之曰「半丁」。
施「半丁」於三。書之。
```

compiles to

```
var 丁 = () => 0;
丁 = function(寅) {
    return function(卯) {
        return function(辰) {
            var _ans1 = 寅 * 卯;
            var _ans2 = _ans1 + 辰;
            return _ans2
        };
    };
};
var _ans3 = 丁(1)(2);
var 半丁 = _ans3;
var _ans4 = 半丁(3);
console.log(_ans4);
```

Again, more FP on its way.
