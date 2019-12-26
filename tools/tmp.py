/*___wenyan_module_算經_start___*/var 算經 = new function(){ # -*- coding: utf-8 -*-
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
JIA3YUAN2ZHOU1LV4=0
JIA3ZI4RAN2CHANG2SHU4=0
JIA3OU1LA1CHANG2SHU4=0
JIA3HUANG2JIN1FEN1GE1SHU4=0
JIA3ER4ZHI1PING2FANG1GEN1=0
JIA3ER4ZHI1DUI4SHU4=0
JIA3SHI2ZHI1DUI4SHU4=0
JIN4ZHI4=1
_ans1=1

TUI4ZHI4=_ans1;ZONG3SUAN4WEI4=0
SHANG4WEI4MI4=1
XIA4WEI4MI4=1
ZHI4DA4ZHI3=0
JU4WEI4MI4=1
ZHI4JU4SHU4=1
ZHI4XIAO3ZHI3=0
WEI1WEI4MI4=1
ZHI4WEI1SHU4=1
WEI4JI2CHA4=1
FU2DIAN3LING2=0
FU2DIAN3YI1=1
SHI4JIE4=lambda _:0
def SHI4JIE4(XIAN4,YUAN2,JI1_,HE2,JU4):
	ZAO4BIAO3LIE4=lambda _:0
	def ZAO4BIAO3LIE4(YIN3,SHI2)	:
		BIAO3LIE4={}
BIAO3LIE4={"引":YIN3,"實":SHI2,};		return BIAO3LIE4

	XIN1JU4=lambda _:0
	def XIN1JU4(YIN3,SHI2)	:

		if YIN3>=XIAN4:
			return True

		_ans2=JU4(SHI2);
		if undefined:
			return True

		return False

	_ans3=XIN1JU4(0)(YUAN2);
	if undefined:
_ans4=0;_ans5=YUAN2;		_ans6=ZAO4BIAO3LIE4(_ans4)(_ans5);		return _ans6

	_ans7=XIN1JU4(1)(JI1_);
	if undefined:
_ans8=1;_ans9=JI1_;		_ans10=ZAO4BIAO3LIE4(_ans8)(_ans9);		return _ans10

	YIN3=1
	SHI2=JI1_
	JI4BIAO3LIE4=Ctnr()
	while (True):
		_ans11=YIN3+YIN3;
		XIN1YIN3=_ans11;_ans12=SHI2;_ans13=SHI2;		_ans14=HE2(_ans12)(_ans13);
		XIN1SHI2=_ans14;		_ans15=XIN1JU4(XIN1YIN3)(XIN1SHI2);
		if undefined:
			break

_ans16=YIN3;_ans17=SHI2;		_ans18=ZAO4BIAO3LIE4(_ans16)(_ans17);		JI4BIAO3LIE4.push(_ans18)

		YIN3=XIN1YIN3

		SHI2=XIN1SHI2

_ans19=JI4BIAO3LIE4.length;
	JIA3=_ans19;	while (True):

		if JIA3==0:
			break

_ans20=JI4BIAO3LIE4[JIA3-1];
		BIAO3LIE4=_ans20;_ans21=BIAO3LIE4["引"];		_ans22=YIN3+_ans21;
		XIN1YIN3=_ans22;_ans23=BIAO3LIE4["實"];_ans24=SHI2;		_ans25=HE2(_ans23)(_ans24);
		XIN1SHI2=_ans25;		_ans26=XIN1JU4(XIN1YIN3)(XIN1SHI2);		_ans27=!_ans26;
		if undefined:

			YIN3=XIN1YIN3

			SHI2=XIN1SHI2

		_ans28=JIA3-1;
		JIA3=_ans28

	_ans29=YIN3+1;_ans30=JI1_;_ans31=SHI2;	_ans32=HE2(_ans30)(_ans31);	_ans33=ZAO4BIAO3LIE4(_ans29)(_ans32);	return _ans33

PAN2GU3=lambda _:0
def PAN2GU3():
	_ans34=3/1;
	if undefined==0:
_ans35="告。計算機除不盡而捨餘者。不可行本算經之術。";		print(_ans35);		return 

	YIN2=0.5
	_ans36=YIN2-YIN2;
	MAO3=_ans36;	_ans37=MAO3*MAO3;
	FU2DIAN3LING2=_ans37
	_ans38=FU2DIAN3LING2+1;
	FU2DIAN3YI1=_ans38
	SU4SHU4=Ctnr()
	SU4SHU4.push(2,3,5,7,11,13)
	JIN4ZHI4SU4YIN1SHU4=0

	JIN4ZHI4=FU2DIAN3YI1
	for FA3 in SU4SHU4:
		_ans39=FA3+1;		_ans40=_ans39/FA3;		_ans41=_ans40-1;		_ans42=_ans41*FA3;
		YU2=_ans42;
		if YU2==1:
			_ans43=JIN4ZHI4*FA3;
			JIN4ZHI4=_ans43
			_ans44=JIN4ZHI4SU4YIN1SHU4+1;
			JIN4ZHI4SU4YIN1SHU4=_ans44


		if YU2==0:
_ans45="告。計算機除不盡而不得分釐者。不可行本算經之術。";			print(_ans45);			return 



	if JIN4ZHI4SU4YIN1SHU4>2:
_ans46="告。計算機掩絲毫之瑕而求整者。不可行本算經之術。";		print(_ans46);		return 


	if JIN4ZHI4!=2:
_ans47="告。計算機非二進者。不可行本算經之術。";		print(_ans47);		return 

	_ans48=1/JIN4ZHI4;
	TUI4ZHI4=_ans48
	JIA1=lambda _:0
	def JIA1(JIA3,YI3)	:
		_ans49=YI3+JIA3;		return _ans49

	CHENG2=lambda _:0
	def CHENG2(JIA3,YI3)	:
		_ans50=YI3*JIA3;		return _ans50

	WEI4YI4HU1=lambda _:0
	def WEI4YI4HU1(JIA3)	:
		_ans51=JIA3*JIN4ZHI4;
		YI3=_ans51;		_ans52=YI3+1;		_ans53=_ans52-YI3;
		if undefined==1:
			return False

		else:
			return True


	SHI4WEI4XIAN4=10000
	_ans54=SHI4JIE4(SHI4WEI4XIAN4)(FU2DIAN3YI1)(JIN4ZHI4)(CHENG2)(WEI4YI4HU1);
	SUAN4XIAN4BIAO3=_ans54;_ans55=SUAN4XIAN4BIAO3["引"];
	if undefined>=SHI4WEI4XIAN4:
_ans56="告。計算機算位無限者。不可行本算經之術。";		print(_ans56);		return 

_ans57=SUAN4XIAN4BIAO3["引"];	_ans58=_ans57+1;
	ZONG3SUAN4WEI4=_ans58
_ans59=SUAN4XIAN4BIAO3["實"];
	SHANG4WEI4MI4=_ans59
	_ans60=1/SHANG4WEI4MI4;
	XIA4WEI4MI4=_ans60
	_ans61=1+XIA4WEI4MI4;	_ans62=_ans61-1;
	if undefined!=XIA4WEI4MI4:
_ans63="告。計算機非二進者。不可行本算經之術。";		print(_ans63);		return 

	SHANG4YI4HU1=lambda _:0
	def SHANG4YI4HU1(JIA3)	:
		_ans64=JIA3*JIN4ZHI4;
		YI3=_ans64;		_ans65=YI3*JIN4ZHI4;
		if undefined>YI3:
			return False

		else:
			return True


	XIA4YI4HU1=lambda _:0
	def XIA4YI4HU1(JIA3)	:
		_ans66=JIA3*TUI4ZHI4;
		YI3=_ans66;
		if YI3==0:
			return True


		if YI3<JIA3:
			return False

		return True

	SHI4ZHI3XIAN4=100000000
	_ans67=SHI4JIE4(SHI4ZHI3XIAN4)(FU2DIAN3YI1)(JIN4ZHI4)(CHENG2)(SHANG4YI4HU1);
	SHANG4XIAN4BIAO3=_ans67;_ans68=SHANG4XIAN4BIAO3["引"];
	ZHI4DA4ZHI3=_ans68
_ans69=SHANG4XIAN4BIAO3["實"];
	JU4WEI4MI4=_ans69
	_ans70=JIN4ZHI4-XIA4WEI4MI4;	_ans71=_ans70*JU4WEI4MI4;
	ZHI4JU4SHU4=_ans71
	_ans72=SHI4JIE4(SHI4ZHI3XIAN4)(FU2DIAN3YI1)(TUI4ZHI4)(CHENG2)(XIA4YI4HU1);
	XIA4XIAN4BIAO3=_ans72;_ans73=XIA4XIAN4BIAO3["引"];	_ans74=ZONG3SUAN4WEI4-_ans73;	_ans75=_ans74-1;
	ZHI4XIAO3ZHI3=_ans75
_ans76=XIA4XIAN4BIAO3["實"];
	ZHI4WEI1SHU4=_ans76
	_ans77=ZHI4WEI1SHU4*SHANG4WEI4MI4;
	WEI1WEI4MI4=_ans77
	_ans78=ZHI4XIAO3ZHI3-ZONG3SUAN4WEI4;	_ans79=ZHI4DA4ZHI3-_ans78;
	WEI4JI2CHA4=_ans79
	# "以上驗算制。"
	_ans80=21053343141/6701487259;
	JIA3YUAN2ZHOU1LV4=_ans80
	# "圓周率者。三又一分四釐一毫有奇也。"
	_ans81=28875761731/10622799089;
	JIA3ZI4RAN2CHANG2SHU4=_ans81
	# "自然常數者。二又七分一釐八毫有奇也。"
	_ans82=13905787435/24091147002;
	JIA3OU1LA1CHANG2SHU4=_ans82
	# "歐拉常數者。五分七釐七毫二絲有奇也。"
	_ans83=32951280099/20365011074;
	JIA3HUANG2JIN1FEN1GE1SHU4=_ans83
	# "黃金分割數者。一又六分一釐八毫有奇也。"
	_ans84=26102926097/18457556052;
	JIA3ER4ZHI1PING2FANG1GEN1=_ans84
	# "二之平方根者。一又四分一釐四毫有奇也。"
	_ans85=6847196937/9878417065;
	JIA3ER4ZHI1DUI4SHU4=_ans85
	# "二之對數者。六分九釐三毫一絲有奇也。"
	_ans86=44312647215/19244738164;
	JIA3SHI2ZHI1DUI4SHU4=_ans86
	# "十之對數者。二又三分零釐二毫有奇也。"
	# "以上求常數。"

_ans87=PAN2GU3();YUAN2ZHOU1LV4=JIA3YUAN2ZHOU1LV4
# "圓周率者。三又一分四釐一毫有奇也。"
_ans88=YUAN2ZHOU1LV4*2;
JIA3BEI4YUAN2ZHOU1LV4=_ans88;BEI4YUAN2ZHOU1LV4=JIA3BEI4YUAN2ZHOU1LV4
_ans89=YUAN2ZHOU1LV4/2;
JIA3BAN4YUAN2ZHOU1LV4=_ans89;BAN4YUAN2ZHOU1LV4=JIA3BAN4YUAN2ZHOU1LV4
_ans90=YUAN2ZHOU1LV4/4;
JIA3SI4FEN1YUAN2ZHOU1LV4=_ans90;SI4FEN1YUAN2ZHOU1LV4=JIA3SI4FEN1YUAN2ZHOU1LV4
ZI4RAN2CHANG2SHU4=JIA3ZI4RAN2CHANG2SHU4
# "自然常數者。二又七分一釐八毫有奇也。"
OU1LA1CHANG2SHU4=JIA3OU1LA1CHANG2SHU4
# "歐拉常數者。五分七釐七毫二絲有奇也。"
HUANG2JIN1FEN1GE1SHU4=JIA3HUANG2JIN1FEN1GE1SHU4
# "黃金分割數者。一又六分一釐八毫有奇也。"
ER4ZHI1PING2FANG1GEN1=JIA3ER4ZHI1PING2FANG1GEN1
# "二之平方根者。一又四分一釐四毫有奇也。"
ER4ZHI1DUI4SHU4=JIA3ER4ZHI1DUI4SHU4
# "二之對數者。六分九釐三毫一絲有奇也。"
SHI2ZHI1DUI4SHU4=JIA3SHI2ZHI1DUI4SHU4
# "十之對數者。二又三分零釐二毫有奇也。"
BU4KE3SUAN4SHU4HU1=lambda _:0
def BU4KE3SUAN4SHU4HU1(JIA3):

	if JIA3==JIA3:
		return False

	else:
		return True


XIA4YI4=lambda _:0
def XIA4YI4(FU2):
	_ans91=FU2*WEI1WEI4MI4;	_ans92=_ans91*ZHI4WEI1SHU4;	return _ans92

SHANG4YI4=lambda _:0
def SHANG4YI4(FU2):
	_ans93=FU2*ZHI4JU4SHU4;	_ans94=_ans93*ZHI4JU4SHU4;	return _ans94

CHU2YI3LING2=lambda _:0
def CHU2YI3LING2(FU2):
	_ans95=FU2/FU2DIAN3LING2;	return _ans95

BU4KE3SUAN4=lambda _:0
def BU4KE3SUAN4():
	_ans96=FU2DIAN3LING2/FU2DIAN3LING2;	return _ans96

QIU2JIN4MI4=lambda _:0
def QIU2JIN4MI4(WEI4):
	WU2ZHI1MI4=lambda _:0
	def WU2ZHI1MI4(DI3,ZHI3)	:
		JIA3=DI3
		MI4=FU2DIAN3YI1
		while (True):

			if ZHI3==0:
				break

			_ans97=ZHI3%2;
			YU2=_ans97;
			if YU2>0:
				_ans98=MI4*JIA3;
				MI4=_ans98

			_ans99=JIA3*JIA3;
			JIA3=_ans99
			_ans100=ZHI3-YU2;			_ans101=_ans100/2;
			ZHI3=_ans101

		return MI4


	if WEI4<0:
_ans102=TUI4ZHI4;		_ans103=0-WEI4;		_ans104=WU2ZHI1MI4(_ans102)(_ans103);		return _ans104

	else:
_ans105=JIN4ZHI4;_ans106=WEI4;		_ans107=WU2ZHI1MI4(_ans105)(_ans106);		return _ans107


QU3WEI4CHANG2SHU4JIA3=0
QU3WEI4CHANG2SHU4YI3=0
QU3WEI4SHANG4YI4XIAN4=0
FEN1SUAN4CHANG2SHU4=0
FEN1SUAN4SHANG4YI4XIAN4JIA3=0
FU2XI1=lambda _:0
def FU2XI1():
	_ans108=SHANG4WEI4MI4+1;
	QU3WEI4CHANG2SHU4JIA3=_ans108
	_ans109=XIA4WEI4MI4/2;	_ans110=1-_ans109;
	QU3WEI4CHANG2SHU4YI3=_ans110
	_ans111=JU4WEI4MI4/SHANG4WEI4MI4;
	QU3WEI4SHANG4YI4XIAN4=_ans111
	_ans112=ZONG3SUAN4WEI4+1;
	JIA3=_ans112;	_ans113=JIA3%2;	_ans114=JIA3-_ans113;	_ans115=_ans114/2;
	BAN4SUAN4WEI4=_ans115;	_ans116=QIU2JIN4MI4(BAN4SUAN4WEI4);
	BAN4WEI4MI4=_ans116;	_ans117=BAN4WEI4MI4+1;
	FEN1SUAN4CHANG2SHU4=_ans117
	_ans118=JU4WEI4MI4/BAN4WEI4MI4;
	FEN1SUAN4SHANG4YI4XIAN4JIA3=_ans118
	_ans119=XIA4WEI4MI4*BAN4WEI4MI4;	_ans120=JIN4ZHI4-_ans119;	_ans121=_ans120*JU4WEI4MI4;
	FEN1SUAN4SHANG4YI4XIAN4YI3=_ans121

_ans122=FU2XI1();QU3BEN3WEI4MI4=lambda _:0
def QU3BEN3WEI4MI4(JIA3):
	# "二進者方可施是術。"
	_ans123=JUE2DUI4(JIA3);
	YI3=_ans123;
	if YI3<QU3WEI4SHANG4YI4XIAN4:
		_ans124=YI3*QU3WEI4CHANG2SHU4JIA3;
		BING3=_ans124;		_ans125=BING3*QU3WEI4CHANG2SHU4YI3;
		DING1=_ans125;		_ans126=BING3-DING1;		return _ans126

	else:
		_ans127=YI3*XIA4WEI4MI4;		_ans128=_ans127*XIA4WEI4MI4;
		BING3=_ans128;
		if BING3<QU3WEI4SHANG4YI4XIAN4:
			_ans129=QU3BEN3WEI4MI4(BING3);			_ans130=_ans129*SHANG4WEI4MI4;			_ans131=_ans130*SHANG4WEI4MI4;			return _ans131

		else:
			return YI3



QU3NEI4LIN2SHU4=lambda _:0
def QU3NEI4LIN2SHU4(JIA3):
	# "二進者方可施是術。"
	_ans132=JIA3*QU3WEI4CHANG2SHU4YI3;
	YI3=_ans132;
	if YI3!=JIA3:
		return YI3


	if JIA3==0:
		return JIA3

	_ans133=ZHENG4FU4(JIA3);
	FU2=_ans133;	_ans134=JIA3*FU2;
	BING3=_ans134;
	if BING3>ZHI4JU4SHU4:
		_ans135=ZHI4JU4SHU4*FU2;		return _ans135

	_ans136=BING3-ZHI4WEI1SHU4;	_ans137=_ans136*FU2;	return _ans137

QU3WAI4LIN2SHU4=lambda _:0
def QU3WAI4LIN2SHU4(JIA3):
	# "二進者方可施是術。"
	_ans138=ZHENG4FU4(JIA3);
	FU2=_ans138;	_ans139=QU3BEN3WEI4MI4(JIA3);	_ans140=_ans139*XIA4WEI4MI4;	_ans141=_ans140*FU2;	_ans142=_ans141+JIA3;
	YI3=_ans142;
	if YI3!=JIA3:
		return YI3


	if JIA3==0:
		return ZHI4WEI1SHU4

	_ans143=JIA3*FU2;	_ans144=_ans143+ZHI4WEI1SHU4;	_ans145=_ans144*FU2;	return _ans145

FEN1SUAN4=lambda _:0
def FEN1SUAN4(JIA3):
	# "分算者。其位上下二分。借二算布之也。"
	ER4SUAN4=Ctnr()
	_ans146=JUE2DUI4(JIA3);
	YI3=_ans146;
	if YI3<FEN1SUAN4SHANG4YI4XIAN4JIA3:
		_ans147=JIA3*FEN1SUAN4CHANG2SHU4;
		BING3=_ans147;		_ans148=JIA3-BING3;
		DING1=_ans148;		_ans149=BING3+DING1;
		SHANG4JIA3=_ans149;		ER4SUAN4.push(SHANG4JIA3)
		_ans150=JIA3-SHANG4JIA3;		ER4SUAN4.push(_ans150)

	else:

		if YI3<FEN1SUAN4SHANG4YI4XIAN4YI3:
			_ans151=JIA3*XIA4WEI4MI4;
			BING3=_ans151;			_ans152=FEN1SUAN4(BING3);
			DING1=_ans152;			for WU4 in DING1:
				_ans153=WU4*SHANG4WEI4MI4;				ER4SUAN4.push(_ans153)


		else:
			_ans154=YI3-FEN1SUAN4SHANG4YI4XIAN4YI3;
			BING3=_ans154;
			if BING3<FEN1SUAN4SHANG4YI4XIAN4YI3:
				_ans155=ZHENG4FU4(JIA3);
				FU2=_ans155;				_ans156=FEN1SUAN4SHANG4YI4XIAN4YI3*FU2;				ER4SUAN4.push(_ans156)
				_ans157=BING3*FU2;				ER4SUAN4.push(_ans157)

			else:
				ER4SUAN4.push(JIA3,JIA3)



	return ER4SUAN4

ZAO4SHUANG1SHU4=lambda _:0
def ZAO4SHUANG1SHU4(SHANG4,XIA4):
	# "雙數者。以二算布一數。其位倍之。"
	SHUANG1=Ctnr()
	SHUANG1.push(SHANG4,XIA4)
	return SHUANG1

SHUANG1SHU4QU3FAN3=lambda _:0
def SHUANG1SHU4QU3FAN3(JIA3):
_ans158=JIA3[1-1];	_ans159=_ans158*-1;
	SHANG4=_ans159;_ans160=JIA3[2-1];	_ans161=_ans160*-1;
	XIA4=_ans161;	_ans162=ZAO4SHUANG1SHU4(SHANG4)(XIA4);	return _ans162

YI3XIAO3JIA1DA4DE2SHUANG1=lambda _:0
def YI3XIAO3JIA1DA4DE2SHUANG1(XIAO3,DA4):
	# "大小者。二數移位之大小也。或前小而後大。或同。不可反之。"
	_ans163=DA4+XIAO3;
	SHANG4HE2=_ans163;	_ans164=SHANG4HE2-DA4;
	BING3=_ans164;	_ans165=XIAO3-BING3;
	XIA4HE2=_ans165;	_ans166=ZAO4SHUANG1SHU4(SHANG4HE2)(XIA4HE2);	return _ans166

XIANG1JIA1DE2SHUANG1=lambda _:0
def XIANG1JIA1DE2SHUANG1(JIA3,YI3):
	_ans167=YI3+JIA3;
	SHANG4HE2=_ans167;	_ans168=SHANG4HE2-YI3;
	BING3=_ans168;	_ans169=SHANG4HE2-BING3;
	DING1=_ans169;	_ans170=JIA3-BING3;
	WU4=_ans170;	_ans171=YI3-DING1;
	JI3=_ans171;	_ans172=JI3+WU4;
	XIA4HE2=_ans172;	_ans173=ZAO4SHUANG1SHU4(SHANG4HE2)(XIA4HE2);	return _ans173

JIA1DAN1YU2SHUANG1=lambda _:0
def JIA1DAN1YU2SHUANG1(JIA3,YI3):
_ans174=YI3[1-1];
	SHANG4YI3=_ans174;_ans175=YI3[2-1];
	XIA4YI3=_ans175;	_ans176=XIANG1JIA1DE2SHUANG1(JIA3)(SHANG4YI3);
	BING3=_ans176;_ans177=BING3[2-1];	_ans178=XIA4YI3+_ans177;_ans179=BING3[1-1];	_ans180=YI3XIAO3JIA1DA4DE2SHUANG1(_ans178)(_ans179);	return _ans180

ZI4CHENG2DE2SHUANG1=lambda _:0
def ZI4CHENG2DE2SHUANG1(JIA3):
	_ans181=JIA3*JIA3;
	SHANG4FANG1=_ans181;	_ans182=FEN1SUAN4(JIA3);
	FEN1JIA3=_ans182;_ans183=FEN1JIA3[1-1];
	SHANG4JIA3=_ans183;_ans184=FEN1JIA3[2-1];
	XIA4JIA3=_ans184;	_ans185=SHANG4JIA3*SHANG4JIA3;	_ans186=_ans185-SHANG4FANG1;
	BING3=_ans186;	_ans187=XIA4JIA3*SHANG4JIA3;	_ans188=_ans187*2;	_ans189=BING3+_ans188;
	DING1=_ans189;	_ans190=XIA4JIA3*XIA4JIA3;	_ans191=DING1+_ans190;
	XIA4FANG1=_ans191;	_ans192=ZAO4SHUANG1SHU4(SHANG4FANG1)(XIA4FANG1);	return _ans192

XIANG1CHENG2DE2SHUANG1=lambda _:0
def XIANG1CHENG2DE2SHUANG1(JIA3,YI3):
	_ans193=JIA3*YI3;
	SHANG4JI1=_ans193;	_ans194=FEN1SUAN4(JIA3);
	FEN1JIA3=_ans194;_ans195=FEN1JIA3[1-1];
	SHANG4JIA3=_ans195;_ans196=FEN1JIA3[2-1];
	XIA4JIA3=_ans196;	_ans197=FEN1SUAN4(YI3);
	FEN1YI3=_ans197;_ans198=FEN1YI3[1-1];
	SHANG4YI3=_ans198;_ans199=FEN1YI3[2-1];
	XIA4YI3=_ans199;	_ans200=SHANG4YI3*SHANG4JIA3;	_ans201=_ans200-SHANG4JI1;
	BING3=_ans201;	_ans202=XIA4YI3*SHANG4JIA3;	_ans203=BING3+_ans202;
	DING1=_ans203;	_ans204=SHANG4YI3*XIA4JIA3;	_ans205=DING1+_ans204;
	WU4=_ans205;	_ans206=XIA4YI3*XIA4JIA3;	_ans207=WU4+_ans206;
	XIA4JI1=_ans207;	_ans208=ZAO4SHUANG1SHU4(SHANG4JI1)(XIA4JI1);	return _ans208

QIU2DUO1XIANG4SHI4=lambda _:0
def QIU2DUO1XIANG4SHI4(SHI4,JIA3):
	JIE3=0
_ans209=SHI4.length;
	YIN3=_ans209;	while (True):

		if YIN3==0:
			return JIE3

		_ans210=JIE3*JIA3;
		YI3=_ans210;_ans211=SHI4[YIN3-1];		_ans212=YI3+_ans211;
		JIE3=_ans212
		_ans213=YIN3-1;
		YIN3=_ans213


FU2DIAN3YI2WEI4=lambda _:0
def FU2DIAN3YI2WEI4(BEN3,WEI4):
	# "位正則進位。負則退位。"

	if WEI4<=ZHI4DA4ZHI3:

		if WEI4>=ZHI4XIAO3ZHI3:
			_ans214=QIU2JIN4MI4(WEI4);			_ans215=BEN3*_ans214;			return _ans215


	_ans216=BU4KE3SUAN4SHU4HU1(BEN3);
	if undefined:
		return BEN3

	_ans217=BU4KE3SUAN4SHU4HU1(WEI4);
	if undefined:
		return WEI4


	if WEI4>0:
		_ans218=WEI4JI2CHA4+2;
		XIAN4=_ans218;
		if WEI4<=XIAN4:
_ans219=BEN3;			_ans220=WEI4-ZHI4DA4ZHI3;			_ans221=FU2DIAN3YI2WEI4(_ans219)(_ans220);			_ans222=_ans221*JU4WEI4MI4;			return _ans222


		if WEI4<=ZHI4JU4SHU4:
_ans223=BEN3;			_ans224=XIAN4-ZHI4DA4ZHI3;			_ans225=FU2DIAN3YI2WEI4(_ans223)(_ans224);			_ans226=_ans225*JU4WEI4MI4;			return _ans226


		if BEN3!=0:
			_ans227=ZHENG4FU4(BEN3);			_ans228=SHANG4YI4(_ans227);			return _ans228

		else:
			_ans229=BU4KE3SUAN4();			return _ans229


	else:
		_ans230=-2-WEI4JI2CHA4;
		XIAN4=_ans230;
		if WEI4>=XIAN4:
_ans231=BEN3;			_ans232=WEI4-ZHI4XIAO3ZHI3;			_ans233=FU2DIAN3YI2WEI4(_ans231)(_ans232);			_ans234=_ans233*WEI1WEI4MI4;			return _ans234

		_ans235=ZHI4JU4SHU4*-1;
		if WEI4>=undefined:
_ans236=BEN3;			_ans237=XIAN4-ZHI4XIAO3ZHI3;			_ans238=FU2DIAN3YI2WEI4(_ans236)(_ans237);			_ans239=_ans238*WEI1WEI4MI4;			return _ans239

		_ans240=JUE2DUI4(BEN3);
		if undefined<=ZHI4JU4SHU4:
			_ans241=BEN3*FU2DIAN3LING2;			return _ans241

		else:
			_ans242=BU4KE3SUAN4();			return _ans242



XI1FU2DIAN3SHU4=lambda _:0
def XI1FU2DIAN3SHU4(JIA3):
	# "是術得一物。物有三數。曰符。曰位。曰本。符者。正負也。位者。進退位也。本者。本數也。"
	# "設計算機二進。若施是術於負六。乃得符負一。位二。本一又五分。"
	ZAO4XI1=lambda _:0
	def ZAO4XI1(FU2,WEI4,BEN3)	:
		XI1={}
XI1={"符":FU2,"位":WEI4,"本":BEN3,};		return XI1

	CHENG2=lambda _:0
	def CHENG2(BING3,DING1)	:
		_ans243=DING1*BING3;		return _ans243

	_ans244=ZHENG4FU4(JIA3);
	FU2=_ans244;	_ans245=JIA3*FU2;
	YI3=_ans245;
	if JIA3==0:
_ans246=FU2;		_ans247=CHU2YI3LING2(-1);_ans248=YI3;		_ans249=ZAO4XI1(_ans246)(_ans247)(_ans248);		return _ans249

	_ans250=BU4KE3SUAN4SHU4HU1(JIA3);
	if undefined:
_ans251=FU2;_ans252=JIA3;_ans253=YI3;		_ans254=ZAO4XI1(_ans251)(_ans252)(_ans253);		return _ans254


	if YI3>ZHI4JU4SHU4:
_ans255=FU2;_ans256=YI3;_ans257=YI3;		_ans258=ZAO4XI1(_ans255)(_ans256)(_ans257);		return _ans258


	if YI3>=1:
		JU4=lambda _:0
		def JU4(BING3)		:
			_ans259=BING3*JIN4ZHI4;
			if undefined>YI3:
				return True

			else:
				return False


_ans260=ZHI4DA4ZHI3;_ans261=FU2DIAN3YI1;_ans262=JIN4ZHI4;_ans263=CHENG2;_ans264=JU4;		_ans265=SHI4JIE4(_ans260)(_ans261)(_ans262)(_ans263)(_ans264);
		WEI4BIAO3=_ans265;_ans266=WEI4BIAO3["引"];
		WEI4=_ans266;_ans267=WEI4BIAO3["實"];		_ans268=YI3/_ans267;
		BEN3=_ans268;_ans269=FU2;_ans270=WEI4;_ans271=BEN3;		_ans272=ZAO4XI1(_ans269)(_ans270)(_ans271);		return _ans272

	else:
		JU4=lambda _:0
		def JU4(BING3)		:

			if BING3<=YI3:
				return True

			else:
				return False


		_ans273=ZONG3SUAN4WEI4-ZHI4XIAO3ZHI3;_ans274=FU2DIAN3YI1;_ans275=TUI4ZHI4;_ans276=CHENG2;_ans277=JU4;		_ans278=SHI4JIE4(_ans273)(_ans274)(_ans275)(_ans276)(_ans277);
		WEI4BIAO3=_ans278;_ans279=WEI4BIAO3["引"];		_ans280=0-_ans279;
		WEI4=_ans280;_ans281=WEI4BIAO3["實"];		_ans282=YI3/_ans281;
		BEN3=_ans282;_ans283=FU2;_ans284=WEI4;_ans285=BEN3;		_ans286=ZAO4XI1(_ans283)(_ans284)(_ans285);		return _ans286


ZHENG4XIAN2=lambda _:0
def ZHENG4XIAN2(JIA3):
	# "數小甚矣。乃得其身。否則以泰勒展開求之。復以週期性得其餘。"
	_ans287=JUE2DUI4(JIA3);
	if undefined<0.00010000000000000002:
		return JIA3

	_ans288=0-BAN4YUAN2ZHOU1LV4;
	FU4BAN4YUAN2ZHOU1LV4=_ans288;
	if JIA3>BAN4YUAN2ZHOU1LV4:
		_ans289=JIA3-YUAN2ZHOU1LV4;		_ans290=ZHENG4XIAN2(_ans289);		_ans291=0-_ans290;		return _ans291


	if JIA3<FU4BAN4YUAN2ZHOU1LV4:
		_ans292=JIA3+YUAN2ZHOU1LV4;		_ans293=ZHENG4XIAN2(_ans292);		_ans294=0-_ans293;		return _ans294

	_ans295=JIA3*JIA3;
	ER4CI4MI4=_ans295;	_ans296=ER4CI4MI4*JIA3;
	SAN1CI4MI4=_ans296;	_ans297=ER4CI4MI4*SAN1CI4MI4;
	WU3CI4MI4=_ans297;	_ans298=ER4CI4MI4*WU3CI4MI4;
	QI1CI4MI4=_ans298;	_ans299=ER4CI4MI4*QI1CI4MI4;
	JIU3CI4MI4=_ans299;	_ans300=SAN1CI4MI4/6;
	XIANG4ER4=_ans300;	_ans301=WU3CI4MI4/120;
	XIANG4SAN1=_ans301;	_ans302=QI1CI4MI4/5040;
	XIANG4SI4=_ans302;	_ans303=JIU3CI4MI4/362880;
	XIANG4WU3=_ans303;	_ans304=JIA3-XIANG4ER4;	_ans305=_ans304+XIANG4SAN1;	_ans306=_ans305-XIANG4SI4;	_ans307=_ans306+XIANG4WU3;	return _ans307

YU2XIAN2=lambda _:0
def YU2XIAN2(JIA3):
	# "餘弦者。蓋正弦之變化所得。"
	_ans308=JIA3+BAN4YUAN2ZHOU1LV4;	_ans309=ZHENG4XIAN2(_ans308);	return _ans309

FAN3ZHENG4XIAN2=lambda _:0
def FAN3ZHENG4XIAN2(JIA3):
	# "Abramowitz & Stegun 書中所述之法"

	if JIA3<0:
		_ans310=0-JIA3;		_ans311=FAN3ZHENG4XIAN2(_ans310);		_ans312=0-_ans311;		return _ans312

	CHANG2YI1=1.569928
	CHANG2ER4=-0.21211400000000002
	CHANG2SAN1=0.07426000000000002
	CHANG2SI4=-0.018729
	_ans313=JIA3*JIA3;
	JIA3FANG1=_ans313;	_ans314=JIA3*CHANG2ER4;
	XIANG4ER4=_ans314;	_ans315=JIA3FANG1*CHANG2SAN1;
	XIANG4SAN1=_ans315;	_ans316=JIA3FANG1*JIA3;	_ans317=_ans316*CHANG2SI4;
	XIANG4SI4=_ans317;	_ans318=CHANG2YI1+XIANG4ER4;	_ans319=_ans318+XIANG4SAN1;	_ans320=_ans319+XIANG4SI4;
	DUO1XIANG4=_ans320;	_ans321=1-JIA3;	_ans322=PING2FANG1GEN1(_ans321);
	GEN1XIANG4=_ans322;	_ans323=GEN1XIANG4*DUO1XIANG4;	_ans324=BAN4YUAN2ZHOU1LV4-_ans323;	return _ans324

FAN3YU2XIAN2=lambda _:0
def FAN3YU2XIAN2(JIA3):
	# "反餘弦者。蓋反正弦之變化所得。"
	_ans325=0-JIA3;	_ans326=FAN3ZHENG4XIAN2(_ans325);	_ans327=_ans326+BAN4YUAN2ZHOU1LV4;	return _ans327

ZHENG4QIE1=lambda _:0
def ZHENG4QIE1(JIA3):
	# "數小甚矣。乃得其身。居零與二十二度三十分之間者。以泰勒展開求之。其餘或以三角恆等式。或以週期性可得。"
	_ans328=JUE2DUI4(JIA3);
	if undefined<0.00010000000000000002:
		return JIA3


	if JIA3>YUAN2ZHOU1LV4:
		_ans329=JIA3-YUAN2ZHOU1LV4;		_ans330=ZHENG4QIE1(_ans329);		return _ans330


	if JIA3<0:
		_ans331=JIA3+YUAN2ZHOU1LV4;		_ans332=ZHENG4QIE1(_ans331);		return _ans332


	if JIA3>BAN4YUAN2ZHOU1LV4:
		_ans333=YUAN2ZHOU1LV4-JIA3;		_ans334=ZHENG4QIE1(_ans333);		_ans335=0-_ans334;		return _ans335

	_ans336=BAN4YUAN2ZHOU1LV4/2;
	if undefined<JIA3:
		_ans337=BAN4YUAN2ZHOU1LV4-JIA3;		_ans338=ZHENG4QIE1(_ans337);		_ans339=1/_ans338;		return _ans339

	_ans340=BAN4YUAN2ZHOU1LV4/4;
	if undefined<JIA3:
		_ans341=JIA3/2;		_ans342=ZHENG4QIE1(_ans341);
		BAN4JIA3ZHENG4QIE1=_ans342;		_ans343=BAN4JIA3ZHENG4QIE1*BAN4JIA3ZHENG4QIE1;		_ans344=1-_ans343;
		FEN1MU3=_ans344;		_ans345=BAN4JIA3ZHENG4QIE1*2;		_ans346=_ans345/FEN1MU3;		return _ans346

	_ans347=JIA3*JIA3;
	ER4CI4MI4=_ans347;	_ans348=ER4CI4MI4*JIA3;
	SAN1CI4MI4=_ans348;	_ans349=ER4CI4MI4*SAN1CI4MI4;
	WU3CI4MI4=_ans349;	_ans350=ER4CI4MI4*WU3CI4MI4;
	QI1CI4MI4=_ans350;	_ans351=ER4CI4MI4*QI1CI4MI4;
	JIU3CI4MI4=_ans351;	_ans352=SAN1CI4MI4/3;
	XIANG4ER4=_ans352;	_ans353=WU3CI4MI4*2;	_ans354=_ans353/15;
	XIANG4SAN1=_ans354;	_ans355=QI1CI4MI4*17;	_ans356=_ans355/315;
	XIANG4SI4=_ans356;	_ans357=JIU3CI4MI4/62;	_ans358=_ans357/2835;
	XIANG4WU3=_ans358;	_ans359=JIA3+XIANG4ER4;	_ans360=_ans359+XIANG4SAN1;	_ans361=_ans360+XIANG4SI4;	_ans362=_ans361+XIANG4WU3;	return _ans362

FAN3ZHENG4QIE1=lambda _:0
def FAN3ZHENG4QIE1(JIA3):
	# "數小甚矣。乃得其身。小於二減根號三者。以泰勒展開求之。其餘以三角恆等式變化可得。"
	_ans363=JUE2DUI4(JIA3);
	if undefined<0.00010000000000000002:
		return JIA3


	if JIA3<0:
		_ans364=0-JIA3;		_ans365=FAN3ZHENG4QIE1(_ans364);		_ans366=0-_ans365;		return _ans366


	if JIA3>1:
		_ans367=1/JIA3;		_ans368=FAN3ZHENG4QIE1(_ans367);		_ans369=BAN4YUAN2ZHOU1LV4-_ans368;		return _ans369


	if JIA3>0.268:
		_ans370=BAN4YUAN2ZHOU1LV4/3;
		LIU4FEN1ZHI1YI1YUAN2ZHOU1LV4=_ans370;		SAN1ZHI1PING2FANG1GEN1=1.7319900000000001
		_ans371=SAN1ZHI1PING2FANG1GEN1*JIA3;		_ans372=_ans371-1;
		FEN1ZI3=_ans372;		_ans373=SAN1ZHI1PING2FANG1GEN1+JIA3;		_ans374=FEN1ZI3/_ans373;		_ans375=FAN3ZHENG4QIE1(_ans374);		_ans376=_ans375+LIU4FEN1ZHI1YI1YUAN2ZHOU1LV4;		return _ans376

	_ans377=JIA3*JIA3;
	ER4CI4MI4=_ans377;	_ans378=ER4CI4MI4*JIA3;
	SAN1CI4MI4=_ans378;	_ans379=ER4CI4MI4*SAN1CI4MI4;
	WU3CI4MI4=_ans379;	_ans380=ER4CI4MI4*WU3CI4MI4;
	QI1CI4MI4=_ans380;	_ans381=ER4CI4MI4*QI1CI4MI4;
	JIU3CI4MI4=_ans381;	_ans382=ER4CI4MI4*JIU3CI4MI4;
	SHI2YI1CI4MI4=_ans382;	_ans383=SAN1CI4MI4/3;
	XIANG4ER4=_ans383;	_ans384=WU3CI4MI4/5;
	XIANG4SAN1=_ans384;	_ans385=QI1CI4MI4/7;
	XIANG4SI4=_ans385;	_ans386=JIU3CI4MI4/9;
	XIANG4WU3=_ans386;	_ans387=JIA3-XIANG4ER4;	_ans388=_ans387+XIANG4SAN1;	_ans389=_ans388-XIANG4SI4;	_ans390=_ans389+XIANG4WU3;	return _ans390

GOU1GU3QIU2JIAO3=lambda _:0
def GOU1GU3QIU2JIAO3(JIA3,YI3):
	# "反正切之分類討論也"

	if YI3==0:

		if JIA3>0:
			return BAN4YUAN2ZHOU1LV4


		if JIA3<0:
			_ans391=0-BAN4YUAN2ZHOU1LV4;			return _ans391

		return 0

	_ans392=JIA3/YI3;	_ans393=FAN3ZHENG4QIE1(_ans392);
	BING3=_ans393;
	if YI3>0:
		return BING3


	if JIA3>=0:
		_ans394=BING3+YUAN2ZHOU1LV4;		return _ans394

	_ans395=BING3-YUAN2ZHOU1LV4;	return _ans395

GOU1GU3QIU2XIAN2=lambda _:0
def GOU1GU3QIU2XIAN2(GOU1,GU3):
	_ans396=JUE2DUI4(GOU1);
	JIA3=_ans396;	_ans397=JUE2DUI4(GU3);
	YI3=_ans397;
	if JIA3==0:
		return YI3


	if YI3==0:
		return JIA3


	if JIA3>ZHI4JU4SHU4:
		return JIA3


	if YI3>ZHI4JU4SHU4:
		return YI3

	_ans398=BU4KE3SUAN4SHU4HU1(JIA3);
	if undefined:
		return JIA3

	_ans399=BU4KE3SUAN4SHU4HU1(YI3);
	if undefined:
		return YI3


	if YI3>JIA3:
		JIE4=JIA3

		JIA3=YI3

		YI3=JIE4

	_ans400=QU3BEN3WEI4MI4(JIA3);
	LV4=_ans400;	_ans401=JIA3/LV4;
	JIA3=_ans401
	_ans402=YI3/LV4;
	YI3=_ans402
	_ans403=JIA3*JIA3;
	JIA3FANG1=_ans403;	_ans404=YI3*YI3;	_ans405=_ans404+JIA3FANG1;	_ans406=PING2FANG1GEN1(_ans405);	_ans407=_ans406*LV4;	return _ans407

_ans408=1453635/2097152;
ER4ZHI1DUI4SHU4SHANG4=_ans408;_ans409=-159167257/155656656;_ans410=_ans409/536870912;
ER4ZHI1DUI4SHU4XIA4=_ans410;DUI4SHU4DUO1XIANG4SHI4JIA3=Ctnr()
_ans411=1/3;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans411)
_ans412=1/5;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans412)
_ans413=1/7;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans413)
_ans414=1/9;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans414)
_ans415=1/11;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans415)
_ans416=1/13;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans416)
_ans417=1/15;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans417)
_ans418=1/17;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans418)
_ans419=1/19;DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans419)
# " x^2 * f(x^2) = atanh(x)/x - 1 "
DUI4SHU4=lambda _:0
def DUI4SHU4(JIA3):
	# "自然對數。"
	FEI1CHANG2=True

	if JIA3>0:

		if JIA3<=ZHI4JU4SHU4:

			FEI1CHANG2=False



	if FEI1CHANG2:

		if JIA3==0:
			_ans420=CHU2YI3LING2(-1);			return _ans420


		if JIA3<0:
			_ans421=BU4KE3SUAN4();			return _ans421

		return JIA3

	# "以對數屬性佐泰勒展開"
	_ans422=XI1FU2DIAN3SHU4(JIA3);
	XI1JIA3=_ans422;_ans423=XI1JIA3["位"];
	WEI4=_ans423;_ans424=XI1JIA3["本"];
	BEN3=_ans424;
	if BEN3>ER4ZHI1PING2FANG1GEN1:
		_ans425=WEI4+1;
		WEI4=_ans425
		_ans426=BEN3/2;
		BEN3=_ans426

	_ans427=WEI4*ER4ZHI1DUI4SHU4;
	YI3=_ans427;	_ans428=BEN3-1;
	FEN1ZI3=_ans428;	_ans429=BEN3+1;	_ans430=FEN1ZI3/_ans429;
	BING3=_ans430;	_ans431=BING3*BING3;
	ER4CI4MI4=_ans431;	_ans432=QIU2DUO1XIANG4SHI4(DUI4SHU4DUO1XIANG4SHI4JIA3)(ER4CI4MI4);	_ans433=_ans432*ER4CI4MI4;	_ans434=_ans433+1;	_ans435=_ans434*BING3;	_ans436=_ans435*2;	_ans437=_ans436+YI3;	return _ans437

