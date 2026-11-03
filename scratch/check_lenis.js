const fs = require('fs');

const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Lenis') || l.includes('lenis')) {
    console.log(`Line ${i+1}: ${l}`);
  }
});

