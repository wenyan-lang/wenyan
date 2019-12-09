try{
  const fs = require('fs')
  const {KEYWORDS,NUMBER_KEYWORDS,SYNONYMS}=require("./parser");
}catch(e){}

const DEFAULT_COLORS = {
  'ctrl':'#F92672',
  'lop':'#FFF',
  'name':'#FFF',
  'cmp':'#FFF',
  'decl':'#FFF',
  'print':'#FFF',
  'rassgn':'#FFF',
  'ctnr':'#66D9EF',
  'comment':'#FFF',
  'type':'#66D9EF',
  'call':'#FFF',
  'assgn':'#FFF',
  'discard':'#FFF',
  'endl':'#75715E',
  'ans':'#FFF',
  'expr':'#FFF',
  'op':'#FFF',
  'not':'#FFF',
  'operand':'#FFF',
  'bool':'#AE81FF',
  'data':'#75715E',
  "iden":"#A6E22E",
  "quot":"#A6E22E",
  "num":"#AE81FF",
}

var semantic = function(txt){
  var off = false;
  var out = [];
  var i = 0;
  while(i < txt.length){
    if (txt[i]=="「"){
      off = true;
      out.push("quot")
    }else if (txt[i]=="」"){
      off = false;
      out.push("quot")
    }else{
      if (off){
        out.push("iden")
      }else{
        var ok = false;
        for (var k in KEYWORDS){
          ok = true;
          for (var j = 0; j < k.length; j++){
            if (k[j]!=txt[i+j]){
              ok = false;
              break;
            }
          }
          if (ok){
            for (var j = 0; j < k.length; j++){
              out.push(KEYWORDS[k][0]);
              i++;
            }
            i--;
            break;
          }
        }
        if (ok == false){
          if (NUMBER_KEYWORDS.includes(txt[i])){
            out.push("num");
          }else{
            ok = false;
            for (var s in SYNONYMS){
              ok = true;
              for (var j = 0; j < k.length; j++){
                if (s[j]!=txt[i+j]){
                  ok = false;
                  break;
                }
              }
              if (ok){
                for (var j = 0; j < s.length; j++){
                  out.push(KEYWORDS[SYNONYMS[s]][0]);
                  i++;
                }
                i--;
                break;
              }
            }
            if (!ok){
              out.push("data")
            }
            
          }
        }
      }
    }
    i++;
  }
  return out;
}

var NNL = 0;

function newEditor(txt){
  var div = document.createElement("pre");
  div.contentEditable='true';
  div.autoComplete='off';
  div.autoCorrect='off';
  div.autoCapitalize='off';
  div.spellCheck='off';
  div.onkeyup=function(){
    if (event.keyCode==13){NNL+=1}
  }
  div.innerHTML=txt;
  highlight([div]);
  setInterval(()=>highlight([div]),20000);
  return div;
}



var highlight = function(codes){
  function getCaretPosition(element, mode) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;

    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      if (mode == "start"){
        preCaretRange.setEnd(range.endContainer, range.endOffset);
      }else{
        preCaretRange.setEnd(range.startContainer, range.startOffset);
      }
      caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  }

  function setCaretPosition(element,i,j,ie,je){
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(element.childNodes[i], j);
    range.setEnd(element.childNodes[ie], je);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  var keywords = ["break","case","catch","continue","debugger","default","delete","do","else","finally","for","function",
                  "if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with"]
  keywords = keywords.concat(["canvas","context"])
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890$_"


  for (var i = 0; i < codes.length; i++){
    var c = getCaretPosition(codes[i],"start")+NNL;
    var ce = getCaretPosition(codes[i],"end")+NNL;
    NNL = 0;
    var cc = codes[i].innerText;
    var nc = ""
    var sm = semantic(cc);

    for (var j = 0; j < cc.length; j++){
      nc += `<x style="color:${DEFAULT_COLORS[sm[j]]}">${cc[j]}</x>`
      
    }
    // console.log(cc);
    // console.log(nc);
    codes[i].innerHTML = nc;
    if (document.activeElement == codes[i]){
      var c0 = Math.min(c,ce);
      var c1 = Math.max(c,ce);
      try{
        setCaretPosition(codes[i],c0,0,c1,0);
        // console.log(c0,0,c1,0)
      }catch(e){
        for (var eee = 0; eee < 10; eee++){
          try{
            codes[i].innerHTML += "<i></i>"
            setCaretPosition(codes[i],c0,0,c1,0);
            break;
          }catch(e){}
        }
      }
    }
  }
}
