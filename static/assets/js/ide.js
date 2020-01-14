
const LOCAL_STORAGE_KEY = 'wenyang-ide'
const TITLE = ' - 文言 Wenyan Online IDE'
const DEFAULT_STATE = ()=> ({config: {}, files: {}})
const EXPLORER_WIDTH_MIN = 0
const EXPLORER_WIDTH_MAX = 400
const EDITOR_WIDTH_MIN = 150
const EDITOR_HEIGHT_MIN = 36
const OUTPUT_HEIGHT_MIN = 36

var handv = window.innerWidth*0.6;
var handh = window.innerHeight*0.7;
var handex = window.innerWidth*0.15;
var djs = document.getElementById("js-outer")
var din = document.getElementById("in-outer")
var dou = document.getElementById("out-outer")
var dex = document.getElementById("ex-outer")

var dhv = document.getElementById("hand-v")
var dhh = document.getElementById("hand-h")
var dhex = document.getElementById("hand-ex")

var exlist = document.getElementById("explorer-list")
var exlistUser = document.getElementById("explorer-list-user")
var exlistExamples = document.getElementById("explorer-list-examples")

var selr = document.getElementById("pick-roman");
var hidestd = document.getElementById("hide-std");
var outputHanzi = document.getElementById("output-hanzi");
var outdiv = document.getElementById("out");
var deleteBtn = document.getElementById("delete-current");
var fileNameSpan = document.getElementById("current-file-name");
var downloadRenderBtn = document.getElementById("download-render");

var currentFile = {}

var renderedSVGs = []

var state

var examples = {}

var savingLock = false // to ignore changes made from switching files

for (const key of Object.keys(Examples.examples)) {
  examples[key] = {
    name: key,
    alias: Examples.examplesAlias[key],
    author: 'examples',
    readonly: true,
    code: Examples.examples[key]
  }
}

function loadState() {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (raw)
    state = JSON.parse(raw)
  else 
    state = DEFAULT_STATE()
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
}

loadState()

function registerHandlerEvents(handler, set){
  function start (e) {
    e.preventDefault();
    const mouseHandler = (event) => {
      if (event.buttons === 1){
        let x = event.pageX
        let y = event.pageY
        set({x, y})
        setView();
      }
    }

    const touchHanlder = (event) => {
      if (event.touches.length) {
        var x = event.touches[0].clientX
        var y = event.touches[0].clientY
        set({x, y})
        setView();
      }
    }

    const clear = () => {
      document.body.removeEventListener('mousemove', mouseHandler);
      document.body.removeEventListener('touchmove', touchHanlder);
      document.body.removeEventListener('mouseup', clear);
      document.body.removeEventListener('touchend', clear);
      document.body.removeEventListener('touchcancel', clear);
    }
   
    document.body.addEventListener('mousemove', mouseHandler);
    document.body.addEventListener('touchmove', touchHanlder);
    document.body.addEventListener('mouseup', clear);
    document.body.addEventListener('touchend', clear);
    document.body.addEventListener('touchcancel', clear);
  }

  handler.addEventListener('mousedown', start);
  handler.addEventListener('touchstart', start);
}

registerHandlerEvents(dhv, ({x})=> {
  x = Math.max(x, handex + EDITOR_WIDTH_MIN)
  x = Math.min(x, window.innerWidth - EDITOR_WIDTH_MIN)
  handv = x;
})

registerHandlerEvents(dhh, ({y})=> {
  y = Math.max(y, EDITOR_HEIGHT_MIN)
  y = Math.min(y, window.innerHeight - OUTPUT_HEIGHT_MIN)
  handh = y;
})

registerHandlerEvents(dhex, ({x})=> {
  x = Math.max(x, EXPLORER_WIDTH_MIN)
  x = Math.min(x, EXPLORER_WIDTH_MAX, handv - EDITOR_WIDTH_MIN)
  handex = x
})

function setView(){
  // requestAnimationFrame(setView)
  var W = window.innerWidth;
  var H = window.innerHeight;

  dex.style.left="0px";
  dex.style.top="0px";
  dex.style.width=handex+"px"
  dex.style.height=H+"px";

  din.style.left=handex+"px";
  din.style.top="0px";
  din.style.width=(handv-handex)+"px"
  din.style.height=handh+"px";

  djs.style.left=handv+"px";
  djs.style.top="0px";
  djs.style.width=(W-handv)+"px"
  djs.style.height=handh+"px";

  dou.style.left=handex+"px";
  dou.style.top=handh+"px";
  dou.style.width=(W-handex)+"px"
  dou.style.height=(H-handh)+"px";

  var hw = 9;

  dhex.style.left=(handex-hw/2)+"px";
  dhex.style.top="0px";
  dhex.style.width=hw+"px"
  dhex.style.height=H+"px";
    
  dhv.style.left=(handv-hw/2)+"px";
  dhv.style.top="0px";
  dhv.style.width=hw+"px"
  dhv.style.height=handh+"px";

  dhh.style.left=handex+"px";
  dhh.style.top=(handh-hw/2)+"px";
  dhh.style.width=(W-handex)+"px"
  dhh.style.height=hw+"px";
}

