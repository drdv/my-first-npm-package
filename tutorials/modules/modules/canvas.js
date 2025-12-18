function create(id, parent, width, height) {
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

export { create };
