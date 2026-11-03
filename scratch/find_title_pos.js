const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const titlePos = html.indexOf('wpd-made-title');
console.log('Title pos:', titlePos);

// Print 600 chars before and 600 chars after
console.log(html.substring(titlePos - 600, titlePos + 600));

