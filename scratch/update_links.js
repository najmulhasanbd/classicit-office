const fs = require('fs');

const subpages = [
  'about.html',
  'contact.html',
  'faq.html',
  'process.html',
  'service-details.html',
  'services.html',
  'tech.html'
];

subpages.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.split('href="index.html#portfolio"').join('href="portfolio.html"');
  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated ${f}`);
});

// Update index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace('<a class="nav-link" href="#portfolio">Projects</a>', '<a class="nav-link" href="portfolio.html">Projects</a>');
indexContent = indexContent.replace('<li><a href="#portfolio">Portfolio</a></li>', '<li><a href="portfolio.html">Portfolio</a></li>');
indexContent = indexContent.replace('<a href="#portfolio" class="btn-outline-dark"><span>View All Projects</span>', '<a href="portfolio.html" class="btn-outline-dark"><span>View All Projects</span>');
fs.writeFileSync('index.html', indexContent, 'utf8');
console.log('Updated index.html');

