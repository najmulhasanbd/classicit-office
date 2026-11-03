const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const titlePos = html.indexOf('wpd-made-title');

// Search backward from titlePos to find opening tags
let pos = titlePos;
let str = html.substring(Math.max(0, titlePos - 2000), titlePos + 500);

console.log(str);

