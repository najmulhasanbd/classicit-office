const fs = require('fs');

const sectionHTML = `
    <!-- ══════════════════════════════════════════════
         5.5 COMMERCIAL READY SOFTWARE PRODUCTS SHOWCASE
         (WPDeveloper Inspired: "Made using our Products" 3D Showcase & Software Catalog)
    ══════════════════════════════════════════════ -->
    <section id="products" class="wpdev-showcase-section" aria-labelledby="homeProductsTitle">
      <!-- Ambient Glow Orbs -->
      <div class="wpdev-glow-orb wpdev-glow-orb-1" aria-hidden="true"></div>
      <div class="wpdev-glow-orb wpdev-glow-orb-2" aria-hidden="true"></div>
      <div class="wpdev-glow-orb wpdev-glow-orb-3" aria-hidden="true"></div>

      <div class="container position-relative z-2">
        <!-- Section Header -->
        <div class="wpdev-header-wrapper">
          <div class="wpdev-pill-badge">
            <i class="fas fa-boxes-stacked"></i> Commercial Ready Software
          </div>
          <h2 class="wpdev-main-title" id="homeProductsTitle">
            Made using our <span class="gradient-text-alt">Products</span>
          </h2>
          <p class="wpdev-subtitle">
            Battle-tested, production-ready enterprise software suites and SaaS engines built for immediate deployment. Available for full source-code buyout or scalable cloud hosting.
          </p>

          <!-- Trust stats row -->
          <div class="wpdev-stats-bar">
            <div class="wpdev-stat-item">
              <div class="wpdev-stat-icon"><i class="fas fa-cubes"></i></div>
              <div>
                <div class="wpdev-stat-num">500+</div>
                <div class="wpdev-stat-label">Live Deployments</div>
              </div>
            </div>
            <div class="wpdev-stat-item">
              <div class="wpdev-stat-icon"><i class="fas fa-bolt"></i></div>
              <div>
                <div class="wpdev-stat-num">48 Hrs</div>
                <div class="wpdev-stat-label">Instant Handover</div>
              </div>
            </div>
            <div class="wpdev-stat-item">
              <div class="wpdev-stat-icon"><i class="fas fa-shield-halved"></i></div>
              <div>
                <div class="wpdev-stat-num">99.98%</div>
                <div class="wpdev-stat-label">Reliability SLA</div>
              </div>
            </div>
            <div class="wpdev-stat-item">
              <div class="wpdev-stat-icon"><i class="fas fa-code"></i></div>
              <div>
                <div class="wpdev-stat-num">100%</div>
                <div class="wpdev-stat-label">Source Code Buyout</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3D Perspective Theater: Dual Continuous Floating Rows (WPDeveloper Style) -->
      <div class="wpdev-3d-theater" aria-label="3D Perspective Live Products Showcase">
        <div class="wpdev-3d-stage">

          <!-- Row 1: Flowing Left (Tilted Perspective) -->
          <div class="wpdev-row-top">
            <div class="wpdev-marquee-track track-left">
              <!-- Item 1: Cloud ERP -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">erp.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">ERP Suite</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-erp.jpg" alt="Enterprise Cloud ERP Suite" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Enterprise Cloud ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 180+ Deployed · $799 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 2: Retail POS -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">pos.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Offline POS</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-pos.jpg" alt="Smart Retail POS Engine" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Retail POS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 240+ Stores · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 3: Multi-Vendor Marketplace -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">market.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Marketplace</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-ecommerce.jpg" alt="Multi-Vendor Marketplace Platform" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Multi-Vendor E-Commerce</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 95+ Portals · $649 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 4: School ERP -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">campus.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Campus ERP</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-school.jpg" alt="School & College ERP" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">School &amp; College ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 45+ Campuses · $549 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 5: Smart Pharmacy -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">pharma.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Pharmacy</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-pharmacy.jpg" alt="Smart Pharmacy & Drug Inventory" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Pharmacy Suite</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 80+ Pharmacies · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 6: Courier Logistics -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots">
                    <span class="wpdev-dot-red"></span>
                    <span class="wpdev-dot-yellow"></span>
                    <span class="wpdev-dot-green"></span>
                  </div>
                  <div class="wpdev-browser-url">courier.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Logistics</span>
                </div>
                <div class="wpdev-screen-img-holder">
                  <img src="images/product-courier.jpg" alt="Courier Delivery Logistics SaaS" loading="lazy" />
                </div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Courier Logistics SaaS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 60+ Fleet Ops · $599 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Duplicate Set for Seamless Continuous Infinite Scroll -->
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">erp.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">ERP Suite</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-erp.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Enterprise Cloud ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 180+ Deployed · $799 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">pos.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Offline POS</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-pos.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Retail POS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 240+ Stores · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">market.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Marketplace</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-ecommerce.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Multi-Vendor E-Commerce</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 95+ Portals · $649 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
            </div>
          </div>

          <!-- Row 2: Flowing Right (Tilted Complementary Perspective) -->
          <div class="wpdev-row-bottom">
            <div class="wpdev-marquee-track track-right">
              <!-- Item 6: Courier Logistics -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">courier.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Logistics</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-courier.jpg" alt="Courier Delivery Logistics SaaS" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Courier Logistics SaaS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 60+ Fleet Ops · $599 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 5: Smart Pharmacy -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">pharma.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Pharmacy</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-pharmacy.jpg" alt="Smart Pharmacy & Drug Inventory" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Pharmacy Suite</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 80+ Pharmacies · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 4: School ERP -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">campus.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Campus ERP</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-school.jpg" alt="School & College ERP" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">School &amp; College ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 45+ Campuses · $549 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 3: Multi-Vendor Marketplace -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">market.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Marketplace</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-ecommerce.jpg" alt="Multi-Vendor Marketplace Platform" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Multi-Vendor E-Commerce</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 95+ Portals · $649 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 2: Retail POS -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">pos.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Offline POS</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-pos.jpg" alt="Smart Retail POS Engine" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Retail POS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 240+ Stores · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Item 1: Cloud ERP -->
              <a href="product-details.html" class="wpdev-screen-card">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">erp.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">ERP Suite</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-erp.jpg" alt="Enterprise Cloud ERP Suite" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Enterprise Cloud ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 180+ Deployed · $799 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>

              <!-- Duplicate Set for Seamless Continuous Infinite Scroll -->
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">courier.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Logistics</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-courier.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Courier Logistics SaaS</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 60+ Fleet Ops · $599 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">pharma.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Pharmacy</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-pharmacy.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">Smart Pharmacy Suite</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 80+ Pharmacies · $499 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
              <a href="product-details.html" class="wpdev-screen-card" aria-hidden="true" tabindex="-1">
                <div class="wpdev-browser-bar">
                  <div class="wpdev-browser-dots"><span class="wpdev-dot-red"></span><span class="wpdev-dot-yellow"></span><span class="wpdev-dot-green"></span></div>
                  <div class="wpdev-browser-url">campus.classicit.com.bd</div>
                  <span class="wpdev-browser-badge">Campus ERP</span>
                </div>
                <div class="wpdev-screen-img-holder"><img src="images/product-school.jpg" alt="" loading="lazy" /></div>
                <div class="wpdev-screen-caption">
                  <div>
                    <h4 class="wpdev-caption-title">School &amp; College ERP</h4>
                    <div class="wpdev-caption-meta"><i class="fas fa-circle-check"></i> 45+ Campuses · $549 Buyout</div>
                  </div>
                  <div class="wpdev-caption-cta"><i class="fas fa-arrow-right"></i></div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Interactive Commercial Products Grid (WPDeveloper Style) -->
      <div class="container wpdev-grid-wrapper">

        <!-- Category Filter Pills -->
        <div class="wpdev-filter-nav" role="tablist" aria-label="Product categories">
          <button class="wpdev-filter-btn active" data-wpfilter="all" role="tab" aria-selected="true">
            <i class="fas fa-border-all me-1"></i> All Products (6)
          </button>
          <button class="wpdev-filter-btn" data-wpfilter="erp" role="tab" aria-selected="false">
            <i class="fas fa-building-columns me-1"></i> Enterprise ERP
          </button>
          <button class="wpdev-filter-btn" data-wpfilter="pos" role="tab" aria-selected="false">
            <i class="fas fa-cash-register me-1"></i> Retail &amp; POS
          </button>
          <button class="wpdev-filter-btn" data-wpfilter="ecommerce" role="tab" aria-selected="false">
            <i class="fas fa-bag-shopping me-1"></i> E-Commerce &amp; SaaS
          </button>
          <button class="wpdev-filter-btn" data-wpfilter="special" role="tab" aria-selected="false">
            <i class="fas fa-graduation-cap me-1"></i> Education &amp; Health
          </button>
        </div>

        <!-- 6 High-Performance Commercial Software Cards -->
        <div class="row g-4" id="wpdevProductsContainer">

          <!-- Card 1: Enterprise ERP -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="erp">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-building-columns"></i></div>
                <span class="wpdev-prod-badge badge-hot">Best Seller</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-erp.jpg" alt="Enterprise Cloud ERP Suite" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">Enterprise ERP</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.9 <span>(180+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Enterprise Multi-Branch Cloud ERP Suite</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Corporate automation software with general ledger, multi-warehouse stock, payroll HR &amp; audit trails.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> General Ledger &amp; Financial Reporting</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Multi-Warehouse Stock &amp; Inventory</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Payroll, Attendance &amp; Employee HR</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Automated Invoicing, VAT &amp; Audit Logs</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$799 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Smart Retail POS -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="pos">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-cash-register"></i></div>
                <span class="wpdev-prod-badge badge-green">Offline-First</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-pos.jpg" alt="Smart Retail POS Engine" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">Retail &amp; POS</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.9 <span>(240+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Smart Retail POS &amp; Inventory System</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Ultra-fast offline POS terminal for supermarkets, fashion stores, and multi-counter retail chains.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> 100% Offline Billing with SQLite Sync</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Barcode Scanner &amp; Label Printing</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Real-Time Daily Cash Register &amp; Shift</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Multi-Branch Cloud Aggregation</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$499 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Multi-Vendor Marketplace -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="ecommerce">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-bag-shopping"></i></div>
                <span class="wpdev-prod-badge badge-hot">High Demand</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-ecommerce.jpg" alt="Multi-Vendor Marketplace Platform" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">B2B / B2C Commerce</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.8 <span>(95+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Multi-Vendor Marketplace Platform</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Scalable e-commerce platform with merchant portals, automated commissions &amp; payment gateways.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Independent Merchant Storefronts</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Automated Commissions &amp; Payouts</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Cards, bKash &amp; Nagad Gateways</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Courier Shipping API Integration</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$649 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: School & College ERP -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="special">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-graduation-cap"></i></div>
                <span class="wpdev-prod-badge">40+ Campuses</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-school.jpg" alt="School & College ERP" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">Education ERP</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.9 <span>(45+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Complete School &amp; College ERP Suite</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Institutional management for student admissions, online fee collection, exams &amp; guardian portal.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Student Admission &amp; Lifetime Records</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Online Fee Collection &amp; SMS Alerts</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Exam Marks, Grading &amp; Report Cards</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Teacher &amp; Guardian Mobile App</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$549 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5: Smart Pharmacy -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="special">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-pills"></i></div>
                <span class="wpdev-prod-badge badge-green">DGDA Ready</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-pharmacy.jpg" alt="Smart Pharmacy & Drug Inventory" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">Pharma &amp; Health</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.8 <span>(80+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Smart Pharmacy &amp; Drug Inventory System</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Retail and wholesale pharmacy suite with drug directory, batch expiry alerts &amp; prescription billing.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> 15,000+ Pre-Loaded Medicine Database</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Batch Expiry &amp; Low Stock Alerts</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Doctor Prescription Billing POS</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Restricted Narcotics Audit Register</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$499 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 6: Courier Logistics -->
          <div class="col-lg-4 col-md-6 wpdev-item" data-category="ecommerce">
            <div class="wpdev-prod-card">
              <div class="wpdev-prod-header">
                <div class="wpdev-prod-icon"><i class="fas fa-truck-fast"></i></div>
                <span class="wpdev-prod-badge">SaaS Ready</span>
              </div>
              <div class="wpdev-prod-thumb">
                <img src="images/product-courier.jpg" alt="Courier Delivery Logistics SaaS" loading="lazy" />
                <a href="product-details.html" class="wpdev-prod-overlay-btn">
                  <i class="fas fa-eye me-1"></i> Live Demo &amp; Specs
                </a>
              </div>
              <div class="wpdev-prod-body">
                <div class="wpdev-prod-meta">
                  <span class="wpdev-prod-cat">Logistics &amp; Fleet</span>
                  <div class="wpdev-prod-rating">
                    <i class="fas fa-star"></i> 4.9 <span>(60+ Deployed)</span>
                  </div>
                </div>
                <h3 class="wpdev-prod-title">
                  <a href="product-details.html">Courier &amp; Delivery Tracking Logistics SaaS</a>
                </h3>
                <p class="wpdev-prod-desc">
                  Parcel logistics software with real-time tracking, merchant booking portal &amp; driver mobile app.
                </p>
                <ul class="wpdev-prod-features">
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Merchant Booking &amp; API Integration</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Hub Barcode Scanning &amp; Sorting</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Rider Mobile App &amp; Signature Proof</li>
                  <li class="wpdev-feature-item"><i class="fas fa-circle-check"></i> Automated Cash on Delivery (COD)</li>
                </ul>
                <div class="wpdev-prod-footer">
                  <div class="wpdev-price-tag">
                    <span class="wpdev-price-label">Deployment License</span>
                    <span class="wpdev-price-amount">$599 <small>/ Buyout</small></span>
                  </div>
                  <a href="product-details.html" class="wpdev-prod-cta-btn">
                    <span>Explore</span> <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Assurance & Full Catalog Action -->
        <div class="wpdev-assurance-box">
          <div class="wpdev-assurance-left">
            <h4 class="wpdev-assurance-title">Need a Customized Edition or Multi-Tenant SaaS?</h4>
            <p class="wpdev-assurance-desc">
              All software suites can be white-labeled with your custom branding, custom payment gateways, and hosted on your private cloud within 48 hours.
            </p>
          </div>
          <div class="wpdev-assurance-actions">
            <a href="products.html" class="wpdev-btn-catalog">
              <i class="fas fa-boxes-stacked me-1"></i> View All Ready Products (6)
            </a>
            <a href="contact.html" class="wpdev-btn-quote">
              <i class="fas fa-headset me-1"></i> Request Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
`;

fs.writeFileSync('scratch/section_products.html', sectionHTML, 'utf8');
console.log('Saved scratch/section_products.html');

