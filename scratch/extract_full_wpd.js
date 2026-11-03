const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const start = html.indexOf('wpd-made');
const sectionStart = html.lastIndexOf('<div', start);

// Let's find where this element ends
let depth = 0;
let endPos = -1;
let i = sectionStart;

while (i < html.length) {
  if (html.startsWith('<div', i)) {
    depth++;
    i += 4;
  } else if (html.startsWith('</div>', i)) {
    depth--;
    i += 6;
    if (depth === 0) {
      endPos = i;
      break;
    }
  } else {
    i++;
  }
}

console.log('Section start:', sectionStart, 'end:', endPos, 'length:', endPos - sectionStart);
const sectionHTML = html.substring(sectionStart, endPos);
fs.writeFileSync('scratch/wpd_made_full_section.html', sectionHTML, 'utf8');
console.log('Saved scratch/wpd_made_full_section.html');

