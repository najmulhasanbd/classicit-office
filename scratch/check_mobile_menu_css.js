const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('@media') && l.includes('991')) {
    console.log(`Line ${i+1}: ${l}`);
  }
  if (l.includes('.navbar-collapse') || l.includes('.navbar-toggler') || l.includes('offcanvas')) {
    console.log(`Line ${i+1}: ${l}`);
  }
});

