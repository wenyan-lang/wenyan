var tmpVarCnt = 0;
var randVarCnt = 0;
function randVar(){
	randVarCnt++;
	return "_rand"+randVarCnt;
}
function currTmpVar(){
	return "_ans"+tmpVarCnt;
}
function nextTmpVar(){
	tmpVarCnt++;
	return "_ans"+tmpVarCnt;
}
function prevTmpVar(n){
	return "_ans"+(tmpVarCnt-n+1);
}

var lop = {
	"||":" or ",
	"&&":" and "
}

var pylib=`# -*- coding: utf-8 -*-
class Ctnr():
	def __init__(self):self.dict = dict();self.length = 0;self.it = -1;
	def push(self,*args):
		for arg in args:
			self.dict[str(self.length)]=arg; self.length+=1
	def __getitem__(self,i):
		try: return self.dict[str(i)]
		except: return None
	def __setitem__(self,i,x):
		self.dict[str(i)]=x
		inti = None
		try:
			inti = int(i)
			if (abs(inti - float(i))>0.0001): inti=None
		except: pass
		if (inti != None):
			self.length=inti+1
			for j in range(0,self.length):
				try:  self.dict[str(j)]
				except: self.dict[str(j)]=None
	def slice(self,i):
		ret = Ctnr();
		for i in range(i,self.length): ret.push(self[i])
		return ret
	def concat(self,other):
		ret = Ctnr();
		for i in range(0,self.length): ret.push(self[i])
		for i in range(0,other.length): ret.push(other[i])
		return ret
	def __str__(self):
		if (len(self.dict.keys())==self.length):
			ret = "["
			for k in range(0,self.length):
				v = self[k]
				if (isinstance(v,Ctnr)): ret += v.__str__()
				else: ret += str(v)
				ret+=","
			ret += "]"
			return ret;
		else:
			ret = "{"
			for k in self.dict.keys():
				ret += str(k)+":"
				v = self.dict[k]
				if (isinstance(v,Ctnr)): ret += v.__str__()
				else: ret += str(v)
				ret+=","
			ret += "}"
			return ret;
	def __repr__(self):
		return self.__str__()
	def __iter__(self):
		self.it = -1;
		return self
	def __next__(self):
		self.it += 1
		if (self.it >= self.length): raise StopIteration()
		return self[self.it]
#####
`