_ans438=ZHI4DA4ZHI3+2;_ans439=_ans438*ER4ZHI1DUI4SHU4;
ZHI3SHU4SHANG4YI4XIAN4=_ans439;_ans440=ZHI4XIAO3ZHI3-ZONG3SUAN4WEI4;_ans441=_ans440-1;
ZHI3SHU4XIA4YI4XIAN4=_ans441;ZHI3SHU4DUO1XIANG4SHI4JIA3=Ctnr()
_ans442=1/3;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans442)
_ans443=-1/45;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans443)
_ans444=2/945;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans444)
_ans445=-1/4725;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans445)
_ans446=2/93555;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans446)
_ans447=-1382/638512875;ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans447)
# " x^2 * f(x^2) = x/tanh(x) - 1 "
ZHI3SHU4=lambda _:0
def ZHI3SHU4(JIA3):
	# "自然指數。"
	FEI1CHANG2=True

	if JIA3<ZHI3SHU4SHANG4YI4XIAN4:

		if JIA3>ZHI3SHU4XIA4YI4XIAN4:

			FEI1CHANG2=False



	if FEI1CHANG2:
		_ans448=BU4KE3SUAN4SHU4HU1(JIA3);
		if undefined:
			return JIA3


		if JIA3>0:

			if JIA3>ZHI4JU4SHU4:
				return JIA3

			else:
				_ans449=SHANG4YI4(1);				return _ans449


		else:
			_ans450=ZHI4JU4SHU4*-1;
			if JIA3<undefined:
				return FU2DIAN3LING2

			else:
				_ans451=XIA4YI4(1);				return _ans451



	_ans452=JIA3/ER4ZHI1DUI4SHU4;	_ans453=QU3ZHENG3(_ans452);
	YI2WEI4SHU4=_ans453;	_ans454=YI2WEI4SHU4*ER4ZHI1DUI4SHU4SHANG4;	_ans455=JIA3-_ans454;
	YI3=_ans455;	_ans456=YI2WEI4SHU4*ER4ZHI1DUI4SHU4XIA4;	_ans457=YI3-_ans456;
	BING3=_ans457;	# "除二之對數於甲。其餘者丙。以密率求之。"
	_ans458=BING3/2;
	DING1=_ans458;	_ans459=DING1*DING1;
	WU4=_ans459;	_ans460=QIU2DUO1XIANG4SHI4(ZHI3SHU4DUO1XIANG4SHI4JIA3)(WU4);	_ans461=_ans460*WU4;	_ans462=DING1-_ans461;
	JI3=_ans462;	_ans463=1-JI3;	_ans464=BING3/_ans463;	_ans465=1+_ans464;
	GENG1=_ans465;	_ans466=FU2DIAN3YI2WEI4(GENG1)(YI2WEI4SHU4);	return _ans466

