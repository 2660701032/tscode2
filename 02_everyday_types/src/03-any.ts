/* any类型 就相当于普通的js */
let obj: any = {
  x: 0
}
obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const n:number = obj