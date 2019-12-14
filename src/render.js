const fs = require('fs')
const hl = require('./highlight')
const {num2hanzi} = require('./hanzi2num')
const parser = require('./parser')

const RED = "#E53"
const BLACK = "#222"

const BOOK_COLORS = {
  'ctrl':RED,
  'lop':BLACK,
  'name':BLACK,
  'cmp':BLACK,
  'decl':BLACK,
  'print':BLACK,
  'rassgn':BLACK,
  'ctnr':BLACK,
  'comment':RED,
  'type':BLACK,
  'call':BLACK,
  'assgn':BLACK,
  'discard':BLACK,
  'endl':BLACK,
  'ans':BLACK,
  'expr':BLACK,
  'op':BLACK,
  'not':BLACK,
  'operand':BLACK,
  'bool':BLACK,
  'data':BLACK,
  "iden":"#248",
  "quot":BLACK,
  "num":"#872",
}

function render(fname,txt){
	var svgs = []
	var W2 = 792

	var W = W2/2
	var H = 612

	var X0 = W-30
	var Y0 = 120;
	var X1 = 10;
	var Y1 = H-20;

	var CW = (X0-X1)/14;
	var CH = 16;
	var CS = 18;
	var CO = 3;

	var PCT = 40;
	var PCB = 5;

	txt = txt.replace(/\r\n/g,"\n");
	txt = txt.replace(/\n+/g,"");
	txt = txt.replace(/\t+/g,"");
	txt = txt.replace(/ +/g,"");

	
	// txt = txt + txt + txt;
	// var out = "";
	// var js = parser.compile('js',txt).replace(/console.log\((.+?)\)/g,`out+=$1+"\\n"`)
	// eval(js)
	// txt += "\n"+out

	var tokens = parser.wy2tokens(txt);

	var side = 0
	var pageno = 0;
	var commentx = W2;

	var sm = hl.semantic(txt);

	var svg = ""

	function makeBorder(){
		var p= 5;
		var vo=Y0+(Y1-Y0)*0.2
		var vh=10;
		var vp=3;
		var uo=Y0+(Y1-Y0)*0.7
		if (!side){
			svg += `<path d="M${W2} ${Y0} L${W2-X0-p} ${Y0} L${W2-X0-p} ${Y1} L${W2} ${Y1}" stroke="${BLACK}" fill="none" stroke-width="3"></path>`
			for (var i = W2-X1; i >= W2-X0-p; i-=CW){
				svg += `<line x1="${i}" y1="${Y0}" x2="${i}" y2="${Y1}" stroke="${BLACK}"></line>`
			}
			svg += `<path d="M${W2} ${vo} L${W2-X1} ${vo} L${W2-X1} ${vo+vh} L${W2} ${vo+vh/2}" fill="${BLACK}" stroke="none"></path>`
			svg += `<path d="M${W2} ${vo-vp} L${W2-X1} ${vo-vp}" fill="none" stroke="${BLACK}"></path>`
			svg += `<path d="M${W2-X1} ${vo+vh+vp} L${W2} ${vo+vh/2+vp}" fill="none" stroke="${BLACK}"></path>`
			svg += `<path d="M${W2} ${uo} L${W2-X1} ${uo}" fill="none" stroke="${BLACK}"></path>`

		}else{
			svg += `<path d="M${0} ${Y0} L${X0+p} ${Y0} L${X0+p} ${Y1} L${0} ${Y1}" stroke="${BLACK}" fill="none" stroke-width="3"></path>`
			for (var i = X0; i >= X1-p; i-=CW){
				svg += `<line x1="${i}" y1="${Y0}" x2="${i}" y2="${Y1}" stroke="${BLACK}"></line>`
			}
			svg += `<path d="M${0} ${vo} L${X1} ${vo} L${X1} ${vo+vh} L${0} ${vo+vh/2}" fill="${BLACK}" stroke="none"></path>`
			svg += `<path d="M${0} ${vo-vp} L${X1} ${vo-vp}" fill="none" stroke="${BLACK}"></path>`
			svg += `<path d="M${X1} ${vo+vh+vp} L${0} ${vo+vh/2+vp}" fill="none" stroke="${BLACK}"></path>`
			svg += `<path d="M${0} ${uo} L${X1} ${uo}" fill="none" stroke="${BLACK}"></path>`
		}
		
		for (var i = 0; i < fname.length; i++){
			svg += `<text x="${(side?0:(W2-X1))+X1*0.1}" y="${vo+30+i*X1*1.5}" font-size="${X1*0.8}" font-family="serif" fill="${BLACK}">${fname[i]}</text>`

		}
		var hpg = num2hanzi(pageno+1);
		for (var i = 0; i < hpg.length; i++){
			svg += `<text x="${(side?0:(W2-X1))+X1*0.1}" y="${uo+30+i*X1*1.5}" font-size="${X1*0.8}" font-family="serif" fill="${BLACK}">${hpg[i]}</text>`
		}
	}

	var x;
	var y;

	function newSvg(){
		svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${W2}" height="${H}">`;
		svg += `<rect x="${0}" y="${0}" width="${W}" height="${H}" stroke="${BLACK}" fill="linen"></rect>`
		svg += `<rect x="${W}" y="${0}" width="${W}" height="${H}" stroke="${BLACK}" fill="linen"></rect>`

		if (side == 0){
			x = W2-X1-CW;
		}else{
			x = X0-CW;
		}
		y = Y0+CH;
		commentx = W2;

	}
	newSvg();
	makeBorder();
	
	function managePage(){
		if ( (side == 0 && x < W2-X0-0.1) || (side == 1 && x < X1-0.1) ){
			side = !side;
			pageno++;
			
			if (side == 0){
				x = W+X0-CW;
				svg += "</svg>"
				svgs.push(svg);
				newSvg();
			}else{
				x = X0-CW;
			}
			y = Y0+CH;
			makeBorder();
		}
	}
	var iden = false;
	for (var i = 0; i < txt.length; i++){

		if (txt[i] == "\n"){
			x -= CW;
			y = Y0+CH;
			managePage();
		}else{

			if (!iden && txt[i] == "批" && txt[i+1] == "曰"){
				for (var j = 0; j < tokens.length; j++){
					if (tokens[j][2]>i+1){
						var cmt = tokens[j][1].replace(/^\"\"*/, '').replace(/\"\"*$/, '');
						console.log(cmt)
						var ky = PCT+CH/2
						var kx = Math.min(commentx,x+CO+CW/2);
						for (var k = 0; k < cmt.length; k++){
							if (cmt[k]=="。"){
								svg += `<circle cx="${kx+CW/2-CO}" cy="${ky-CH/2}" r="${CH/12}" stroke="${RED}" fill="none" stroke-width="0.5"></circle>`
							}else{
								svg += `<text x="${kx}" y="${ky}" font-size="${CS/2.2}" font-family="serif" fill="${BOOK_COLORS.comment}">${cmt[k]}</text>`
								ky += CH/1.5;
								if (ky>Y0-PCB){
									ky = PCT+CH/2;
									kx-=CW/2;
								}
							}
						}
						commentx=kx-CW/2
						i=tokens[j][2]
						break;
					}
				}
			}else if (txt[i] == "。"){
				// svg += `<text x="${x+CW*0.6+CO}" y="${y-CH}" font-size="${CS}" font-family="serif" fill="${RED}">${txt[i]}</text>`
				svg += `<circle cx="${x+CW-3}" cy="${y-CH}" r="${CH/7}" stroke="${RED}" fill="none" stroke-width="1"></circle>`
			}else if (txt[i] == "「"){
				iden = true;
				if (y > Y1){
					x -= CW;
					y = Y0+CH;
					managePage();
					
				}
				var h = CH/4
				svg += `<path d="M${x} ${y-CH/2+h/2} L${x+CW/5} ${y-CH/2-h/2} L${x+4*CW/5} ${y-CH/2-h/2} L${x+CW} ${y-CH/2+h/2}" stroke="${BLACK}" fill="none" stroke-width="0.5"></path>`
				// svg += `<text x="${x+CO}" y="${y-CH/2}" font-size="${CS}" font-family="serif">︹</text>`
				y += CH/2;
			}else if (txt[i] == "」"){
				iden = false;
				if (y > Y1){
					x -= CW;
					y = Y0+CH;
					managePage();
					
				}
				var h = CH/4
				svg += `<path d="M${x} ${y-CH/2-h} L${x+CW/5} ${y-CH/2} L${x+4*CW/5} ${y-CH/2} L${x+CW} ${y-CH/2-h}" stroke="${BLACK}" fill="none" stroke-width="0.5"></path>`
				// svg += `<text x="${x+CO}" y="${y}" font-size="${CS}" font-family="serif">︺</text>`
				y += CH/2;
			}else{
				if (y >= Y1){
					x -= CW;
					y = Y0+CH;
					managePage();
				}
				svg += `<text x="${x+CO}" y="${y}" font-size="${CS}" font-family="serif" fill="${BOOK_COLORS[sm[i]]}">${txt[i]}</text>`
				y += CH;
			}
			
		}
		
	}
	svg += "</svg>"
	svgs.push(svg);
	return svgs
}

// var svgs = render("圖靈機",fs.readFileSync("../examples/turing.txt").toString())
var svgs = render("曼德博集",fs.readFileSync("../examples/mandelbrot.txt").toString())
for (var i = 0; i < svgs.length; i++){
	fs.writeFileSync("../test"+i+".svg",svgs[i])
}


