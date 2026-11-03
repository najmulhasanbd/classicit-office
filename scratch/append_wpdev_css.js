const fs = require('fs');

const cssToAppend = `
/* ============================================================
   WPDEVELOPER-STYLE 3D COMMERCIAL PRODUCTS SHOWCASE
   (Made Using Our Products + Interactive Software Grid)
============================================================ */
.wpdev-showcase-section {
  position: relative;
  background: radial-gradient(circle at 50% 20%, #0d1b3e 0%, #060b18 70%, #03060d 100%);
  color: #ffffff;
  padding: 110px 0 100px;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Ambient glow orbs in background */
.wpdev-glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.45;
}

.wpdev-glow-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #2563eb, transparent 70%);
  top: -100px;
  left: 10%;
}

.wpdev-glow-orb-2 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, #06b6d4, transparent 70%);
  top: 30%;
  right: -50px;
}

.wpdev-glow-orb-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #7c3aed, transparent 70%);
  bottom: 0;
  left: 20%;
}

/* Section Header & Center Focus */
.wpdev-header-wrapper {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 860px;
  margin: 0 auto 50px;
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
  font-size: clamp(2.4rem, 4.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.wpdev-main-title .gradient-text-alt {
  background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.wpdev-subtitle {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #94a3b8;
  margin-bottom: 30px;
}

/* Trust stats bar inside showcase */
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
  margin-bottom: 40px;
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

/* ============================================================
   3D PERSPECTIVE THEATER (Exact WPDeveloper Style)
============================================================ */
.wpdev-3d-theater {
  position: relative;
  width: 100%;
  perspective: 1300px;
  overflow: hidden;
  padding: 30px 0 50px;
  z-index: 1;
  mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
}

.wpdev-3d-stage {
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform-style: preserve-3d;
}

/* Row 1: Tilted perspective flowing right to left */
.wpdev-row-top {
  display: flex;
  transform: rotateX(10deg) rotateY(-4deg) rotateZ(1deg);
  transform-style: preserve-3d;
}

/* Row 2: Tilted perspective flowing left to right */
.wpdev-row-bottom {
  display: flex;
  transform: rotateX(-8deg) rotateY(4deg) rotateZ(-1deg);
  transform-style: preserve-3d;
}

.wpdev-marquee-track {
  display: flex;
  gap: 24px;
  flex-shrink: 0;
  will-change: transform;
}

.wpdev-marquee-track.track-left {
  animation: wpdevScrollLeft 45s linear infinite;
}

.wpdev-marquee-track.track-right {
  animation: wpdevScrollRight 48s linear infinite;
}

.wpdev-3d-theater:hover .wpdev-marquee-track {
  animation-play-state: paused;
}

@keyframes wpdevScrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes wpdevScrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Individual 3D Mockup Screen Card */
.wpdev-screen-card {
  width: 360px;
  flex-shrink: 0;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  position: relative;
  text-decoration: none;
  display: block;
}

.wpdev-screen-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 30px 60px rgba(37, 99, 235, 0.4), 0 0 25px rgba(56, 189, 248, 0.3);
  border-color: rgba(56, 189, 248, 0.6);
  z-index: 10;
}

/* macOS style browser topbar */
.wpdev-browser-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.wpdev-browser-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wpdev-browser-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: block;
}

.wpdev-dot-red { background: #ef4444; }
.wpdev-dot-yellow { background: #f59e0b; }
.wpdev-dot-green { background: #10b981; }

.wpdev-browser-url {
  font-size: 0.72rem;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.06);
  padding: 2px 10px;
  border-radius: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
}

.wpdev-browser-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(37, 99, 235, 0.25);
  color: #38bdf8;
  letter-spacing: 0.4px;
}

/* Card Mockup Screen Image */
.wpdev-screen-img-holder {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #0b1329;
}

.wpdev-screen-img-holder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.wpdev-screen-card:hover .wpdev-screen-img-holder img {
  transform: scale(1.06);
}

.wpdev-screen-caption {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 16, 32, 0.85);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.wpdev-caption-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.wpdev-caption-meta {
  font-size: 0.78rem;
  color: #38bdf8;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 3px;
}

.wpdev-caption-cta {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.2);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.wpdev-screen-card:hover .wpdev-caption-cta {
  background: var(--clr-primary);
  color: #ffffff;
  transform: translateX(3px);
}

/* Center Banner Overlay "Made using our Products" */
.wpdev-center-showcase-title {
  text-align: center;
  padding: 30px 20px 20px;
  position: relative;
  z-index: 2;
}

.wpdev-made-banner {
  display: inline-block;
  padding: 14px 36px;
  background: rgba(13, 27, 62, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 100px;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.25);
}

.wpdev-made-banner h3 {
  font-size: clamp(1.4rem, 2.5vw, 2.1rem);
  font-weight: 800;
  margin: 0;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.wpdev-made-banner h3 span {
  color: #38bdf8;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
}

/* ============================================================
   INTERACTIVE COMMERCIAL PRODUCTS GRID (WPDeveloper Style)
============================================================ */
.wpdev-grid-wrapper {
  position: relative;
  z-index: 2;
  margin-top: 50px;
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

/* WPDeveloper Product Card */
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

/* Card Top Bar with Icon & Badge */
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

/* Image Thumbnail holder */
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

/* Card Body */
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

/* Key Features list */
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

/* Card Bottom Footer */
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

/* Bottom Assurance Banner */
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

/* Mobile responsive adjustments */
@media (max-width: 991.98px) {
  .wpdev-showcase-section {
    padding: 80px 0 70px;
  }
  .wpdev-screen-card {
    width: 300px;
  }
  .wpdev-screen-img-holder {
    height: 165px;
  }
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
  .wpdev-3d-stage {
    gap: 16px;
  }
  .wpdev-row-top {
    transform: rotateX(6deg) rotateY(-2deg);
  }
  .wpdev-row-bottom {
    transform: rotateX(-5deg) rotateY(2deg);
  }
}
`;

fs.appendFileSync('css/style.css', cssToAppend, 'utf8');
console.log('Appended WPDeveloper styles to css/style.css');

