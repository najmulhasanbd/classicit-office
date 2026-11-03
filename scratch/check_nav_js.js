const fs = require('fs');

const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('navbar-collapse') || l.includes('navbar-toggler') || l.includes('navMenu') || l.includes('initNavbar') || l.includes('mobileMenu')) {
    console.log(`Line ${i+1}: ${l}`);
  }
});

