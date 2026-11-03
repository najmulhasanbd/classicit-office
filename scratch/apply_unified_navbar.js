const fs = require('fs');

function getNavbar(page) {
  const isHome = page === 'index.html';
  const isAbout = ['about.html', 'process.html', 'tech.html', 'faq.html'].includes(page);
  const isAboutUs = page === 'about.html';
  const isProcess = page === 'process.html';
  const isTech = page === 'tech.html';
  const isFaq = page === 'faq.html';
  
  const isProducts = ['products.html', 'product-details.html'].includes(page);
  const isProductsIndex = page === 'products.html';
  const isProductDetails = page === 'product-details.html';

  const isServices = ['services.html', 'service-details.html'].includes(page);
  const isProjects = ['portfolio.html', 'project-details.html'].includes(page);
  const isBlog = ['blog.html', 'blog-details.html'].includes(page);
  const isContact = page === 'contact.html';

  return `  <!-- ============================================================
       3. STICKY HEADER & NAVBAR WITH LEFT-SLIDING MOBILE SIDEBAR DRAWER
  ============================================================ -->
  <nav id="mainNavbar" class="navbar navbar-expand-lg" aria-label="Main navigation">
    <div class="container navbar-inner">

      <!-- Logo -->
      <a class="navbar-brand-custom" href="index.html" aria-label="Classic IT Home">
        <img src="images/logo.png" alt="Classic IT" class="site-logo" />
      </a>

      <!-- Mobile toggler -->
      <button class="navbar-toggler" type="button" id="navbarToggler" aria-label="Toggle navigation" aria-controls="navMenu" aria-expanded="false">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Mobile Sidebar Backdrop Overlay -->
      <div class="mobile-drawer-backdrop" id="menuBackdrop"></div>

      <!-- Nav links & Mobile Left-Sliding Sidebar Drawer -->
      <div class="collapse navbar-collapse" id="navMenu" data-lenis-prevent>

        <!-- Mobile Drawer Header (Only visible on mobile <= 991px) -->
        <div class="mobile-drawer-header d-lg-none">
          <a href="index.html" aria-label="Classic IT Home">
            <img src="images/logo.png" alt="Classic IT" style="max-height: 36px; width: auto;" />
          </a>
          <button type="button" class="mobile-drawer-close" id="mobileDrawerClose" aria-label="Close menu">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Main Navigation Links -->
        <ul class="navbar-nav mx-auto">

          <li class="nav-item">
            <a class="nav-link ${isHome ? 'active' : ''}" href="index.html">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-house"></i></span>
              <span class="nav-link-text">Home</span>
            </a>
          </li>

          <!-- About Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isAbout ? 'active' : ''}" href="about.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-building"></i></span>
              <span class="nav-link-text">About</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item ${isAboutUs ? 'active' : ''}" href="about.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> About Us</a></li>
              <li><a class="dropdown-item ${isProcess ? 'active' : ''}" href="process.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Work Process</a></li>
              <li><a class="dropdown-item ${isTech ? 'active' : ''}" href="tech.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Tech Stack</a></li>
              <li><a class="dropdown-item ${isFaq ? 'active' : ''}" href="faq.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> FAQ</a></li>
            </ul>
          </li>

          <!-- Ready Products Dropdown (Commercial Software for Sale) -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isProducts ? 'active' : ''}" href="products.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-box-open"></i></span>
              <span class="nav-link-text">Products</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item ${isProductsIndex ? 'active' : ''}" href="products.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> All Ready Products</a></li>
              <li><a class="dropdown-item ${isProductDetails ? 'active' : ''}" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Enterprise Cloud ERP</a></li>
              <li><a class="dropdown-item" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Smart Retail POS</a></li>
              <li><a class="dropdown-item" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Multi-Vendor E-Commerce</a></li>
              <li><a class="dropdown-item" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> School Management ERP</a></li>
              <li><a class="dropdown-item" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Smart Pharmacy System</a></li>
              <li><a class="dropdown-item" href="product-details.html"><i class="fas fa-arrow-right-long me-2 text-primary"></i> Courier Logistics SaaS</a></li>
            </ul>
          </li>

          <!-- Services (Single Link) -->
          <li class="nav-item">
            <a class="nav-link ${isServices ? 'active' : ''}" href="services.html">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-laptop-code"></i></span>
              <span class="nav-link-text">Services</span>
            </a>
          </li>

          <!-- Projects / Portfolio (Single Link - Delivered Client Work) -->
          <li class="nav-item">
            <a class="nav-link ${isProjects ? 'active' : ''}" href="portfolio.html">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-diagram-project"></i></span>
              <span class="nav-link-text">Projects</span>
            </a>
          </li>

          <!-- Blog (Single Link) -->
          <li class="nav-item">
            <a class="nav-link ${isBlog ? 'active' : ''}" href="blog.html">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-newspaper"></i></span>
              <span class="nav-link-text">Blog</span>
            </a>
          </li>

          <!-- Contact (Single Link) -->
          <li class="nav-item">
            <a class="nav-link ${isContact ? 'active' : ''}" href="contact.html">
              <span class="nav-icon-badge d-lg-none"><i class="fas fa-headset"></i></span>
              <span class="nav-link-text">Contact</span>
            </a>
          </li>

        </ul>

        <!-- Navbar right actions (Desktop) -->
        <div class="navbar-actions d-none d-lg-flex">
          <button class="nav-search-btn" id="searchBtn" aria-label="Open search">
            <i class="fas fa-search"></i>
          </button>
          <a href="contact.html" class="btn-quote">
            <i class="fas fa-paper-plane"></i> <span>Get A Quote</span>
          </a>
        </div>

        <!-- Mobile Drawer Footer (Only visible on mobile <= 991px) -->
        <div class="mobile-drawer-footer d-lg-none">
          <a href="contact.html" class="btn-primary-custom w-100 justify-content-center mb-3">
            <i class="fas fa-paper-plane me-2"></i> <span>Get A Free Quote</span>
          </a>
          <div class="mobile-drawer-contact-card">
            <div class="mobile-contact-item">
              <i class="fas fa-phone-alt text-primary"></i>
              <a href="tel:+8809678783783">+880 9678-783783</a>
            </div>
            <div class="mobile-contact-item">
              <i class="fas fa-envelope text-info"></i>
              <a href="mailto:info@classicit.com.bd">info@classicit.com.bd</a>
            </div>
          </div>
          <div class="mobile-drawer-socials">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>

    </div>
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress-bar" id="scrollProgress"></div>
  </nav>`;
}

module.exports = { getNavbar };
