const fs = require('fs');
const tiles = JSON.parse(fs.readFileSync('scratch/wpdev_tiles.json', 'utf8'));

const uniqueUrls = [...new Set(tiles.map(t => t.img).filter(Boolean))];
console.log('Unique images:', uniqueUrls.length);
uniqueUrls.forEach((u, i) => console.log(i + ': ' + u));
fs.writeFileSync('scratch/unique_tile_images.json', JSON.stringify(uniqueUrls, null, 2));

