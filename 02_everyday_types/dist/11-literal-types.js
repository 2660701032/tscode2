"use strict";
// 文字类型 模拟const 固定变量
let testSting = 'hello world';
testSting = 'lilin';
const constantString = 'hello world';
// constantString = '' error
let x2 = 'hello';
// x2 = 'lin' error 不能将类型“"lin"”分配给类型“"hello"”
function printText(s, alignment) {
}
printText('hello', 'left');
// printText('hello', 'left2') error 类型“"left2"”的参数不能赋给类型“"left" | "right" | "center"”的参数
function comparea(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({ width: 100 });
configure('auto');
// configure('auto1') error 类型“"auto1"”的参数不能赋给类型“Options | "auto"”的参数
let b1 = true;
let b2 = false;
const obj2 = {
    count: 0
};
if (true) {
    obj2.count = 1;
}
function handleRequest(url, method) {
}
const req = {
    url: 'dfsd',
    method: 'post'
};
// 因为req.method可能是其他字符串 所以要做断言
handleRequest(req.url, req.method);
// 解决方法2： 给变量直接断言
const req2 = {
    url: 'dfsd',
    method: 'post'
};
handleRequest(req2.url, req2.method);
