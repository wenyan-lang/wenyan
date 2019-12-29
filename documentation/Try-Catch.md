[Back to README](../README.md)

# Try-Catch

```
姑妄行此。
	嗚呼。「「滅頂」」之禍。

如事不諧。豈「「ReferenceError」」之禍歟。
	吾有一言。曰「「本無此物。奈何用之」」。書之。

豈「「SyntaxError」」之禍歟。
	吾有一言。曰「「不合文法。不通之甚」」。書之。

豈「「TypeError」」之禍歟。
	吾有一言。曰「「物各其類。豈可混同」」。書之。

豈「「滅頂」」之禍歟。
	吾有一言。曰「「嗚呼哀哉。伏维尚飨」」。書之。

不知何禍歟。名之曰「奇禍」。
	吾有一言。曰「「人坐家中。禍從天降」」。書之。

乃作罷。

```

Which is roughly equivalent to this JavaScript:

```JavaScript
try {
	var e = new Error(); e.name = "滅頂"; throw e;
} catch(e) {
	if (e.name == "ReferenceError") {console.log("本無此物。奈何用之")}
	else if (e.name == "SyntaxError") {console.log("不合文法。不通之甚")}
	else if (e.name == "TypeError") {console.log("物各其類。豈可混同")}
	else if (e.name == "滅頂") {console.log("嗚呼哀哉。伏维尚飨")}
	else {var err = e; console.log("人坐家中。禍從天降")}
}

```

If you do not need to catch the errors, you can do:

```
姑妄行此。
	嗚呼。「「無足輕重」」之禍。
如事不諧乃作罷。
```

Which roughly equals to:

```JavaScript
try{
	var e = new Error(); e.name = "無足輕重"; throw e;
}catch(_){}
```

You can also do this to catch any error:

```
姑妄行此。
	嗚呼。「「事不關心」」之禍。
如事不諧。不知何禍歟。書之。乃作罷。
```

Which roughly equals to:

```JavaScript
try{
	var e = new Error(); e.name = "事不關心"; throw e;
}catch(e){
	console.log(e);
}
```

You can see details about the usage in `./examples/try.wy`.