import Shape from "./shape.js"

class Circle extends Shape {
	constructor(x, y, radius, color) {
		super(color);
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.name = "circle";
	}

	draw(ctx) {
		super.draw(ctx);
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
	}

	get area() {
		return Math.round(Math.PI * (this.radius ** 2));
	}

	get perimeter() {
		return Math.round(2 * Math.PI * this.radius);
	}
}

export default Circle;
