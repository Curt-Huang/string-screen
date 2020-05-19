function getmaxObj(str) {
    if (str.length == 1) {
        return str;
    }
    var newObj = {};
    for (var i = 0; i < str.length; i++) {
        if (!newObj[str.charAt(i)])
            newObj[str.charAt(i)] = 1;
        else
        newObj[str.charAt(i)] += 1;
    }
    console.log(newObj)
    var maxObj = {
        maxkey: "",
        maxvalue: 0
    }
    for (var k in newObj) {
        if (newObj[k] > maxObj.maxvalue) {
            maxObj.maxvalue = newObj[k];
            maxObj.maxkey = k;
        }
    }
    return maxObj;
}
var result = getmaxObj("zhangpeiyue.com");
// 出现最多的字符:e
console.log("出现最多的字符:" + result.maxkey);
// 出现次数:2
console.log("出现次数:" + result.maxvalue);
