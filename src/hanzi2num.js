var NUMS = ["零","一","二","三","四","五","六","七","八","九"]
var MULTS1 = ["十","百","千"];
var MULTS4 = ["萬","億","兆","京","垓","秭","穣","溝","澗","正","載","極","恆河沙","阿僧祇","那由他","不可思議","無量大數"];
var FRACS1 = ["分","釐","毫","絲","忽","微","纖","沙"];
var FRACS4 = ["塵","埃","渺","漠","模糊","逡巡","須臾","瞬息","彈指","剎那","六德","虛","空","清","淨"];


function hanzi2num(s){
    // s = s.replace(/零/g,"")
    s = s.replace(/有/g,"")

    function _sp(s,units){
        for (var i = 0; i < units.length; i++){
            var u = units[i]
            s = s.replace(u,":"+u+",")
        }
        var s2 = s.split(",")
        for (var i = 0; i < s2.length; i++){
            s2[i] = s2[i].split(":")
        }
        return s2;
    }

    function _h2n(s,m1,n1,m4,n4){
        var st = _sp(s,m4);
        var result = 0

        for (var i = 0; i < st.length; i++){
            if (st[i].length > 1 && st[i][0] == '零'){
                st[i][0] = "一"
            }
            var stt = _sp(st[i][0], m1)
            
            var r = 0;
            
            var lastpow = 10;

            for (var j = 0; j < stt.length; j++){
                var shorthand = false;
                if (stt[j][0][0] == "零"){
                    stt[j][0]=stt[j][0].slice(1)
                }else{
                    shorthand = true;
                }
                if (stt[j].length == 1){
                    if (stt[j][0] != ''){
                        if (shorthand){
                            r += NUMS.indexOf(stt[j][0])*(lastpow/10);
                        }else{
                            r += NUMS.indexOf(stt[j][0])
                        }
                    }
                } else{
                    if (stt[j][0] == ''){
                        stt[j][0] = '一'
                    }
                    lastpow = Math.pow(n1,m1.indexOf(stt[j][1])+1)
                    r += NUMS.indexOf(stt[j][0]) * lastpow;
                }
            }
            if (st[i].length == 2){
                result += r * Math.pow(n4,m4.indexOf(st[i][1])+1)
            }else{
                result += r
            }
        }
        return result
    }
    function _fh2n(s,m1,n1,m4,n4){
        var st = _sp(s,m4);
        var result = 0

        for (var i = 0; i < st.length; i++){
            if (st[i].length > 1 && st[i][0] == ''){
                st[i][0] = "一"
            }
            var stt = _sp(st[i][0], m1)
            var r = 0
            for (var j = 0; j < stt.length; j++){
                if (stt[j].length == 1){
                    if (stt[j][0] != ''){
                        r += NUMS.indexOf(stt[j][0])
                    }
                } else{
                    if (stt[j][0] == ''){
                        stt[j][0] = '一'
                    }
                    r += NUMS.indexOf(stt[j][0]) * Math.pow(n1,m1.indexOf(stt[j][1])+1)
                }
            }
            if (st[i].length == 2){
                result += r * Math.pow(n4,m4.indexOf(st[i][1])+1)
            }else{
                result += r
            }
        }
        return result
    }
    function hanzi2int(s){
        return _h2n("零"+s,MULTS1,10,MULTS4,10000)
    }

    function hanzi2frac(s){
        var l = -1
        for (var i = 0; i < s.length; i++){
            if (FRACS1.includes(s[i])){
                l = i;
            }
            if (FRACS4.includes(s[i])){
                break
            }
        }
        var n1 = _fh2n(s.slice(0,l+1),[],0,FRACS1,0.1) 
        var n2 = _fh2n(s.slice(l+1),MULTS1,10,FRACS4,0.0001) * Math.pow(0.1,FRACS1.length)
        return n1 + n2
    }
    if (s[0]=="負"){
        return -1*hanzi2num(s.slice(1));
    }
    if (s.includes("又")){
        var s0 = s.split("又")[0]
        var s1 = s.split("又")[1]
        return hanzi2int(s0) + hanzi2frac(s1)
    }else{
        var fracs = FRACS1.concat(FRACS4)
        for (var i = 0; i < fracs.length; i++){
            if (s.includes(fracs[i])){
                return hanzi2frac(s)
            }
        }
        return hanzi2int(s)
    }
}

