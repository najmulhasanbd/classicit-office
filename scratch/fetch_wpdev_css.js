const fs = require('fs');
const https = require('https');

const cssUrls = JSON.parse(fs.readFileSync('scratch/wpdev_css_urls.json', 'utf8'));

async function searchCss() {
  for (const url of cssUrls) {
    try {
      const fullUrl = url.startsWith('http') ? url : 'https://wpdeveloper.com' + url;
      await new Promise((resolve) => {
        https.get(fullUrl, (res) => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => {
            if (data.includes('wpd-made') || data.includes('wpd-mtile')) {
              console.log('MATCH IN:', fullUrl);
              fs.writeFileSync('scratch/wpdev_found_css.css', data);
              // Extract the rules
              const lines = data.split('}');
              lines.forEach(rule => {
                if (rule.includes('wpd-made') || rule.includes('wpd-mtile') || rule.includes('wpd-mspare')) {
                  console.log('RULE: ' + rule.trim() + '}');
                }
              });
            }
            resolve();
          });
        }).on('error', () => resolve());
      });
    } catch (e) {}
  }
  console.log('Finished CSS search.');
}

searchCss();

