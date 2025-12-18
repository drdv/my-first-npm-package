function random(lb, ub) {
	return Math.floor(Math.random() * (ub - lb)) + lb;
}

class Square {
	constructor(x, y, length, color) {
		this.x = x;
		this.y = y;
		this.length = length;
		this.color = color;
		this.name = "square";
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
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

function fillReport(square, reportList) {
	let areaItem = document.createElement('li');
	areaItem.textContent = `${square.name} area is ${square.area}px squared.`
	reportList.appendChild(areaItem);

	let perimeterItem = document.createElement('li');
	perimeterItem.textContent = `${square.name} perimeter is ${square.perimeter}px.`

	reportList.appendChild(perimeterItem);
}

export { fillReport };
export default Square;