MI4=lambda _:0
def MI4(DI3,ZHI3):
	# "小數部借指數算之。整數部死算可矣。"

	if ZHI3==0:
		return 1


	if ZHI3<0:
_ans467=DI3;		_ans468=0-ZHI3;		_ans469=MI4(_ans467)(_ans468);		_ans470=1/_ans469;		return _ans470

	_ans471=QU3ZHENG3(ZHI3);
	YI3=_ans471;	JIA3=1
	for _rand1 in range(YI3):
		_ans472=JIA3*DI3;
		JIA3=_ans472


	if YI3==ZHI3:
		return JIA3

	_ans473=ZHI3-YI3;
	BING3=_ans473;	_ans474=DUI4SHU4(DI3);	_ans475=_ans474*BING3;	_ans476=ZHI3SHU4(_ans475);	_ans477=_ans476*JIA3;	return _ans477

PING2FANG1GEN1CHANG2SHU4JIA3=0.41731900000000005
# " (2^0.5 - 1) * sqrt((2^0.25 + 2^-0.25) / 2) "
_ans478=ER4ZHI1PING2FANG1GEN1-1;_ans479=_ans478*2;
PING2FANG1GEN1CHANG2SHU4YI3=_ans479;PING2FANG1GEN1=lambda _:0
def PING2FANG1GEN1(JIA3):

	if JIA3>0:

	else:
		# "浮點數相較。所得有四。曰小於。曰等於。曰大於。曰無序。故非大於者與不大於者異也。"

		if JIA3==0:
			return FU2DIAN3LING2


		if JIA3<0:
			_ans480=BU4KE3SUAN4();			return _ans480

		return JIA3


	if JIA3>ZHI4JU4SHU4:
		return JIA3

	_ans481=XI1FU2DIAN3SHU4(JIA3);
	XI1JIA3=_ans481;_ans482=XI1JIA3["位"];	_ans483=_ans482/2;
	BAN4WEI4=_ans483;	_ans484=QU3DI3(BAN4WEI4);
	ZHENG3BAN4WEI4=_ans484;_ans485=XI1JIA3["本"];	_ans486=_ans485+ER4ZHI1PING2FANG1GEN1;	_ans487=_ans486*PING2FANG1GEN1CHANG2SHU4JIA3;
	DING1=_ans487;	_ans488=BAN4WEI4-ZHENG3BAN4WEI4;	_ans489=_ans488*PING2FANG1GEN1CHANG2SHU4YI3;	_ans490=_ans489+1;	_ans491=_ans490*DING1;
	WU4=_ans491;	_ans492=QIU2JIN4MI4(ZHENG3BAN4WEI4);	_ans493=WU4*_ans492;
	YI3=_ans493;	# "以上求疏根"
	# "蓋用牛頓法耳"
	for _rand2 in range(3):
		_ans494=JIA3/YI3;		_ans495=_ans494+YI3;		_ans496=_ans495/2;
		BING3=_ans496;
		YI3=BING3

	return YI3

