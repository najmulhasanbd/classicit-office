const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const regex = /href=['"]([^'"]+\.css(\?[^'"]*)?)['"]/g;
let m;
const cssUrls = [];
while ((m = regex.exec(html)) !== null) {
  cssUrls.push(m[1]);
}
console.log('Total css links:', cssUrls.length);
fs.writeFileSync('scratch/wpdev_css_urls.json', JSON.stringify(cssUrls, null, 2));

// Also let's inspect scratch/wpdev_made_section.html structure
const section = fs.readFileSync('scratch/wpdev_made_section.html', 'utf8');
console.log('--- SECTION PREVIEW (first 1000 chars) ---');
console.log(section.substring(0, 1000));

