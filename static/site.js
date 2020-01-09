
function main() {
  Highlighter.setTheme(Render.BOOK_COLORS);

  var eds = [];
  var outs = [];

  function run(i) {
    var ed = eds[i];
    var out = outs[i];
    Highlighter.highlight([ed]);
    out.innerText = "";
    var hasError = false;
    var code = Wenyan.compile(ed.innerText, {
      lang: "js",
      romanizeIdentifiers: "none",
      errorCallback: function(x) {
        hasError = true;
        louts[i].innerText = x;
      }
    });
    if (i == 0) {
      document.getElementById("js").innerText =
        "// JavaScript\n" + js_beautify(code);
      var py = Wenyan.compile(ed.innerText, {
        lang: "py",
        romanizeIdentifiers: "none",
        errorCallback: () => 0
      });
      document.getElementById("py").innerText =
        "# Python\n" + py.split("#####\n")[1];
      var rb = Wenyan.compile(ed.innerText, {
        lang: "rb",
        romanizeIdentifiers: "none",
        errorCallback: () => 0
      });
      document.getElementById("rb").innerText =
        "# Ruby\n" + rb.split("#####\n")[1];
    }

    if (!hasError) {
      Wenyan.evalCompiled(code, {
        output: (...args) => {
          outs[i].innerText += args.join(" ") + "\n";
        }
      });
    }
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
    var ed = Highlighter.newEditor(Examples.examples[trythem[i].getAttribute("data-prgm")]);
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

main();