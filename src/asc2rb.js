let tmpVarCount = 0;
let randVarCount = 0;
const randVar = ()=> `_rand${++randVarCount}`
const currTmpVar = ()=> `_ans${tmpVarCount}`
const nextTmpVar = ()=> `_ans${++tmpVarCount}`
const prevTmpVar = (n)=> `_ans${tmpVarCount-n+1}`

let lop = {
	"||":" or ",
	"&&":" and "
}

let rblib = `# encoding: UTF-8
require 'forwardable'
	class Ctnr
		extend Forwardable
		attr_accessor :dict, :length, :it
		def initialize()
			@dict = {}
			@length = 0
			@it = -1
		end
		def push(*args)
			args.each do |arg|
				@dict[@length.to_s] = arg
				@length += 1
			end
		end
		def [](i)
			@dict[i.to_s]
		end
		def []=(i,x)
			@dict[i.to_s] = x
		end
		def slice(i)
			result = Ctnr.new;
			i.times {|index| result.push(self[index])}
			return result
		end
		def concat(other)
			other.length.times {|i| push(other[i]) }
			self
		end
		def values
			@dict.values
		end
		def to_s
			"[#{@dict.values.join(", ")}]"
		end
		def_delegators :values, :each
	end
	module Math
		def self.random(*args)
			rand(*args)
		end
		def self.floor(number)
			number.floor
		end
	end
#####
`
const rename = (name) => name && `${name.toLowerCase()}`

// #REFACTOR ME#
// temperory patch
// need some code refactoring.
function lowerAllPinYinAndMakeItGlobal(asc) {
	for (let i = 0; i < asc.length; i++) {
		const item = asc[i];
		switch (item.op) {
			case "var":
			case "name":
				item.names = item.names.map((e) => rename(e));
				break;
			case "call":
				item.fun = rename(item.fun)
				item.args = item.args.map((arg) => {
					if(arg[0] == 'iden') arg[1] = rename(arg[1])
					return arg
				})
				break;
			case "fun":
				item.args = item.args.map((arg) => {
					arg.name = rename(arg.name)
					return arg
				})
				break;
			case "return":
				if(item.value[0] == 'iden') item.value[1] = rename(item.value[1]);
				break;
			case "cat":
				item.containers = item.containers.map((e) => rename(e));
				break;
			case "for":
				item.container = rename(item.container);
				item.iterator = rename(item.iterator);
				break;
			case "push":
			case "length":
				item.container = rename(item.container);
				break;
			case "subscript":
				item.container = rename(item.container);
				if (item.value[0] == 'iden') rename(item.value[1]);
				break;
			case "if":
				item.test = item.test.map(condition => {
					if(condition[0] == "iden") condition[1] = rename(condition[1]);
					return condition;
				})
			default:
				break;
		}
		if (item.values){
			item.values.forEach((value) => {
				if(value[0]== 'iden') value[1] = rename(value[1])
			})
		}
		["rhs", "lhs", "lhssubs", "value"].forEach((key) => {
			if(item[key] && item[key][0]== 'iden') item[key][1] = rename(item[key][1])
		})
	}
	return asc;
}

