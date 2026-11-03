const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const startMarker = '/* ============================================================';
const middleMarker = 'MOBILE SIDEBAR OFFCANVAS DRAWER MENU';
const endMarker = '/* Hero Section on Tablet & Mobile */';

const startIndex = css.indexOf(middleMarker);
if (startIndex !== -1) {
  // Find the comment start before middleMarker
  const actualStart = css.lastIndexOf('/*', startIndex);
  const endIndex = css.indexOf(endMarker);

  const newMobileMenuCss = `/* ============================================================
     MOBILE SIDEBAR OFFCANVAS DRAWER MENU (SLIDES FROM LEFT)
  ============================================================ */
  .mobile-drawer-backdrop {
    display: block !important;
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    background: rgba(10, 18, 36, 0.72) !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    z-index: 1045 !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s ease !important;
  }

  .mobile-drawer-backdrop.show {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  .navbar-collapse {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
    bottom: 0 !important;
    width: 320px !important;
    max-width: 86vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    background: #ffffff !important;
    box-shadow: 12px 0 40px rgba(15, 23, 42, 0.22) !important;
    z-index: 1050 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    border: none !important;
    border-right: 1px solid rgba(226, 232, 240, 0.9) !important;
    transform: translateX(-100%) !important;
    transition: transform 0.36s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.36s ease !important;
    visibility: hidden !important;
    overflow: hidden !important;
  }

  .navbar-collapse.show,
  .navbar-collapse.collapsing {
    transform: translateX(0) !important;
    visibility: visible !important;
  }

  [data-theme="dark"] .navbar-collapse {
    background: #0d1b2e !important;
    border-right-color: rgba(255, 255, 255, 0.1) !important;
    box-shadow: 15px 0 45px rgba(0, 0, 0, 0.65) !important;
  }

  /* Drawer Header */
  .mobile-drawer-header {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    background: #ffffff;
    flex-shrink: 0;
  }

  [data-theme="dark"] .mobile-drawer-header {
    background: #0d1b2e;
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }

  .mobile-drawer-close {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.08);
    border: 1px solid rgba(37, 99, 235, 0.18);
    color: var(--clr-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.92rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .mobile-drawer-close:hover {
    background: var(--clr-primary);
    border-color: var(--clr-primary);
    color: #ffffff;
    transform: rotate(90deg);
  }

  [data-theme="dark"] .mobile-drawer-close {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }

  /* Drawer Nav List */
  .navbar-nav {
    flex-grow: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 14px 16px !important;
    margin: 0 !important;
  }

  .navbar-nav .nav-link {
    padding: 10px 14px !important;
    border-radius: 10px;
    font-size: 0.94rem;
    font-weight: 600;
    color: var(--clr-dark) !important;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    margin-bottom: 4px;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;
  }

  .nav-icon-badge {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(37, 99, 235, 0.08);
    color: var(--clr-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.82rem;
    margin-right: 12px;
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .nav-link-text {
    flex-grow: 1;
    text-align: left;
  }

  .navbar-nav .dropdown-toggle::after {
    margin-left: auto;
  }

  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    background: linear-gradient(90deg, rgba(37, 99, 235, 0.09) 0%, rgba(37, 99, 235, 0.02) 100%);
    color: var(--clr-primary) !important;
    border-left-color: var(--clr-primary);
  }

  .navbar-nav .nav-link:hover .nav-icon-badge,
  .navbar-nav .nav-link.active .nav-icon-badge {
    background: var(--clr-primary);
    color: #ffffff;
    box-shadow: 0 3px 8px rgba(37, 99, 235, 0.28);
  }

  [data-theme="dark"] .navbar-nav .nav-link {
    color: #e2e8f0 !important;
  }

  [data-theme="dark"] .nav-icon-badge {
    background: rgba(56, 189, 248, 0.12);
    color: #38bdf8;
  }

  [data-theme="dark"] .navbar-nav .nav-link:hover,
  [data-theme="dark"] .navbar-nav .nav-link.active {
    background: linear-gradient(90deg, rgba(56, 189, 248, 0.14) 0%, rgba(56, 189, 248, 0.03) 100%);
    color: #38bdf8 !important;
    border-left-color: #38bdf8;
  }

  [data-theme="dark"] .navbar-nav .nav-link:hover .nav-icon-badge,
  [data-theme="dark"] .navbar-nav .nav-link.active .nav-icon-badge {
    background: #38bdf8;
    color: #0b132b;
  }

  .navbar-nav .nav-link::before {
    display: none;
  }

  /* Dropdown inside Mobile Drawer */
  .navbar-nav .dropdown-menu {
    position: static !important;
    float: none !important;
    transform: none !important;
    box-shadow: none !important;
    border: 1px solid rgba(226, 232, 240, 0.9) !important;
    border-left: 2.5px solid var(--clr-primary) !important;
    background: #f8fafc !important;
    margin: 4px 0 10px 18px !important;
    border-radius: 0 10px 10px 0 !important;
    padding: 6px 8px !important;
  }

  [data-theme="dark"] .navbar-nav .dropdown-menu {
    background: rgba(30, 41, 59, 0.7) !important;
    border-color: rgba(255, 255, 255, 0.08) !important;
    border-left-color: #38bdf8 !important;
  }

  .navbar-nav .dropdown-item {
    padding: 8px 12px !important;
    font-size: 0.86rem !important;
    font-weight: 500;
    border-radius: 6px !important;
    color: var(--clr-text);
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
  }

  [data-theme="dark"] .navbar-nav .dropdown-item {
    color: #cbd5e1;
  }

  .navbar-nav .dropdown-item:hover,
  .navbar-nav .dropdown-item.active {
    background: rgba(37, 99, 235, 0.08);
    color: var(--clr-primary);
    padding-left: 16px !important;
  }

  [data-theme="dark"] .navbar-nav .dropdown-item:hover,
  [data-theme="dark"] .navbar-nav .dropdown-item.active {
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    padding-left: 16px !important;
  }

  /* Drawer Footer */
  .mobile-drawer-footer {
    display: block !important;
    padding: 16px 20px;
    border-top: 1px solid rgba(226, 232, 240, 0.85);
    background: #ffffff;
    flex-shrink: 0;
  }

  [data-theme="dark"] .mobile-drawer-footer {
    background: #091322;
    border-top-color: rgba(255, 255, 255, 0.08);
  }

  .mobile-drawer-contact-card {
    background: #f8fafc;
    border: 1px solid rgba(226, 232, 240, 0.9);
    border-radius: 10px;
    padding: 10px 14px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  [data-theme="dark"] .mobile-drawer-contact-card {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .mobile-contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.82rem;
    color: var(--clr-text-muted);
  }

  .mobile-contact-item a {
    color: var(--clr-text);
    text-decoration: none;
    font-weight: 600;
  }

  [data-theme="dark"] .mobile-contact-item a {
    color: #cbd5e1;
  }

  .mobile-drawer-socials {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .mobile-drawer-socials a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--clr-text-muted);
    transition: all 0.2s ease;
  }

  [data-theme="dark"] .mobile-drawer-socials a {
    border-color: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
  }

  .mobile-drawer-socials a:hover {
    background: var(--clr-primary);
    border-color: var(--clr-primary);
    color: #ffffff;
    transform: translateY(-2px);
  }

  `;

  css = css.slice(0, actualStart) + newMobileMenuCss + css.slice(endIndex);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('Successfully updated css/style.css with LEFT-SLIDING drawer styles!');
} else {
  console.error('Marker not found!');
}
