try {
  process.chdir("./tools");
} catch (e) {} //make sure we're in tools directory

var fs = require("fs");
var execSync = require("child_process").execSync;
var parser = require("../src/parser");
var utils = require("./utils");
const { examplesAlias } = require("./examples_info");

var files = fs.readdirSync("../examples/").filter(x => x.endsWith(".wy"));
var prgms = {};
for (var i = 0; i < files.length; i++) {
  prgms[files[i].split(".")[0]] = fs
    .readFileSync("../examples/" + files[i])
    .toString();
}

var lib = utils.loadlib();

function main() {
  function hideImportedModules(source) {
    const markerRegex = /\/\*___wenyan_module_([\s\S]+?)_(start|end)___\*\//g;
    const matches = [];

    var match;
    while ((match = markerRegex.exec(source))) {
      if (!match) break;

      if (matches.length) {
        const prev = matches[matches.length - 1];
        if (prev[2] !== "end" && prev[1] !== match[1]) continue; // ignore nested imports
      }

      matches.push(match);
    }

    for (const match of matches) {
      if (match[2] === "start") continue;

      source = source.replace(
        new RegExp(
          `\\/\\*___wenyan_module_${match[1]}_start___\\*\\/[\\s\\S]*\\/\\*___wenyan_module_${match[1]}_end___\\*\\/`
        ),
        `/* module ${match[1]} is hidden */\n`
      );
    }

    return source;
  }

  let highlighted = true;
  let currentHighlightTimeout;
  const highlightCode = () => {
    console.time("highlight");
    highlight([ed]);
    highlighted = true;
    console.timeEnd("highlight");
  };

  var makeTitle = example => {
    return (examplesAlias[example] || example) + " - wenyan-lang Online IDE";
  };

  var sel = document.getElementById("pick-example");
  for (var k in prgms) {
    var opt = document.createElement("option");
    opt.value = k;
    opt.text = k + (examplesAlias[k] ? ` (${examplesAlias[k]})` : "");
    sel.appendChild(opt);
  }
  var match = location.search.match(/(?:^\?|&)example=([^&]+)/);
  match = match && decodeURIComponent(match[1]);
  var example = match || "mandelbrot";
  var ed = newEditor(prgms[example]);
  // var ln = newLineNo(ed);
  sel.value = example;
  document.title = makeTitle(example);
  sel.onchange = function() {
    var example = sel.value;
    if (!prgms[example]) {
      return;
    }
    var title = makeTitle(example);
    document.title = title;
    ed.innerText = prgms[example];
    run();
    if (history.pushState) {
      var url = "?example=" + encodeURIComponent(example);
      history.pushState({ example: example }, title, url);
    }
  };
  window.onpopstate = function(event) {
    var example = event.state && event.state.example;
    if (example && prgms[example]) {
      sel.value = example;
      document.title = makeTitle(example);
      ed.innerText = prgms[example];
      run();
    }
  };
  var autohl = document.getElementById("auto-hl");
  autohl.onchange = function() {
    if (autohl.checked) {
      alert(
        "[WARN] Auto highlight might conflict with system input method on certain browsers."
      );
      ed.oninput = e => {
        if (e.inputType !== "insertParagraph") {
          if (ed.innerText.length < 1500) {
            highlightCode();
            highlighted = true;
          } else {
            if (!highlighted) {
              clearTimeout(currentHighlightTimeout);
            }
            const wait = ed.innerText.length / 2;
            currentHighlightTimeout = setTimeout(highlightCode, wait);
            highlighted = false;
          }
        }
      };
    } else {
      ed.oninput = () => 0;
    }
  };

  var selr = document.getElementById("pick-roman");
  for (var k of ["none", "pinyin", "baxter", "unicode"]) {
    var opt = document.createElement("option");
    opt.value = k;
    opt.innerHTML = k;
    selr.appendChild(opt);
  }
  selr.value = "none";
  selr.onchange = run;

  var hidestd = document.getElementById("hide-std");
  var outdiv = document.getElementById("out");

  hidestd.onchange = run;

  function run() {
    highlightCode();
    document.getElementById("out").innerText = "";
    var code = compile(ed.innerText, {
      lang: "js",
      romanizeIdentifiers: selr.value,
      resetVarCnt: true,
      errorCallback: (...args) => (outdiv.innerText += args.join(" ") + "\n"),
      lib: STDLIB,
      reader: x => prgms[x]
    });

    var showcode = hidestd.checked ? hideImportedModules(code) : code;

    document.getElementById("js").innerText = js_beautify(showcode);
    hljs.highlightBlock(document.getElementById("js"));

    evalCompiled(code, {
      output: (...args) => {
        outdiv.innerText += args.join(" ") + "\n";
      }
    });
  }

  document.getElementById("in").append(ed);
  document.getElementById("run").onclick = run;
  run();
}

var html = `<!--GENERATED FILE, DO NOT READ-->
<head>
<meta charset="UTF-8">
<title>wenyan-lang Online IDE</title>
<style>
[contenteditable="true"]:focus {outline: none;}
pre{tab-size: 4;}
.tbar{background:white;color:black;font-style:italic;font-family:monospace;font-size:14px;opacity:80%;margin-top:20px;}
</style>
</head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.2/beautify.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/monokai-sublime.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script>
<script>${utils.catsrc()}</script>
<body style="background:#272822;padding:20px;color:white;font-family:sans-serif;">
  <h2><i>wenyan-lang</i></h2>
<table><tr><td><select id="pick-example"></select><button id="run">Run</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="auto-hl"/><small>Auto Highlight</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="hide-std" checked=""/><small>Hide Imported Code</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Romanization</small><select id="pick-roman"></select></td></tr><tr><td id="in" valign="top"><div class="tbar">EDITOR</div></td><td rowspan="2" valign="top"><div class="tbar">COMPILED JAVASCRIPT</div><pre id="js"></pre></td></tr><tr><td valign="top"><div class="tbar">OUTPUT</div><pre id="out"></pre></td></tr></table>
<script>var STDLIB = ${JSON.stringify(lib)};</script>
<script>var prgms = ${JSON.stringify(prgms)};</script>
<script>var examplesAlias = ${JSON.stringify(examplesAlias)};</script>
<script>${main.toString()};main();</script>
</body>
`;

fs.writeFileSync("../site/ide.html", html);
