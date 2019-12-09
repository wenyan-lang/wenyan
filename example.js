function qsort(a){
	if (a.length<=1){
		return a
	}
	var b = []
	var c = []
	var f = a.slice(1);
	f.forEach(function(d){
		if (d < a[0]){
			b.push(d)
		}else{
			c.push(d)
		}
	})
	b = qsort(b)
	c = qsort(c)
	var e = b.concat([a[0]]).concat(c);
	console.log(b,a[0],c)
	return e
}
console.log(qsort([3,1,2,4]))



var _ans1="问天地之好在";console.log(_ans1);var 甲=30;var 阶乘=()=>0;阶乘=function(甲){if (甲==1){return 甲;}else{var _ans2=甲-1;var 乙=_ans2;var _ans3=阶乘(乙);var 丙=_ans3;var _ans4=丙*甲;var 丁=_ans4;return 丁;};};var 异或=()=>0;异或=function(甲,乙){if (甲==乙){return false;}else{return true;};};var 快排=()=>0;快排=function(甲){if (甲.length<=1){return 甲;};var 首=[];var 腹=[];var 尾=[];var _ans5=甲[0];var 甲一=_ans5;腹.push(甲一);var _ans6=甲.slice(1);var 甲余=_ans6;甲余.forEach(function(丁){if (丁<甲一){首.push(丁);}else{尾.push(丁);};});var _ans7=快排(首);首=_ans7;var _ans8=快排(尾);尾=_ans8;var _ans9=首.concat(腹).concat(尾);var 乙=_ans9;return 乙;};



console.log(快排([3,1,2,4]));

var _ans1="问天地之好在";console.log(_ans1);var JIA3=30;var _ans2="甲之数";var _ans3=JIA3;var _ans4="也";console.log(_ans2,_ans3,_ans4);var JIE1CHENG2=()=>0;JIE1CHENG2=function(JIA3){if (JIA3==1){return JIA3;}else{var _ans5=JIA3-1;var YI3=_ans5;var _ans6=JIE1CHENG2(YI3);var BING3=_ans6;var _ans7=BING3*JIA3;var DING1=_ans7;return DING1;};};var YI4HUO4=()=>0;YI4HUO4=function(JIA3,YI3){if (JIA3==YI3){return false;}else{return true;};};var KUAI4PAI2=()=>0;KUAI4PAI2=function(JIA3){if (JIA3.length<=1){return JIA3;};var SHOU3=[];var FU4=[];var WEI3=[];var _ans8=JIA3[0];var JIA3YI1=_ans8;FU4.push(JIA3YI1);var _ans9=JIA3.slice(1);var JIA3YU2=_ans9;JIA3YU2.forEach(function(DING1){if (DING1<JIA3YI1){SHOU3.push(DING1);}else{WEI3.push(DING1);};});var _ans10=KUAI4PAI2(SHOU3);SHOU3=_ans10;var _ans11=KUAI4PAI2(WEI3);WEI3=_ans11;var _ans12=SHOU3.concat(FU4).concat(WEI3);var YI3=_ans12;return YI3;};

console.log(JIE1CHENG2(5))

var WU4=1;while (true){if (WU4==3){break;};var _ans1=1+WU4;WU4=_ans1;};

