const fs = require('fs');
const css = fs.readFileSync('scratch/wpdev_found_css.css', 'utf8');

const regex = /--c:(-?\d+);--r:(-?\d+)/g;
let m;
const crList = [];
while ((m = regex.exec(css)) !== null) {
  crList.push({ c: parseInt(m[1]), r: parseInt(m[2]) });
}

console.log('Total tiles with c,r:', crList.length);
console.log(crList);

const hasCenter = crList.some(item => item.c === 0 && item.r === 0);
console.log('Does WPDeveloper have c:0, r:0?', hasCenter);

