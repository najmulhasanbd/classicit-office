const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Title HTML
const titleHTML = `              <!-- Central 3D Floating Title -->
              <div class="wpd-made-title">
                <h2>Made using our<br>Products</h2>
                <p>Powering 500+ live systems, retail chains &amp; SaaS platforms worldwide.</p>
                <a href="#commercialSoftwareCatalog" class="wpd-made-cta">
                  <span>Explore Software Catalog</span> <i class="fas fa-arrow-down ms-1"></i>
                </a>
              </div>`;

// Remove title from inside wpd-mworld
html = html.replace(titleHTML, '');

// Place title directly inside wpd-made (after wpd-mspares and before closing of wpd-made)
const targetEnd = `        </div>
      </div>

      <!-- COMMERCIAL SOFTWARE CATALOG`;

const fixedTitlePlacement = `        </div>

        <!-- Fixed Center Title (Never Rotates with Cylinder) -->
        <div class="wpd-made-title">
          <h2>Made using our<br>Products</h2>
          <p>Powering 500+ live systems, retail chains &amp; SaaS platforms worldwide.</p>
          <a href="#commercialSoftwareCatalog" class="wpd-made-cta">
            <span>Explore Software Catalog</span> <i class="fas fa-arrow-down ms-1"></i>
          </a>
        </div>
      </div>

      <!-- COMMERCIAL SOFTWARE CATALOG`;

html = html.replace(targetEnd, fixedTitlePlacement);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Moved wpd-made-title to be a fixed child of wpd-made in index.html');

