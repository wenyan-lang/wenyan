[Back to README](../README.md)

# Macros (Experimental)

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

See `./examples/macro.wy` for detailed usage!

## How it works

In the `或云` statement, you specify the alternative syntax, using `「甲」`,`「乙」`,`「丙」`etc. (十天干) to denote arguments, and in the `蓋謂` statement you specify what that statment should be replaced by, referencing the arguments using the same 天干. (more than 10 arugments is considered too hideous and therefore not possible).

It's just like regex.

Macros potentially solve other problems such as using 爲 instead of 為 etc. Currently, stdlib `列經` uses a couple of macros to make Higher-order functions such as `map` `filter` and `reduce` look prettier.

So instead of

```
施「遍施」於「加一」於「某列」。書之。
```

you can also do

```
凡「某列」皆「加一」其上者。書之。

```

where the syntax is defined by this macro in `列經`:

```
或云「「凡「甲」皆「乙」其上者」」。
蓋謂「「施「遍施」於「乙」於「甲」」」
```

## Cautions

Your macros cannot start or end with identifier/arguments (e.g. `或云「「書「甲」」」` or `或云「「「甲」焉」」` are BAD. It has to be `或云「「書「甲」焉」」`). Otherwise the preprocesser cannot find out where it starts/ends and might not work as expected. 


## Implementation details

The preprocessing is done before tokenization, and it searches all imported modules and gather all the macros and do the finding and replacing. (It might not be the most efficient way to do it, so if you have a better idea please let me know!). See `src/macro.js` for details.

## Your opinion

As you can see the macros are very powerful (maybe too powerful). And the downside is that it opens the door to a new dimension of hacks (probably wilder than I can imagine :) 

Please let me know what you think! Thanks!