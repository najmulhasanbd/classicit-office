const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(135, 215).join('\n'));

