const fs = require('fs');
const content = fs.readFileSync('portfolio.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('portfolio-card') || l.includes('filter-btn') || l.includes('project-details')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

