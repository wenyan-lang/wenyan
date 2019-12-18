try{process.chdir("./tools");}catch(e){}

var fs = require('fs');
var parser = require('../src/parser');
var execSync = require('child_process').execSync;
var utils = require('./utils')

function runExample(lang,name){
	var txt = fs.readFileSync("../examples/"+name+".wy").toString();
	var js = parser.compile(lang,txt,{romanizeIdentifiers:true})
	console.log("=== EVAL ===")
	if (lang == "py"){
		console.log(utils.pyeval(js))
	}else if (lang == "js"){
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