JUE2DUI4=lambda _:0
def JUE2DUI4(JIA3):
	_ans497=ZHENG4FU4(JIA3);
	FU2=_ans497;	_ans498=JIA3*FU2;	return _ans498

QU3DING3=lambda _:0
def QU3DING3(JIA3):
	_ans499=JIA3*-1;	_ans500=QU3DI3(_ans499);	_ans501=_ans500*-1;	return _ans501

QU3DI3=lambda _:0
def QU3DI3(JIA3):
	_ans502=ZHENG4FU4(JIA3);
	FU2=_ans502;	_ans503=JIA3*FU2;
	YI3=_ans503;	# "JavaScript者。除負以正。所餘負也。Python者。除負以正。所餘正也。"
	_ans504=YI3%1;
	BING3=_ans504;
	if BING3>0:
		_ans505=YI3-BING3;		_ans506=_ans505*FU2;
		DING1=_ans506;
		if FU2<0:
			_ans507=DING1-1;			return _ans507

		else:
			return DING1


	else:
		return JIA3


QU3ZHENG3=lambda _:0
def QU3ZHENG3(JIA3):
	_ans508=ZHENG4FU4(JIA3);
	FU2=_ans508;	_ans509=JIA3*FU2;
	YI3=_ans509;	_ans510=YI3%1;
	BING3=_ans510;
	if BING3==BING3:

		if BING3<0.5:
			_ans511=YI3-BING3;			_ans512=_ans511*FU2;			return _ans512

		else:
			_ans513=YI3-BING3;			_ans514=_ans513+1;			_ans515=_ans514*FU2;			return _ans515


	else:
		return JIA3


