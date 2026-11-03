const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const regex = /<div[^>]*class=['"][^'"]*wpd-mtile[^'"]*['"][^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
let m;
const tiles = [];
while ((m = regex.exec(html)) !== null) {
  const img = (m[1].match(/src=['"]([^'"]+)['"]/) || [])[1];
  const alt = (m[1].match(/alt=['"]([^'"]+)['"]/) || [])[1];
  const title = (m[1].match(/title=['"]([^'"]+)['"]/) || [])[1];
  const a = (m[1].match(/<a[^>]*href=['"]([^'"]+)['"][^>]*data-site=['"]([^'"]*)['"]/) || []);
  tiles.push({ img, alt, href: a[1] || '', site: a[2] || '' });
}
console.log('Total tiles found in wpdev HTML:', tiles.length);
console.log(tiles.slice(0, 10));
fs.writeFileSync('scratch/wpdev_tiles.json', JSON.stringify(tiles, null, 2));

