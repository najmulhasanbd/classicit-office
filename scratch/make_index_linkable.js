const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. Hero buttons:
content = content.replace(
  '<a href="#services" class="btn-primary-custom">\n              <i class="fas fa-rocket"></i> <span>Explore Our Services</span>\n            </a>',
  '<a href="services.html" class="btn-primary-custom">\n              <i class="fas fa-rocket"></i> <span>Explore Our Services</span>\n            </a>'
);
content = content.replace(
  '<a href="#portfolio" class="btn-outline-custom">\n              <i class="fas fa-briefcase"></i> <span>View Case Studies</span>\n            </a>',
  '<a href="portfolio.html" class="btn-outline-custom">\n              <i class="fas fa-briefcase"></i> <span>View Case Studies</span>\n            </a>'
);

// 2. Services section: Replace all href="#contact" on service titles and explore links with service-details.html
content = content.replace(/<h3 class="title"><a href="#contact">([\s\S]*?)<\/a><\/h3>/g, '<h3 class="title"><a href="service-details.html">$1</a></h3>');
content = content.replace(/<a href="#contact" class="service-explore-link">/g, '<a href="service-details.html" class="service-explore-link">');

// Add "Explore All Services" button after swiper in Services section if not present
if (!content.includes('Explore All Services')) {
  const targetServicesEnd = '<!-- Swiper pagination bullets -->\n            <div class="swiper-pagination atf-service-pagination"></div>\n          </div>';
  const additionServices = '<!-- Swiper pagination bullets -->\n            <div class="swiper-pagination atf-service-pagination"></div>\n          </div>\n\n          <div class="text-center mt-5">\n            <a href="services.html" class="btn-outline-dark"><span>Explore All Services</span> <i class="fas fa-arrow-right ms-1"></i></a>\n          </div>';
  content = content.replace(targetServicesEnd, additionServices);
}

// 3. About section button:
content = content.replace(
  '<a href="#contact" class="btn-primary-custom">\n              <i class="fas fa-handshake"></i> <span>Partner With Us</span>\n            </a>',
  '<a href="about.html" class="btn-primary-custom">\n              <i class="fas fa-arrow-right"></i> <span>Learn More About Us</span>\n            </a>'
);

// 4. Work process section: Add link to process.html before the section ends
if (!content.includes('View Complete 8-Stage Collaboration Process')) {
  const targetProcessCta = '<a href="contact.html" class="btn-primary-custom">\n                <i class="fas fa-calendar-check"></i> <span>Book a Free Strategy Meeting</span>\n              </a>';
  const replacementProcessCta = '<div class="d-flex flex-wrap gap-2">\n                <a href="process.html" class="btn-outline-dark" style="border-color: rgba(255,255,255,0.3); color: #fff;">\n                  <span>Full Process Details</span> <i class="fas fa-arrow-right ms-1"></i>\n                </a>\n                <a href="contact.html" class="btn-primary-custom">\n                  <i class="fas fa-calendar-check"></i> <span>Book a Free Strategy Meeting</span>\n                </a>\n              </div>';
  content = content.replace(targetProcessCta, replacementProcessCta);
}

// 5. Tech Stack section: Add link to tech.html if not present
if (!content.includes('Explore Full Enterprise Architecture &amp; Tech Stack')) {
  const targetTechEnd = '<span class="tech-logo-name">PostgreSQL</span>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </section>';
  const replacementTechEnd = '<span class="tech-logo-name">PostgreSQL</span>\n            </div>\n          </div>\n\n        </div>\n\n        <div class="text-center mt-5">\n          <a href="tech.html" class="btn-outline-dark"><span>Explore Full Enterprise Architecture &amp; Tech Stack</span> <i class="fas fa-arrow-right ms-1"></i></a>\n        </div>\n      </div>\n    </section>';
  content = content.replace(targetTechEnd, replacementTechEnd);
}

// 6. Portfolio section:
// Update overlay buttons and titles
content = content.replace(/<div class="portfolio-img-overlay" aria-hidden="true">[\s\S]*?<a href="#" class="portfolio-overlay-btn"><i class="fas fa-link"><\/i><\/a>[\s\S]*?<a href="#" class="portfolio-overlay-btn"><i class="fas fa-search-plus"><\/i><\/a>[\s\S]*?<\/div>/g, '<div class="portfolio-img-overlay" aria-hidden="true">\n                  <a href="project-details.html" class="portfolio-overlay-btn" title="View Case Study Details"><i class="fas fa-arrow-right"></i></a>\n                </div>');

// Make portfolio titles clickable
content = content.replace(/<h4>Multi-Vendor Marketplace Platform<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Multi-Vendor Marketplace Platform</a></h4>');
content = content.replace(/<h4>Cloud ERP &amp; Financial Management<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Cloud ERP &amp; Financial Management</a></h4>');
content = content.replace(/<h4>Smart Retail POS &amp; Inventory System<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Smart Retail POS &amp; Inventory System</a></h4>');
content = content.replace(/<h4>Complete School Management System<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Complete School Management System</a></h4>');
content = content.replace(/<h4>Smart Pharmacy &amp; Medicine System<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Smart Pharmacy &amp; Medicine System</a></h4>');
content = content.replace(/<h4>Courier &amp; Delivery Tracking Suite<\/h4>/g, '<h4><a href="project-details.html" class="text-decoration-none text-dark">Courier &amp; Delivery Tracking Suite</a></h4>');

// 7. FAQ section: Add link to faq.html
if (!content.includes('Browse All Client FAQs')) {
  const targetFaqEnd = '<!-- Right: illustration with TechCore dual-image warp hover -->';
  const targetFaqBefore = '</div>\n          </div>\n\n          <!-- Right: illustration with TechCore dual-image warp hover -->';
  const replacementFaq = '<div class="mt-4">\n              <a href="faq.html" class="btn-outline-dark"><span>Browse All Client FAQs</span> <i class="fas fa-arrow-right ms-1"></i></a>\n            </div>\n          </div>\n\n          <!-- Right: illustration with TechCore dual-image warp hover -->';
  content = content.replace(targetFaqBefore, replacementFaq);
}

// 8. Blog section:
content = content.replace(/<h4><a href="#">The Complete Guide to Multi-Cloud Strategy in 2026<\/a><\/h4>/g, '<h4><a href="blog-details.html" class="text-decoration-none text-dark">The Complete Guide to Multi-Cloud Strategy in 2026</a></h4>');
content = content.replace(/<h4><a href="#">How Generative AI Is Reshaping Enterprise Software Development<\/a><\/h4>/g, '<h4><a href="blog-details.html" class="text-decoration-none text-dark">How Generative AI Is Reshaping Enterprise Software Development</a></h4>');
content = content.replace(/<h4><a href="#">Zero-Trust Security: Why Perimeter Defense Is No Longer Enough<\/a><\/h4>/g, '<h4><a href="blog-details.html" class="text-decoration-none text-dark">Zero-Trust Security: Why Perimeter Defense Is No Longer Enough</a></h4>');
content = content.replace(/<a href="#" class="blog-read-more">Read Article <i class="fas fa-arrow-right"><\/i><\/a>/g, '<a href="blog-details.html" class="blog-read-more">Read Article <i class="fas fa-arrow-right"></i></a>');

// 9. Footer links
content = content.replace('<li><a href="#hero">Home</a></li>', '<li><a href="index.html">Home</a></li>');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Successfully made index.html 100% linkable and clickable!');

