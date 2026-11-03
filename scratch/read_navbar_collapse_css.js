const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(3775, 3830).map((l, i) => (3776 + i) + ': ' + l).join('\n'));

