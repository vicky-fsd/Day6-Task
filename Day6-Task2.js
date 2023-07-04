class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getArea() {
    return 3.14 * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * 3.14 * this.radius;
  }
  getColor() {
    return this.color;
  }
}

var circle1 = new Circle(1.0,"red");
console.log("Area of Circle " + circle1.getArea());
console.log("Circumference of Circle " + circle1.getCircumference());
console.log("Color of Circle " + circle1.getColor());
