# API Specification

[Back to README](../README.md)

> 🚧 Please note this project is still under heavy development. The API might be changed frequently and this doc any not be always update to date. If you get any questions, feel free to raise an issue.


## Installation

We provide a compiler runs both in Node.js and modern browsers.

### Node.js

You can install the dependence by following command.

```bash
npm install @wenyanlang/core
```

```js
const Wenyan = require('@wenyanlang/core')
// or
const { compile } = require('@wenyanlang/core')
// or
import { compile } from '@wenyanlang/core'
```

### Browsers

You can add following lind to the head of your html body.

```html
<script src='https://unpkg.com/@wenyanlang/core/index.min.js'></script>
```

```html
<script>
// scripts will be exposed to window.Wenyan
const compiled = Wenyan.compile('吾有一言。曰「「問天地好在。」」。書之。')
</script>
```

## Exposed Functions

- core
  - [compile](#compile)
  - [wy2tokens](#wy2tokens)
  - [tokens2asc](#tokens2asc)

### Compile

[Source](../src/parser.js)

```ts
function compile(targetLang: string, source: string, options?: CompilerOptions)
```

**Parameters**

| Name | Type | Note |
| --- | --- | --- |
| targetLang | string | Can be `js`, `py` or `rb` |
| source | string | The Wenyan source code |
| options | object | [Compiler Options](#Compiler-Options) |

### wy2tokens

[Source](../src/parser.js)

TODO...

### tokens2asc

[Source](../src/parser.js)

TODO...

### Compiler Options

| Fields | Default Value | Note |
| --- | --- | --- |
| romanizeIdentifiers | none | Romanize variable identifiers (e.g. `甲` to `JIA2`) |
| resetVarCnt | false | Reset temporary variable counter |
| logCallback | console.log | Get verbose debug log | 
| errorLog | process.exit | Error log |