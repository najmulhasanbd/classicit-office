const fs = require('fs');
const content = fs.readFileSync('products.html', 'utf8');

const regex = /<div class="product-card">([\s\S]*?)<\/div>\s*<\/div>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const card = match[1];
  const title = (card.match(/<h3 class="product-title">\s*<a[^>]*>(.*?)<\/a>/) || [])[1];
  const badge = (card.match(/<span class="product-badge"[^>]*>(.*?)<\/span>/) || [])[1];
  const category = (card.match(/<span class="product-cat">(.*?)<\/span>/) || [])[1];
  const price = (card.match(/<div class="product-price">(.*?)<\/div>/s) || [])[1];
  const img = (card.match(/<img src="([^"]+)"/) || [])[1];
  console.log({ title, badge, category, price: price ? price.replace(/\s+/g, ' ').trim() : '', img });
}

