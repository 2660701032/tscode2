/* 
  typeof 类型守卫 为了检测变量类型 从而进行类型缩小操作
*/

function printAll(str: string | string[] | null){
  if (typeof str === 'object') {
    for (const s of str) {
      console.log(s)
    }
  } else if (typeof str === 'string') {

  } else {
    
  }
}