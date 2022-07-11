"use strict";
// biginit - es2020 非常大的整数   symbol - 全局唯一引用
const oneHunderd = BigInt(100);
const anotherHundred = 100n;
const firsetName = Symbol("name");
const secondName = Symbol("name");
// console.log(firsetName == secondName); error 此条件将始终返回 "false"，因为类型 "typeof firsetName" 和 "typeof secondName" 没有重叠
