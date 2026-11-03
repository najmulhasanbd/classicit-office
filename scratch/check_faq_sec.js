const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1550, 1610).join('\n'));

