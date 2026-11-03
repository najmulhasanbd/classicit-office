const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

for (let i = 290; i < 360; i++) {
  if (lines[i] && (lines[i].includes('<a ') || lines[i].includes('btn-') || lines[i].includes('href='))) {
    console.log(`Line ${i+1}: ${lines[i].trim()}`);
  }
}

