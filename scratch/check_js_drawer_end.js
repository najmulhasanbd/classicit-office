const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(250, 280).map((l, i) => (251 + i) + ': ' + l).join('\n'));