document.body.onresize = setView
setView()

var editorCM = CodeMirror(document.getElementById("in"), {
  value: '',
  mode: "wenyan",
  lineNumbers: true,
  theme: "wenyan-light",
  styleActiveLine: true,
});

editorCM.setSize(null,"100%");

var jsCM = CodeMirror(document.getElementById("js"), {
  value: '',
  mode:  "javascript",
  lineNumbers: true,
  theme: "wenyan-light",
  styleActiveLine: true,
});

jsCM.setSize(null,"100%");

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
  updateExplorerList()

  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector('.nested').classList.toggle("active");
      this.classList.toggle("active");
    });
  }
}

function updateExplorerList(){
  exlistExamples.innerHTML = '';
  for (let file of Object.values(examples)) {
    exlistExamples.appendChild(createExplorerEntry(file));
  }

  exlistUser.innerHTML = '';
  for (let file of Object.values(state.files)) {
    exlistUser.appendChild(createExplorerEntry(file));
  }
}

function createExplorerEntry({ name, alias }) {
  const item = document.createElement("li");
  item.value = name;

  if (currentFile.name === name)
    item.classList.add('active')

  const a = document.createElement("span")
  const n = document.createElement("span")
  n.classList.add('name')
  n.innerText = alias || name
  item.appendChild(n)
  if (alias) {
    a.classList.add('alias')
    a.innerText = name
    item.appendChild(a)
  }
  item.onclick = () => openFile(name);
  return item
}

function openFile(name) {
  var searchParams = new URLSearchParams(window.location.search)
  if (searchParams.get('file') !== name){
    searchParams.set("file", name)
    history.pushState({ file:name }, name, '?'+searchParams.toString());
  }
  loadFile(name)
}

function loadFile(name) {
  if (currentFile.name !== name) {
    currentFile = state.files[name] || examples[name]
    if (!currentFile){
      currentFile = { name, code: ''}
      state.files[name] = currentFile
      saveState()
    }

    savingLock = true
    editorCM.setValue(currentFile.code || '');
    savingLock = false
    crun();
  }
  document.title = (currentFile.alias || currentFile.name) + TITLE
  fileNameSpan.innerText = currentFile.alias || currentFile.name
  updateExplorerList()
  deleteBtn.classList.toggle('hidden', !!currentFile.readonly)
}

function loadFromUrl(){
  loadFile(new URLSearchParams(location.search).get('file') || 'mandelbrot')
}

function deleteCurrentFile(){
  const yes = confirm(`Are you sure to delete file ${currentFile.alias || currentFile.alias}?\n\nThis operation can NOT be undone.`)
  if (yes) {
    delete state.files[currentFile.name]
    saveState()
    openFile(Object.keys(state.files)[0] || 'mandelbrot')
  }
}

function createNewFile(){
  const name = prompt("New filename", "Untitled");
  if (name)
    openFile(name)
}

function downloadCurrentFile() {
  var blob = new Blob([currentFile.code], {type: "text/wenyan;charset=utf-8"});
  saveAs(blob, `${currentFile.alias || currentFile.name}.wy`);
}


function downloadRenders(){
  const name = currentFile.alias || currentFile.name
  if (renderedSVGs.length === 1){
    var blob = new Blob([renderedSVGs[0]], {type: "image/svg+xml;charset=utf-8"});
    saveAs(blob, `${name}.svg`);
  }
  else {
    renderedSVGs.forEach((svg, i)=>{
      var blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"});
      saveAs(blob, `${name}-${i}.svg`);
    })
  }
}


function renameCurrentFile() {
  if (currentFile.readonly)
    return
  const name = prompt("Rename", currentFile.alias || currentFile.name);
  if (name) {
    delete state.files[currentFile.name]
    delete currentFile.alias
    currentFile.name = name
    state.files[name] = currentFile
    saveState()
    openFile(name)
  }
}

const snippets = [
  { text:"「", trigger: "`" },
  { text:"」", trigger: "'"},
  { text:"「「", trigger: '['},
  { text:"」」", trigger: "]"},
  ...Object.keys(Wenyan.KEYWORDS)
    .map(x=>({
      text: x, 
      trigger: x.length > 1
        ? Wenyan.hanzi2pinyin(x).replace(/([A-z])[A-z]+?([1-9])/g,"$1")
        : Wenyan.hanzi2pinyin(x)
    }))
]

snippets.sort((a,b)=>a.trigger.localeCompare(b.trigger))
snippets.forEach(s => {
  s.displayText = s.text
})

function showHint() {
  CodeMirror.showHint(editorCM, () => {
    const cursor = editorCM.getCursor()
    const token = editorCM.getTokenAt(cursor)
    console.log(cursor, token)
    const start = token.start
    const end = cursor.ch
    const line = cursor.line
    const currentWord = token.string

    // TODO: filter hints
    /*
    const list = snippets.filter((item) => {
      return item.indexOf(currentWord) >= 0
    })
    */

    return {
      list: snippets,
      from: CodeMirror.Pos(line, end),
      to: CodeMirror.Pos(line, end)
    }
  }, { completeSingle: false })
}

