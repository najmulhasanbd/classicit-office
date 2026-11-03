const fs = require('fs');
const { getNavbar } = require('./apply_unified_navbar');

const files = [
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

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const navStart = content.indexOf('<nav id="mainNavbar"');
  if (navStart === -1) {
    console.error(`mainNavbar not found in ${file}!`);
    return;
  }
  const navEnd = content.indexOf('</nav>', navStart) + 6;
  const newNav = getNavbar(file);

  content = content.slice(0, navStart) + newNav + content.slice(navEnd);

  // Also ensure products.html is in Quick Links if missing in footer
  if (!content.includes('href="products.html"')) {
    content = content.replace('<li><a href="faq.html">FAQ</a></li>', '<li><a href="faq.html">FAQ</a></li>\n              <li><a href="products.html">Products</a></li>');
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated navbar and footer in ${file}`);
});
