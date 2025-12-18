import Shape from "./shape.js"

function random(lb, ub) {
	return Math.floor(Math.random() * (ub - lb)) + lb;
}

class Square extends Shape {
	constructor(x, y, length, color) {
		super(color);
		this.x = x;
		this.y = y;
		this.length = length;
		this.name = "square";
	}

	draw(ctx) {
		super.draw(ctx);
		ctx.fillRect(this.x, this.y, this.length, this.length);
	}

	get area() {
		return this.length ** 2;
	}

	get perimeter() {
		return 4 * this.length;
	}

	static random(xUb = 480, yUb = 320) {
		const rnd = ({ x = 0, y = 255 } = {}) => random(x, y)
		return new Square(
			rnd({ y: xUb }),
			rnd({ y: yUb }),
			rnd({ x: 10, y: 100 }),
			`rgb(${rnd()},${rnd()},${rnd()})`
		);
	}
}

export default Square;
export { random };
