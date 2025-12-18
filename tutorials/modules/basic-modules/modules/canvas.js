function createCanvas(id, parent, width, height) {
	let div = document.createElement('div');
	div.id = id;
	parent.appendChild(div);

	let canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	div.appendChild(canvas);

	let ctx = canvas.getContext('2d');

	return { ctx, div };
}

function createReportList(canvasContainer) {
	let list = document.createElement('ul');
	list.id = canvasContainer.div.id + '-reporter';

	canvasContainer.div.appendChild(list);
	return list;
}

export { createCanvas, createReportList };
