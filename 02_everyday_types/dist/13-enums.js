"use strict";
// 枚举 类型
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
// 1
console.log(Direction.up);
// 2
console.log(Direction.down);
