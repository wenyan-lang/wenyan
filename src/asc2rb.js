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
	class Ctnr
		attr_accessor :dict, :length, :it
		def initialize()
			@dict = dict
			@length = 0
			@it = -1
		end
		def push(*args)
			@dict[@length.to_s] = args
			@length += 1
		end
		def [](i)
			@dict[i.to_s]
		end
		def []=(i,x)
			@dict[i.to_s] = x
		end
		def slice(i)
			i.upto(@length).map {|index| @dict[index.to_s]}
		end
		def concat(other)
			other.each {|item| push(item) }
		end
	end
#####
`

function asc2rb(asc){
	console.log(asc)
	let rb = rblib;
	let prevfun = "";
	let curlvl = 0;
	let strayvar = 0;
	function getval(x){
		if (!x) return "";
		if (x[0] == "ans"){
			strayvar = 0;
			return currTmpVar();
		}
		return x[1] || undefined;
	}

	for (let i = 0; i < asc.length; i++){
		let a = asc[i];
		if (a.op == 'var'){
			for (let j = 0; j < a.count; j++){
				if (a.values[j]==undefined){
					a.values[j]=[]
				}
				let name = a.names[j]
				let value = getval(a.values[j])
				if (name==undefined){
					name = nextTmpVar();
					strayvar++;
				}
				if (value==undefined){

					if (a.type=="arr"){
						value="Ctnr.new"
					}else if (a.type=="num"){
						value="0"
					}else if (a.type=="str"){
						value=`""`
					}else if (a.type=="bol"){
						value="False"
					}else if (a.type=="fun"){
						value="lambda _:0"
						prevfun=name;
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
			straylet = 0;
		}else if (a.op == 'fun'){
			rb += "\t".repeat(curlvl);
			rb += `def `+prevfun+`(`
			for (let j = 0; j < a.arity; j++){
				rb+=a.args[j].name;
				if (j != a.arity-1){
					rb+=","
				}
			}
			rb+=")"
		}else if (a.op == "funbody"){
			rb += "\t".repeat(curlvl);
			if (asc[i-1].op != 'fun'){
				rb += `def `+prevfun+"()"
			}
			rb += "\n"
			curlvl++;
		}else if (a.op == "funend"){
			curlvl--;
			rb += `${"\t".repeat(curlvl)}end \n`
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
					rb+=a.test[j][1]
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
			rb += `return ${getval(a.value)}\nend\n`
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
			rb += `${nextTmpVar()}=${a.fun}(${a.args.map(x=>getval(x)).join(",")})\n`
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
			rb += `for ${a.iterator} in ${a.container}:\n`
			curlvl++;
		}else if (a.op == "whiletrue"){
			rb += "\t".repeat(curlvl);
			rb += "while true do\n";
			curlvl++;
		}else if (a.op == "whilen"){
			rb += "\t".repeat(curlvl);
			let v = randVar();
			rb += `0.upto(${getval(a.value)}) do |${v}|\n`;
			curlvl++;
		}else if (a.op == "break"){
			rb += "\t".repeat(curlvl);
			rb += "break\n";
		}else if (a.op == "not"){
			rb += "\t".repeat(curlvl);
			let v = getval(a.value);
			rb += `${nextTmpVar()}=not ${v}\n`
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
			straylet = 0;
		}else if (a.op == "comment"){
			rb += "\t".repeat(curlvl);
			rb += `# ${getval(a.value)}\n`
			rb += "\t".repeat(curlvl);
		}else{
			console.log(a.op)
		}
	}
	return rb;
}
try{
	module.exports = asc2rb
}catch(e){}
