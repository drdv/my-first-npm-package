function createReportList(parent) {
	let list = document.createElement('ul');
	list.id = parent.id + '-reporter';

	parent.appendChild(list);
	return list;
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
export default createReportList;
