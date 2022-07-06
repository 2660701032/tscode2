"use strict";
function printCoord(pt) {
    console.log('坐标的X值为' + pt.x);
    console.log('坐标的y值为' + pt.y);
}
printCoord({
    x: 3,
    y: 4
});
// 对象某个属性可有可无 要在冒号前加问号
function printName(obj) {
    var _a;
    console.log(obj);
    // 因为obj.last可有可无 所以用?.
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({
    first: 'li'
});
printName({
    first: 'li',
    last: 'lin'
});
printName({
    first: 'li',
    last: 'lin',
    // fullName: '' 不能多传参数
});
