const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const productStyles = `
/* ============================================================
   READY-TO-SELL SOFTWARE PRODUCTS & PRODUCT DETAILS
============================================================ */
.product-card {
  background: var(--clr-card-bg, #ffffff);
  border: 1px solid var(--clr-border, #e2e8f0);
  border-radius: var(--radius-md, 16px);
  overflow: hidden;
  transition: all var(--tr-normal, 0.3s ease);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  border-color: rgba(37, 99, 235, 0.35);
}

[data-theme="dark"] .product-card {
  background: #111e38;
  border-color: rgba(255, 255, 255, 0.08);
}

.product-badge-float {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 5;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 5px 12px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
}

.product-badge-green {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
}

.product-badge-purple {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.35);
}

.product-thumb-holder {
  height: 230px;
  overflow: hidden;
  position: relative;
  background: #0b132b;
}

.product-thumb-holder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-thumb-holder img {
  transform: scale(1.06);
}

.product-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-cat-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--clr-primary, #2563eb);
  background: rgba(37, 99, 235, 0.08);
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  width: fit-content;
}

.product-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.35;
}

.product-title a {
  color: var(--clr-dark, #0f172a);
  text-decoration: none;
  transition: color 0.2s ease;
}

.product-title a:hover {
  color: var(--clr-primary, #2563eb);
}

[data-theme="dark"] .product-title a {
  color: #ffffff;
}

.product-desc {
  font-size: 0.9rem;
  color: var(--clr-text-muted, #64748b);
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
}

.product-features-checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  color: var(--clr-text, #334155);
  font-weight: 500;
}

.product-feature-item i {
  color: #10b981;
  font-size: 0.85rem;
}

[data-theme="dark"] .product-feature-item {
  color: #cbd5e1;
}

.product-card-footer {
  padding-top: 16px;
  border-top: 1px solid var(--clr-border, #e2e8f0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
}

[data-theme="dark"] .product-card-footer {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.product-price-info {
  display: flex;
  flex-direction: column;
}

.product-price-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  color: var(--clr-text-muted, #64748b);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.product-price-val {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--clr-primary, #2563eb);
}

/* Product Details Page Styles */
.product-detail-cover {
  border-radius: var(--radius-md, 16px);
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  margin-bottom: 32px;
}

.product-detail-cover img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
}

.product-module-card {
  background: var(--clr-card-bg, #ffffff);
  border: 1px solid var(--clr-border, #e2e8f0);
  border-radius: var(--radius-md, 14px);
  padding: 24px 20px;
  height: 100%;
  transition: all var(--tr-fast);
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
}

.product-module-card:hover {
  transform: translateY(-5px);
  border-color: var(--clr-primary, #2563eb);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);
}

[data-theme="dark"] .product-module-card {
  background: #111e38;
  border-color: rgba(255, 255, 255, 0.08);
}

.product-module-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--clr-primary, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.product-module-title {
  font-family: var(--font-heading);
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.product-spec-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--clr-bg-light, #f8fafc);
  border: 1px solid var(--clr-border, #e2e8f0);
  border-radius: var(--radius-sm, 10px);
  margin-bottom: 10px;
}

[data-theme="dark"] .product-spec-pill {
  background: #111e38;
  border-color: rgba(255, 255, 255, 0.08);
}

.product-spec-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--clr-primary, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}

/* Right Sticky Buy/Demo Card */
.product-buy-card {
  background: var(--clr-card-bg, #ffffff);
  border: 1.5px solid var(--clr-border, #e2e8f0);
  border-radius: var(--radius-md, 16px);
  padding: 32px 26px;
  box-shadow: 0 16px 45px rgba(15, 23, 42, 0.08);
  position: sticky;
  top: 110px;
}

[data-theme="dark"] .product-buy-card {
  background: #111e38;
  border-color: rgba(255, 255, 255, 0.1);
}

.product-price-box {
  background: rgba(37, 99, 235, 0.06);
  border: 1.5px solid rgba(37, 99, 235, 0.2);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 24px;
}
`;

css += productStyles;
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Appended Product CSS styles successfully!');

