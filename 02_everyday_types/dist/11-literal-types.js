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
