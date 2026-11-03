const fs = require('fs');

const cssContent = fs.readFileSync('css/style.css', 'utf8');

const files = ['services.html', 'service-details.html', 'portfolio.html', 'project-details.html'];

// Common bootstrap classes to ignore
const bootstrapClasses = new Set([
  'container', 'row', 'col', 'col-lg-8', 'col-lg-4', 'col-lg-3', 'col-lg-2', 'col-lg-7', 'col-lg-9', 'col-lg-10', 'col-lg-12', 'col-lg-6',
  'col-md-6', 'col-md-3', 'col-md-4', 'col-md-8', 'col-md-12', 'col-sm-6', 'col-12', 'col-6',
  'd-flex', 'd-none', 'd-md-block', 'd-md-inline-flex', 'd-md-none', 'd-lg-block', 'd-lg-none', 'flex-column', 'flex-wrap', 'flex-grow-1',
  'align-items-center', 'align-items-start', 'align-items-end', 'justify-content-center', 'justify-content-between',
  'text-center', 'text-start', 'text-end', 'text-white', 'text-white-50', 'text-muted', 'text-dark', 'text-primary', 'text-info', 'text-success', 'text-warning', 'text-danger', 'text-secondary', 'text-decoration-none',
  'bg-white', 'bg-light', 'bg-light-subtle', 'bg-primary', 'bg-success', 'bg-warning', 'bg-danger', 'bg-dark',
  'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'my-2', 'my-3', 'my-4', 'my-5', 'mx-auto',
  'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'py-1', 'py-2', 'py-3', 'py-4', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'pb-1', 'pb-2', 'pt-1', 'pt-2',
  'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'g-0', 'g-1', 'g-2', 'g-3', 'g-4', 'g-5',
  'w-100', 'h-100', 'position-relative', 'position-absolute', 'overflow-hidden', 'rounded', 'rounded-3', 'rounded-4', 'rounded-circle', 'shadow-sm',
  'border', 'border-0', 'border-top', 'border-bottom', 'border-primary', 'border-secondary',
  'fw-bold', 'fw-semibold', 'fw-medium', 'fw-normal', 'small', 'lead', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'badge', 'active', 'show', 'collapse', 'navbar', 'navbar-expand-lg', 'navbar-collapse', 'navbar-nav', 'nav-item', 'nav-link', 'dropdown', 'dropdown-toggle', 'dropdown-menu', 'dropdown-item', 'navbar-toggler', 'breadcrumb', 'breadcrumb-item',
  'start-0', 'bottom-0', 'top-0', 'end-0', 'object-fit-cover'
]);

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const classMatches = html.match(/class="([^"]+)"/g) || [];
  const allClasses = new Set();
  classMatches.forEach(cm => {
    const list = cm.replace('class="', '').replace('"', '').split(/\s+/);
    list.forEach(c => {
      if (c && !c.startsWith('fa-') && !c.startsWith('fa') && !bootstrapClasses.has(c)) {
        allClasses.add(c);
      }
    });
  });

  const missing = [];
  allClasses.forEach(c => {
    // Check if class exists in style.css
    const regex = new RegExp(`\\.${c}(?=[\\s,{.:>\\[]|$)`);
    if (!regex.test(cssContent)) {
      missing.push(c);
    }
  });

  console.log(`\n=== File: ${file} ===`);
  console.log('Custom classes used:', allClasses.size);
  console.log('Classes not found in style.css:', missing);
});

