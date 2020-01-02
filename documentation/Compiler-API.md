[Back to README](../README.md)

# Compiler API Specification

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

You can add the following line to the head of your html body.

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
  - [execute](#execute)

### Execute

[Source](../src/parser.js)

```ts
function execute(source: string, options?: ExecuteOptions)
```

**Parameters**

| Name | Type | Note |
| --- | --- | --- |
| source | string | The Wenyan source code |
| options | object | [Execute Options](#Execute-Options) |

### Compile

[Source](../src/parser.js)

```ts
function compile(source: string, options?: CompilerOptions)
```

**Parameters**

| Name | Type | Note |
| --- | --- | --- |
| source | string | The Wenyan source code |
| options | object | [Compiler Options](#Compiler-Options) |

#### Compiler Options

| Fields | Default Value | Note |
| --- | --- | --- |
| lang | `js` | Target language, can be `js`, `py` or `rb` |
| romanizeIdentifiers | none | Romanize variable identifiers (e.g. `甲` to `JIA2`) |
| resetVarCnt | false | Reset temporary variable counter |
| logCallback | console.log | Get verbose debug log | 
| errorLog | process.exit | Error log |

#### Execute Options

Execute Options extends all field in [Compiler Options](#Compiler-Options)

| Fields | Default Value | Note |
| --- | --- | --- |
| outputHanzi | true | Convert numbers and bools to Hanzi |
| output | `console.log` | You can redirect the output if you don't want to use `console.log` |
