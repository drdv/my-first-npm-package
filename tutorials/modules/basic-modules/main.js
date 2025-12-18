import { createCanvas, createReportList } from './modules/canvas.js';
import Square, { fillReport } from './modules/square.js';

let canvasContainer = createCanvas('canvas-container', document.body, 480, 320);
let reportList = createReportList(canvasContainer);

let squareFixed = new Square(50, 50, 100, "blue");
squareFixed.draw(canvasContainer.ctx);
fillReport(squareFixed, reportList);

Square.random().draw(canvasContainer.ctx)
