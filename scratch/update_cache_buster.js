const fs = require('fs');

const allFiles = [
  'index.html',
  'about.html',
  'contact.html',
  'faq.html',
  'process.html',
  'tech.html',
  'services.html',
  'service-details.html',
  'portfolio.html',
  'project-details.html'
];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/href="css\/style\.css(?:\?v=[^"]*)?"/g, 'href="css/style.css?v=2.2"');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated cache buster in ${file}`);
});