SHE3YU2=lambda _:0
def SHE3YU2(JIA3):
	_ans516=ZHENG4FU4(JIA3);
	FU2=_ans516;	_ans517=JIA3*FU2;
	YI3=_ans517;	_ans518=YI3%1;
	BING3=_ans518;
	if BING3==BING3:
		_ans519=YI3-BING3;		_ans520=_ans519*FU2;		return _ans520

	else:
		return JIA3


ZHENG4FU4=lambda _:0
def ZHENG4FU4(JIA3):

	if JIA3>0:
		return 1


	if JIA3<0:
		return -1

	return JIA3

 };/*___wenyan_module_算經_end___*//*___wenyan_module_易經_start___*/var 易經 = new function(){ # -*- coding: utf-8 -*-
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
YUN4SHU4=42
YUN4=lambda _:0
def YUN4(JIA3):
	# "運者。隨機種子也"

	YUN4SHU4=JIA3

ZHAN1=lambda _:0
def ZHAN1():
	# "線性同餘方法所得隨機數也"
	MO2=4294967296
	# BEI4
	SHANG4BEI4=22675456
	XIA4BEI4=20021
	ZENG1=1
	_ans1=YUN4SHU4*SHANG4BEI4;	_ans2=_ans1%MO2;
	SHANG4YU2=_ans2;	_ans3=YUN4SHU4*XIA4BEI4;	_ans4=SHANG4YU2+_ans3;	_ans5=_ans4+ZENG1;	_ans6=_ans5%MO2;
	YUN4SHU4=_ans6
	_ans7=YUN4SHU4/MO2;
	GUA4=_ans7;	return GUA4

 };/*___wenyan_module_易經_end___*/# -*- coding: utf-8 -*-
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
ZHAN1=易經.ZHAN1;YUN4=易經.YUN4;QU3DI3=算經.QU3DI3;_ans1=YUN4(13);TING1TIAN1YOU2MING4=lambda _:0
def TING1TIAN1YOU2MING4(JIA3):
	_ans2=ZHAN1();
	YI3=_ans2;	_ans3=JIA3*YI3;
	BING3=_ans3;	_ans4=QU3DI3(BING3);	return _ans4

