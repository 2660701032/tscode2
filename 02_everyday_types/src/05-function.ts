/* 函数参数的类型注释 */
function greet(name: string) {
  console.log('hello' + name.toUpperCase() + '!!!!')
}
greet('lilin')

// 函数的类型注释 如果不写 ts也会根据return推断返回类型
function getFavoriteNumber(): number {
  return 1
}

// 没有给形参 定义显示的类型注释，会推断参数类型 - 上下文类型
const names = ['小千', '小峰', '小猿']
names.forEach(function(s){
  console.log(s.toUpperCase())
})
// 用箭头函数
names.forEach((s) => {
  console.log(s.toUpperCase())
})