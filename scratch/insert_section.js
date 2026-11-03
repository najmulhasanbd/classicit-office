const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf8');
const sectionContent = fs.readFileSync('scratch/section_products.html', 'utf8');

const target = `    <!-- ══════════════════════════════════════════════
    6. ABOUT / WHY CHOOSE US
    ══════════════════════════════════════════════ -->`;

if (!indexContent.includes(target)) {
  console.error('Target not found in index.html!');
  process.exit(1);
}

const updated = indexContent.replace(target, sectionContent + '\n' + target);
fs.writeFileSync('index.html', updated, 'utf8');
console.log('Successfully inserted commercial products showcase into index.html');

