function hanzi2num(s){
    var nums = ["零","一","二","三","四","五","六","七","八","九"]
    var mults1 = ["十","百","千"];
    var mults4 = ["万","亿","兆","京","垓","秭","穣","沟","涧","正","载","极","恒河沙","阿僧祇","那由他","不可思议","无量大数"];
    var fracs1 = ["分","厘","毫","丝","忽","微","纤","沙"];
    var fracs4 = ["尘","埃","渺","漠","模糊","逡巡","须臾","瞬息","弹指","刹那","六德","虚","空","清","净"];

    s = s.replace(/零/g,"")
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
            if (st[i].length > 1 && st[i][0] == ''){
                st[i][0] = "一"
            }
            var stt = _sp(st[i][0], m1)
            var r = 0
            for (var j = 0; j < stt.length; j++){
                if (stt[j].length == 1){
                    if (stt[j][0] != ''){
                        r += nums.indexOf(stt[j][0])
                    }
                } else{
                    if (stt[j][0] == ''){
                        stt[j][0] = '一'
                    }
                    r += nums.indexOf(stt[j][0]) * Math.pow(n1,m1.indexOf(stt[j][1])+1)
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
        return _h2n(s,mults1,10,mults4,10000)
    }

    function hanzi2frac(s){
        var l = -1
        for (var i = 0; i < s.length; i++){
            if (fracs1.includes(s[i])){
                l = i;
            }
            if (fracs4.includes(s[i])){
                break
            }
        }
        var n1 = _h2n(s.slice(0,l+1),[],0,fracs1,0.1) 
        var n2 = _h2n(s.slice(l+1),mults1,10,fracs4,0.0001) * Math.pow(0.1,fracs1.length)
        return n1 + n2
    }
    
    if (s.includes("又")){
        var s0 = s.split("又")[0]
        var s1 = s.split("又")[1]
        return hanzi2int(s0) + hanzi2frac(s1)
    }else{
        var fracs = fracs1.concat(fracs4)
        for (var i = 0; i < fracs.length; i++){
            if (s.includes(fracs[i])){
                return hanzi2frac(s)
            }
        }
        return hanzi2int(s)
    }
}



function test_hanzi2num(){
    console.log(hanzi2num("二十一京二千三百四十五兆六千七百八十亿零九百万零二百五十有一"))
    console.log(hanzi2num("无量大数"))
    console.log(hanzi2num("三十二又一分"))
    console.log(hanzi2num("二分七厘三毫一丝二忽三微四纤五沙三千万尘一埃"))
    console.log(hanzi2num("刹那"))
    console.log(hanzi2num("三千万埃"))
    console.log(hanzi2num("三十二"))
    console.log(hanzi2num("不可思议"))
    console.log(hanzi2num("一万"))
    console.log(hanzi2num("零"))
}

try{
    module.exports = hanzi2num;
}catch(e){}
// test_hanzi2num()
