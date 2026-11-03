const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Find all hrefs in index.html
const regex = /<a\s+[^>]*href="([^"]*)"[^>]*>/gi;
let match;
const hrefs = [];
while ((match = regex.exec(content)) !== null) {
  hrefs.push(match[1]);
}

console.log('Total links in index.html:', hrefs.length);

const hashLinks = hrefs.filter(h => h.startsWith('#'));
const jsLinks = hrefs.filter(h => h === '#' || h === 'javascript:void(0)');
const deadLinks = hrefs.filter(h => h === '');

console.log('Hash links:', hashLinks.length, [...new Set(hashLinks)]);
console.log('Dummy / # links:', jsLinks.length);

