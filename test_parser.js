var fs = require('fs');
var parser = require('./parser');

function runExample(name){
	var txt = fs.readFileSync("examples/"+name+".txt").toString();
	var js = parser.compile('js',txt,{romanizeIdentifiers:true})
	console.log("=== EVAL ===")
	eval(js);
}

function runAll(){

	var files = fs.readdirSync("examples/");
	console.log(files);
	for (var i = 0; i < files.length; i++){
		runExample(files[i].split(".")[0]);
	}
}

runExample("turing")
// runAll()