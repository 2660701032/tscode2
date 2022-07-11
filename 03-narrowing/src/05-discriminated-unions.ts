// interface Shape {
//   kind: 'circle' | 'square'
//   radius?: number,
//   sideLenth?: number
// }

interface Circle {
  kind: 'circle',
  radius: number
}
interface Square {
  kind: 'square',
  sideLenth: number
}

type Shape = Circle | Square
function handleShape(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLenth ** 2
  }
  
}