CHUN1QIU1GU3SHI4FA3=lambda _:0
def CHUN1QIU1GU3SHI4FA3(XIAN4YU2CE4):
	ZUO3YU2CE4=0
	ZUO3SHENG4CE4=0
	YOU4YU2CE4=0
	YOU4SHENG4CE4=0
	_ans5=XIAN4YU2CE4-1;
	XIAN4YU2CE4=_ans5;	_ans6=XIAN4YU2CE4-1;
	XIAN4YU2CE4=_ans6
	_ans7=TING1TIAN1YOU2MING4(XIAN4YU2CE4);
	ZUO3YU2CE4=_ans7
	_ans8=XIAN4YU2CE4+1;
	XIAN4YU2CE4=_ans8
	_ans9=ZUO3YU2CE4+1;
	ZUO3YU2CE4=_ans9
	_ans10=XIAN4YU2CE4-ZUO3YU2CE4;
	YOU4YU2CE4=_ans10
	# "分而为二以象两"
	_ans11=ZUO3YU2CE4%4;	# "揲之以四象四时"

	ZUO3SHENG4CE4=_ans11

	if ZUO3SHENG4CE4==0:

		ZUO3SHENG4CE4=4

	_ans12=YOU4YU2CE4%4;
	YOU4SHENG4CE4=_ans12

	if YOU4SHENG4CE4==0:

		YOU4SHENG4CE4=4

	_ans13=XIAN4YU2CE4-ZUO3SHENG4CE4;
	XIAN4YU2CE4=_ans13
	_ans14=XIAN4YU2CE4-YOU4SHENG4CE4;
	XIAN4YU2CE4=_ans14
	return XIAN4YU2CE4

YAO2JI1=Ctnr()
JIA3=6
while (True):

	if JIA3==0:
		break

	YU2CE4=50
	# "大衍之数五十"
	_ans15=YU2CE4-1;
	YU2CE4=_ans15
	# "其用四十有九"
	for _rand1 in range(3):
		# "三变成一爻"
		_ans16=CHUN1QIU1GU3SHI4FA3(YU2CE4);
		YU2CE4=_ans16

	YAO2JI1.push(YU2CE4)
	_ans17=JIA3-1;
	JIA3=_ans17


JIA3=6
PAN4JU4=0
while (True):

	if JIA3==0:
		break

_ans18=YAO2JI1[JIA3-1];	_ans19=_ans18/4;	_ans20=_ans19%2;
	PAN4JU4=_ans20

	if PAN4JU4==0:
		_ans21="-- --"
		print(_ans21);
	else:
		_ans22="-----"
		print(_ans22);
	_ans23=JIA3-1;
	JIA3=_ans23

