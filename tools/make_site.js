try {
  process.chdir("./tools");
} catch (e) {} //make sure we're in tools directory

const fs = require("fs");
const utils = require("./utils");
const render = require("../src/render");

const helloworld = fs.readFileSync("../examples/helloworld+.wy").toString();
const sieve = fs.readFileSync("../examples/sieve.wy").toString();

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  var h;
  if (file.endsWith(".png")) {
    h = "data:image/png;base64, ";
  } else {
    h = "data:image/jpeg;base64, ";
  }
  return h + Buffer.from(bitmap).toString("base64");
}

function load_svg(pth) {
  var svg = fs.readFileSync(pth).toString();
  svg = svg.replace(/(\d+)\.(\d)\d*/g, `$1.$2`);
  svg = svg.replace(/width=".+?"/, `width="100%"`);
  svg = svg.replace(/height=".+?"/, ``);
  console.log(svg);
  return svg;
}

function main() {
  setTheme(BOOK_COLORS);

  var eds = [];
  var outs = [];

  function run(i) {
    var ed = eds[i];
    var out = outs[i];
    highlight([ed]);
    out.innerText = "";
    var hasError = false;
    var code = compile("js", ed.innerText, {
      romanizeIdentifiers: "none",
      errorCallback: function(x) {
        hasError = true;
        log2div(i, x);
      }
    });
    if (i == 0) {
      document.getElementById("js").innerText =
        "// JavaScript\n" + js_beautify(code);
      var rb = compile("rb", ed.innerText, {
        romanizeIdentifiers: "none",
        errorCallback: () => 0
      });
      document.getElementById("rb").innerText =
        "# Ruby\n" + rb.split("#####\n")[1];
      // hljs.highlightBlock(document.getElementById("rb"));
      var py = compile("py", ed.innerText, {
        romanizeIdentifiers: "none",
        errorCallback: () => 0
      });
      document.getElementById("py").innerText =
        "# Python\n" + py.split("#####\n")[1];
      // hljs.highlightBlock(document.getElementById("py"));
    }
    // hljs.highlightBlock(document.getElementById("js"));
    if (!hasError) {
      code = code.replace(/console.log\(/g, `log2div(` + i + ",");
      eval(code);
    }
  }

  function log2div() {
    // alert(arguments[1])
    if (arguments[1] instanceof Array && arguments.length == 2) {
      var l = [];
      for (var i = 0; i < arguments[1].length; i++) {
        if (i != 0) {
          l.push("。");
        }
        l.push(arguments[1][i]);
      }
      return log2div(arguments[0], ...l);
    }
    var outdiv = outs[arguments[0]];
    for (var i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == "number") {
        outdiv.innerText += num2hanzi(arguments[i]);
      } else {
        outdiv.innerText += arguments[i];
      }
    }
    outdiv.innerText += "\n";
  }

  function loop() {
    requestAnimationFrame(loop);
    document.getElementById("bg-inner").style.top =
      -250 - window.scrollY * 0.8 + "px";
    document.getElementById("bg-inner").style.left =
      50 + window.scrollY * 0.141 + "px";
  }
  loop();

  var trythem = document.getElementsByClassName("tryit");

  for (var i = 0; i < trythem.length; i++) {
    var ed = newEditor(prgms[trythem[i].getAttribute("data-prgm")]);
    // ed.style.width="50%";
    var out = document.createElement("div");
    out.classList.add("out");
    trythem[i].getElementsByClassName("in-box")[0].appendChild(ed);
    trythem[i].getElementsByClassName("out-box")[0].appendChild(out);
    eds.push(ed);
    outs.push(out);
  }

  var trybuts = document.getElementsByClassName("play-btn");
  for (var i = 0; i < trybuts.length; i++) {
    (function() {
      var _i = i;
      trybuts[_i].onclick = function() {
        run(_i);
      };
    })();
  }

  for (var i = 0; i < eds.length; i++) {
    run(i);
  }
}