function asc2py(asc, _imports, { resetVarCnt } = {}) {
	var py = pylib;
	var prevfun="";
	var curlvl = 0;
	var strayvar = 0;

  if (resetVarCnt) {
		tmpVarCnt = 0;
		randVarCnt = 0;
	}

	function getval(x){
		if (x == undefined){
			return "";
		}
		if (x[0]=="ans"){
			strayvar = 0;
			return currTmpVar();
		}
		if (x[1]==undefined){
			return undefined;
		}
		if (x[1].toString()=="true"){
			return "True"
		}
		if (x[1].toString()=="false"){
			return "False"
		}
		return x[1]
	}

	for (var i = 0; i < asc.length; i++){
		var a = asc[i];
		if (a.op == 'var'){
			for (var j = 0; j < a.count; j++){
				if (a.values[j]==undefined){
					a.values[j]=[]
				}
				var name = a.names[j]
				var value = getval(a.values[j])
				if (name==undefined){
					name = nextTmpVar();
					strayvar ++;
				}
				if (value==undefined){

					if (a.type=="arr"){
						value="Ctnr()"
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
				py += "\t".repeat(curlvl);
				py += `${name}=${value}\n`
			}
		}else if (a.op == 'print'){
			py += "\t".repeat(curlvl);
			py += `print("".join([`;
			for (var j = 0; j < strayvar; j++){
				py += `str(${prevTmpVar(strayvar-j)})`
				if (j != strayvar-1){
					py += ","
				}
			}
			py+="]))\n";
			strayvar = 0;
		}else if (a.op == 'fun'){
			py += "\t".repeat(curlvl);
			py += `def `+prevfun+`(`
			for (var j = 0; j < a.arity; j++){
				py+=a.args[j].name;
				if (j != a.arity-1){
					py+=","
				}
			}
			py+=")"
		}else if (a.op == "funbody"){
			py += "\t".repeat(curlvl);
			if (asc[i-1].op != 'fun'){
				py += `def `+prevfun+"()"
			}
			py += ":\n"
			curlvl++;
		}else if (a.op == "funend"){
			py += "\n"
			curlvl--;
		}else if (a.op == "end"){
			py += "\n"
			curlvl--;

		}else if (a.op == "if"){
			py += "\t".repeat(curlvl);
			py += "if ";
			var j = 0;
			while (j < a.test.length){
				if (a.test[j][0] == "cmp"){
					py += a.test[j][1]
				}else if (a.test[j][0] == "ctnr"){
					if (a.test[j][1]=="subs"){
						if (a.test[j+1][1]=="rest"){
							py += ".slice(1)"
						}else{
							if (a.test[j+1][0]=="lit"){
								py += "["+(a.test[j+1][1])+"]"
							}else{
								py += "["+(a.test[j+1][1])+"-1]"
							}
						}
						j++;
					}else if (a.test[j][1]=="len"){
						py += ".length"
					}
				}else{
					py+=a.test[j][1]
				}
				j++;
			}
			py += ":\n"
			curlvl++;
		}else if (a.op == "else"){
			py += "\t".repeat(curlvl-1);
			py += "else:\n"
		}else if (a.op == "return"){
			py += "\t".repeat(curlvl);
			py += `return ${getval(a.value)}\n`
		}else if (a.op.startsWith("op")){
			py += "\t".repeat(curlvl);
			var lhs = getval(a.lhs);
			var rhs = getval(a.rhs);

			var op = a.op.slice(2);
			if (op in lop){
				op = lop[op]
			}
			py += `${nextTmpVar()}=${lhs}${op}${rhs}\n`
			strayvar ++;
		}else if (a.op == "name"){

			for (var j = 0; j < a.names.length; j++){
				py += "\t".repeat(curlvl);
				py += `${a.names[j]}=${prevTmpVar(strayvar-j)}\n`
			}
			strayvar-=a.names.length;
		}else if (a.op == "call"){
			py += "\t".repeat(curlvl);
			py += `${nextTmpVar()}=${a.fun}(${a.args.map(x=>getval(x)).join(",")})\n`
			strayvar ++;
		}else if (a.op == "subscript"){
			py += "\t".repeat(curlvl);
			var idx =getval(a.value);
			if (idx=="rest"){
				py += `${nextTmpVar()}=${a.container}.slice(1)\n`
				strayvar ++;
			}else{
				py += `${nextTmpVar()}=${a.container}[${idx}${a.value[0]=="lit"?"":"-1"}]\n`
				strayvar ++;
			}
		}else if (a.op == "cat"){
			py += "\t".repeat(curlvl);
			py += `${nextTmpVar()}=${a.containers[0]}.concat(`+a.containers.slice(1).join(").concat(")+")\n"
			strayvar ++;
		}else if (a.op == "push"){
			py += "\t".repeat(curlvl);
			py += `${a.container}.push(${a.values.map(x=>getval(x)).join(",")})\n`
		}else if (a.op == "for"){
			py += "\t".repeat(curlvl);
			py += `for ${a.iterator} in ${a.container}:\n`
			curlvl++;
		}else if (a.op == "whiletrue"){
			py += "\t".repeat(curlvl);
			py += "while (True):\n";
			curlvl++;
		}else if (a.op == "whilen"){
			py += "\t".repeat(curlvl);
			var v = randVar();
			py += `for ${v} in range(${getval(a.value)}):\n`;
			curlvl++;
		}else if (a.op == "break"){
			py += "\t".repeat(curlvl);
			py += "break\n";
		}else if (a.op == "not"){
			py += "\t".repeat(curlvl);
			var v = getval(a.value);
			py += `${nextTmpVar()}=not ${v}\n`

			strayvar++;
		}else if (a.op == "reassign"){
			py += "\t".repeat(curlvl);
			var rhs = getval(a.rhs);
			var lhs = getval(a.lhs);
			if (a.lhssubs){
				lhs += `[${a.lhssubs[1]}${a.lhssubs[0]=="lit"?"":"-1"}]`
			}
			py += `${lhs}=${rhs}\n`
		}else if (a.op == "discard"){
			strayvar = 0;
		}else if (a.op == "length"){
			py += `${nextTmpVar()}=len(${a.container});`
			strayvar ++;
		}else if (a.op == "comment"){
			py += "\t".repeat(curlvl);
			py += `# ${getval(a.value)}\n`
			py += "\t".repeat(curlvl);
		}else{
			console.log(a.op)
		}
		// py+="\n"
	}
	return py;
}
try{
	module.exports = asc2py
}catch(e){}
