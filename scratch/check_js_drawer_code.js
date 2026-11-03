const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(190, 260).map((l, i) => (191 + i) + ': ' + l).join('\n'));

