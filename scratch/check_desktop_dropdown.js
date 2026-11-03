const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(590, 665).join('\n'));

