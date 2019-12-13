const fs = require("fs");
var execSync = require('child_process').execSync;
var utils = require('./utils')

function cmdlinecode(){
	var ARGS = [
		["--lang","-l",String,"js"],
		["--roman","-r",Boolean,true],
		["--output","-o",String,"/dev/stdout"],
		["--exec","-x",Boolean,false],
		["--eval","-e",String,""],
		["--log",undefined,String,"/dev/null"],
	]

	function argparse(){
		
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
		var out = compile(args['--lang'],
			files.map(x=>fs.readFileSync(x).toString()).join("\n")+"\n"+args['--eval'],
			{
				romanizeIdentifiers:args['--roman'],
				logCallback:writer(args["--log"],'a'),
				errorCallback:function(x){console.error(x);process.exit()},
			}
		)
		writer(args['--output'],'w')(out);
		if (args['--exec']){
			eval(out);
		}
		return 0;
	}

	main();
}

const minify = utils.uglifier();

const nodepath = execSync('which node', { encoding: 'utf-8' });
var exe = `#!${nodepath}\n`
exe += utils.catsrc();
exe+="\n"+cmdlinecode.toString()+"\ncmdlinecode();";
fs.writeFileSync("../build/wenyan",minify(exe).code);

execSync('chmod +x ../build/wenyan');

