const url = 'https://mdn.github.io/js-examples/module-examples/top-level-await/data/colors.json';
const colors = fetch(url).then(response => response.json());

export default await colors;
