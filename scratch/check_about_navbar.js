const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const navStart = content.indexOf('<nav id="mainNavbar"');
const navEnd = content.indexOf('</nav>', navStart) + 6;
console.log(content.slice(navStart, navEnd));

