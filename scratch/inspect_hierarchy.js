const fs = require('fs');
const html = fs.readFileSync('scratch/wpd_made_full_section.html', 'utf8');

// Let's inspect the hierarchy:
// .wpd-made
//   .wpd-mstage
//     .wpd-mcam
//       .wpd-mworld
//         .wpd-mtile (with style="--c:0;--r:0" etc or classes)
//         .wpd-made-title (Made using our Products)
//   .wpd-mspares
//     .wpd-mtile (spares)

console.log('Contains wpd-mstage:', html.includes('wpd-mstage'));
console.log('Contains wpd-mcam:', html.includes('wpd-mcam'));
console.log('Contains wpd-mworld:', html.includes('wpd-mworld'));
console.log('Contains wpd-made-title:', html.includes('wpd-made-title'));
console.log('Contains wpd-mspares:', html.includes('wpd-mspares'));

const tileMatches = html.match(/class=['"][^'"]*wpd-mtile[^'"]*['"]/g) || [];
console.log('Total wpd-mtile elements:', tileMatches.length);

const spareMatches = html.match(/class=['"][^'"]*wpd-mspare[^'"]*['"]/g) || [];
console.log('Total wpd-mspare elements:', spareMatches.length);

