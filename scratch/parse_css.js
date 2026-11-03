const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

let depth = 0;
let inString = false;
let stringChar = '';
let inComment = false;
let line = 1;
let col = 1;
let errors = [];

for (let i = 0; i < css.length; i++) {
  const char = css[i];
  const next = css[i + 1];

  if (char === '\n') {
    line++;
    col = 1;
  } else {
    col++;
  }

  if (inComment) {
    if (char === '*' && next === '/') {
      inComment = false;
      i++;
    }
    continue;
  }

  if (inString) {
    if (char === '\\') {
      i++;
    } else if (char === stringChar) {
      inString = false;
    }
    continue;
  }

  if (char === '/' && next === '*') {
    inComment = true;
    i++;
    continue;
  }

  if (char === '"' || char === "'") {
    inString = true;
    stringChar = char;
    continue;
  }

  if (char === '{') {
    depth++;
  } else if (char === '}') {
    depth--;
    if (depth < 0) {
      errors.push(`Extra closing brace at line ${line}, col ${col}`);
      depth = 0;
    }
  }
}

if (depth > 0) {
  errors.push(`Unclosed opening brace: depth is ${depth}`);
}

console.log('Errors:', errors);
console.log('Final depth:', depth);
