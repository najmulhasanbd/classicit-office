const fs = require('fs');

const htmlFiles = [
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

console.log('--- 1. CHECKING HTML TAG BALANCES ---');
let hasHtmlError = false;

htmlFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`File ${file} does not exist!`);
    hasHtmlError = true;
    return;
  }
  const content = fs.readFileSync(file, 'utf8');

  // Count tags
  const openDivs = (content.match(/<div\b/gi) || []).length;
  const closeDivs = (content.match(/<\/div>/gi) || []).length;
  const divDiff = openDivs - closeDivs;

  const openSections = (content.match(/<section\b/gi) || []).length;
  const closeSections = (content.match(/<\/section>/gi) || []).length;
  const secDiff = openSections - closeSections;

  const openNavs = (content.match(/<nav\b/gi) || []).length;
  const closeNavs = (content.match(/<\/nav>/gi) || []).length;
  const navDiff = openNavs - closeNavs;

  const openFooters = (content.match(/<footer\b/gi) || []).length;
  const closeFooters = (content.match(/<\/footer>/gi) || []).length;
  const footDiff = openFooters - closeFooters;

  if (divDiff !== 0 || secDiff !== 0 || navDiff !== 0 || footDiff !== 0) {
    console.error(`❌ ${file} UNBALANCED: divs(${divDiff}) secs(${secDiff}) navs(${navDiff}) foots(${footDiff})`);
    hasHtmlError = true;
  } else {
    console.log(`✅ ${file}: Balanced (divs:${openDivs}, secs:${openSections}, navs:${openNavs}, foots:${openFooters})`);
  }
});

console.log('\n--- 2. CHECKING CSS BRACE BALANCE ---');
const cssContent = fs.readFileSync('css/style.css', 'utf8');
let openBraces = 0;
let closeBraces = 0;
let inString = false;
let stringChar = '';

for (let i = 0; i < cssContent.length; i++) {
  const char = cssContent[i];
  if (inString) {
    if (char === stringChar && cssContent[i - 1] !== '\\') {
      inString = false;
    }
  } else {
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
    } else if (char === '{') {
      openBraces++;
    } else if (char === '}') {
      closeBraces++;
    }
  }
}
if (openBraces === closeBraces) {
  console.log(`✅ css/style.css: Balanced (Open: ${openBraces}, Close: ${closeBraces})`);
} else {
  console.error(`❌ css/style.css: UNBALANCED (Open: ${openBraces}, Close: ${closeBraces}, Diff: ${openBraces - closeBraces})`);
}

console.log('\n--- 3. CHECKING JS SYNTAX ---');
const { execSync } = require('child_process');
try {
  execSync('node -c js/main.js');
  console.log('✅ js/main.js: Syntax Valid');
} catch (err) {
  console.error('❌ js/main.js: Syntax Error:', err.message);
}

console.log('\n--- 4. CHECKING HEADER/FOOTER CONSISTENCY ---');
const requiredIds = [
  'id="preloader"',
  'id="searchOverlay"',
  'id="topbar"',
  'id="mainNavbar"',
  'id="footer"',
  'id="scrollTop"'
];

htmlFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const missing = requiredIds.filter(id => !content.includes(id));
  if (missing.length > 0) {
    console.error(`❌ ${file} is missing components:`, missing.join(', '));
  } else {
    console.log(`✅ ${file}: All 6 header/footer core components present`);
  }
});
