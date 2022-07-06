"use strict";
// 类型别名的使用方法
function printCoord2(pt) {
    console.log(pt);
}
printCoord2({
    x: 1,
    y: 2
});
function printId2(id) {
    console.log(id);
}
printId2(123);
printId2('dfsfg');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new input';