editorCM.setOption('extraKeys', {
  'Cmd-.': showHint,
  'Ctrl-.': showHint
})

editorCM.on('change', (e)=>{
  if (savingLock)
    return

  if (!currentFile.readonly) {
    currentFile.code = editorCM.getValue()
    saveState()
  }
  else {
    // make a copy for examples
    let num = 1
    while (state.files[`${currentFile.name}_${num}`]){
      num += 1
    }
    const name = `${currentFile.name}_${num}`
    const newFile = {
      name: name,
      alias: currentFile.alias? `${currentFile.alias}「${Wenyan.num2hanzi(num)}」` : '',
      code: editorCM.getValue()
    }
    state.files[name] = newFile
    currentFile = newFile
    saveState()
    openFile(name)
  }
})


window.addEventListener('popstate', loadFromUrl)

loadFromUrl()

initExplorer()

for (var k of ["none", "pinyin", "baxter", "unicode"]) {
  var opt = document.createElement("option");
  opt.value = k;
  opt.innerHTML = k;
  selr.appendChild(opt);
}
selr.value = "pinyin";
selr.onchange = crun;

hidestd.onchange = crun;
outputHanzi.onchange = crun;

function getImportContext(){
  let context =  { 
    ...Examples.examples,
  }

  for(const key of Object.keys(state.files)){
    context[key] = state.files[key].code
  }

  return context
}

function resetOutput(){
  downloadRenderBtn.classList.toggle('hidden', true)
  renderedSVGs = []
}

function compile(){
  document.getElementById("out").innerText = "";
  var log = ""
  var code = Wenyan.compile(editorCM.getValue(), {
    lang: "js",
    romanizeIdentifiers: selr.value,
    resetVarCnt: true,
    errorCallback: (...args) => (outdiv.innerText += args.join(" ") + "\n"),
    importContext: getImportContext(),
    logCallback:(x)=>{log+=x+"\n"},
    strict: true
  });
  resetOutput()
  var sig = log.split("=== [PASS 2.5] TYPECHECK ===\n")[1].split("=== [PASS 3] COMPILER ===")[0];
  outdiv.innerText = sig;
  var showcode = hidestd.checked ? hideImportedModules(code) : code;
  jsCM.setValue(js_beautify(showcode));
}

function run() {
  document.getElementById("out").innerText = "";
  Wenyan.evalCompiled(jsCM.getValue(), {
    outputHanzi: outputHanzi.checked,
    output: (...args) => {
      outdiv.innerText += args.join(" ") + "\n";
    }
  });
  resetOutput()
}

function crun(){
  resetOutput()
  document.getElementById("out").innerText = "";
  try {
    var code = Wenyan.compile(editorCM.getValue(), {
      lang: "js",
      romanizeIdentifiers: selr.value,
      resetVarCnt: true,
      errorCallback: (...args) => (outdiv.innerText += args.join(" ") + "\n"),
      importContext: getImportContext(),
    });
    var showcode = hidestd.checked ? hideImportedModules(code) : code;

    // CodeMirror.runMode(js_beautify(showcode),"JavaScript",document.getElementById("js"));

    jsCM.setValue(js_beautify(showcode));

    try {
      Wenyan.evalCompiled(code, {
        outputHanzi: outputHanzi.checked,
        output: (...args) => {
          outdiv.innerText += args.join(" ") + "\n";
        }
      });
    }catch(e){
      console.error(e)
    }
  } catch(e) {
    jsCM.setValue("")
    console.error(e)
  }
}

document.getElementById("compile").onclick = compile;
document.getElementById("run").onclick = run;
document.getElementById("crun").onclick = crun;
document.getElementById("new-file").onclick = createNewFile;
document.getElementById("download-current").onclick = downloadCurrentFile;
downloadRenderBtn.onclick = downloadRenders
deleteBtn.onclick = deleteCurrentFile
fileNameSpan.onclick = renameCurrentFile
crun();

// document.getElementById("insert").onmousedown= function(){
//   var doc = editorCM.getDoc();
//   var cursor = doc.getCursor();
//   doc.replaceRange("hi", cursor);
//   return false;
// }

var isDark = false;

document.getElementById("dark").onclick = function(){
  if (!isDark){
    document.body.style.filter="invert(0.88)";
  } else {
    document.body.style.filter="invert(0)";
  }
  document.getElementById("dark-icon-sunny").classList.toggle("hidden", isDark)
  document.getElementById("dark-icon-night").classList.toggle("hidden", !isDark)

  isDark = !isDark;
}

document.getElementById("rend").onclick = function(){
  document.getElementById("out").innerText = "";
  renderedSVGs = Render.render(currentFile.alias || currentFile.name, currentFile.code);
  for (const svg of renderedSVGs){
    document.getElementById("out").innerHTML += svg + "<br>";
  }
  downloadRenderBtn.classList.toggle('hidden', false)
}