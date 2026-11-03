const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'images', 'made-site');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const urls = JSON.parse(fs.readFileSync('scratch/unique_tile_images.json', 'utf8'));

async function downloadAll() {
  console.log('Downloading', urls.length, 'images to', dir);
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(dir, filename);

    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[${i+1}/${urls.length}] Already exists: ${filename}`);
      continue;
    }

    await new Promise((resolve) => {
      const file = fs.createWriteStream(dest);
      https.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`[${i+1}/${urls.length}] Downloaded: ${filename} (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error(`Failed ${filename}: ${err.message}`);
        resolve();
      });
    });
  }
  console.log('All downloads completed!');
}

downloadAll();

