const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1620, 1650).map((l, i) => (1621 + i) + ': ' + l).join('\n'));

