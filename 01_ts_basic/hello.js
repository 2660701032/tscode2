/*
  tsc --init 生成tsconfig.json文件
  tsc -w 自动编译
  tsc --noEmitOnError --watch 如果ts代码编写错误就不会编译成js文件
*/
function greet(person, date) {
    console.log("Hello".concat(person, ", today is ").concat(date));
}
greet("小钱", new Date());
