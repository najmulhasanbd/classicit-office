const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
  const matches = line.match(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi);
  if (matches) {
    matches.forEach(m => {
      const hrefMatch = m.match(/href="([^"]*)"/);
      const href = hrefMatch ? hrefMatch[1] : '';
      if (href.startsWith('#') || href === '' || href.includes('javascript')) {
        console.log(`Line ${i+1}: href="${href}" -> ${m.replace(/\s+/g, ' ').slice(0, 100)}`);
      }
    });
  }
});

