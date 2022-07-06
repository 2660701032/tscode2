// 类型断言 - ts不知道什么类型 但我们知道
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

// const x = 'string' as number error 类型 "string" 到类型 "number" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"
const x = ('string' as unknown) as number
const y = <number>(<unknown>'string')