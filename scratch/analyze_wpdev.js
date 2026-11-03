const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const idx = html.indexOf('Made using our');
const start = Math.max(0, idx - 4000);
const end = Math.min(html.length, idx + 4000);

fs.writeFileSync('scratch/wpdev_made_section.html', html.substring(start, end), 'utf8');
console.log('Saved scratch/wpdev_made_section.html');

// Find CSS styles inside html or linked stylesheets
const cssMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
let foundCss = '';
cssMatches.forEach(style => {
  if (style.includes('wpd-made') || style.includes('wpd-mtile') || style.includes('wpd-mspare')) {
    foundCss += style + '\n';
  }
});

// Also search for links to css files that might contain wpd-made
const linkMatches = html.match(/<link[^>]*rel=['"]stylesheet['"][^>]*>/g) || [];
console.log('Found', cssMatches.length, 'inline style blocks. Matching css length:', foundCss.length);
fs.writeFileSync('scratch/wpdev_made_style.css', foundCss, 'utf8');