function num2hanzi(n,nfrac=6){
    function int2hanzi(n){
        if (n < 10){
            return NUMS[n];
        }
        var s = "";
        var z = -1;
        for (var i = MULTS4.length-1; i>=0; i--){
            var m = Math.pow(10000,i+1);
            var k = Math.floor(n / m)
            if (k>0){
                n = n % m;
                s+=int2hanzi(k)+MULTS4[i];
                z = 0;
            }else if (z == 0){
                s+="零"
                z = 1;
            }
        }
        for (var i = MULTS1.length-1; i>=0; i--){
            var m = Math.pow(10,i+1);
            var k = Math.floor(n / m)
            if (k>0){
                n = n % m;
                s+=int2hanzi(k)+MULTS1[i];
                z = 0;
            }else if (z == 0){

                s+="零"
                z = 1;
            }
            
        }
        if (n){
            s += int2hanzi(n)
        }
        if (s[s.length-1]=="零"){
            s = s.slice(0,s.length-1);
        }
        return s;
    }
    function frac2hanzi(n){
        var mfrac = Math.pow(0.1,nfrac);
        var s = "";
        var z = -1;
        for (var i = 0; i < FRACS1.length; i++){

            var m = Math.pow(0.1,i+1);
            if (m < mfrac){
                break;
            }
            var k = Math.floor(n/m);
            if (k>0){
                n -= k*m;
                s += int2hanzi(k)+FRACS1[i];
                z = 0;
            }else if (z == 0){
                s += "零";
                z = 1;
            }
        }
        for (var i = 0; i < FRACS4.length; i++){
            var m = Math.pow(0.0001,i+1)*(1e-8);
            if (m < mfrac){
                break;
            }
            var k = Math.floor(n/m);
            if (k>0){
                n -= k*m;
                s += int2hanzi(k)+FRACS4[i];
                z = 0;
            }else if (z == 0){
                s += "零";
                z = 1;
            }
        }
        if (s[s.length-1]=="零"){
            s = s.slice(0,s.length-1);
        }
        return s;
    }

    if (n < 0){
        return "負"+num2hanzi(-n);
    }
    var intn = Math.floor(n);
    if (intn==n){
        return int2hanzi(n);
    }else{
        return int2hanzi(intn)+"又"+frac2hanzi(n-intn);
    }
}




function test_hanzi2num(){
    console.log(num2hanzi(0.53212121222))
    console.log(num2hanzi(0.5))
    console.log(hanzi2num(num2hanzi(0.532)))
    console.log(num2hanzi(hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一")))
    console.log(num2hanzi(-(10**10+99)))
    console.log(num2hanzi(0))
    console.log(num2hanzi(-0.765433))
    console.log(hanzi2num("負一又二分三釐四毫五絲六忽七微"))
    console.log(hanzi2num("一沙一塵"))
    console.log(hanzi2num("二十一京二千三百四十五兆六千七百八十億零九百萬零二百五十有一"))
    console.log(hanzi2num("無量大數"))
    console.log(hanzi2num("三十二又一分"))
    console.log(hanzi2num("二分七釐三毫一絲二忽三微四纖五沙三千萬塵一埃"))
    console.log(hanzi2num("剎那"))
    console.log(hanzi2num("三千萬埃"))
    console.log(hanzi2num("三十二"))
    console.log(hanzi2num("不可思議"))
    console.log(hanzi2num("一萬"))
    console.log(hanzi2num("零"))

    console.log(hanzi2num("二百五"))
    console.log(hanzi2num("二百零五"))
    console.log(hanzi2num("三千七"))
    console.log(hanzi2num("五萬三千七"))
    console.log(hanzi2num("五萬三千零七"))
}

try{
    module.exports = {hanzi2num,num2hanzi};
}catch(e){}
// test_hanzi2num()
