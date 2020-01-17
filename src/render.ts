import { semantic } from "./highlight";
import { num2hanzi } from "./converts/hanzi2num";
import { wy2tokens, compile } from "./parser";

const FONT = "'I.Ming', 'Source Han Serif KR', 'Noto Serif CJK KR', serif"; //"Source Han Serif TC"
const RED = "#E53";
const BLACK = "#222";

const BOOK_COLORS = {
  ctrl: RED,
  lop: BLACK,
  name: BLACK,
  cmp: BLACK,
  decl: BLACK,
  print: BLACK,
  rassgn: BLACK,
  ctnr: BLACK,
  comment: RED,
  type: BLACK,
  call: BLACK,
  assgn: BLACK,
  discard: BLACK,
  endl: BLACK,
  ans: BLACK,
  expr: BLACK,
  op: BLACK,
  not: BLACK,
  operand: BLACK,
  bool: BLACK,
  data: "#666",
  iden: "#248",
  quot: BLACK,
  num: "#872"
};

function render(fname, txt, { plotResult = false } = {}) {
  var svgs = [];
  var W2 = 792;

  var W = W2 / 2;
  var H = 612;

  var X0 = W - 30;
  var Y0 = 120;
  var X1 = 10;
  var Y1 = H - 20;

  var CW = (X0 - X1) / 13;
  var CH = 18;
  var CS = 20;
  var CO = 4;

  var PCT = 40;
  var PCB = 5;

  var PSH = 0; //-2;
  var MA = 0; //10;

  txt = txt.replace(/\r\n/g, "\n");
  txt = txt.replace(/\n+/g, "");
  txt = txt.replace(/\t+/g, "");
  txt = txt.replace(/ +/g, "");
  txt = txt.replace(/『/g, "「「");
  txt = txt.replace(/』/g, "」」");
  // txt = txt + txt + txt;

  var tokens = wy2tokens(txt);

  var side = 0;
  var pageno = 0;
  var commentx = W2;

  var sm = semantic(txt) as string[];

  var svg = "";

  function makeBorder() {
    var p = 5;
    var vo = Y0 + (Y1 - Y0) * 0.2;
    var vh = 10;
    var vp = 3;
    var uo = Y0 + (Y1 - Y0) * 0.7;
    if (!side) {
      svg += `<path d="M${W2} ${Y0} L${W2 - X0 - p} ${Y0} L${W2 -
        X0 -
        p} ${Y1} L${W2} ${Y1}" stroke="${BLACK}" fill="none" stroke-width="3"></path>`;
      svg += `<path d="M${W2} ${vo} L${W2 - X1} ${vo} L${W2 - X1} ${vo +
        vh} L${W2} ${vo + vh / 2}" fill="${BLACK}" stroke="none"></path>`;
      svg += `<path d="M${W2} ${vo - vp} L${W2 - X1} ${vo -
        vp}" fill="none" stroke="${BLACK}"></path>`;
      svg += `<path d="M${W2 - X1} ${vo + vh + vp} L${W2} ${vo +
        vh / 2 +
        vp}" fill="none" stroke="${BLACK}"></path>`;
      svg += `<path d="M${W2} ${uo} L${W2 -
        X1} ${uo}" fill="none" stroke="${BLACK}"></path>`;
    } else {
      svg += `<path d="M${0} ${Y0} L${X0 + p} ${Y0} L${X0 +
        p} ${Y1} L${0} ${Y1}" stroke="${BLACK}" fill="none" stroke-width="3"></path>`;
      svg += `<path d="M${0} ${vo} L${X1} ${vo} L${X1} ${vo + vh} L${0} ${vo +
        vh / 2}" fill="${BLACK}" stroke="none"></path>`;
      svg += `<path d="M${0} ${vo - vp} L${X1} ${vo -
        vp}" fill="none" stroke="${BLACK}"></path>`;
      svg += `<path d="M${X1} ${vo + vh + vp} L${0} ${vo +
        vh / 2 +
        vp}" fill="none" stroke="${BLACK}"></path>`;
      svg += `<path d="M${0} ${uo} L${X1} ${uo}" fill="none" stroke="${BLACK}"></path>`;
    }

    if (!plotResult) {
      for (
        var i = side ? X0 : W2 - X1;
        i >= (side ? X1 : W2 - X0) - p;
        i -= CW
      ) {
        svg += `<line x1="${i}" y1="${Y0}" x2="${i}" y2="${Y1}" stroke="${BLACK}"></line>`;
      }
    } else {
      if (!side) {
        svg += `<line x1="${W2 - X1}" y1="${Y0}" x2="${W2 -
          X1}" y2="${Y1}" stroke="${BLACK}"></line>`;
        svg += `<line x1="${W2 - X0}" y1="${Y0}" x2="${W2 -
          X0}" y2="${Y1}" stroke="${BLACK}"></line>`;
      } else {
        svg += `<line x1="${X1}" y1="${Y0}" x2="${X1}" y2="${Y1}" stroke="${BLACK}"></line>`;
        svg += `<line x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1}" stroke="${BLACK}"></line>`;
      }
    }

    for (var i = 0; i < fname.length; i++) {
      svg += `<text x="${(side ? 0 : W2 - X1) + X1 * 0.1}" y="${vo +
        30 +
        i * X1 * 1.5}" font-size="${X1 *
        0.8}" font-family="${FONT}" fill="${BLACK}">${fname[i]}</text>`;
    }
    var hpg = num2hanzi(pageno + 1);
    for (var i = 0; i < hpg.length; i++) {
      svg += `<text x="${(side ? 0 : W2 - X1) + X1 * 0.1}" y="${uo +
        30 +
        i * X1 * 1.5}" font-size="${X1 *
        0.8}" font-family="${FONT}" fill="${BLACK}">${hpg[i]}</text>`;
    }
  }

  var x;
  var y;

  function newSvg() {
    svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${W2}" height="${H}" viewBox="${-MA} ${-MA} ${W2 +
      MA * 2} ${H + MA * 2}">`;
    if (MA) {
      svg += `<rect x="${-MA}" y="${-MA}" width="${W2 + MA * 2}" height="${H +
        MA * 2}" stroke="none" fill="white"></rect>`;
    }
    svg += `<rect x="${0}" y="${0}" width="${W}" height="${H}" stroke="${BLACK}" fill="linen"></rect>`;
    svg += `<rect x="${W}" y="${0}" width="${W}" height="${H}" stroke="${BLACK}" fill="linen"></rect>`;

    if (side == 0) {
      x = W2 - X1 - CW;
    } else {
      x = X0 - CW;
    }
    y = Y0 + CH;
    commentx = W2;
  }
  newSvg();
  makeBorder();

  function managePage() {
    if ((side == 0 && x < W2 - X0 - 0.1) || (side == 1 && x < X1 - 0.1)) {
      side = side == 0 ? 1 : 0;
      pageno++;

      if (side == 0) {
        x = W + X0 - CW;
        svg += "</svg>";
        svgs.push(svg);
        newSvg();
      } else {
        x = X0 - CW;
      }
      y = Y0 + CH;
      makeBorder();
    }
  }
  function makeLine() {
    if (plotResult) {
      if (Math.abs(x - X1) > 0.1 && Math.abs(x - (W2 - X0)) > 0.1) {
        svg += `<line x1="${x}" y1="${Y0}" x2="${x}" y2="${Y1}" stroke="${BLACK}"></line>`;
      }
    }
  }
  function nextLine() {
    makeLine();
    x -= CW;
    y = Y0 + CH;
    managePage();
  }

  function resultPlotter() {
    var out = "";

    var js = compile(txt, { lang: "js" })
      .replace(/console.log\(\)/g, `out+="\\n";`)
      .replace(/console.log\((.+?)\)/g, function(_, p1) {
        return `out+=` + p1.split(",").join("+") + `+"\\n";`;
      });

    eval(js);
    makeLine();
    x -= CW / 2;
    y = Y0 + CH;
    for (var i = 0; i < out.length; i++) {
      if (out[i] == "\n") {
        y = Y0 + CH;
        x -= CW / 3.7;
      } else {
        svg += `<text x="${x}" y="${y}" font-size="${CS /
          3}" font-family="${FONT}" fill="rgba(0,0,0,0.7)">${out[i]}</text>`;
        y += CH / 2.5;
        if (y >= Y1) {
          y = Y0 + CH;
          x -= CW / 3.7;
        }
      }
    }
  }

  var iden = false;
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] == "\n") {
      nextLine();
    } else {
      if (!iden && txt[i] == "批" && txt[i + 1] == "曰") {
        for (var j = 0; j < tokens.length; j++) {
          if (tokens[j][2] > i + 1) {
            var cmt = tokens[j][1].replace(/^\"\"*/, "").replace(/\"\"*$/, "");
            console.log(cmt);
            var ky = PCT + CH / 2;
            var kx = Math.min(commentx, x + CO + CW / 2);
            for (var k = 0; k < cmt.length; k++) {
              if (cmt[k] == "。" || cmt[k] == "、") {
                svg += `<circle cx="${kx + CW / 2 - CO}" cy="${ky -
                  CH / 2}" r="${CH /
                  12}" stroke="${RED}" fill="none" stroke-width="0.5"></circle>`;
              } else {
                svg += `<text x="${kx}" y="${ky}" font-size="${CS /
                  2.2}" font-family="${FONT}" fill="${BOOK_COLORS.comment}">${
                  cmt[k]
                }</text>`;
                ky += CH / 1.5;
                if (ky > Y0 - PCB) {
                  ky = PCT + CH / 2;
                  kx -= CW / 2;
                }
              }
            }
            commentx = kx - CW / 2;
            i = tokens[j][2];
            break;
          }
        }
      } else if (txt[i] == "。") {
        // svg += `<text x="${x+CW*0.6+CO}" y="${y-CH}" font-size="${CS}" font-family="${FONT}" fill="${RED}">${txt[i]}</text>`
        svg += `<circle cx="${x + CW - 3}" cy="${y - CH + PSH}" r="${CH /
          7}" stroke="${RED}" fill="none" stroke-width="1" wy-data="${
          txt[i]
        }"></circle>`;
      } else if (txt[i] == "、" && !iden) {
        svg += `<text x="${x + CW - 6}" y="${y -
          CH +
          PSH}" fill="${RED}" wy-data="${txt[i]}">、</text>`;
      } else if (txt[i] == "「") {
        iden = true;
        if (y > Y1) {
          nextLine();
        }
        var h = CH / 4;
        svg += `<path d="M${x} ${y - CH / 2 + h / 2 + PSH} L${x + CW / 5} ${y -
          CH / 2 -
          h / 2 +
          PSH} L${x + (4 * CW) / 5} ${y - CH / 2 - h / 2 + PSH} L${x + CW} ${y -
          CH / 2 +
          h / 2 +
          PSH}" stroke="${BLACK}" fill="none" stroke-width="0.5" wy-data="${
          txt[i]
        }"></path>`;
        // svg += `<text x="${x+CO}" y="${y-CH/2}" font-size="${CS}" font-family="${FONT}">︹</text>`
        y += CH / 2;
      } else if (txt[i] == "」") {
        iden = false;
        if (y > Y1) {
          nextLine();
        }
        var h = CH / 4;
        svg += `<path d="M${x} ${y - CH / 2 - h + PSH} L${x + CW / 5} ${y -
          CH / 2 +
          PSH} L${x + (4 * CW) / 5} ${y - CH / 2 + PSH} L${x + CW} ${y -
          CH / 2 -
          h +
          PSH}" stroke="${BLACK}" fill="none" stroke-width="0.5" wy-data="${
          txt[i]
        }"></path>`;
        // svg += `<text x="${x+CO}" y="${y}" font-size="${CS}" font-family="${FONT}">︺</text>`
        y += CH / 2;
      } else {
        if (y >= Y1) {
          nextLine();
        }
        svg += `<text x="${x +
          CO}" y="${y}" font-size="${CS}" font-family="${FONT}" fill="${
          BOOK_COLORS[sm[i]]
        }" wy-data="${txt[i]}">${txt[i]}</text>`;
        y += CH;
      }
    }
  }
  if (plotResult) {
    resultPlotter();
  }
  // makeLine();
  svg += "</svg>";
  svgs.push(svg);
  return svgs;
}

function unrender(svgs) {
  var txt = "";
  for (var i = 0; i < svgs.length; i++) {
    svgs[i].replace(/wy-data="(.*?)"/g, function(_, p) {
      txt += p;
    });
  }
  return txt;
}

export { render, unrender, BOOK_COLORS };