var _ans1="问天地好在";console.log(_ans1);var JIA3=30;var _ans2="甲之数";var _ans3=JIA3;var _ans4="也";console.log(_ans2,_ans3,_ans4);/*文气淋漓字句切实*/var TIAN1=true;var DI4=false;var _ans5=TIAN1&&DI4;var _ans6=TIAN1||DI4;var _ans7=!TIAN1;var REN2=_ans7;var _ans8=JIA3-1;var _ans9=JIA3+2;var YI3=_ans8;var BING3=_ans9;var DING1=[];DING1.push(1,2,3,4);var WU4=1;while (true){if (WU4==3){break;};var _ans10=1+WU4;WU4=_ans10;};var JIE1CHENG2=()=>0;JIE1CHENG2=function(JIA3){if (JIA3==1){return JIA3;}else{var _ans11=JIA3-1;var YI3=_ans11;var _ans12=JIE1CHENG2(YI3);var BING3=_ans12;var _ans13=BING3*JIA3;var DING1=_ans13;return DING1;};};var YI4HUO4=()=>0;YI4HUO4=function(JIA3,YI3){if (JIA3==YI3){return false;}else{return true;};};var KUAI4PAI2=()=>0;KUAI4PAI2=function(JIA3){if (JIA3.length<=1){return JIA3;};var SHOU3=[];var FU4=[];var WEI3=[];var _ans14=JIA3[0];var JIA3YI1=_ans14;FU4.push(JIA3YI1);var _ans15=JIA3.slice(1);var JIA3YU2=_ans15;JIA3YU2.forEach(function(DING1){if (DING1<JIA3YI1){SHOU3.push(DING1);}else{WEI3.push(DING1);};});var _ans16=KUAI4PAI2(SHOU3);SHOU3=_ans16;var _ans17=KUAI4PAI2(WEI3);WEI3=_ans17;var _ans18=SHOU3.concat(FU4).concat(WEI3);var YI3=_ans18;return YI3;};




var MAN4DE2BO2 = () => 0;
MAN4DE2BO2 = function(KUAN1, GAO1) {
    var ZI4DIAN3 = "";
    var _ans1 = 0 - 1;
    var SHANG4 = _ans1;
    var _ans2 = 0 + 1;
    var XIA4 = _ans2;
    var _ans3 = 0 - 2;
    var ZUO3 = _ans3;
    var _ans4 = 0 + 2;
    var YOU4 = _ans4;
    var _ans5 = YOU4 - ZUO3;
    var _ans6 = _ans5 / KUAN1;
    var HENG2BU4 = _ans6;
    var _ans7 = XIA4 - SHANG4;
    var _ans8 = _ans7 / GAO1;
    var ZONG4BU4 = _ans8;
    var WU4 = 0;
    while (true) {
        if (WU4 == GAO1) {
            break;
        };
        var _ans9 = ZONG4BU4 * WU4;
        var _ans10 = _ans9 + SHANG4;
        var XU1 = _ans10;
        var XING2 = "";
        var XU1_ = 0;
        while (true) {
            if (XU1_ == KUAN1) {
                break;
            };
            var _ans11 = HENG2BU4 * XU1_;
            var _ans12 = _ans11 + ZUO3;
            var SHI2 = _ans12;
            var XU1XU1 = XU1;
            var SHI2SHI2 = SHI2;
            var JI3 = 0;
            while (true) {
                if (JI3 == 30) {
                    break;
                };
                var _ans13 = SHI2SHI2 * SHI2SHI2;
                var _ans14 = XU1XU1 * XU1XU1;
                var JIA3 = _ans13;
                var YI3 = _ans14;
                var _ans15 = JIA3 + YI3;
                var BING3 = _ans15;
                if (BING3 > 4) {
                    break;
                };
                var _ans16 = XU1XU1 * SHI2SHI2;
                var _ans17 = _ans16 * 2;
                var _ans18 = _ans17 + XU1;
                XU1XU1 = _ans18;
                var _ans19 = JIA3 - YI3;
                var _ans20 = _ans19 + SHI2;
                SHI2SHI2 = _ans20;
                var _ans21 = 1 + JI3;
                JI3 = _ans21;
            };
            var _ans22 = 62 - JI3;
            var SI4 = _ans22;
            var _ans23 = String.fromCharCode(SI4);
            console.log(JI3,SI4)
            var _ans24 = XING2 + SI4;
            XING2 = _ans24;
            var _ans25 = 1 + XU1_;
            XU1_ = _ans25;
        };
        var _ans26 = XING2;
        console.log(_ans25, _ans26);
        var _ans27 = 1 + WU4;
        WU4 = _ans27;
    };
};
var _ans28 = MAN4DE2BO2(59, 21);
console.log(_ans28);