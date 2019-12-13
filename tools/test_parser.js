var fs = require('fs');
var parser = require('../src/parser');
var execSync = require('child_process').execSync;

function runExample(lang,name){
	var txt = fs.readFileSync("../examples/"+name+".txt").toString();
	var js = parser.compile(lang,txt,{romanizeIdentifiers:true})
	console.log("=== EVAL ===")
	if (lang == "py"){
		fs.writeFileSync("tmp.py",js);
		var ret = execSync("which python3; if [ $? == 0 ]; then python3 tmp.py; else python tmp.py; fi; rm tmp.py",{ encoding: 'utf-8' })
		console.log(ret)
	}else{
		eval(js);
	}
}

function runAll(lang){

	var files = fs.readdirSync("../examples/");
	console.log(files);
	for (var i = 0; i < files.length; i++){
		runExample(lang,files[i].split(".")[0]);
	}
}

runExample("py","quicksort")
// runAll("py")