const fs = require('fs');
const html = fs.readFileSync('scratch/wpd_made_full_section.html', 'utf8');
const css = fs.readFileSync('scratch/wpdev_found_css.css', 'utf8');

// check if --c or --r appears in html
console.log('HTML contains --c:', html.includes('--c'));
console.log('HTML contains --r:', html.includes('--r'));

// check in css
const cRules = css.split('}').filter(r => r.includes('--c') || r.includes('--r') || r.includes('--k'));
console.log('CSS rules with --c, --r, or --k:');
cRules.forEach(r => console.log(r.trim() + '}'));

