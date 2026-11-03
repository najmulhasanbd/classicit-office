const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  if (f === 'index.html') {
    // In index.html navbar: <a class="nav-link" href="#blog">Blog</a> -> <a class="nav-link" href="blog.html">Blog</a>
    content = content.replace(/<a class="nav-link" href="#blog">Blog<\/a>/g, '<a class="nav-link" href="blog.html">Blog</a>');
    // In index.html footer: <li><a href="#blog">Blog</a></li> -> <li><a href="blog.html">Blog</a></li>
    content = content.replace(/<li><a href="#blog">Blog<\/a><\/li>/g, '<li><a href="blog.html">Blog</a></li>');
  } else {
    // In other files navbar: <a class="nav-link" href="index.html#blog">Blog</a> -> <a class="nav-link" href="blog.html">Blog</a>
    content = content.replace(/<a class="nav-link" href="index\.html#blog">Blog<\/a>/g, '<a class="nav-link" href="blog.html">Blog</a>');
    // In other files footer: <li><a href="index.html#blog">Blog</a></li> -> <li><a href="blog.html">Blog</a></li>
    content = content.replace(/<li><a href="index\.html#blog">Blog<\/a><\/li>/g, '<li><a href="blog.html">Blog</a></li>');
  }

  // Ensure blog.html has active class on Blog nav link
  if (f === 'blog.html') {
    content = content.replace(/<a class="nav-link" href="blog\.html">Blog<\/a>/, '<a class="nav-link active" href="blog.html">Blog</a>');
  }
  // Ensure blog-details.html has active class on Blog nav link
  if (f === 'blog-details.html') {
    content = content.replace(/<a class="nav-link" href="blog\.html">Blog<\/a>/, '<a class="nav-link active" href="blog.html">Blog</a>');
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated blog links in: ${f}`);
  }
});

