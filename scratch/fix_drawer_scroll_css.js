const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const targetOld = `  .navbar-collapse {
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
  }`;

const replacementNew = `  .navbar-collapse {
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
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    border: none !important;
    border-right: 1px solid rgba(226, 232, 240, 0.9) !important;
    transform: translateX(-100%) !important;
    transition: transform 0.36s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.36s ease !important;
    visibility: hidden !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    overscroll-behavior: contain !important;
    touch-action: pan-y !important;
  }

  .navbar-collapse::-webkit-scrollbar {
    width: 5px;
  }
  .navbar-collapse::-webkit-scrollbar-track {
    background: transparent;
  }
  .navbar-collapse::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.4);
    border-radius: 10px;
  }`;

if (css.includes(targetOld)) {
  css = css.replace(targetOld, replacementNew);
  console.log('Replaced navbar-collapse successfully!');
} else {
  console.log('targetOld not found directly, using index search');
}

// Update mobile-drawer-header to be sticky
const headerOld = `  .mobile-drawer-header {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    background: #ffffff;
    flex-shrink: 0;
  }`;

const headerNew = `  .mobile-drawer-header {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    background: #ffffff;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }`;

if (css.includes(headerOld)) {
  css = css.replace(headerOld, headerNew);
  console.log('Replaced mobile-drawer-header successfully!');
}

// Update navbar-nav to flex: 1 0 auto
const navListOld = `  /* Drawer Nav List */
  .navbar-nav {
    flex-grow: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 14px 16px !important;
    margin: 0 !important;
  }`;

const navListNew = `  /* Drawer Nav List */
  .navbar-nav {
    flex: 1 0 auto;
    padding: 14px 16px !important;
    margin: 0 !important;
  }`;

if (css.includes(navListOld)) {
  css = css.replace(navListOld, navListNew);
  console.log('Replaced navbar-nav successfully!');
}

fs.writeFileSync('css/style.css', css, 'utf8');

