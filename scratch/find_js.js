const fs = require('fs');
const html = fs.readFileSync('scratch/wpdev_home.html', 'utf8');

const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
let m;
let foundScripts = [];
while ((m = regex.exec(html)) !== null) {
  if (m[1].includes('wpd-made') || m[1].includes('wpd-mtile') || m[1].includes('--c') || m[1].includes('--yaw')) {
    foundScripts.push(m[1]);
  }
}

console.log('Found scripts:', foundScripts.length);
if (foundScripts.length) {
  fs.writeFileSync('scratch/wpdev_made_script.js', foundScripts.join('\n\n// NEXT SCRIPT\n\n'));
  console.log('Saved scratch/wpdev_made_script.js');
} else {
  // maybe it's in an external script
  const scriptSrcs = (html.match(/src=['"]([^'"]+\.js(\?[^'"]*)?)['"]/g) || []);
  console.log('Script sources:', scriptSrcs.length);
  fs.writeFileSync('scratch/wpdev_scripts.json', JSON.stringify(scriptSrcs, null, 2));
}

