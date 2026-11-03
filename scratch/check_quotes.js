const fs = require('fs');

const files = ['services.html', 'service-details.html', 'portfolio.html', 'project-details.html'];

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=== Checking ${file} ===`);

  // Check unclosed tags like <div without >
  const unclosed = html.match(/<[a-z0-9-]+(?:\s+[^>]*?)?(?:(?=<[a-z0-9-]+)|$)/gi);
  // Check unclosed quotes in tags
  const lines = html.split('\n');
  lines.forEach((line, idx) => {
    // Check if an attribute has an unmatched quote
    const tagMatches = line.match(/<[^>]+>/g) || [];
    tagMatches.forEach(tag => {
      const doubleQuotes = (tag.match(/"/g) || []).length;
      if (doubleQuotes % 2 !== 0) {
        console.log(`Line ${idx + 1}: Unmatched double quotes in tag: ${tag}`);
      }
    });
  });
});
console.log('\nQuote check completed.');

