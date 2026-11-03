const fs = require('fs');

const wpdSectionHTML = `
    <!-- ══════════════════════════════════════════════
         5.5 WPDEVELOPER EXACT 3D CYLINDER SHOWCASE ("Made using our Products")
         + COMMERCIAL READY SOFTWARE CATALOG
    ══════════════════════════════════════════════ -->
    <section id="products" class="wpd-showcase-container" aria-label="Commercial Ready Software & Products Showcase">

      <!-- WPDEVELOPER EXACT 3D CYLINDER STAGE -->
      <div class="wpd-made" aria-label="3D Interactive Products Showcase">
        <div class="wpd-mstage">
          <div class="wpd-mcam">
            <div class="wpd-mworld">

              <!-- Central 3D Floating Title -->
              <div class="wpd-made-title">
                <h2>Made using our<br>Products</h2>
                <p>Powering 500+ live systems, retail chains &amp; SaaS platforms worldwide.</p>
                <a href="#commercialSoftwareCatalog" class="wpd-made-cta">
                  <span>Explore Software Catalog</span> <i class="fas fa-arrow-down ms-1"></i>
                </a>
              </div>

              <!-- Initial 17 Cylinder Wall Tiles (c: -2 to 2, r: -2 to 2) -->
              <div class="wpd-mtile" style="--c:-2;--r:-1">
                <a href="product-details.html" data-site="Enterprise ERP Suite">
                  <img src="images/made-site/made-site-23-2c189df3.webp" alt="Enterprise ERP Suite" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:-1;--r:-1">
                <a href="product-details.html" data-site="Smart Retail POS">
                  <img src="images/made-site/made-site-24-a2d6accc.webp" alt="Smart Retail POS" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:0;--r:-2">
                <a href="product-details.html" data-site="Multi-Vendor Marketplace">
                  <img src="images/made-site/made-site-20-5e578937.jpg" alt="Multi-Vendor Marketplace" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:1;--r:-1">
                <a href="product-details.html" data-site="Campus School ERP">
                  <img src="images/made-site/made-site-26-14580a6b.webp" alt="Campus School ERP" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:2;--r:-1">
                <a href="product-details.html" data-site="Smart Pharmacy Suite">
                  <img src="images/made-site/made-site-27-ecbd4979.jpg" alt="Smart Pharmacy Suite" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:0;--r:-1">
                <a href="product-details.html" data-site="Courier Logistics SaaS">
                  <img src="images/made-site/made-site-25-3657080f.webp" alt="Courier Logistics SaaS" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:-2;--r:0">
                <a href="product-details.html" data-site="Creative Digital Agency">
                  <img src="images/made-site/made-site-01-870c226e.webp" alt="Creative Digital Agency" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:-1;--r:0">
                <a href="product-details.html" data-site="Aviation Booking Engine">
                  <img src="images/made-site/made-site-02-1332b612.webp" alt="Aviation Booking Engine" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:0;--r:0">
                <a href="product-details.html" data-site="Nature Express Eco Hub">
                  <img src="images/made-site/made-site-03-92d18fab.webp" alt="Nature Express Eco Hub" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:1;--r:0">
                <a href="product-details.html" data-site="Unique Items Boutique">
                  <img src="images/made-site/made-site-05-a7a01a7f.jpg" alt="Unique Items Boutique" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:2;--r:0">
                <a href="product-details.html" data-site="Bakery POS &amp; Order System">
                  <img src="images/made-site/made-site-04-e6daa593.webp" alt="Bakery POS &amp; Order System" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:-1;--r:1">
                <a href="product-details.html" data-site="Corporate Portal &amp; Intranet">
                  <img src="images/made-site/made-site-06-52034d73.webp" alt="Corporate Portal &amp; Intranet" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:0;--r:1">
                <a href="product-details.html" data-site="Real-time Analytics Dashboard">
                  <img src="images/made-site/made-site-07-ceda74b6.webp" alt="Real-time Analytics Dashboard" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:1;--r:1">
                <a href="product-details.html" data-site="Fintech Gateway &amp; Wallet">
                  <img src="images/made-site/made-site-08-f7d19597.webp" alt="Fintech Gateway &amp; Wallet" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:-2;--r:1">
                <a href="product-details.html" data-site="Digital Studio Platform">
                  <img src="images/made-site/made-site-09-d03fc6f9.webp" alt="Digital Studio Platform" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:0;--r:2">
                <a href="product-details.html" data-site="Logistics &amp; Cargo Freight">
                  <img src="images/made-site/made-site-10-deda5487.webp" alt="Logistics &amp; Cargo Freight" loading="lazy" />
                </a>
              </div>

              <div class="wpd-mtile" style="--c:2;--r:1">
                <a href="product-details.html" data-site="Healthcare &amp; Clinic POS">
                  <img src="images/made-site/made-site-11-ef91906a.webp" alt="Healthcare &amp; Clinic POS" loading="lazy" />
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- Spare Tiles for Dynamic Dynamic 3D Cylinder Cycling -->
        <div class="wpd-mspares">
          <div class="wpd-mtile wpd-mspare" style="--k:8">
            <a href="product-details.html" data-site="Cloud Accounting Engine">
              <img src="images/made-site/made-site-12-2c8b1bff.webp" alt="Cloud Accounting Engine" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:9">
            <a href="product-details.html" data-site="Multi-Store E-Commerce">
              <img src="images/made-site/made-site-13-f4f1dbfc.webp" alt="Multi-Store E-Commerce" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:11">
            <a href="product-details.html" data-site="Student Portal App">
              <img src="images/made-site/made-site-14-5551c174.webp" alt="Student Portal App" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:12">
            <a href="product-details.html" data-site="Supermarket Billing POS">
              <img src="images/made-site/made-site-15-6d760104.webp" alt="Supermarket Billing POS" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:13">
            <a href="product-details.html" data-site="Rider Tracking Mobile SaaS">
              <img src="images/made-site/made-site-16-921b4331.webp" alt="Rider Tracking Mobile SaaS" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:14">
            <a href="product-details.html" data-site="Pharma Expiry &amp; Stock System">
              <img src="images/made-site/made-site-17-813da797.webp" alt="Pharma Expiry &amp; Stock System" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:15">
            <a href="product-details.html" data-site="Digital News &amp; Content Hub">
              <img src="images/made-site/made-site-18-9b67203e.webp" alt="Digital News &amp; Content Hub" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:16">
            <a href="product-details.html" data-site="Hospital Patient Records">
              <img src="images/made-site/made-site-19-24873095.webp" alt="Hospital Patient Records" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:17">
            <a href="product-details.html" data-site="Retail Chain Cloud Manager">
              <img src="images/made-site/made-site-21-fc778702.webp" alt="Retail Chain Cloud Manager" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:18">
            <a href="product-details.html" data-site="Fleet Delivery Dispatcher">
              <img src="images/made-site/made-site-22-d3883392.webp" alt="Fleet Delivery Dispatcher" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:20">
            <a href="product-details.html" data-site="Automated Inventory Warehouse">
              <img src="images/made-site/made-site-28-b3bf95fd.webp" alt="Automated Inventory Warehouse" loading="lazy" />
            </a>
          </div>
          <div class="wpd-mtile wpd-mspare" style="--k:21">
            <a href="product-details.html" data-site="B2B Merchant Marketplace">
              <img src="images/made-site/made-site-29-a2ddcf61.webp" alt="B2B Merchant Marketplace" loading="lazy" />
            </a>
          </div>
        </div>
      </div>

      <!-- COMMERCIAL SOFTWARE CATALOG (WPDeveloper Style Product Grid) -->
      <div id="commercialSoftwareCatalog" class="wpdev-catalog-section">
        <div class="container">

          <!-- Section Header -->
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
              <div class="wpdev-pill-badge">
                <i class="fas fa-boxes-stacked"></i> Commercial Ready Software
              </div>
              <h2 class="wpdev-main-title">
                Ready-to-Deploy <span class="gradient-text-alt">Software Products</span>
              </h2>
              <p class="wpdev-subtitle">
                Battle-tested enterprise engines built for immediate business operations. Buy once with full source code or subscribe via monthly cloud hosting.
              </p>

              <!-- Trust Stats Row -->
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

              <!-- Filter Tabs -->
              <div class="wpdev-filter-nav mt-4" role="tablist" aria-label="Product categories">
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

            </div>
          </div>

          <!-- 6 Products Grid -->
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
      </div>

    </section>
`;

fs.writeFileSync('scratch/wpd_full_section.html', wpdSectionHTML, 'utf8');
console.log('Saved scratch/wpd_full_section.html');

