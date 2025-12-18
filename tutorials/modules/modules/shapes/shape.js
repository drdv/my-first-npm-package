class Shape {
	constructor(color) {
		if (new.target === Shape) {
			throw new Error("Abstract base class");
		}
		this.color = color;
	}

	get area() {
		throw new Error("Not implemented");
	}

	get perimeter() {
		throw new Error("Not implemented");
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
	}
}

export default Shape;
