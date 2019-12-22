try {
  process.chdir("./tools");
} catch (e) {} //make sure we're in tools directory

var fs = require("fs");
var execSync = require("child_process").execSync;
var parser = require("../src/parser");
var utils = require("./utils");

var files = fs.readdirSync("../examples/");
var prgms = {};
for (var i = 0; i < files.length; i++) {
  prgms[files[i].split(".")[0]] = fs
    .readFileSync("../examples/" + files[i])
    .toString();
}

var lib = utils.loadlib();

function main() {
  var ed = newEditor(prgms["mandelbrot"]);
  // var ln = newLineNo(ed);

  let highlighted = true;
  let currentHighlightTimeout;
  const highlightCode = () => {
    console.time("highlight");
    highlight([ed]);
    highlighted = true;
    console.timeEnd("highlight");
  };

  var sel = document.getElementById("pick-example");
  for (var k in prgms) {
    var opt = document.createElement("option");
    opt.value = k;
    opt.innerHTML = k;
    sel.appendChild(opt);
  }
  sel.value = "mandelbrot";
  sel.onchange = function() {
    ed.innerText = prgms[sel.value];
    run();
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

  function run() {
    highlightCode();
    document.getElementById("out").innerText = "";
    var code = compile("js", ed.innerText, {
      romanizeIdentifiers: "none",
      resetVarCnt: true,
      errorCallback: log2div,
      lib: STDLIB,
      reader: x => prgms[x]
    });
    document.getElementById("js").innerText = js_beautify(code);
    hljs.highlightBlock(document.getElementById("js"));
    code = code.replace(/console.log\(/g, `log2div(`);
    eval(code);
  }

  // document.getElementById("in").append(ln);
  document.getElementById("in").append(ed);

  document.getElementById("run").onclick = run;
  function log2div() {
    var outdiv = document.getElementById("out");
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "number") {
        outdiv.innerText += num2hanzi(arguments[i]);
      } else {
        outdiv.innerText += arguments[i];
      }
    }
    outdiv.innerText += "\n";
  }
  run();
}

var html = `<!--GENERATED FILE, DO NOT READ-->
<head>
<meta charset="UTF-8">
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
<table><tr><td><select id="pick-example"></select><button id="run">Run</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="auto-hl"/><small>Auto Highlight</small></td></tr><tr><td id="in" valign="top"><div class="tbar">EDITOR</div></td><td rowspan="2" valign="top"><div class="tbar">COMPILED JAVASCRIPT</div><pre id="js"></pre></td></tr><tr><td valign="top"><div class="tbar">OUTPUT</div><pre id="out"></pre></td></tr></table>
<script>var STDLIB = ${JSON.stringify(lib)};</script>
<script>var prgms = ${JSON.stringify(prgms)};</script>
<script>${main.toString()};main();</script>
</body>
`;

fs.writeFileSync("../site/ide.html", html);
