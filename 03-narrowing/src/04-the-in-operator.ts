/* in 操作符缩小 判断某个属性是否在一个对象中 返回布尔值*/
type Fish = { swim: ()=> void}
type Bird = { fly: ()=> void}
type Human = { swim?: ()=> void, fly?: ()=> void}

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    // fish | human
    return (animal as Fish).swim()
  }
  // bird | human
  return (animal as Bird).fly()
}

/* 
  instanceof操作符缩小
*/
function logVlaue(x: Date | string) {
  if ( x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}
console.log(new Date())
console.log('hello ts');

