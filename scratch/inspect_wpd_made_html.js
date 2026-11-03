const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const startIdx = html.indexOf('wpd-made');
const sectionStart = html.lastIndexOf('<div', startIdx);
// Let's grab 5000 chars
console.log('HTML snippet around wpd-made:');
console.log(html.substring(sectionStart, sectionStart + 4000));

