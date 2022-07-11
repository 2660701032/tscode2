// null和undefined
let x3: undefined = undefined
let y3: null
// let z3: string = undefined error 不能将类型“undefined”分配给类型“string”

function doSonmeThing(x: string | null){
  if (x === null) {

  } else {
    console.log(x)
  }
}

function liveDanger(x?: number | null) {
  // 参数后加！ 可以断言x不为null或undefined - 但不要过多使用 可能出现意外问题
  console.log(x!.toFixed(2))
  
}