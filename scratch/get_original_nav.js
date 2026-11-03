const { execSync } = require('child_process');
const oldHtml = execSync('git show f1db127:index.html', { encoding: 'utf8' });
const navStart = oldHtml.indexOf('<nav id="mainNavbar"');
const navEnd = oldHtml.indexOf('</nav>', navStart) + 6;
console.log(oldHtml.slice(navStart, navEnd));

