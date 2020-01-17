const LOCAL_STORAGE_KEY = "wenyang-ide";
const TITLE = " - 文言 Wenyan Online IDE";
const DEFAULT_STATE = () => ({
  config: {
    lang: "js",
    romanizeIdentifiers: "none",
    dark: false,
    enablePackages: true,
    outputHanzi: true,
    hideImported: true,
    strict: false
  },
  files: {},
  wyg: {
    packages: [],
    last_updated: -Infinity
  }
});
const PACKAGES_LIFETIME = 1000 * 60 * 60; // 60 min
const EXPLORER_WIDTH_MIN = 0;
const EXPLORER_WIDTH_MAX = 400;
const EDITOR_WIDTH_MIN = 150;
const EDITOR_HEIGHT_MIN = 36;
const OUTPUT_HEIGHT_MIN = 36;
const AUTOCOMPLETE_TRIGGER_REGEX = /[\d\w\.,'"\/]+$/;
const CONTROL_KEYCODES = [13, 37, 38, 39, 40, 9, 27]; // Enter, Arrow Keys, etc

const djs = document.getElementById("js-outer");
const din = document.getElementById("in-outer");
const dou = document.getElementById("out-outer");
const dex = document.getElementById("ex-outer");

var dhv = document.getElementById("hand-v");
var dhh = document.getElementById("hand-h");
var dhex = document.getElementById("hand-ex");

const exlist = document.getElementById("explorer-list");
const exlistUser = document.getElementById("explorer-list-user");
const exlistExamples = document.getElementById("explorer-list-examples");
const exlistPackages = document.getElementById("explorer-list-packages");
const explorerPackages = document.getElementById("explorer-packages");

const outIframe = document.getElementById("out-iframe");
const outRender = document.getElementById("out-render");
const deleteBtn = document.getElementById("delete-current");
const fileNameSpan = document.getElementById("current-file-name");
const downloadRenderBtn = document.getElementById("download-render");
const packageInfoPanel = document.getElementById("package-info-panel");

const configDark = document.getElementById("config-dark");
const configHideImported = document.getElementById("cofig-hide-imported");
const configEnablePackages = document.getElementById("config-enable-packages");
const configOutputHanzi = document.getElementById("config-output-hanzi");
const configRomanize = document.getElementById("config-romanize");
const configLang = document.getElementById("config-lang");

var handv = window.innerWidth * 0.6;
var handh = window.innerHeight * 0.7;
var handex = window.innerWidth * 0.15;

var currentFile = {};
var renderedSVGs = [];
var state;
var examples = {};
var cache = {};
var snippets = [];

var savingLock = false; // to ignore changes made from switching files

var editorCM;
var jsCM;

function init() {
  for (const key of Object.keys(Examples.examples)) {
    examples[key] = {
      name: key,
      alias: Examples.examplesAlias[key],
      author: "examples",
      readonly: true,
      code: Examples.examples[key]
    };
  }

  for (var k of ["none", "pinyin", "baxter", "unicode"]) {
    var opt = document.createElement("option");
    opt.value = k;
    opt.innerHTML = k;
    document.querySelector("#config-romanize select").appendChild(opt);
  }

  for (var [value, display] of [
    ["js", "Javascript"],
    ["py", "Python"],
    ["rb", "Ruby"]
  ]) {
    var opt = document.createElement("option");
    opt.value = value;
    opt.innerHTML = display;
    document.querySelector("#config-lang select").appendChild(opt);
  }

  snippets = [
    { text: "。", trigger: "." },
    { text: "、", trigger: "," },
    { text: "「", trigger: "'" },
    { text: "」", trigger: "'" },
    { text: "「「", trigger: '"' },
    { text: "」」", trigger: '"' },
    ...Object.keys(Wenyan.KEYWORDS).map(x => ({
      text: x,
      trigger:
        x.length > 1
          ? Wenyan.hanzi2pinyin(x)
              .replace(/([A-z])[A-z]+?([1-9])/g, "$1")
              .toLowerCase()
          : Wenyan.hanzi2pinyin(x).toLowerCase()
    }))
  ];

  snippets.sort((a, b) => a.trigger.localeCompare(b.trigger));
  snippets.forEach(s => {
    s.displayText = s.text;
  });
}

function initConfigComponents() {
  const checkboxes = document.querySelectorAll(
    "button[data-config]:not(.dropdown)"
  );
  for (const cb of checkboxes) {
    cb.classList.toggle("checked", state.config[cb.dataset.config]);

    cb.addEventListener("click", () => {
      cb.classList.toggle("checked");
      state.config[cb.dataset.config] = cb.classList.contains("checked");
      saveState();
      if (cb.onchange) cb.onchange();
    });
  }

  const dropdowns = document.querySelectorAll("button.dropdown[data-config]");
  for (const dd of dropdowns) {
    const value = dd.querySelector(".value");
    const select = dd.querySelector("select");

    select.value = state.config[dd.dataset.config];
    value.innerText = select.selectedOptions[0].innerText;

    select.addEventListener("change", () => {
      value.innerText = select.selectedOptions[0].innerText;
      state.config[dd.dataset.config] = select.value;
      saveState();
      if (dd.onchange) dd.onchange();
    });
  }
}

function loadState() {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  const defaultState = DEFAULT_STATE();

  if (raw) {
    const parsed = JSON.parse(raw);
    state = Object.assign({}, defaultState, parsed);
    state.config = Object.assign({}, defaultState.config, parsed.config);
  } else state = defaultState;

  updateDark();
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function registerHandlerEvents(handler, set) {
  function start(e) {
    e.preventDefault();
    const mouseHandler = event => {
      if (event.buttons === 1) {
        let x = event.pageX;
        let y = event.pageY;
        set({ x, y });
        setView();
      }
    };

    const touchHanlder = event => {
      if (event.touches.length) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        set({ x, y });
        setView();
      }
    };

    const clear = () => {
      document.body.removeEventListener("mousemove", mouseHandler);
      document.body.removeEventListener("touchmove", touchHanlder);
      document.body.removeEventListener("mouseup", clear);
      document.body.removeEventListener("touchend", clear);
      document.body.removeEventListener("touchcancel", clear);
    };

    document.body.addEventListener("mousemove", mouseHandler);
    document.body.addEventListener("touchmove", touchHanlder);
    document.body.addEventListener("mouseup", clear);
    document.body.addEventListener("touchend", clear);
    document.body.addEventListener("touchcancel", clear);
  }

  handler.addEventListener("mousedown", start);
  handler.addEventListener("touchstart", start);
}

function setView() {
  var W = window.innerWidth;
  var H = window.innerHeight;
  var hw = 9;
  var barHeight = 36;

  dex.style.left = "0px";
  dex.style.top = "0px";
  dex.style.width = handex + "px";
  dex.style.height = H + "px";

  din.style.left = handex + "px";
  din.style.top = "0px";
  din.style.width = handv - handex + "px";
  din.style.height = handh + "px";

  djs.style.left = handv + "px";
  djs.style.top = "0px";
  djs.style.width = W - handv + "px";
  djs.style.height = handh + "px";

  dou.style.left = handex + "px";
  dou.style.top = handh + "px";
  dou.style.width = W - handex + "px";
  dou.style.height = H - handh + "px";

  outIframe.style.left = handex + "px";
  outIframe.style.top = handh + barHeight + "px";
  outIframe.style.width = W - handex + "px";
  outIframe.style.height = H - handh - barHeight + "px";

  dhex.style.left = handex - hw / 2 + "px";
  dhex.style.top = "0px";
  dhex.style.width = hw + "px";
  dhex.style.height = H + "px";

  dhv.style.left = handv - hw / 2 + "px";
  dhv.style.top = "0px";
  dhv.style.width = hw + "px";
  dhv.style.height = handh + "px";

  dhh.style.left = handex + 1 + "px";
  dhh.style.top = handh - hw / 2 + "px";
  dhh.style.width = W - handex + "px";
  dhh.style.height = hw + "px";
}

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

function initExplorer() {
  updateExplorerList();

  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("active");
    });
  }
}

