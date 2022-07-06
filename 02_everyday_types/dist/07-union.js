"use strict";
// 联合类型 某参数或变量可以为多个类型，类型中间加‘或’运算符的形式
function printId(id) {
    // console.log(id.toUpperCase());  error 类型“number”上不存在属性“toUpperCase”
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('sdf');
printId(123);
/* printId({
  myid: '1231'
})
error 因为联合类型规定只能为数值 或 字符串类型
*/
function welcomePerson(x) {
    if (Array.isArray(x)) {
        console.log('hello' + x.join('and'));
    }
    else {
        console.log(x);
    }
}
welcomePerson('dsfsdf');
welcomePerson(['dsf', 'fg', 'dsf']);
