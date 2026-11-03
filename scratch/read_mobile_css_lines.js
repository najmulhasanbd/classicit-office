const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(3735, 3875).map((l, i) => (3736 + i) + ': ' + l).join('\n'));

