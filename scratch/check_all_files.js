const fs = require('fs');
const { execSync } = require('child_process');

const htmlFiles = [
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

console.log('--- 1. CHECKING HTML TAG BALANCES ---');
let allBalanced = true;
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dO = (content.match(/<div(\s|>)/gi) || []).length;
  const dC = (content.match(/<\/div>/gi) || []).length;
  const sO = (content.match(/<section(\s|>)/gi) || []).length;
  const sC = (content.match(/<\/section>/gi) || []).length;
  const nO = (content.match(/<nav(\s|>)/gi) || []).length;
  const nC = (content.match(/<\/nav>/gi) || []).length;
  const fO = (content.match(/<footer(\s|>)/gi) || []).length;
  const fC = (content.match(/<\/footer>/gi) || []).length;

  const divDiff = dO - dC;
  const secDiff = sO - sC;
  const navDiff = nO - nC;
  const footDiff = fO - fC;

  if (divDiff !== 0 || secDiff !== 0 || navDiff !== 0 || footDiff !== 0) {
    allBalanced = false;
    console.error(`❌ ${file} UNBALANCED: divs(${divDiff}) secs(${secDiff}) navs(${navDiff}) foots(${footDiff})`);
  } else {
    console.log(`✅ ${file}: Balanced (divs:${dO}, secs:${sO}, navs:${nO}, foots:${fO})`);
  }
});

console.log('\n--- 2. CHECKING CSS BRACE BALANCE ---');
const cssContent = fs.readFileSync('css/style.css', 'utf8');
const cOpen = (cssContent.match(/\{/g) || []).length;
const cClose = (cssContent.match(/\}/g) || []).length;
if (cOpen === cClose) {
  console.log(`✅ css/style.css: Balanced (Open: ${cOpen}, Close: ${cClose})`);
} else {
  console.error(`❌ css/style.css: UNBALANCED (Open: ${cOpen}, Close: ${cClose}, Diff: ${cOpen - cClose})`);
}

console.log('\n--- 3. CHECKING JS SYNTAX ---');
try {
  execSync('node -c js/main.js', { stdio: 'inherit' });
  console.log('✅ js/main.js: Syntax Valid');
} catch (e) {
  console.error('❌ js/main.js: Syntax Error');
}

console.log('\n--- 4. CHECKING HEADER/FOOTER CONSISTENCY ---');
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasPreloader = content.includes('id="preloader"');
  const hasSearch = content.includes('id="searchOverlay"');
  const hasTopbar = content.includes('id="topbar"');
  const hasNavbar = content.includes('id="mainNavbar"');
  const hasFooter = content.includes('id="footer"');
  const hasScrollTop = content.includes('id="scrollTop"');

  const allPresent = hasPreloader && hasSearch && hasTopbar && hasNavbar && hasFooter && hasScrollTop;
  if (allPresent) {
    console.log(`✅ ${file}: All 6 header/footer core components present`);
  } else {
    console.error(`❌ ${file}: Missing component: preloader(${hasPreloader}), search(${hasSearch}), topbar(${hasTopbar}), navbar(${hasNavbar}), footer(${hasFooter}), scrollTop(${hasScrollTop})`);
  }
});

