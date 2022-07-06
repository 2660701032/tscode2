// 接口 用interface 名字 {}  来定义 注意没有等于号=
interface Point2 {
  x: number,
  y: number
}
function printCoord3(pt: Point2){
  console.log(pt)
}
printCoord3({
  x: 1,
  y: 2
})

/* 
  接口和类型别名的区别
*/

// 接口扩展方法：
// interface Animal {
//   name: string
// }

// interface Bear extends Animal{
//   honey: boolean
// }
// 必须写完两个属性才行
// const bear:Bear = {
//   name: '熊',
//   honey: true
// }

// 类型别名扩展方式：
// type Animal = {
//   name: string
// }

// type Bear = Animal & {
//   honey: boolean
// }
// const bear:Bear = {
//     name: '熊',
//     honey: true
//   }

// 接口 - 向现有的类型添加字段
// interface MyWind {
//   count: number
// }
// interface MyWind {
//   title: string
// }
// const w:MyWind = {
//   title: 'string',
//   count: 100,
// }

// 类型别名 创建后不能重新再写
// 下面代码错误
// type MyWind = {
//   count: number
// }
// type MyWind = {
//   title: string
// }