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
    Highlighter.highlight([ed]);
    highlighted = true;
    console.timeEnd("highlight");
  };

  var makeTitle = example => {
    return (Examples.examplesAlias[example] || example) + " - wenyan-lang Online IDE";
  };

  var sel = document.getElementById("pick-example");
  for (var k in Examples.examples) {
    var opt = document.createElement("option");
    opt.value = k;
    opt.text = k + (Examples.examplesAlias[k] ? ` (${Examples.examplesAlias[k]})` : "");
    sel.appendChild(opt);
  }
  var match = location.search.match(/(?:^\?|&)example=([^&]+)/);
  match = match && decodeURIComponent(match[1]);
  var example = match || "mandelbrot";
  var ed = Highlighter.newEditor(Examples.examples[example]);
  // var ln = newLineNo(ed);
  sel.value = example;
  document.title = makeTitle(example);
  sel.onchange = function() {
    var example = sel.value;
    if (!Examples.examples[example]) {
      return;
    }
    var title = makeTitle(example);
    document.title = title;
    ed.innerText = Examples.examples[example];
    run();
    if (history.pushState) {
      var url = "?example=" + encodeURIComponent(example);
      history.pushState({ example: example }, title, url);
    }
  };
  window.onpopstate = function(event) {
    var example = event.state && event.state.example;
    if (example && Examples.examples[example]) {
      sel.value = example;
      document.title = makeTitle(example);
      ed.innerText = Examples.examples[example];
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
  var outputHanzi = document.getElementById("output-hanzi");
  var outdiv = document.getElementById("out");

  hidestd.onchange = run;
  outputHanzi.onchange = run;

  function run() {
    highlightCode();
    document.getElementById("out").innerText = "";
    var code = Wenyan.compile(ed.innerText, {
      lang: "js",
      romanizeIdentifiers: selr.value,
      resetVarCnt: true,
      errorCallback: (...args) => (outdiv.innerText += args.join(" ") + "\n"),
      importContext: Examples.examples,
    });

    var showcode = hidestd.checked ? hideImportedModules(code) : code;

    document.getElementById("js").innerText = js_beautify(showcode);
    hljs.highlightBlock(document.getElementById("js"));

    Wenyan.evalCompiled(code, {
      outputHanzi: outputHanzi.checked,
      output: (...args) => {
        outdiv.innerText += args.join(" ") + "\n";
      }
    });
  }

  document.getElementById("in").append(ed);
  document.getElementById("run").onclick = run;
  run();
}

main();