try{process.chdir("./tools");}catch(e){}//make sure we're in tools directory

const fs = require("fs");
var execSync = require('child_process').execSync;
var utils = require('./utils')
var compileinfo = `${new Date().toLocaleDateString('en-US')}`

function cmdlinecode(){
	var ARGS = [
		["--lang",    "-l", String,  "js",          "Language: js/py"],
		["--roman",   "-r", String,  "none",        "Romanize identifiers"],
		["--output",  "-o", String,  "/dev/stdout", "Output file"],
		["--exec",    "-x", Boolean, false,         "Execute ouput"],
		["--eval",    "-e", String,  "",            "Give a string instead of a file"],
		["--log",     null, String,  "/dev/null",   "Log file"],
		["--inspect", "-i", Boolean, false,         "Interactive REPL"],
		["--render",  null, String,  "none", 		"Render input under given title"],
	]
	var ART = ` ,_ ,_\n \\/ ==\n /\\ []`
	function printhelp(){
		ARGS.sort()
		console.log(ART);
		console.log("\nWENYAN LANG 文言 Compiler 0.01 ("+compileinfo+")")
		console.log("\nUsage: wenyan [options] [input files]")
		console.log("\nOptions:")
		var ret = "";
		for (var i = 0; i < ARGS.length; i++){
			ret += ARGS[i][0].padEnd(9) + " "
			if (ARGS[i][1]){
				ret += ARGS[i][1] + " "
			}else{
				ret += "   "
			}
			ret += ("<"+(typeof ARGS[i][2]())+">").padEnd(9);
			ret += " : "
			var s = ARGS[i][4]+" (default: `"+ARGS[i][3]+"')"
			var n = 50
			if (s.length < n){
				ret += s
			}else{
				var l = s.split(" ");
				var m = Math.floor(l.length/2)
				var s0 = l.slice(0,m);
				var s1 = l.slice(m);
				ret += s0 + "\n" + " ".repeat(16)+s1
			}
			ret += "\n"
		}
		console.log(ret)
	}

	function argparse(){
		if (process.argv.length <= 2){
			printhelp()
			process.exit();
		}
		var args = {};
		for (var i = 0; i < ARGS.length; i++){
			args[ARGS[i][0]]=ARGS[i][3];
		}
		var files = [];
		var i = 2;
		while (i < process.argv.length){
			var a = process.argv[i];
			var b = process.argv[i+1];
			var found = false;
			for (var j = 0; j < ARGS.length; j++){
				if (a && (ARGS[j][0]==a || ARGS[j][1]==a)){
					args[ARGS[j][0]]=ARGS[j][2](b);
					i+=2;
					found = true;
					break;
				}
			}
			if (!found){
				if (a[0]=="-"&&(!a.includes("."))){
					console.log("Unrecognized argument: ",a);
					process.exit();
				}else{
					files.push(a);
					i+=1;
				}
			}
		}
		return {files,args};
	}
	function replscope(){
		function generate(depth){
			var s0 = "global.__scope=new function(){\n"
			var s1 = "\n}"
			for (var i = 0; i < depth; i++){
				var istr = "__"+(''+i).padStart(8,'0');
				s0 += `this.evil=function(${istr}){global.__scope=this;var __r=eval(${istr});\n`
				s1 = `;return __r}` + s1
			}
			return eval(s0+s1);
		}
		var stackCallSize = 1000;
		for (var i = stackCallSize; i > 0; i-=200){
		  try{
		    generate(i);
		    stackCallSize = i;
		    break;
		  }catch(e){
		    //console.log(i+ " exceeds max stack size");
		  }
		}
		// console.log("final stack size "+stackCallSize);
	}

	function repl(args){
		const readline = require('readline');
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		global.haserr = false;
		rl.question('> ', (inp) => {
			var out = compile('js',
				inp,
				{
					romanizeIdentifiers:args['--roman'],
					logCallback:writer('/dev/null','a'),
					errorCallback:function(x){console.error(x);global.haserr = true},
				}
			)
			if (global.haserr){
				// console.log("Not evaulated.")
			}else{
				console.log("\x1b[2m"+out+"\x1b[0m")
				try{
					global.__scope.evil(out);
				}catch(e){
					console.log(e)
				}
			}
			rl.close();
			repl(args);
		});
	}

	function writer(f,mode){
		if (f == "/dev/null"){
			return ()=>0;
		}else if (f == "/dev/stdout"){
			return (x)=>((typeof x)=="string")?console.log(x):console.dir(x,{depth:null,'maxArrayLength':null});
		}else if (f == "/dev/stderr"){
			return console.error;
		}else if (mode == 'a'){
			return function(x){
				fs.appendFileSync(f,(((typeof x)=='object')?JSON.stringify(x):x.toString())+"\n");
			}
		}else if (mode == 'w'){
			return function(x){
				fs.writeFileSync(f,(((typeof x)=='object')?JSON.stringify(x):x.toString())+"\n");
			}
		}
	}


	function main(){
		var {files, args} = argparse();
		var scope_generated = false;
		var src = files.map(x=>
				x.endsWith('.svg')?
					 unrender([fs.readFileSync(x).toString()])
					:fs.readFileSync(x).toString()
				).join("\n")+"\n"+args['--eval'];
		var out = compile(args['--lang'],
			src,
			{
				romanizeIdentifiers:args['--roman'],
				logCallback:writer(args["--log"],'a'),
				errorCallback:function(x){console.error(x);process.exit()},
			}
		)
		if (args['--output'] == "."){
			
			if (files.length == 0){
				console.log("Cannot infer output filename because no input file was found.");
				process.exit();
			}else{
				var basename = files[0].split(".").slice(0,-1).join(".")
				if (args['--render'] == 'none'){
					args['--output'] = basename+"."+args['--lang']
				}else{
					args['--output'] = basename
				}
			}
				
		}
		if (args['--render'] == 'none'){
			writer(args['--output'],'w')(out);
		}else{
			var dispname = args['--render'];
			if (dispname == "."){
				var p = args['--output'].split(/[/\\]/);
				dispname = p[p.length-1];
			}
			var svgs = render(dispname,src,{plotResult:false})
			
			var outputEndsWithSvg = args['--output'].toLowerCase().endsWith('.svg');

			// only one page rendered
			if (svgs.length === 1) {
				if (!outputEndsWithSvg)
					args['--output'] += '.svg'
				fs.writeFileSync(args['--output'], svgs[0])
				console.log(args['--output'])
			}
			// multiple pages rendered, output file as `filename.001.svg` etc
			else {
				if (outputEndsWithSvg)
					args['--output'] = args['--output'].slice(0, -4) // remove .svg suffix

				for (var i = 0; i < svgs.length; i++) {
					var filename = args['--output']+"."+i.toString().padStart(3,'0')+".svg"
					fs.writeFileSync(filename, svgs[i])
					console.log(filename)
				}
			}
		}
		if (args['--exec']){
			if (args['--lang'] == 'js'){
				if (!args['--inspect']){
					eval(out);
				}else{
					replscope();
					scope_generated = true;
					global.__scope.evil(out);
				}
			}else if (args['--lang'] == 'py'){
				var execSync = require('child_process').execSync;
				fs.writeFileSync("tmp.py",out);
				var ret = execSync("which python3; if [ $? == 0 ]; then python3 tmp.py; else python tmp.py; fi; rm tmp.py",{ encoding: 'utf-8' })
				console.log(ret);
			}
		}
		if (args['--inspect']){
			if (!scope_generated){
				replscope();
			}
			repl(args);
		}

		return 0;
	}

	main();
}
var minify;
try{
	// delibrateError();
	minify = utils.uglifier();
}catch(e){//no wifi?
	minify = x=>({code:x});
}
var exe = ``
try{//on unix and linux this will work:
	const nodepath = execSync('which node', { encoding: 'utf-8' });
	exe += `#!${nodepath}\n`
}catch(e){}
exe += utils.catsrc();
exe+="\n"+cmdlinecode.toString()+"\nvar compileinfo=`"+compileinfo+"`\ncmdlinecode();";
fs.writeFileSync("../build/wenyan.js",minify(exe).code);

try{
	execSync('chmod +x ../build/wenyan.js');
}catch(e){}
