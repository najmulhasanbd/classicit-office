const fs = require('fs');
const content = fs.readFileSync('about.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(95, 135).join('\n'));