function updateExplorerList() {
  exlistExamples.innerHTML = "";
  for (let file of Object.values(examples)) {
    exlistExamples.appendChild(createExplorerEntry(file));
  }

  exlistUser.innerHTML = "";
  for (let file of Object.values(state.files)) {
    exlistUser.appendChild(createExplorerEntry(file));
  }

  explorerPackages.classList.toggle("hidden", !state.config.enablePackages);
  if (state.config.enablePackages) {
    exlistPackages.innerHTML = "";
    for (let pkg of state.wyg.packages) {
      exlistPackages.appendChild(createExplorerPackageEntry(pkg));
    }
  }
}

function createExplorerEntry({ name, alias }) {
  const item = document.createElement("li");
  item.value = name;

  if (currentFile.name === name) item.classList.add("active");

  const a = document.createElement("span");
  const n = document.createElement("span");
  n.classList.add("name");
  n.innerText = alias || name;
  item.appendChild(n);
  if (alias) {
    a.classList.add("alias");
    a.innerText = name;
    item.appendChild(a);
  }
  item.onclick = () => openFile(name);
  return item;
}

function createExplorerPackageEntry(pkg) {
  const { name, author } = pkg;
  const item = document.createElement("li");
  item.value = name;

  const a = document.createElement("span");
  const n = document.createElement("span");
  n.classList.add("name");
  n.innerText = name;
  item.appendChild(n);
  a.classList.add("alias");
  a.innerText = "by " + author;
  item.appendChild(a);
  item.onclick = () => showPackageInfo(pkg);
  return item;
}

