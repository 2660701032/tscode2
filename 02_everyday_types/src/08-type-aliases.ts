// 类型别名的使用方法

// 类型别名设置为对象
type Point = {
  x: number,
  y: number
}
function printCoord2(pt:Point) {
  console.log(pt)
}
printCoord2({
  x: 1,
  y: 2
})

// 类型别名设置为联合类型
type ID = number | string
function printId2(id:ID){
  console.log(id)
}
printId2(123)
printId2('dfsfg')

// type 定义一个变量的类型
type UserSanitizedSting = string
function sanitizedInput(str:string): UserSanitizedSting {
  return str.slice(0,2)
}
let userInput = sanitizedInput('hello')
userInput = 'new input'