/*___wenyan_module_西曆法_start___*/var 西曆法 = new function(){ # -*- coding: utf-8 -*-
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
JI4YUAN2SHI2=lambda _:0
def JI4YUAN2SHI2():
	_ans1=__import__("time");
	time=_ans1;	_ans2=time.time();	return _ans2

 };/*___wenyan_module_西曆法_end___*/# -*- coding: utf-8 -*-
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
JI4YUAN2SHI2=西曆法.JI4YUAN2SHI2;_ans1=JI4YUAN2SHI2();print(_ans1);