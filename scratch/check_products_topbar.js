const fs = require('fs');
const content = fs.readFileSync('products.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(90, 130).join('\n'));

