const https = require('https');
const fs = require('fs');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get('https://wpdeveloper.com/', options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/wpdev_home.html', data);
    console.log('Saved wpdeveloper homepage, bytes:', data.length);
    const idx = data.indexOf('Made using our');
    if (idx !== -1) {
      console.log('FOUND Made using our:');
      console.log(data.substring(Math.max(0, idx - 400), idx + 800));
    } else {
      console.log('Not found "Made using our", searching for "Products" or related phrases');
      const lines = data.split('\n');
      lines.forEach((l, i) => {
        if (l.toLowerCase().includes('made using') || l.toLowerCase().includes('using our products') || l.toLowerCase().includes('showcase')) {
          console.log((i+1) + ': ' + l.trim().substring(0, 150));
        }
      });
    }
  });
}).on('error', (e) => console.log('Error:', e.message));

