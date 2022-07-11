/* 
  等值缩小
*/
function exmple(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase()
    y.toUpperCase()
  } else {
    console.log(x, y)
  }
}

function printAll2(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
  
    } else {
  
    }
  }
}

interface Container {
  value: number | null | undefined
}
function muliplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value)
    container.value *= factor 
  }
}