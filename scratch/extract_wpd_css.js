const fs = require('fs');
const css = fs.readFileSync('scratch/wpdev_found_css.css', 'utf8');

const rules = css.split('}');
const wpdRules = [];
rules.forEach(r => {
  if (r.includes('wpd-made') || r.includes('wpd-mstage') || r.includes('wpd-mcam') || r.includes('wpd-mworld') || r.includes('wpd-mtile') || r.includes('wpd-mspare') || r.includes('wpd-mpill') || r.includes('wpd-made-title')) {
    wpdRules.push(r.trim() + '}');
  }
});

console.log('Found', wpdRules.length, 'rules:');
wpdRules.forEach((r, i) => console.log((i+1) + ': ' + r));
fs.writeFileSync('scratch/wpd_extracted_rules.css', wpdRules.join('\n'));

