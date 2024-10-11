const PI = Math.PI;
let area = 0;
function circleArea(radius) {
    area = (radius * radius) * PI;
    return area
  }

console.log(circleArea(3))
console.log(circleArea(4))
