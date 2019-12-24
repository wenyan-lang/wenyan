const fs = require('fs');
const path = require('path');
const {compile} = require('../src/parser');
const assert = require('assert');

const wy = fs.readFileSync(path.join(__dirname, '../examples/quine.wy'), {encoding: 'utf-8'});
const js = compile('js', wy, {logCallback: ()=>{}, errorCallback: err=>{throw err}});
const _log = console.log;
var data = '';
console.log = function(){
    data += Array.prototype.join.call(arguments, '');
    return data;
}

eval(js);
console.log = _log;
assert.equal(data, wy);
// console.log(data);
// console.log(wy);


//注曰Reference: 注曰https://qiita.com/amoO_O/items/5d0c4edfc99f64bea6fb