var html = `<!--GENERATED FILE, DO NOT READ-->
<head>
<meta charset="UTF-8">
<style>
body{
  font-family: sans-serif;
  margin:0px;
  background: rgb(50,50,50);
}
[contenteditable="true"]:focus {outline: none;}
pre{
  tab-size: 4;
  font-size: 16;
}
#bg{
  width: 100%;
  height: 400px;
  // overflow: scroll;
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -100;
  border-bottom: 1px solid black;
}
#bg-inner{
  width: 100%;
  height: 100%;
  min-width: 1200px;
  position: absolute;
  transform: rotate(10deg);
}
#title-box{
  background: rgba(255,255,255,0.95);
  text-align: center;
  top: 100px;
  font-weight: 100;
  width: 700px;
  margin: 100px auto;
  padding: 20px;
  border-left: 8px solid black;
  border-right: 8px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
#title1{
  font-size: 60px;
}
#title2{
  font-size: 20px;
}
#content-box{
  width: 100%;
  background: white;
  --shadow-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px var(--shadow-color);
}
#content{
  min-height: 1000px;
  max-width: 980px;
  min-width: 800px !important;
  margin: 0 auto;
  padding: 10px;
  padding-top: 50px;
  line-height: 160%;
}
h1{
  margin-top: 40px;
  font-weight: normal;
  font-size: 28px;
}
h2{
  font-size: 20px;
  font-weight: normal;
  margin-left:20px;
  margin-bottom: 10px;
}
.tryit{
  border: 1px solid black;
  padding: 10px 10px 10px 10px;
  width: calc(100% - 40px);
  margin: 0 auto;
  max-height: 300px;
  overflow: scroll;
  margin-bottom: 20px;
}
.out{
  color: grey;
  font-size: 14px;
  max-height: 300px;
  overflow: scroll;
  margin-left: 20px;
  font-family: monospace;
  word-break: break-all;
}
.in-box{
  border-right: 1px solid grey;
}
.play-btn{
  cursor: pointer;
}
.play-btn:hover{
  color: ${render.BOOK_COLORS.ctrl}
}
.compile-out{
  border-left: 3px solid; 
  padding-left: 20px;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  margin: 10px auto;
}
.compile-out-box{
  width: calc(100% - 40px);
  margin-left: 20px;
  border: 1px solid black;
  margin-top: 20px;
}
#js{
  border-color: #ffb115;
}
#py{
  border-color: #1e2933;
}
#rb{
  border-color: #990000;
}


.language-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0 20px 30px;
} }

.language-item:last-child {
  border-bottom: none;
}

.big-btn{
  border: 1px solid black;
  border-left: 5px solid black;
  margin: 20px;
  display:inline-block;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
}
.big-btn:hover{
  color: white;
  background: black;
}
</style>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.2/beautify.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/vs.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script>

<script>${utils.catsrc()}</script>
<div id="bg"><div id="bg-inner">${load_svg("../renders/turing.svg")}</div></div>

<div id="title-box"><div id="title1">文言 / wenyan&#8209;lang</div><div id="title2">編程語言 Programming Language for the ancient Chinese</div></div>


<div id="content-box">
<div id="content">

<i>文言</i>, or <i>wenyan</i>, is an esoteric programming language that closely follows the grammar and tone of classical Chinese literature. Moreover, the alphabet of <i>wenyan</i> contains only traditional Chinese characters and <code>「」</code> quotes, so it is guaranteed to be readable by ancient Chinese people. You too can try it out on the <a href="./ide.html">online editor</a>, <a href="https://github.com/LingDong-/wenyan-lang#installation">download a compiler</a>, or view the <a href="https://github.com/LingDong-/wenyan-lang">source code</a>.

<h1>Syntax</h1>

Syntax of <i>wenyan</i> is just like that of its namesake, classical Chinese:

<h2>天地，好在否！/ HELLO WORLD <span class="play-btn">▶&#xFE0E;</span></h2>

<table class="tryit" data-prgm="helloworld"><tr>
  <td class="in-box" valign="top"></td><td class="out-box" valign="top"></td>
</tr></table>

The code above is editable, go ahead customize the greeting and hit ▶&#xFE0E;! Another slightly more sophisticated example, using the sieve of Erathosthenes to find prime numbers:

<h2>埃氏筛 / SIEVE OF ERATOSTHENES <span class="play-btn">▶&#xFE0E;</span></h2>

<table class="tryit" data-prgm="sieve"><tr>
  <td class="in-box" valign="top"></td><td class="out-box" valign="top"></td>
</tr></table>

You can find many more examples such as a Universal Turing Machine, a Mandelbrot set plotter, a Tower of Hanoi solver, and so on on the <a href="./ide.html">online IDE</a>.


<h1>Compilation</h1>

<i>wenyan</i> currently compiles to JavaScript, Python, or Ruby, and will support more languages (e.g. C) in the future. The Hello World example (or whatever you edited it to be) above translates to:

<div class="compile-out-box">
  <div class='language-item'>
    <pre class="compile-out" id="js"></pre>
  </div>
  <div class='language-item'>
    <pre class="compile-out" id="py"></pre>
  </div>
  <div class='language-item'>
    <pre class="compile-out" id="rb"></pre>
  </div>
</div>

<h1>Get</h1>

<span class="big-btn" onclick="window.location.href='https://github.com/LingDong-/wenyan-lang'">SOURCE CODE (GITHUB)</span>
<span class="big-btn" onclick="window.location.href='./ide.html'">ONLINE EDITOR</span>
<span class="big-btn" onclick="window.location.href='https://github.com/LingDong-/wenyan-lang#syntax-cheatsheet'">REFERENCE</span>




<div style="height:180px;"></div>

</div>

<script>var prgms={helloworld:\`${helloworld}\`,sieve:\`${sieve}\`}</script>
<script>${main.toString()};main()</script>
</body>
`;

fs.writeFileSync("../site/index.html", html);
