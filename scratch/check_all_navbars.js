const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const navStart = content.indexOf('<nav id="mainNavbar"');
  const navEnd = content.indexOf('</nav>', navStart) + 6;
  const navHtml = content.slice(navStart, navEnd);
  
  // Extract all hrefs inside nav
  const hrefs = [];
  const regex = /href="([^"]*)"/g;
  let match;
  while ((match = regex.exec(navHtml)) !== null) {
    hrefs.push(match[1]);
  }
  console.log(`=== ${f} ===\nHrefs: ${hrefs.join(', ')}\n`);
});

