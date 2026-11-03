const fs = require('fs');

const allFiles = [
  'index.html',
  'about.html',
  'contact.html',
  'faq.html',
  'process.html',
  'tech.html',
  'products.html',
  'product-details.html',
  'services.html',
  'service-details.html',
  'portfolio.html',
  'project-details.html',
  'blog.html',
  'blog-details.html'
];

allFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/href="css\/style\.css(?:\?v=[^"]*)?"/g, 'href="css/style.css?v=2.8"');
  content = content.replace(/src="js\/main\.js(?:\?v=[^"]*)?"/g, 'src="js/main.js?v=2.8"');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated cache buster to v=2.8 in ${file}`);
});