function asc2rb(asc){
	let rb = rblib;
	let prevfun = "";
	let curlvl = 0;
	let strayvar = 0;
	let lambdaList = [];
	let methodIndex = 0;
	asc = lowerAllPinYinAndMakeItGlobal(asc)
	// console.log("START!",asc)
	function getval(x){
		if (!x) return "";
		if (x[0] == "ans"){
			strayvar = 0;
			return currTmpVar();
		}
		if (x[0] == 'iden') return rename(x[1])
		if (x[1] == undefined) return 'nil';
		return x[1];
	}
	for (let i = 0; i < asc.length; i++){
		let a = asc[i];
		if(a.args) console.log(a.args, a, "+++++++=======++++_____")
		if (a.op == 'var'){
			for (let j = 0; j < a.count; j++){
				if (a.values[j]==undefined){
					a.values[j]=[]
				}
				let name = a.names[j]
				if(a.type == 'fun') {
					prevfun = name;
					continue;
				}
				let value = getval(a.values[j])
				if (name==undefined){
					name = nextTmpVar();
					strayvar++;
				}
				if ([undefined, 'nil'].includes(value)){
					if (a.type=="arr"){
						value="Ctnr.new"
					}else if (a.type=="num"){
						value="0"
					}else if (a.type=="str"){
						value=`""`
					}else if (a.type=="bol"){
						value="false"
					}
				}
				rb += "\t".repeat(curlvl);
				rb += `${name}=${value}\n`
			}
		}else if (a.op == 'print'){
			rb += "\t".repeat(curlvl);
			rb += `p([`;
			for (let j = 0; j < strayvar; j++){
				rb += `${prevTmpVar(strayvar-j)}.to_s`
				if (j != strayvar-1){
					rb += ","
				}
			}
			rb+="].join)\n";
			strayvar = 0;
		}else if (a.op == 'fun'){
			rb += "\t".repeat(curlvl);
			let argsStr = a.args.map(arg=>arg.name).join(",");
			if(methodIndex == 0) {
				rb += `def ${prevfun}(${argsStr})`
			} else {
				lambdaList.push(prevfun);
				rb += `${prevfun} = proc {|${argsStr}|`
			}
			methodIndex++;
		}else if (a.op == "funbody"){
			rb += "\t".repeat(curlvl);
			if (asc[i-1].op != 'fun'){
				if(methodIndex == 0) {
					rb += `def ${prevfun}()`
				} else {
					lambdaList.push(prevfun);
					rb += `${prevfun} = proc {|_|`
				}
				methodIndex++;
			}
			rb += "\n"
			curlvl++;
		}else if (a.op == "funend"){
			curlvl--;
			methodIndex--;
			if(methodIndex == 0) {
				rb += `${"\t".repeat(curlvl)}end\n`
			} else {
				rb += `${"\t".repeat(curlvl)}}`;
			}
			rb += "\n";
		}else if (a.op == "end"){
			curlvl--;
			rb += `${"\t".repeat(curlvl)}end \n`
		}else if (a.op == "if"){
			rb += "\t".repeat(curlvl);
			rb += "if ";
			let j = 0;
			while (j < a.test.length){
				if (a.test[j][0] == "cmp"){
					rb += a.test[j][1]
				}else if (a.test[j][0] == "ctnr"){
					if (a.test[j][1]=="subs"){
						if (a.test[j+1][1]=="rest"){
							rb += ".slice(1)"
						}else{
							if (a.test[j+1][0]=="lit"){
								rb += "["+(a.test[j+1][1])+"]"
							}else{
								rb += "["+(a.test[j+1][1])+"-1]"
							}
						}
						j++;
					}else if (a.test[j][1]=="len"){
						rb += ".length"
					}
				}else{
					rb += a.test[j][1]
				}
				j++;
			}
			rb += "\n"
			curlvl++;
		}else if (a.op == "else"){
			rb += "\t".repeat(curlvl-1);
			rb += "else\n"
		}else if (a.op == "return"){
			rb += "\t".repeat(curlvl);
			rb += `return ${getval(a.value)}\n`
		}else if (a.op.startsWith("op")){
			rb += "\t".repeat(curlvl);
			let lhs = getval(a.lhs);
			let rhs = getval(a.rhs);

			let op = a.op.slice(2);
			if (op in lop){
				op = lop[op]
			}
			rb += `${nextTmpVar()}=${lhs}${op}${rhs}\n`
			strayvar++;
		}else if (a.op == "name"){
			for (let j = 0; j < a.names.length; j++){
				rb += "\t".repeat(curlvl);
				rb += `${a.names[j]}=${prevTmpVar(strayvar-j)}\n`
			}
			strayvar-=a.names.length;
		}else if (a.op == "call"){
			rb += "\t".repeat(curlvl);
			let functionCallStr = `${a.fun}(${a.args.map(x=>getval(x)).join(",")})`
			if(lambdaList.includes(a.fun)) {
				functionCallStr = `${a.fun}.call(${a.args.map(x=>getval(x)).join(",")})`
			}
			rb += `${nextTmpVar()}=${functionCallStr}\n`
			strayvar++;
		}else if (a.op == "subscript"){
			rb += "\t".repeat(curlvl);
			let idx =getval(a.value);
			if (idx=="rest"){
				rb += `${nextTmpVar()}=${a.container}.slice(1)\n`
				strayvar++;
			}else{
				rb += `${nextTmpVar()}=${a.container}[${idx}${a.value[0]=="lit"?"":"-1"}]\n`
				strayvar++;
			}
		}else if (a.op == "cat"){
			rb += "\t".repeat(curlvl);
			rb += `${nextTmpVar()}=${a.containers[0]}.concat(`+a.containers.slice(1).join(").concat(")+")\n"
			strayvar++;
		}else if (a.op == "push"){
			rb += "\t".repeat(curlvl);
			rb += `${a.container}.push(${a.values.map(x=>getval(x)).join(",")})\n`
		}else if (a.op == "for"){
			rb += "\t".repeat(curlvl);
			rb += `${a.container}.each do |${a.iterator.toLowerCase()}|\n`
			curlvl++;
		}else if (a.op == "whiletrue"){
			rb += "\t".repeat(curlvl);
			rb += "while true do\n";
			curlvl++;
		}else if (a.op == "whilen"){
			rb += "\t".repeat(curlvl);
			let v = randVar();
			rb += `${getval(a.value)}.times do |${v}|\n`;
			curlvl++;
		}else if (a.op == "break"){
			rb += "\t".repeat(curlvl);
			rb += "break\n";
		}else if (a.op == "not"){
			rb += "\t".repeat(curlvl);
			let v = getval(a.value);
			rb += `${nextTmpVar()}=!${v}\n`
			strayvar++;
		}else if (a.op == "reassign"){
			rb += "\t".repeat(curlvl);
			let rhs = getval(a.rhs);
			let lhs = getval(a.lhs);
			if (a.lhssubs){
				lhs += `[${a.lhssubs[1]}${a.lhssubs[0]=="lit"?"":"-1"}]`
			}
			rb += `${lhs}=${rhs}\n`
		}else if (a.op == "discard"){
			strayvar = 0;
		}else if (a.op == "length"){
			rb += `${nextTmpVar()}=${a.container}.length;`
			strayvar ++;
		}else if (a.op == "comment"){
			rb += "\t".repeat(curlvl);
			rb += `# ${getval(a.value)}\n`
			rb += "\t".repeat(curlvl);
		}else{
			// console.log(a.op)
		}
	}
	return rb;
}
try{
	module.exports = asc2rb
}catch(e){}
