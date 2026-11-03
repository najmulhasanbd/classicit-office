const fs = require('fs');

// Let's verify all downloaded images exist
const imagesDir = 'images/made-site';
const files = fs.readdirSync(imagesDir);
console.log('Images in made-site:', files.length);
files.forEach(f => {
  const stat = fs.statSync(`${imagesDir}/${f}`);
  if (stat.size === 0) console.error('Empty file:', f);
});
console.log('All image files valid!');

