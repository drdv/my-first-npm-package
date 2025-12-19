function createReportList(parent) {
	let list = document.createElement('ul');
	list.id = parent.id + '-reporter';

	parent.appendChild(list);
	return list;
}

function fill(square, reportList, separator = false) {
	if (separator) {
		let sep = document.createElement('li');
		sep.style.listStyleType = "none";
		sep.textContent = "-".repeat(40)
		reportList.appendChild(sep);
	}
	let areaItem = document.createElement('li');
	areaItem.textContent = `${square.name} area is ${square.area}px squared.`
	reportList.appendChild(areaItem);

	let perimeterItem = document.createElement('li');
	perimeterItem.textContent = `${square.name} perimeter is ${square.perimeter}px.`

	reportList.appendChild(perimeterItem);
}

export { fill as fillReport };
// same as export default createReportList
export { createReportList as default };
