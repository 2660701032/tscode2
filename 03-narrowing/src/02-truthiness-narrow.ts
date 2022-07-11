/* 
  真值缩小
*/

function printAll2(strs: string | string[] | null) {
  // 先判断strs不为null 因为typeof null === ‘object’
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {

  } else {

  }
}

function multiplyAll(values: number[] | undefined, factor: number) {
  // 判断 values不为undefined
  if (!values) {
    return values
  } else {
    return values.map(x => {
      return x * factor
    })
  }
}

console.log(multiplyAll([1,2,3], 2))
