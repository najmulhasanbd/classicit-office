const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(3825, 3950).map((l, i) => (3826 + i) + ': ' + l).join('\n'));

