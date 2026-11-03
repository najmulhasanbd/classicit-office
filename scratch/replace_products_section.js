const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const start = content.indexOf('<section id="products"');
console.log('Start pos:', start);
const nextSection = content.indexOf('<!-- ══════════════════════════════════════════════\n    6. ABOUT', start);
console.log('Next section pos:', nextSection);

if (start !== -1 && nextSection !== -1) {
  const newSection = fs.readFileSync('scratch/wpd_full_section.html', 'utf8');
  const before = content.substring(0, start);
  const after = content.substring(nextSection);
  const updated = before + newSection.trim() + '\n\n    ' + after;
  fs.writeFileSync('index.html', updated, 'utf8');
  console.log('Replaced section in index.html successfully!');
} else {
  console.error('Could not find start or nextSection in index.html!');
}

