const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const count1 = (content.match(/href="index\.html#blog"/g) || []).length;
  const count2 = (content.match(/href="#blog"/g) || []).length;
  if (count1 + count2 > 0) {
    console.log(`${f}: index.html#blog (${count1}), #blog (${count2})`);
  }
});

