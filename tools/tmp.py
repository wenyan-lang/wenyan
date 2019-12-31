# -*- coding: utf-8 -*-
class Ctnr:
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
globals()['Ctnr']=Ctnr;
class JSON:
  @staticmethod
  def stringify(x):
    return x;
#####
圖靈機=lambda _:0
def 圖靈機 (諸律):
	def _rand1(始態):
		def _rand2(終態):
			nonlocal 諸律;
			nonlocal 始態;
			global 圖靈機;
			帶=Ctnr()
			帶.push("白")
			針=1
			左疆=1
			右疆=1
			態=始態
			圖靈機畫法=lambda _:0
			def 圖靈機畫法():
				global 圖靈機;
				nonlocal 帶;
				nonlocal 針;
				nonlocal 左疆;
				nonlocal 右疆;
				nonlocal 態;
				nonlocal 圖靈機畫法;
				畫帶=""
				筆=左疆
				while (True):

					if 筆>右疆:
						break

					_ans1=帶[筆-1];

					符=_ans1;

					if 針==筆:
						_ans2="〔"+符;
						_ans3=_ans2+"〕";

						符=_ans3;

					else:
						_ans4="、"+符;
						_ans5=_ans4+"、";

						符=_ans5;

					_ans6=畫帶+符;

					畫帶=_ans6;
					_ans7=1+筆;

					筆=_ans7;

				_ans8=態
				_ans9="《"
				_ans10=畫帶
				_ans11="》"
				print(_ans8,_ans9,_ans10,_ans11);

			_ans12=圖靈機畫法();
			while (True):
				for 律 in 諸律:
					_ans13=律[1-1];

					甲態=_ans13;
					_ans14=律[2-1];

					讀符=_ans14;
					_ans15=律[3-1];

					乙態=_ans15;
					_ans16=律[4-1];

					畫符=_ans16;
					_ans17=律[5-1];

					移=_ans17;

					if 態==甲態:

						if 帶[針-1]==讀符:

							帶[針-1]=畫符;

							態=乙態;

							if 移=="左":
								_ans18=針-1;

								針=_ans18;


							if 移=="右":
								_ans19=針+1;

								針=_ans19;

							break




				if 針<左疆:

					帶[針-1]="白";

					左疆=針;


				if 針>右疆:

					帶[針-1]="白";

					右疆=針;

				_ans20=圖靈機畫法();

				if 態==終態:
					break


		return _rand2;
	return _rand1;

製律=lambda _:0
def 製律 (諸律):
	def _rand3(甲態):
		def _rand4(讀符):
			def _rand5(乙態):
				def _rand6(畫符):
					def _rand7(移):
						nonlocal 諸律;
						nonlocal 甲態;
						nonlocal 讀符;
						nonlocal 乙態;
						nonlocal 畫符;
						global 圖靈機;
						global 製律;
						律=Ctnr()
						律.push(甲態,讀符,乙態,畫符,移)
						諸律.push(律)
					return _rand7;
				return _rand6;
			return _rand5;
		return _rand4;
	return _rand3;

_ans21="營營河狸。止于樊。"
print(_ans21);
諸律=Ctnr()
陽符="墨"
陰符="白"
_ans22=製律(諸律)("甲")(陰符)("乙")(陽符)("右");
_ans23=製律(諸律)("甲")(陽符)("丙")(陽符)("左");
_ans24=製律(諸律)("乙")(陰符)("甲")(陽符)("左");
_ans25=製律(諸律)("乙")(陽符)("乙")(陽符)("右");
_ans26=製律(諸律)("丙")(陰符)("乙")(陽符)("左");
_ans27=製律(諸律)("丙")(陽符)("樊")(陽符)("中");
_ans28=圖靈機(諸律)("甲")("樊");
