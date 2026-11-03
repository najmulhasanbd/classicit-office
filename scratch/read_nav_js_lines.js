const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(180, 220).map((l, i) => (181 + i) + ': ' + l).join('\n'));