function openFile(name) {
  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get("file") !== name) {
    searchParams.set("file", name);
    history.pushState({ file: name }, name, "?" + searchParams.toString());
  }
  loadFile(name);
}

function loadFile(name) {
  if (currentFile.name !== name) {
    currentFile = state.files[name] || examples[name];
    if (!currentFile) {
      currentFile = { name, code: "" };
      state.files[name] = currentFile;
      saveState();
    }

    savingLock = true;
    editorCM.setValue(currentFile.code || "");
    savingLock = false;

    crun();
  }
  document.title = (currentFile.alias || currentFile.name) + TITLE;
  fileNameSpan.innerText = currentFile.alias || currentFile.name;
  updateExplorerList();
  deleteBtn.classList.toggle("hidden", !!currentFile.readonly);
}

function parseUrlQuery() {
  const query = new URLSearchParams(location.search);

  loadFile(query.get("file") || "mandelbrot");
  updateExperimentFeatures(query.get("experiment") != null);
}

function updateExperimentFeatures(value) {
  document
    .querySelectorAll('[experiment="true"]')
    .forEach(i => i.classList.toggle("hidden", !value));
}

function deleteCurrentFile() {
  const yes = confirm(
    `Are you sure to delete file ${currentFile.alias ||
      currentFile.alias}?\n\nThis operation can NOT be undone.`
  );
  if (yes) {
    delete state.files[currentFile.name];
    saveState();
    openFile(Object.keys(state.files)[0] || "mandelbrot");
  }
}

function createNewFile() {
  const name = prompt("New filename", "Untitled");
  if (name) openFile(name);
}

function downloadCurrentFile() {
  var blob = new Blob([currentFile.code], {
    type: "text/wenyan;charset=utf-8"
  });
  saveAs(blob, `${currentFile.alias || currentFile.name}.wy`);
}

function downloadRenders() {
  const name = currentFile.alias || currentFile.name;
  if (renderedSVGs.length === 1) {
    var blob = new Blob([renderedSVGs[0]], {
      type: "image/svg+xml;charset=utf-8"
    });
    saveAs(blob, `${name}.svg`);
  } else {
    renderedSVGs.forEach((svg, i) => {
      var blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      saveAs(blob, `${name}-${i}.svg`);
    });
  }
}

function toggleHelp() {
  document.getElementById("help-panel").classList.toggle("hidden");
}

function renameCurrentFile() {
  if (currentFile.readonly) return;
  const name = prompt("Rename", currentFile.alias || currentFile.name);
  if (name) {
    delete state.files[currentFile.name];
    delete currentFile.alias;
    currentFile.name = name;
    state.files[name] = currentFile;
    saveState();
    openFile(name);
  }
}

function showHint() {
  CodeMirror.showHint(
    editorCM,
    () => {
      const cursor = editorCM.getCursor();
      let start = cursor.ch - 5;
      const text = editorCM.getRange({ line: cursor.line, ch: start }, cursor);
      const end = cursor.ch;
      const line = cursor.line;

      const match = text.match(AUTOCOMPLETE_TRIGGER_REGEX);

      if (!match) return undefined;

      const list =
        match[0] === "/"
          ? snippets
          : snippets.filter(item => item.trigger.startsWith(match[0]));

      return {
        list: list,
        from: CodeMirror.Pos(line, end - match[0].length),
        to: CodeMirror.Pos(line, end)
      };
    },
    { completeSingle: false }
  );
}

function getImportContext() {
  let context = {
    ...Examples.examples
  };

  for (const key of Object.keys(state.files)) {
    context[key] = state.files[key].code;
  }

  if (state.config.enablePackages) {
    for (const pkg of state.wyg.packages) {
      context[pkg.name] = {
        entry: pkg.entry
      };
    }
  }

  return context;
}

