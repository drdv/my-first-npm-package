import colors from "./modules/colors.js";
import { create as createCanvas } from "./modules/canvas.js";
import { Square, Circle } from "./modules/shapes.js";
import * as shapes from "./modules/shapes.js";
import createReportList, { fillReport } from "./modules/report.js";
import { button } from "./modules/button.js";
import { div as flexDiv } from "./modules/group.js";

let canvasContainer = createCanvas('canvas-container', flexDiv, 480, 320);
let reportList = createReportList(flexDiv);

let square = new Square(50, 50, 100, colors.blue);
square.draw(canvasContainer.ctx);
fillReport(square, reportList);

shapes.Square.random().draw(canvasContainer.ctx);

let circle = new Circle(200, 50, 20, "green");
circle.draw(canvasContainer.ctx);
fillReport(circle, reportList);

// dynamic import
button.addEventListener("click", () => {
	import('./modules/shapes.js').then((Module) => {
		let circle = new Module.Circle(
			Module.random(150, 300),
			Module.random(150, 300),
			Module.random(10, 20),
			colors.red
		);
		circle.draw(canvasContainer.ctx);
		fillReport(circle, reportList);
	})
});
