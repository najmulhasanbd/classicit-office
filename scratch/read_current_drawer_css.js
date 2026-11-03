const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(3745, 3825).map((l, i) => (3746 + i) + ': ' + l).join('\n'));