function loadPackages() {
  updateExplorerList();
  if (
    state.config.enablePackages &&
    Date.now() - state.wyg.last_updated > PACKAGES_LIFETIME
  ) {
    Wyg.list().then(packages => {
      state.wyg.packages = packages;
      state.wyg.last_updated = +Date.now();
      saveState();
      updateExplorerList();
      crun();
    });
  }
}

function resetOutput() {
  outIframe.onload = undefined;
  outIframe.contentWindow.location.reload();
  outIframe.classList.toggle("hidden", false);
  outRender.classList.toggle("hidden", true);
  downloadRenderBtn.classList.toggle("hidden", true);
  renderedSVGs = [];
}

function updateCompiled(code) {
  var showcode = state.config.hideImported ? hideImportedModules(code) : code;

  jsCM.setOption(
    "mode",
    {
      js: "javascript",
      py: "python",
      rb: "ruby"
    }[state.config.lang]
  );

  if (state.config.lang === "js") {
    jsCM.setValue(js_beautify(showcode));
  } else {
    jsCM.setValue(code);
  }
}

function compile() {
  resetOutput();
  var log = "";
  try {
    const errorLog = "";
    var code = Wenyan.compile(editorCM.getValue(), {
      lang: state.config.lang,
      romanizeIdentifiers: state.config.romanizeIdentifiers,
      resetVarCnt: true,
      errorCallback: (...args) => (errorLog += args.join(" ") + "\n"),
      importContext: getImportContext(),
      importCache: cache,
      logCallback: x => {
        log += x + "\n";
      },
      strict: state.config.strict
    });
    if (errorLog) {
      send({ text: errorLog });
      return;
    }
    if (state.config.strict) {
      var sig = log
        .split("=== [PASS 2.5] TYPECHECK ===\n")[1]
        .split("=== [PASS 3] COMPILER ===")[0];
      send({ text: sig });
    }

    updateCompiled(code);
  } catch (e) {
    send({ text: e.toString() });
    console.error(e);
  }
}

function send(data) {
  var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (!is_safari) {
    outIframe.onload = () => {
      outIframe.contentWindow.postMessage(data);
    };
  } else {
    // FU safari, why can't you just work
    // every fix involving iframe seem to break, so here we go
    for (var i = 0; i < 100; i++) {
      clearInterval(i);
    }
    outIframe.style.width = "0px";
    outIframe.style.height = "0px";
    outIframe.style.opacity = 0;

    var outdiv = document.getElementById("out");
    if (!outdiv) {
      outdiv = document.createElement("div");
      outdiv.id = "out";
      document.getElementById("out-outer").appendChild(outdiv);
    } else {
      outdiv.innerText = "";
    }
    const { text, code, options } = data;
    try {
      Wenyan.evalCompiled(code, {
        ...options,
        output: (...args) => (outdiv.innerText += args.join(" ") + "\n")
      });
    } catch (e) {
      outdiv.innerText += e.toString();
      console.error(e);
    }
  }
}

function executeCode(code) {
  send({
    code,
    options: {
      lang: state.config.lang,
      outputHanzi: state.config.outputHanzi
    }
  });
}

function run() {
  resetOutput();
  executeCode(jsCM.getValue());
}

function crun() {
  resetOutput();
  try {
    let errorOutput = "";
    var code = Wenyan.compile(editorCM.getValue(), {
      lang: state.config.lang,
      romanizeIdentifiers: state.config.romanizeIdentifiers,
      resetVarCnt: true,
      errorCallback: (...args) =>
        (errorOutput.innerText += args.join(" ") + "\n"),
      importContext: getImportContext(),
      importCache: cache,
      strict: state.config.strict
    });

    updateCompiled(code);

    executeCode(code);
  } catch (e) {
    send({ text: e.toString() });
    jsCM.setValue("");
    console.error(e);
  }
}

function updateDark() {
  if (state.config.dark) {
    document.body.style.filter = "invert(0.88)";
  } else {
    document.body.style.filter = "invert(0)";
  }
  document
    .getElementById("dark-icon-sunny")
    .classList.toggle("hidden", !state.config.dark);
  document
    .getElementById("dark-icon-night")
    .classList.toggle("hidden", state.config.dark);
}

