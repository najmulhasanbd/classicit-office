const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const titlePos = html.indexOf('wpd-made-title');
const sectionStart = html.lastIndexOf('wpd-made', titlePos);

console.log('Section start to title:');
const piece = html.substring(sectionStart - 100, titlePos + 200);

// Print all tags
const tags = piece.match(/<\/?([a-zA-Z0-9]+)[^>]*>/g) || [];
tags.forEach(t => console.log(t.substring(0, 80)));

