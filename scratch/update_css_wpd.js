const fs = require('fs');

const wpdCSS = `
/* ============================================================
   WPDEVELOPER EXACT 3D CYLINDER SHOWCASE ("Made using our Products")
   & COMMERCIAL SOFTWARE CATALOG
============================================================ */
.wpd-showcase-container {
  position: relative;
  background: #0A0B0F;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* WPDeveloper Exact 3D Cylinder Stage */
.wpd-made {
  --mh: 960px;
  --mk: 1;
  --mA: 28.5deg;
  --mD: 360px;
  --mR: 788px;
  --mW: 258px;
  --mH: 172px;
  --mP: 550px;
  --mox: 49.9%;
  --moy: 48.3%;
  --mdolly: 200px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  height: var(--mh);
  background: #0A0B0F;
}

.wpd-made::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  box-shadow: inset 0 0 calc(128px * var(--mk)) calc(64px * var(--mk)) #0A0B0F;
}

.wpd-mstage {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: auto;
  max-width: none;
  min-height: 0;
  perspective: calc(var(--mP) * var(--mk));
  perspective-origin: var(--mox) var(--moy);
  transform-style: preserve-3d;
  transition: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y;
  pointer-events: none;
}

.wpd-mcam,
.wpd-mworld {
  position: absolute;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  transition: none;
}

.wpd-mcam {
  left: var(--mox);
  top: var(--moy);
  transform: translateZ(calc(var(--mP) * var(--mk)));
}

.wpd-mworld {
  left: 0;
  top: 0;
  transform: rotateY(var(--yaw, 0deg)) translateY(var(--yoff, 0));
}

.wpd-mtile {
  --width: calc(var(--mW) * var(--mk));
  position: absolute;
  left: calc(var(--mW) * var(--mk) / -2);
  top: calc(var(--mH) * var(--mk) / -2);
  width: var(--width) !important;
  max-width: none !important;
  height: calc(var(--mH) * var(--mk)) !important;
  margin: 0;
  --lift: 0px;
  transition: --lift .4s, filter .4s;
  transform: rotateY(calc(var(--c, 0) * -1 * var(--mA))) translateY(calc(var(--r, 0) * var(--mD) * var(--mk))) translateZ(calc((var(--lift) - var(--mR)) * var(--mk)));
  backface-visibility: hidden;
  pointer-events: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.wpd-mtile a,
.wpd-mtile img {
  display: block;
  width: 100%;
  height: 100%;
}

.wpd-mtile img {
  object-fit: cover;
  pointer-events: none;
}

.wpd-mspares {
  position: absolute;
  left: -99999px;
  top: 0;
  width: 258px;
  min-height: 0;
  visibility: hidden;
  pointer-events: none;
}

.wpd-mspares .wpd-mtile {
  position: static;
  transform: none;
}

/* Center Floating Title (Exact WPDeveloper Style) */
.wpd-made-title {
  position: absolute;
  left: 0;
  top: 0;
  width: max-content !important;
  max-width: none !important;
  margin: 0;
  transform: translate(-50%, -50%) translateZ(calc(-748px * var(--mk))) scale(1.36);
  transition: none;
  will-change: transform;
  pointer-events: auto;
  text-align: center;
  z-index: 2;
}

.wpd-made-title h2 {
  font-size: 58px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-family: var(--font-heading, 'Plus Jakarta Sans', sans-serif);
  margin: 0 0 12px;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.9);
}

.wpd-made-title p {
  font-size: 15px;
  color: #94a3b8;
  max-width: 480px;
  margin: 0 auto 18px;
  line-height: 1.5;
}

.wpd-made-title .wpd-made-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: rgba(37, 99, 235, 0.35);
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 50px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
}

.wpd-made-title .wpd-made-cta:hover {
  background: #2563eb;
  border-color: #38bdf8;
  transform: translateY(-2px);
  color: #ffffff;
}

.wpd-made.is-interactive {
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}

.wpd-made.is-dragging {
  cursor: grabbing;
}

.wpd-made.is-interactive .wpd-mtile:hover {
  --lift: 70px;
  filter: brightness(1.18);
  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.5);
}

.wpd-mpill {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  pointer-events: none;
  margin: 18px 0 0 18px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #ffffff;
  color: #0A0B0F;
  font-family: var(--font-body, sans-serif);
  font-weight: 700;
  font-size: 13px;
  line-height: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  opacity: 0;
  transition: opacity .2s ease;
}

.wpd-mpill.is-on {
  opacity: 1;
}

@media(max-width: 1024px) {
  .wpd-made {
    --mh: 640px;
    --mk: .667;
  }
  .wpd-made-title h2 {
    font-size: 42px;
  }
}

@media(max-width: 767px) {
  .wpd-made {
    --mh: 460px;
    --mk: .46;
  }
  .wpd-made-title h2 {
    font-size: 28px;
  }
}

/* ============================================================
   COMMERCIAL SOFTWARE CATALOG (Beneath 3D Cylinder)
============================================================ */
.wpdev-catalog-section {
  padding: 90px 0 100px;
  background: radial-gradient(circle at 50% 0%, #0d1b3e 0%, #060b18 70%, #03060d 100%);
  color: #ffffff;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.wpdev-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(37, 99, 235, 0.16);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 50px;
  color: #38bdf8;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
}

.wpdev-main-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 800;
  line-height: 1.18;
  color: #ffffff;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.wpdev-main-title .gradient-text-alt {
  background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.wpdev-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 760px;
  margin: 0 auto 30px;
}

.wpdev-stats-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 16px 28px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  margin-bottom: 30px;
}

.wpdev-stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
}

.wpdev-stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.2);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.wpdev-stat-num {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
}

.wpdev-stat-label {
  font-size: 0.78rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Category Filter Tabs */
.wpdev-filter-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 45px;
}

.wpdev-filter-btn {
  padding: 10px 22px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #cbd5e1;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.wpdev-filter-btn:hover {
  background: rgba(37, 99, 235, 0.2);
  border-color: rgba(56, 189, 248, 0.4);
  color: #ffffff;
}

.wpdev-filter-btn.active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border-color: #38bdf8;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
}

/* Product Card */
.wpdev-prod-card {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(14px);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
}

.wpdev-prod-card:hover {
  transform: translateY(-8px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.25);
}

.wpdev-prod-header {
  padding: 24px 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wpdev-prod-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(56, 189, 248, 0.15) 100%);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
}

.wpdev-prod-badge {
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(37, 99, 235, 0.2);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.wpdev-prod-badge.badge-hot {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
  border-color: rgba(239, 68, 68, 0.35);
}

.wpdev-prod-badge.badge-green {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.35);
}

.wpdev-prod-thumb {
  position: relative;
  width: 100%;
  height: 185px;
  overflow: hidden;
  background: #0d162d;
}

.wpdev-prod-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.wpdev-prod-card:hover .wpdev-prod-thumb img {
  transform: scale(1.05);
}

.wpdev-prod-overlay-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.85);
  padding: 8px 18px;
  background: rgba(15, 23, 42, 0.9);
  color: #ffffff;
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.wpdev-prod-card:hover .wpdev-prod-overlay-btn {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.wpdev-prod-body {
  padding: 22px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wpdev-prod-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.8rem;
}

.wpdev-prod-cat {
  color: #38bdf8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wpdev-prod-rating {
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.78rem;
}

.wpdev-prod-rating span {
  color: #94a3b8;
  font-weight: 500;
}

.wpdev-prod-title {
  font-family: var(--font-heading);
  font-size: 1.18rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.35;
}

.wpdev-prod-title a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.wpdev-prod-title a:hover {
  color: #38bdf8;
}

.wpdev-prod-desc {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.55;
  margin-bottom: 18px;
}

.wpdev-prod-features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wpdev-feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: #cbd5e1;
}

.wpdev-feature-item i {
  color: #10b981;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.wpdev-prod-footer {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wpdev-price-tag {
  display: flex;
  flex-direction: column;
}

.wpdev-price-label {
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wpdev-price-amount {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
}

.wpdev-price-amount small {
  font-size: 0.75rem;
  font-weight: 500;
  color: #94a3b8;
}

.wpdev-prod-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(56, 189, 248, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.wpdev-prod-cta-btn:hover {
  background: #38bdf8;
  color: #070d1e;
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
  transform: translateY(-2px);
}

/* Bottom Assurance Box */
.wpdev-assurance-box {
  margin-top: 55px;
  padding: 30px 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.wpdev-assurance-left {
  max-width: 620px;
}

.wpdev-assurance-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 6px;
}

.wpdev-assurance-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0;
}

.wpdev-assurance-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.wpdev-btn-catalog {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.92rem;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(56, 189, 248, 0.4);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
  transition: all 0.3s ease;
}

.wpdev-btn-catalog:hover {
  background: #38bdf8;
  color: #070d1e;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(56, 189, 248, 0.45);
}

.wpdev-btn-quote {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.wpdev-btn-quote:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  color: #ffffff;
}

@media (max-width: 991.98px) {
  .wpdev-assurance-box {
    padding: 24px 20px;
  }
}

@media (max-width: 767.98px) {
  .wpdev-stats-bar {
    gap: 16px;
    padding: 16px 18px;
  }
  .wpdev-stat-item {
    width: 100%;
  }
  .wpdev-assurance-actions {
    width: 100%;
    flex-direction: column;
  }
  .wpdev-btn-catalog, .wpdev-btn-quote {
    width: 100%;
    justify-content: center;
  }
}
`;

const curCss = fs.readFileSync('css/style.css', 'utf8');
const p = curCss.indexOf('/* ============================================================\n   WPDEVELOPER-STYLE 3D COMMERCIAL PRODUCTS SHOWCASE');
if (p !== -1) {
  const newCss = curCss.substring(0, p) + wpdCSS.trim() + '\n';
  fs.writeFileSync('css/style.css', newCss, 'utf8');
  console.log('Successfully updated WPDeveloper styles in css/style.css');
} else {
  fs.appendFileSync('css/style.css', '\n' + wpdCSS.trim() + '\n', 'utf8');
  console.log('Appended WPDeveloper styles to css/style.css');
}