function render() {
  outRender.innerText = "";
  renderedSVGs = Render.render(
    currentFile.alias || currentFile.name,
    currentFile.code
  );
  for (const svg of renderedSVGs) {
    outRender.innerHTML += svg + "<br>";
  }
  outIframe.classList.toggle("hidden", true);
  outRender.classList.toggle("hidden", false);
  downloadRenderBtn.classList.toggle("hidden", false);
}

function showPackageInfo(pkg) {
  packageInfoPanel.querySelector(".import").onclick = () =>
    importPackageIntoCurrent(pkg);
  packageInfoPanel.querySelector(".title").innerText = pkg.name;
  packageInfoPanel.querySelector(".author").innerText = pkg.author;
  packageInfoPanel
    .querySelector(".description")
    .classList.toggle("hidden", !pkg.description);
  packageInfoPanel.querySelector(".description").innerText = pkg.description;
  packageInfoPanel
    .querySelector(".home-link")
    .classList.toggle("hidden", !pkg.repo);
  packageInfoPanel.querySelector(".home-link").href = Wyg.getRepoRoot(pkg.repo);
  packageInfoPanel.classList.toggle("hidden", false);
}

function closePackageInfo() {
  packageInfoPanel.classList.toggle("hidden", true);
}

function importPackageIntoCurrent({ name }) {
  editorCM.setValue(`吾嘗觀「「${name}」」之書。\n${editorCM.getValue()}`);
  closePackageInfo();
}

/* =========== Scripts =========== */

init();

editorCM = CodeMirror(document.getElementById("in"), {
  value: "",
  mode: "wenyan",
  lineNumbers: true,
  theme: "wenyan-light",
  styleActiveLine: true,
  extraKeys: {
    "Shift-Enter": crun,
    "Alt-Enter": compile
  }
});

editorCM.setSize(null, "100%");

jsCM = CodeMirror(document.getElementById("js"), {
  value: "",
  mode: "javascript",
  lineNumbers: true,
  theme: "wenyan-light",
  styleActiveLine: true
});

jsCM.setSize(null, "100%");

editorCM.on("change", e => {
  if (savingLock) return;

  if (!currentFile.readonly) {
    currentFile.code = editorCM.getValue();
    saveState();
  } else {
    // make a copy for examples
    let num = 1;
    while (state.files[`${currentFile.name}_${num}`]) {
      num += 1;
    }
    const name = `${currentFile.name}_${num}`;
    const newFile = {
      name: name,
      alias: currentFile.alias
        ? `${currentFile.alias}「${Wenyan.num2hanzi(num)}」`
        : "",
      code: editorCM.getValue()
    };
    state.files[name] = newFile;
    currentFile = newFile;
    saveState();
    openFile(name);
  }
});

editorCM.on("keyup", (cm, event) => {
  if (!CONTROL_KEYCODES.includes(event.keyCode)) showHint();
});

registerHandlerEvents(dhv, ({ x }) => {
  x = Math.max(x, handex + EDITOR_WIDTH_MIN);
  x = Math.min(x, window.innerWidth - EDITOR_WIDTH_MIN);
  handv = x;
});

registerHandlerEvents(dhh, ({ y }) => {
  y = Math.max(y, EDITOR_HEIGHT_MIN);
  y = Math.min(y, window.innerHeight - OUTPUT_HEIGHT_MIN);
  handh = y;
});

registerHandlerEvents(dhex, ({ x }) => {
  x = Math.max(x, EXPLORER_WIDTH_MIN);
  x = Math.min(x, EXPLORER_WIDTH_MAX, handv - EDITOR_WIDTH_MIN);
  handex = x;
});

document.getElementById("compile").onclick = compile;
document.getElementById("run").onclick = run;
document.getElementById("crun").onclick = crun;
document.getElementById("new-file").onclick = createNewFile;
document.getElementById("download-current").onclick = downloadCurrentFile;
document.getElementById("help-button").onclick = toggleHelp;
document.getElementById("rend").onclick = render;
downloadRenderBtn.onclick = downloadRenders;
deleteBtn.onclick = deleteCurrentFile;
fileNameSpan.onclick = renameCurrentFile;

configDark.onchange = updateDark;
configHideImported.onchange = crun;
configOutputHanzi.onchange = crun;
configRomanize.onchange = crun;
configLang.onchange = crun;
configEnablePackages.onchange = () => {
  loadPackages();
  crun();
};

document.body.onresize = setView;
window.addEventListener("popstate", parseUrlQuery);
loadState();
initConfigComponents();
loadPackages();
setView();
parseUrlQuery();
initExplorer();
