/**
 * TechCore IT Solutions — main.js
 * Full animation suite: GSAP, Lenis, Typed, Swiper, counters, portfolio filter, FAQ
 * IIFE module pattern — no global pollution
 */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════
     CONSTANTS & CONFIG
  ══════════════════════════════════════════════ */
  const CONFIG = {
    typed: {
      phrases: [
        'Cloud Infrastructure',
        'AI-Powered Analytics',
        'Cybersecurity',
        'Digital Transformation',
        'Enterprise Software',
      ],
      typeSpeed:   70,
      deleteSpeed: 40,
      pauseAfter:  2200,
      loop:        true,
    },
    gsap: {
      duration:  0.85,
      ease:      'power3.out',
      stagger:   0.12,
    },
    lenis: {
      duration:       1.1,
      easing:         (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation:    'vertical',
      gestureOrientation: 'vertical',
      smoothWheel:    true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite:       false,
    },
    swiper: {
      slidesPerView:  1,
      spaceBetween:   28,
      loop:           true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: {
        el:        '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    },
  };

  /* ══════════════════════════════════════════════
     1. PRELOADER
  ══════════════════════════════════════════════ */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        // Remove from DOM after transition
        preloader.addEventListener('transitionend', () => {
          if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, { once: true });
      }, 1900);
    });
  }

  /* ══════════════════════════════════════════════
     2. LENIS SMOOTH SCROLL
  ══════════════════════════════════════════════ */
  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    const lenis = new Lenis(CONFIG.lenis);

    // Keep GSAP ScrollTrigger in sync with Lenis (single ticker loop to prevent stutter)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      // Don't hijack dropdown toggles
      if (anchor.getAttribute('data-bs-toggle') === 'dropdown') return;

      anchor.addEventListener('click', (e) => {
        const target = anchor.getAttribute('href');
        if (!target || target === '#' || target === '#!') return;
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();

          // Close mobile menu if open
          const navMenu = document.getElementById('navMenu');
          if (navMenu && navMenu.classList.contains('show') && typeof bootstrap !== 'undefined') {
            const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
            if (bsCollapse) bsCollapse.hide();
          }

          lenis.scrollTo(el, { offset: -70, duration: 1.1 });
        }
      });
    });

    return lenis;
  }

  /* ══════════════════════════════════════════════
     3. GSAP + SCROLLTRIGGER SETUP
  ══════════════════════════════════════════════ */
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ══════════════════════════════════════════════
     4. NAVBAR EFFECTS
  ══════════════════════════════════════════════ */
  function initNavbar() {
    const navbar  = document.getElementById('mainNavbar');
    const topbar  = document.getElementById('topbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Sticky shadow
      if (scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide topbar on scroll down, show on scroll up
      if (topbar) {
        if (scrollY > lastScroll && scrollY > 100) {
          topbar.style.transform = 'translateY(-100%)';
        } else {
          topbar.style.transform = 'translateY(0)';
        }
      }

      lastScroll = Math.max(0, scrollY);
    }, { passive: true });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.navbar-nav .nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));

    // Auto-close mobile menu when clicking any nav link
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      const menuLinks = navMenu.querySelectorAll('a:not(.dropdown-toggle)');
      menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('show') && typeof bootstrap !== 'undefined') {
            const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
            if (bsCollapse) bsCollapse.hide();
          }
        });
      });
    }
  }

  /* ══════════════════════════════════════════════
     5. SEARCH OVERLAY
  ══════════════════════════════════════════════ */
  function initSearch() {
    const overlay = document.getElementById('searchOverlay');
    const openBtns = document.querySelectorAll('#searchBtn, #mobileSearchBtn');
    const closeBtn = document.getElementById('searchClose');
    const input   = document.getElementById('searchInput');
    if (!overlay || !openBtns.length) return;

    openBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        overlay.classList.add('open');
        setTimeout(() => input && input.focus(), 200);
      });
    });

    const close = () => overlay.classList.remove('open');

    if (closeBtn) closeBtn.addEventListener('click', close);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ══════════════════════════════════════════════
     TYPEWRITER CHARACTER PREPARATION
  ══════════════════════════════════════════════ */
  function prepareTypewriter(element) {
    if (!element || element.dataset.typewriterReady) {
      return {
        charList: element ? Array.from(element.querySelectorAll('.type-char')) : [],
        cursor: element ? element.querySelector('.type-cursor') : null,
      };
    }
    element.dataset.typewriterReady = 'true';

    const charList = [];

    function processNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === ' ' || ch === '\n' || ch === '\t') {
            fragment.appendChild(document.createTextNode(ch));
          } else {
            const span = document.createElement('span');
            span.className = 'type-char';
            span.style.opacity = '0';
            span.textContent = ch;
            fragment.appendChild(span);
            charList.push(span);
          }
        }
        return fragment;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Skip any existing cursor tags to prevent duplicate / stray cursors
        if (node.classList.contains('type-cursor') || node.classList.contains('typed-cursor')) {
          return document.createDocumentFragment();
        }
        const clone = node.cloneNode(false);
        Array.from(node.childNodes).forEach((child) => {
          clone.appendChild(processNode(child));
        });
        return clone;
      }
      return node.cloneNode(true);
    }

    const newChildren = Array.from(element.childNodes).map(processNode);
    element.innerHTML = '';
    newChildren.forEach((child) => element.appendChild(child));

    // Create and append blinking cursor during typing
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    cursor.textContent = '|';
    cursor.style.opacity = '0';
    element.appendChild(cursor);

    return { charList, cursor };
  }

  /* ══════════════════════════════════════════════
     6. HERO ANIMATIONS (GSAP staggered entrance)
  ══════════════════════════════════════════════ */
  function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ delay: 1.8 }); // after preloader

    // Badge
    tl.fromTo('#heroBadge',
      { opacity: 0, y: -30, scale: 0.85 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
    );

    // Hero title — typewriter typing entrance
    const title = document.getElementById('heroTitle');
    if (title) {
      const { charList, cursor } = prepareTypewriter(title);
      if (charList.length) {
        if (cursor) {
          tl.set(cursor, { opacity: 1 }, '-=0.2');
          if (charList[0] && charList[0].parentNode) charList[0].before(cursor);
        }

        tl.to(charList, {
          opacity: 1,
          y: 0,
          duration: 0.015,
          stagger: 0.026, // 26ms typing cadence
          ease: 'power1.out',
          onUpdate: function () {
            if (!cursor) return;
            const progress = this.progress();
            if (progress >= 0.985) {
              // Hide cursor just before the final frame
              cursor.style.display = 'none';
              return;
            }
            const currentIdx = Math.min(charList.length - 1, Math.floor(progress * charList.length));
            if (currentIdx >= 0 && charList[currentIdx]) {
              charList[currentIdx].after(cursor);
            }
          },
          onComplete: function () {
            // Typing complete - IMMEDIATELY remove cursor so nothing lingers!
            if (cursor) {
              cursor.style.display = 'none';
              cursor.remove();
            }
            if (title) {
              title.classList.add('type-complete');
              title.querySelectorAll('.type-cursor, .typed-cursor').forEach((c) => c.remove());
            }

            // Glow / scale pop on highlighted span words
            const span = title.querySelector('span');
            if (span) {
              gsap.fromTo(span,
                { scale: 1.05, filter: 'brightness(1.25)' },
                { scale: 1, filter: 'brightness(1)', duration: 0.45, ease: 'back.out(2)' }
              );
            }
          },
        }, '-=0.2');
      }
    }

    // Description
    tl.fromTo('#heroDesc',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    );

    // Buttons
    tl.fromTo('#heroBtns',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.35'
    );

    // Stats
    tl.fromTo('#heroStats .hero-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    );

    // Image column entrance
    tl.fromTo('#heroImageCol',
      { opacity: 0, x: 60, scale: 0.92 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );

    // Hero float badges (stagger after image)
    tl.fromTo('.hero-float-badge',
      { opacity: 0, scale: 0.6, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'back.out(1.8)' },
      '-=0.5'
    );

    // Dot grids
    tl.fromTo('.hero-dots span',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.03, ease: 'back.out(2)' },
      '-=0.5'
    );

    // Floating badges continuous gentle bobbing
    gsap.to('.hero-float-badge-1', {
      y: -12,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.5,
    });
    gsap.to('.hero-float-badge-2', {
      y: 10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.7,
    });

    // Stamp badge continuous rotation
    gsap.to('.hero-stamp-ring', {
      rotation: 360,
      duration: 18,
      repeat: -1,
      ease: 'none',
    });

    // Hero parallax decoration on scroll (scrub)
    gsap.to('.hero-ring', {
      y: -60,
      rotation: 25,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.to('.hero-bg-circle-1', {
      y: -80,
      x: 20,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });

    gsap.to('.hero-bg-circle-2', {
      y: 50,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.to('#heroImageCol', {
      y: -40,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });
  }

  /* Word splitter for hero title */
  function splitHeroTitle(titleEl) {
    // Collect all text nodes and wrap each word
    const walker = document.createTreeWalker(titleEl, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let node;

    while ((node = walker.nextNode())) {
      const text = node.textContent;
      if (text.trim().length > 0) {
        textNodes.push({ node, text });
      }
    }

    textNodes.forEach(({ node, text }) => {
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part) => {
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else if (part.length > 0) {
          const span = document.createElement('span');
          span.classList.add('hero-word');
          span.style.display = 'inline-block';
          span.style.overflow = 'hidden';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ══════════════════════════════════════════════
     7. TYPED TEXT EFFECT
  ══════════════════════════════════════════════ */
  function initTyped() {
    const el     = document.getElementById('typedText');
    const cursor = document.querySelector('.typed-cursor');
    if (!el) return;

    const { phrases, typeSpeed, deleteSpeed, pauseAfter, loop } = CONFIG.typed;

    let phraseIdx  = 0;
    let charIdx    = 0;
    let isDeleting = false;
    let timer      = null;

    function tick() {
      const current = phrases[phraseIdx];

      if (!isDeleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);

        if (charIdx === current.length) {
          isDeleting = true;
          timer = setTimeout(tick, pauseAfter);
          return;
        }
        timer = setTimeout(tick, typeSpeed + Math.random() * 30);
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);

        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx  = loop ? (phraseIdx + 1) % phrases.length : Math.min(phraseIdx + 1, phrases.length - 1);
          timer = setTimeout(tick, 500);
          return;
        }
        timer = setTimeout(tick, deleteSpeed + Math.random() * 15);
      }
    }

    // Start after preloader delay
    setTimeout(tick, 2400);
  }

  /* ══════════════════════════════════════════════
     8. GSAP TYPEWRITER TITLE & HEADING ANIMATIONS
  ══════════════════════════════════════════════ */
  function initHeadingAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Apply typewriter typing animation to all section titles
    document.querySelectorAll('section').forEach((sec) => {
      const subtitle = sec.querySelector('.section-subtitle');
      const title    = sec.querySelector('.section-title');
      const desc     = sec.querySelector('.section-desc');

      if (!subtitle && !title && !desc) return;

      let charList = [];
      let cursor = null;

      if (title) {
        const tw = prepareTypewriter(title);
        charList = tw.charList;
        cursor = tw.cursor;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Subtitle pill pop
      if (subtitle) {
        tl.fromTo(subtitle,
          { opacity: 0, x: -30, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'back.out(1.8)' }
        );
      }

      // Title typewriter typing effect
      if (title && charList.length) {
        if (cursor) {
          tl.set(cursor, { opacity: 1 }, subtitle ? '-=0.2' : 0);
          if (charList[0] && charList[0].parentNode) {
            charList[0].before(cursor);
          }
        }

        // Staggered typing
        tl.to(charList, {
          opacity: 1,
          y: 0,
          duration: 0.015,
          stagger: 0.026, // 26ms typing speed
          ease: 'power1.out',
          onUpdate: function () {
            if (!cursor) return;
            const progress = this.progress();
            if (progress >= 0.985 || progress <= 0.015) {
              cursor.style.display = 'none';
              return;
            }
            cursor.style.display = 'inline-block';
            const currentIdx = Math.min(charList.length - 1, Math.floor(progress * charList.length));
            if (currentIdx >= 0 && charList[currentIdx]) {
              charList[currentIdx].after(cursor);
            }
          },
          onComplete: function () {
            if (cursor) {
              cursor.style.display = 'none';
            }
            if (title) {
              title.classList.add('type-complete');
            }

            // Glow / scale pop on highlighted span words
            const span = title.querySelector('span');
            if (span) {
              gsap.fromTo(span,
                { scale: 1.06, filter: 'brightness(1.3)' },
                { scale: 1, filter: 'brightness(1)', duration: 0.5, ease: 'back.out(2)' }
              );
            }
          },
          onReverseComplete: function () {
            if (cursor) {
              cursor.style.display = 'none';
            }
            if (title) {
              title.classList.remove('type-complete');
            }
          },
        }, subtitle ? '-=0.15' : 0);
      } else if (title) {
        tl.fromTo(title,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          subtitle ? '-=0.3' : 0
        );
      }

      // Description smooth upward fade
      if (desc) {
        tl.fromTo(desc,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        );
      }
    });

    // Partner title & CTA title
    const partnerTitle = document.querySelector('.partners-title');
    if (partnerTitle) {
      gsap.fromTo(partnerTitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: {
            trigger: '#partners',
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    const ctaTitle = document.querySelector('#cta .cta-title');
    if (ctaTitle) {
      const { charList, cursor } = prepareTypewriter(ctaTitle);
      if (charList.length) {
        const ctaTL = gsap.timeline({
          scrollTrigger: {
            trigger: '#cta',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        });

        if (cursor) {
          ctaTL.set(cursor, { opacity: 1 });
          if (charList[0] && charList[0].parentNode) ctaTL.set(charList[0], {}, 0);
        }

        ctaTL.to(charList, {
          opacity: 1,
          y: 0,
          duration: 0.015,
          stagger: 0.026,
          ease: 'power1.out',
          onUpdate: function () {
            if (!cursor) return;
            const progress = this.progress();
            if (progress >= 0.985 || progress <= 0.015) {
              cursor.style.display = 'none';
              return;
            }
            cursor.style.display = 'inline-block';
            const currentIdx = Math.min(charList.length - 1, Math.floor(progress * charList.length));
            if (currentIdx >= 0 && charList[currentIdx]) {
              charList[currentIdx].after(cursor);
            }
          },
          onComplete: function () {
            if (cursor) {
              cursor.style.display = 'none';
            }
            if (ctaTitle) {
              ctaTitle.classList.add('type-complete');
            }
          },
          onReverseComplete: function () {
            if (cursor) {
              cursor.style.display = 'none';
            }
            if (ctaTitle) {
              ctaTitle.classList.remove('type-complete');
            }
          },
        });
      }
    }
  }

  /* ══════════════════════════════════════════════
     8.5. HERO INTERACTIVE LIQUID BLOB MASK ANIMATION
  ══════════════════════════════════════════════ */
  function initHeroLiquidBlob() {
    const maskPath = document.getElementById('hero-mask-path');
    if (!maskPath) return;

    const svg = maskPath.closest('svg');
    if (!svg) return;

    const outlinePath = document.getElementById('hero-blob-outline');
    const backdropPath = document.getElementById('hero-blob-backdrop');

    // Helper: format points for Catmull-Rom spline
    function formatPoints(points, close) {
      let pts = points.map((p) => (Array.isArray(p) ? p : [p.x, p.y]));
      if (close) {
        const last = pts[pts.length - 1];
        const secondLast = pts[pts.length - 2];
        const first = pts[0];
        const second = pts[1];
        pts = [secondLast, last, ...pts, first, second];
      }
      return pts.flat();
    }

    // Cardinal / Catmull-Rom spline converted to smooth SVG cubic Béziers
    function spline(points = [], tension = 1, close = false) {
      const formatted = formatPoints(points, close);
      const len = formatted.length;
      const a = len - 4;
      const startX = close ? formatted[2] : formatted[0];
      const startY = close ? formatted[3] : formatted[1];
      let d = 'M' + [startX, startY];
      const startIdx = close ? 2 : 0;
      const endIdx = close ? len - 4 : len - 2;

      for (let i = startIdx; i < endIdx; i += 2) {
        const p0x = i ? formatted[i - 2] : formatted[0];
        const p0y = i ? formatted[i - 1] : formatted[1];
        const p1x = formatted[i];
        const p1y = formatted[i + 1];
        const p2x = formatted[i + 2];
        const p2y = formatted[i + 3];
        const p3x = i !== a ? formatted[i + 4] : p2x;
        const p3y = i !== a ? formatted[i + 5] : p2y;

        const cp1x = p1x + ((p2x - p0x) / 6) * tension;
        const cp1y = p1y + ((p2y - p0y) / 6) * tension;
        const cp2x = p2x - ((p3x - p1x) / 6) * tension;
        const cp2y = p2y - ((p3y - p1y) / 6) * tension;

        d += 'C' + [cp1x, cp1y, cp2x, cp2y, p2x, p2y];
      }
      return d;
    }

    // Evenly sample points along the SVG path
    function pointsInPath(path, detail = 18) {
      const totalLength = path.getTotalLength();
      const step = totalLength / detail;
      const points = [];
      for (let i = 0; i < totalLength; i += step) {
        const pt = path.getPointAtLength(i);
        points.push({ x: pt.x, y: pt.y });
      }
      return points;
    }

    // Convert mouse/touch client coordinates to SVG viewBox coordinate system
    function createCoordsTransformer(targetSvg) {
      const pt = targetSvg.createSVGPoint ? targetSvg.createSVGPoint() : null;
      return function (e) {
        if (pt && targetSvg.getScreenCTM) {
          pt.x = e.clientX;
          pt.y = e.clientY;
          const ctm = targetSvg.getScreenCTM();
          if (ctm) {
            const svgP = pt.matrixTransform(ctm.inverse());
            return { x: svgP.x, y: svgP.y };
          }
        }
        const rect = targetSvg.getBoundingClientRect();
        const viewBox = targetSvg.viewBox ? targetSvg.viewBox.baseVal : null;
        const scaleX = viewBox && viewBox.width ? viewBox.width / rect.width : 1;
        const scaleY = viewBox && viewBox.height ? viewBox.height / rect.height : 1;
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY,
        };
      };
    }

    // Setup interactive liquid path
    function createLiquidPath(path, options) {
      const svgPoints = pointsInPath(path, options.detail);
      if (!svgPoints || svgPoints.length < 3) return;

      const originPoints = svgPoints.map(({ x, y }) => ({ x, y }));
      const liquidPoints = svgPoints.map(({ x, y }) => ({ x, y }));

      const mousePos = { x: -9999, y: -9999 };
      const transformCoords = createCoordsTransformer(svg);

      const pointDistance = Math.hypot(
        originPoints[0].x - originPoints[1].x,
        originPoints[0].y - originPoints[1].y
      );
      const maxDist = {
        x: options.axis.includes('x') ? pointDistance * 0.75 : 0,
        y: options.axis.includes('y') ? pointDistance * 0.75 : 0,
      };

      // GSAP Ticker constantly renders the smooth liquid spline
      gsap.ticker.add(() => {
        const d = spline(liquidPoints, options.tension, options.close);
        path.setAttribute('d', d);
        if (outlinePath) outlinePath.setAttribute('d', d);
        if (backdropPath) backdropPath.setAttribute('d', d);
      });

      // Pointer movement listener (mouse + touch)
      function handlePointer(e) {
        const evt = e.touches ? e.touches[0] : e;
        if (!evt) return;

        const { x, y } = transformCoords(evt);
        mousePos.x = x;
        mousePos.y = y;

        // Bounding check: skip if pointer is outside enlarged hero interactive zone
        if (Math.abs(mousePos.x - 260) > 340 || Math.abs(mousePos.y - 290) > 380) {
          return;
        }

        liquidPoints.forEach((point, index) => {
          const pointOrigin = originPoints[index];
          const distX = Math.abs(pointOrigin.x - mousePos.x);
          const distY = Math.abs(pointOrigin.y - mousePos.y);

          if (distX <= options.range.x && distY <= options.range.y) {
            const difference = {
              x: pointOrigin.x - mousePos.x,
              y: pointOrigin.y - mousePos.y,
            };

            const target = {
              x: pointOrigin.x + difference.x,
              y: pointOrigin.y + difference.y,
            };

            const clampedX = gsap.utils.clamp(
              pointOrigin.x - maxDist.x,
              pointOrigin.x + maxDist.x,
              target.x
            );

            const clampedY = gsap.utils.clamp(
              pointOrigin.y - maxDist.y,
              pointOrigin.y + maxDist.y,
              target.y
            );

            gsap.to(point, {
              x: clampedX,
              y: clampedY,
              ease: 'sine',
              overwrite: true,
              duration: 0.175,
              onComplete() {
                gsap.to(point, {
                  x: pointOrigin.x,
                  y: pointOrigin.y,
                  ease: 'elastic.out(1, 0.3)',
                  duration: 1.25,
                });
              },
            });
          }
        });
      }

      window.addEventListener('mousemove', handlePointer, { passive: true });
      window.addEventListener('touchmove', handlePointer, { passive: true });

      // Gentle organic container float
      gsap.to('.hero-liquid-wrap', {
        y: -10,
        rotation: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!prefersReducedMotionQuery || !prefersReducedMotionQuery.matches) {
      createLiquidPath(maskPath, {
        detail: 18,
        tension: 1,
        close: true,
        range: {
          x: 70,
          y: 70,
        },
        axis: ['x', 'y'],
      });
    }
  }

  /* ══════════════════════════════════════════════
     9. GSAP IMAGE & VISUAL REVEAL ANIMATIONS (Curtain Wipe & Parallax)
  ══════════════════════════════════════════════ */
  function initImageAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // 1. General Curtain Wipe & Scale Reveal for all .img-reveal-wrap containers
    const revealWraps = document.querySelectorAll('.img-reveal-wrap');
    revealWraps.forEach((wrap) => {
      // Container curtain unmask
      gsap.fromTo(wrap,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.15,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 86%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Inner image zoom-out to 1.0
      const innerImg = wrap.querySelector('img');
      if (innerImg) {
        gsap.fromTo(innerImg,
          { scale: 1.25, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.35,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrap,
              start: 'top 86%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }
    });

    // 2. Parallax scrub on images
    const heroLiquidWrap = document.getElementById('heroLiquidWrap');
    if (heroLiquidWrap) {
      gsap.to(heroLiquidWrap, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }

    const aboutTeamImg = document.querySelector('.about-team-img');
    if (aboutTeamImg) {
      gsap.to(aboutTeamImg, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }

    const faqImg = document.querySelector('.faq-img');
    if (faqImg) {
      gsap.to(faqImg, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '#faq',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }

    // 3. About experience badge & float cards
    const aboutImgWrap = document.querySelector('.about-img-wrapper');
    if (aboutImgWrap) {
      const expBadge = aboutImgWrap.querySelector('.about-exp-badge');
      const floatCards = aboutImgWrap.querySelectorAll('.about-float-card');

      if (expBadge) {
        gsap.fromTo(expBadge,
          { opacity: 0, scale: 0, rotation: -18 },
          {
            opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)', delay: 0.2,
            scrollTrigger: {
              trigger: aboutImgWrap,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }

      if (floatCards.length) {
        gsap.fromTo(floatCards,
          { opacity: 0, scale: 0.6, y: 30 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'back.out(1.8)', delay: 0.3,
            scrollTrigger: {
              trigger: aboutImgWrap,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        // Continuous subtle bobbing
        gsap.to('.about-float-card-1', {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
        gsap.to('.about-float-card-2', {
          y: 10,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.2,
        });
      }
    }

    // 4. Interactive 3D Card Tilt & Hover Animation
    function add3DTilt(elements) {
      elements.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          gsap.to(el, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 800,
            duration: 0.35,
            ease: 'power1.out',
          });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
        });
      });
    }

    add3DTilt(document.querySelectorAll('.service-card'));

    // 5. Universal TechCore Dual-Image Hover Initializer (Every content photo except hero image)
    function initTechCoreUniversalHovers() {
      const targetWrappers = document.querySelectorAll(
        '.about-main-img, .faq-illus, .portfolio-img, .blog-card-img, .testimonial-avatar-thumb'
      );
      targetWrappers.forEach((wrap) => {
        // Exclude hero section
        if (wrap.closest('#hero, #heroImageCol, .hero-blob-wrapper')) return;

        wrap.classList.add('atf-service-thumb');
        const imgs = wrap.querySelectorAll('img');
        if (imgs.length === 1) {
          const clone = imgs[0].cloneNode(true);
          wrap.insertBefore(clone, imgs[0]);
        }
      });
    }

    initTechCoreUniversalHovers();

    // 6. Reusable GSAP Direction-Aware Image Hover (Left / Right Sweep & Zoom for ALL images)
    function initGSAPImageHover() {
      // Helper: calculate 4-way direction ('top', 'right', 'bottom', 'left')
      function getHoverDir(el, e) {
        const rect = el.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        const x = (e.clientX - rect.left - (w / 2)) * (w > h ? (h / w) : 1);
        const y = (e.clientY - rect.top - (h / 2)) * (h > w ? (w / h) : 1);
        const d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return ['top', 'right', 'bottom', 'left'][d];
      }

      // Query all image wrappers across the entire site for full reusability
      const imageWrappers = document.querySelectorAll(
        '.img-reveal-wrap, .portfolio-img, .about-main-img, .faq-illus, .blog-card-img'
      );

      imageWrappers.forEach((wrap) => {
        const img = wrap.querySelector('img');
        if (!img) return;

        // Auto-inject sweep overlay & shine flash if not present
        let sweep = wrap.querySelector('.portfolio-img-overlay') || wrap.querySelector('.gsap-img-sweep');
        if (!sweep) {
          sweep = document.createElement('div');
          sweep.className = 'gsap-img-sweep';
          wrap.appendChild(sweep);
        }

        let shine = wrap.querySelector('.gsap-img-shine');
        if (!shine) {
          shine = document.createElement('div');
          shine.className = 'gsap-img-shine';
          wrap.appendChild(shine);
        }

        // Set initial resting position of sweep
        gsap.set(sweep, { xPercent: -101, yPercent: 0 });

        // Trigger can be parent card (portfolio/blog) or wrap itself
        const parentCard = wrap.closest('.portfolio-item, .blog-card, .testimonial-card');
        const triggerEl = parentCard || wrap;

        // Detect if this container uses the TechCore optical dual-image hover
        const isTechCoreThumb = wrap.classList.contains('atf-service-thumb') || wrap.querySelectorAll('img').length > 1;

        // Prevent duplicate listener binding
        if (triggerEl.dataset.gsapHoverReady) return;
        triggerEl.dataset.gsapHoverReady = 'true';

        // MOUSE ENTER: Direction-Aware Sweep from Left or Right (or Top/Bottom)
        triggerEl.addEventListener('mouseenter', (e) => {
          const dir = getHoverDir(triggerEl, e);
          let startX = 0;
          let startY = 0;
          if (dir === 'left')   { startX = -101; startY = 0; }
          if (dir === 'right')  { startX = 101;  startY = 0; }
          if (dir === 'top')    { startX = 0;    startY = -101; }
          if (dir === 'bottom') { startX = 0;    startY = 101; }

          // 1. Sweep overlay (translucent scanner sweep - never covers the photo!)
          if (wrap.querySelector('.portfolio-img-overlay')) {
            gsap.fromTo(sweep,
              { xPercent: startX, yPercent: startY, opacity: 1 },
              { xPercent: 0, yPercent: 0, duration: 0.48, ease: 'power3.out', overwrite: 'auto' }
            );
          } else {
            // General content photos (About, FAQ, Blog): sweep ACROSS and gently fade
            const endX = (dir === 'left') ? 101 : (dir === 'right' ? -101 : 0);
            const endY = (dir === 'top') ? 101 : (dir === 'bottom' ? -101 : 0);
            gsap.fromTo(sweep,
              { xPercent: startX, yPercent: startY, opacity: 0.65 },
              { xPercent: endX, yPercent: endY, opacity: 0, duration: 0.75, ease: 'power2.out', overwrite: 'auto' }
            );
          }

          // 2. Laser glass shine streaks across image
          const shineFrom = (dir === 'right') ? 160 : -160;
          const shineTo   = (dir === 'right') ? -160 : 160;
          gsap.fromTo(shine,
            { xPercent: shineFrom, opacity: 0.8 },
            { xPercent: shineTo, opacity: 0, duration: 0.75, ease: 'power2.out', overwrite: 'auto' }
          );

          // 3. Inner image zoom (only for single image wraps without TechCore dual-image)
          if (!isTechCoreThumb) {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.65,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }

          // 4. Stagger buttons if portfolio card
          const btns = wrap.querySelectorAll('.portfolio-overlay-btn');
          if (btns.length) {
            gsap.fromTo(btns,
              { scale: 0.4, opacity: 0, x: (dir === 'right' ? 25 : -25) },
              { scale: 1, opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(2)', delay: 0.12, overwrite: 'auto' }
            );
          }
        });

        // MOUSE MOVE: Interactive Parallax Pan on Image (only for single image wraps)
        triggerEl.addEventListener('mousemove', (e) => {
          if (isTechCoreThumb) return;

          const rect = wrap.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const panX = Math.max(-10, Math.min(10, ((x - centerX) / centerX) * 8));
          const panY = Math.max(-10, Math.min(10, ((y - centerY) / centerY) * 8));

          gsap.to(img, {
            x: panX,
            y: panY,
            duration: 0.35,
            ease: 'power1.out',
          });
        });

        // MOUSE LEAVE: Direction-Aware Sweep Exits towards the side mouse leaves
        triggerEl.addEventListener('mouseleave', (e) => {
          const exitDir = getHoverDir(triggerEl, e);
          let exitX = 0;
          let exitY = 0;
          if (exitDir === 'left')   { exitX = -101; exitY = 0; }
          if (exitDir === 'right')  { exitX = 101;  exitY = 0; }
          if (exitDir === 'top')    { exitX = 0;    exitY = -101; }
          if (exitDir === 'bottom') { exitX = 0;    exitY = 101; }

          // 1. Sweep curtain exits towards exit side
          if (wrap.querySelector('.portfolio-img-overlay')) {
            gsap.to(sweep, {
              xPercent: exitX,
              yPercent: exitY,
              duration: 0.42,
              ease: 'power3.inOut',
              overwrite: 'auto',
            });
          } else {
            gsap.set(sweep, { xPercent: -101, yPercent: 0, opacity: 0 });
          }

          // 2. Image zooms back to normal with smooth ease (only for single image wraps)
          if (!isTechCoreThumb) {
            gsap.to(img, {
              scale: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }

          // 3. Hide portfolio buttons
          const btns = wrap.querySelectorAll('.portfolio-overlay-btn');
          if (btns.length) {
            gsap.to(btns, {
              scale: 0.5,
              opacity: 0,
              duration: 0.25,
              ease: 'power2.in',
              overwrite: 'auto',
            });
          }
        });
      });
    }

    initGSAPImageHover();

    // 6. FAQ Illustration gentle floating loop
    const faqIllus = document.querySelector('.faq-illus');
    if (faqIllus) {
      gsap.to(faqIllus, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // 7. Partners brand logos (if static row exists)
    const partnerLogos = document.querySelectorAll('#partnersRow .partner-logo');
    if (partnerLogos.length) {
      gsap.fromTo(partnerLogos,
        { opacity: 0, scale: 0.8, y: 25 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '#partners',
            start: 'top 86%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // 8. Tech stack logos
    gsap.fromTo('#techGrid .tech-logo-wrap',
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#techGrid',
          start: 'top 84%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }

  /* ══════════════════════════════════════════════
     10. SECTION CONTENT & GRID REVEALS
  ══════════════════════════════════════════════ */
  function initSectionReveals() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const { duration, ease, stagger } = CONFIG.gsap;

    /* ── Services Grid ── */
    gsap.fromTo('#servicesGrid .service-card',
      { opacity: 0, y: 55, scale: 0.94 },
      {
        opacity: 1, y: 0, scale: 1, duration, ease, stagger,
        scrollTrigger: {
          trigger: '#servicesGrid',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── About Content ── */
    gsap.fromTo('#about .col-lg-7 .check-list .check-item',
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.6, ease, stagger: 0.1,
        scrollTrigger: {
          trigger: '#about .check-list',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── Process Visualizer Card ── */
    gsap.fromTo('.process-visualizer-card',
      { opacity: 0, y: 35, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#process',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── Stats ── */
    gsap.fromTo('#statsRow .stat-item',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.15,
        scrollTrigger: {
          trigger: '#stats',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── FAQ Accordion ── */
    gsap.fromTo('#faqAccordion .faq-accordion-item',
      { opacity: 0, x: -35 },
      {
        opacity: 1, x: 0, duration: 0.6, ease, stagger: 0.1,
        scrollTrigger: {
          trigger: '#faqAccordion',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── CTA Banner ── */
    gsap.fromTo('#cta .cta-content > *',
      { opacity: 0, y: 35 },
      {
        opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.15,
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── Blog Grid ── */
    gsap.fromTo('#blogGrid .blog-card',
      { opacity: 0, y: 55 },
      {
        opacity: 1, y: 0, duration, ease, stagger: 0.15,
        scrollTrigger: {
          trigger: '#blogGrid',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── Contact Cards ── */
    gsap.fromTo('#contact .contact-info-card',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    gsap.fromTo('#contact .contact-form-card',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    /* ── Footer ── */
    gsap.fromTo('#footer .footer-main .col-lg-4, #footer .footer-main .col-lg-2, #footer .footer-main .col-lg-3',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.1,
        scrollTrigger: {
          trigger: '#footer',
          start: 'top 92%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }

  /* ══════════════════════════════════════════════
     9. SKILL BAR ANIMATIONS (GSAP ScrollTrigger)
  ══════════════════════════════════════════════ */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-wrapper');
    if (!bars.length) return;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      bars.forEach((bar) => {
        const fill = bar.querySelector('.skill-bar-fill');
        const pctLabel = bar.querySelector('.skill-bar-label span:last-child');
        if (!fill) return;

        const targetWidth = parseInt(fill.getAttribute('data-width'), 10) || 0;

        gsap.fromTo(fill,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 88%',
              toggleActions: 'play reverse play reverse',
            },
            onUpdate: function () {
              if (pctLabel) {
                const current = Math.round(this.progress() * targetWidth);
                pctLabel.textContent = `${current}%`;
              }
            },
            onComplete: function () {
              if (pctLabel) pctLabel.textContent = `${targetWidth}%`;
            },
            onReverseComplete: function () {
              if (pctLabel) pctLabel.textContent = '0%';
            },
          }
        );
      });
    } else {
      bars.forEach((bar) => {
        const fill = bar.querySelector('.skill-bar-fill');
        if (fill) fill.style.width = (fill.getAttribute('data-width') || '0') + '%';
      });
    }
  }

  /* ══════════════════════════════════════════════
     10. COUNTER ANIMATION (Odometer with GSAP ScrollTrigger)
  ══════════════════════════════════════════════ */
  function initCounters() {
    const counters = document.querySelectorAll('.counter.odometer, .counter');
    if (!counters.length) return;

    counters.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;

      if (typeof Odometer !== 'undefined') {
        const odo = new Odometer({
          el: el,
          value: 0,
          format: '(,ddd)',
          theme: 'minimal',
          duration: 2000,
        });

        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            onEnter: () => {
              odo.update(target);
              setTimeout(() => {
                if (typeof gsap !== 'undefined') {
                  gsap.fromTo(el,
                    { scale: 1.15, color: '#38bdf8' },
                    { scale: 1, color: '', duration: 0.45, ease: 'back.out(2)' }
                  );
                }
              }, 2000);
            },
            onEnterBack: () => {
              odo.update(target);
            },
            onLeave: () => {
              odo.update(0);
            },
            onLeaveBack: () => {
              odo.update(0);
            },
          });
        } else {
          odo.update(target);
        }
      } else if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const obj = { val: 0 };
        gsap.fromTo(obj,
          { val: 0 },
          {
            val: target,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'restart none none reset',
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString();
            },
            onComplete: () => {
              el.textContent = target.toLocaleString();
              gsap.fromTo(el,
                { scale: 1.15, color: '#38bdf8' },
                { scale: 1, color: '', duration: 0.45, ease: 'back.out(2)' }
              );
            },
          }
        );
      } else {
        el.textContent = target.toLocaleString();
      }
    });
  }

  /* ══════════════════════════════════════════════
     11. SWIPER TESTIMONIALS
  ══════════════════════════════════════════════ */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;

    // Testimonials Carousel
    new Swiper('.swiper-testimonials', {
      ...CONFIG.swiper,
      loop:             true,
      centeredSlides:   false,
      grabCursor:       true,
      keyboard:         { enabled: true },
    });

    // TechCore Services Carousel
    const servicesSlider = document.querySelector('.swiper-services');
    if (servicesSlider) {
      new Swiper('.swiper-services', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 850,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: '.swiper-arrow-1 .swiper-next',
          prevEl: '.swiper-arrow-1 .swiper-prev',
        },
        pagination: {
          el: '.atf-service-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
      });
    }
  }

  /* ══════════════════════════════════════════════
     12. PORTFOLIO FILTER
  ══════════════════════════════════════════════ */
  function initPortfolioFilter() {
    const btns  = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-col');
    if (!btns.length || !items.length) return;

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active button
        btns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach((item) => {
          const cat     = item.getAttribute('data-cat');
          const visible = filter === 'all' || cat === filter;

          if (typeof gsap !== 'undefined') {
            if (visible) {
              gsap.fromTo(item,
                { opacity: 0, scale: 0.88, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'power3.out',
                  onStart: () => { item.style.display = ''; },
                }
              );
            } else {
              gsap.to(item, {
                opacity: 0, scale: 0.88, y: 20, duration: 0.35, ease: 'power3.in',
                onComplete: () => { item.style.display = 'none'; },
              });
            }
          } else {
            item.style.display = visible ? '' : 'none';
          }
        });
      });
    });
  }

  /* ══════════════════════════════════════════════
     13. FAQ ACCORDION (GSAP smooth height)
  ══════════════════════════════════════════════ */
  function initFAQ() {
    const items = document.querySelectorAll('.faq-accordion-item');
    if (!items.length) return;

    const openItem = (item) => {
      const body  = item.querySelector('.faq-body');
      const inner = item.querySelector('.faq-body-inner');
      const btn   = item.querySelector('.faq-accordion-btn');
      if (!body || !inner) return;

      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      body.setAttribute('aria-hidden', 'false');

      if (typeof gsap !== 'undefined') {
        const targetH = inner.offsetHeight;
        gsap.fromTo(body,
          { height: 0 },
          { height: targetH, duration: 0.45, ease: 'power3.out',
            onComplete: () => { body.style.height = 'auto'; },
          }
        );
        gsap.fromTo(inner,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', delay: 0.15 }
        );
      } else {
        body.style.height = inner.offsetHeight + 'px';
      }
    };

    const closeItem = (item) => {
      const body  = item.querySelector('.faq-body');
      const inner = item.querySelector('.faq-body-inner');
      const btn   = item.querySelector('.faq-accordion-btn');
      if (!body) return;

      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      body.setAttribute('aria-hidden', 'true');

      if (typeof gsap !== 'undefined') {
        const currentH = body.offsetHeight;
        gsap.fromTo(body,
          { height: currentH },
          { height: 0, duration: 0.38, ease: 'power3.in' }
        );
        if (inner) {
          gsap.to(inner, { opacity: 0, y: 5, duration: 0.2, ease: 'power3.in' });
        }
      } else {
        body.style.height = '0';
      }
    };

    // Open first item by default
    const firstItem = items[0];
    if (firstItem) {
      const firstBody  = firstItem.querySelector('.faq-body');
      const firstInner = firstItem.querySelector('.faq-body-inner');
      if (firstBody && firstInner) {
        firstBody.style.height = 'auto';
      }
    }

    items.forEach((item) => {
      const btn = item.querySelector('.faq-accordion-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('active');

        if (isOpen) {
          closeItem(item);
        } else {
          // Close all other open items
          items.forEach((other) => {
            if (other !== item && other.querySelector('.faq-accordion-btn').classList.contains('active')) {
              closeItem(other);
            }
          });
          openItem(item);
        }
      });
    });
  }

  /* ══════════════════════════════════════════════
     14. SCROLL-TO-TOP BUTTON
  ══════════════════════════════════════════════ */
  function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      if (typeof Lenis !== 'undefined' && window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.4 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  /* ══════════════════════════════════════════════
     15. MAGNETIC BUTTONS (GSAP mouse attraction)
  ══════════════════════════════════════════════ */
  function initMagneticButtons() {
    if (typeof gsap === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const btns = document.querySelectorAll(
      '.btn-primary-custom, .btn-outline-custom, .btn-outline-dark, .btn-quote, .nav-search-btn, #scrollTop, .filter-btn'
    );

    btns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.28;

        gsap.to(btn, {
          x,
          y,
          scale: 1.04,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'elastic.out(1.1, 0.35)',
        });
      });
    });
  }

  /* ══════════════════════════════════════════════
     DIRECTION-AWARE HOVER (Left / Right Sweep for Buttons & Menus)
  ══════════════════════════════════════════════ */
  function initDirectionAwareHover() {
    // 1. Ensure all button text nodes are wrapped in span so z-index: 5 keeps text 100% visible
    const allButtons = document.querySelectorAll(
      '.btn-primary-custom, .btn-quote, .btn-outline-custom, .btn-outline-dark, .btn-light-custom, .btn-custom'
    );
    allButtons.forEach((btn) => {
      Array.from(btn.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
          const span = document.createElement('span');
          span.textContent = node.textContent;
          btn.replaceChild(span, node);
        }
      });
    });

    // 2. Attach direction-aware origin listeners
    const targets = document.querySelectorAll(
      '.btn-primary-custom, .btn-quote, .btn-outline-custom, .btn-outline-dark, .btn-light-custom, .btn-custom, .navbar-nav .nav-link, .service-card'
    );

    targets.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        const rect = el.getBoundingClientRect();
        const fromLeft = (e.clientX - rect.left) < (rect.width / 2);
        el.style.setProperty('--sweep-origin', fromLeft ? 'left' : 'right');
      });

      el.addEventListener('mouseleave', (e) => {
        const rect = el.getBoundingClientRect();
        const exitRight = (e.clientX - rect.left) >= (rect.width / 2);
        el.style.setProperty('--sweep-origin', exitRight ? 'right' : 'left');
      });
    });
  }

  /* ══════════════════════════════════════════════
     SCROLL READING PROGRESS BAR
  ══════════════════════════════════════════════ */
  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ══════════════════════════════════════════════
     CONTINUOUS AMBIENT FLOATING BACKGROUND ORBS
  ══════════════════════════════════════════════ */
  function initBackgroundOrbs() {
    if (typeof gsap === 'undefined') return;

    gsap.to('.hero-bg-circle-1', {
      x: 35,
      y: -25,
      scale: 1.08,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.hero-bg-circle-2', {
      x: -30,
      y: 20,
      scale: 0.94,
      duration: 7.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8,
    });

    gsap.to('.cta-bg-1', {
      x: 45,
      y: -25,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.cta-bg-2', {
      x: -40,
      y: 30,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });
  }

  /* ══════════════════════════════════════════════
     INTERACTIVE CARD SPOTLIGHT GLOW
  ══════════════════════════════════════════════ */
  function initCardGlows() {
    const cards = document.querySelectorAll(
      '.service-card, .portfolio-item, .blog-card, .process-card, .process-step, .contact-info-card, .contact-form-card'
    );
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* ══════════════════════════════════════════════
     16. CONTACT FORM HANDLING
  ══════════════════════════════════════════════ */
  function initContactForm() {
    const form  = document.getElementById('contactForm');
    const msgEl = document.getElementById('cfMsg');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = form.querySelector('#cfName').value.trim();
      const email   = form.querySelector('#cfEmail').value.trim();
      const message = form.querySelector('#cfMessage').value.trim();

      if (!name || !email || !message) {
        showFormMsg('error', 'Please fill in all required fields.');
        return;
      }

      if (!isValidEmail(email)) {
        showFormMsg('error', 'Please enter a valid email address.');
        return;
      }

      // Simulate submission
      const submitBtn = form.querySelector('#cfSubmit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      }

      setTimeout(() => {
        showFormMsg('success', '🎉 Message sent! We\'ll get back to you within 2 hours.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
      }, 1500);
    });

    function showFormMsg(type, text) {
      if (!msgEl) return;
      msgEl.innerHTML = text;
      msgEl.style.padding   = '12px 16px';
      msgEl.style.borderRadius = '8px';
      msgEl.style.fontSize  = '.9rem';
      msgEl.style.fontWeight = '600';

      if (type === 'success') {
        msgEl.style.background = 'rgba(16,185,129,.1)';
        msgEl.style.color      = '#059669';
        msgEl.style.border     = '1.5px solid rgba(16,185,129,.3)';
      } else {
        msgEl.style.background = 'rgba(239,68,68,.08)';
        msgEl.style.color      = '#dc2626';
        msgEl.style.border     = '1.5px solid rgba(239,68,68,.25)';
      }

      setTimeout(() => { msgEl.innerHTML = ''; msgEl.style = ''; }, 5000);
    }
  }

  /* ══════════════════════════════════════════════
     17. NEWSLETTER FORM
  ══════════════════════════════════════════════ */
  function initNewsletter() {
    const forms = document.querySelectorAll('.footer-newsletter-form');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn   = form.querySelector('button');
        if (!input || !input.value.trim() || !isValidEmail(input.value.trim())) return;

        if (btn) btn.textContent = '✓ Subscribed!';
        input.value = '';
        setTimeout(() => { if (btn) btn.textContent = 'Subscribe'; }, 3000);
      });
    });
  }

  /* ══════════════════════════════════════════════
     18. CARD HOVER GSAP ENHANCEMENT
  ══════════════════════════════════════════════ */
  function initCardHovers() {
    if (typeof gsap === 'undefined') return;

    const cards = document.querySelectorAll('.service-card, .atf-single-service, .blog-card, .portfolio-item, .testimonial-card');

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          duration: 0.35,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        });
      });
    });
  }

  /* ══════════════════════════════════════════════
     19. CLIENT PROCESS RADIAL ARCH JOURNEY (8-STAGE COLLABORATION)
  ══════════════════════════════════════════════ */
  function initProcessHovers() {
    if (typeof gsap === 'undefined') return;

    const arcSlices = document.querySelectorAll('.arc-slice');
    const mobilePills = document.querySelectorAll('.m-step-pill');
    const pillarCards = document.querySelectorAll('.radial-pillar-card');
    const radialTitle = document.getElementById('radialTitle');
    const radialDesc = document.getElementById('radialDesc');
    const radialPhaseTag = document.getElementById('radialPhaseTag');
    const radialDeliverable = document.getElementById('radialDeliverable');

    // Mobile elements
    const mPhaseBadge = document.getElementById('mPhaseBadge');
    const mStageTitle = document.getElementById('mStageTitle');
    const mStageDesc = document.getElementById('mStageDesc');
    const mStageDeliverable = document.getElementById('mStageDeliverable');

    // Bottom Section Elements
    const cardsPhaseBadge = document.getElementById('cardsPhaseBadge');
    const cardsPhaseTitle = document.getElementById('cardsPhaseTitle');
    const tabDeliverables = document.getElementById('tabDeliverables');
    const tabAllStages = document.getElementById('tabAllStages');
    const viewDeliverables = document.getElementById('viewDeliverables');
    const viewAllStages = document.getElementById('viewAllStages');
    const allStageCards = document.querySelectorAll('.radial-all-stages .radial-pillar-card');

    const deliverablesData = {
      1: {
        phaseName: '01. Discovery & Scope',
        shortName: 'Discovery & Scope',
        badge: 'Phase 01 Deliverables',
        items: [
          { icon: 'fa-comments', title: '1-on-1 Consultation', sub: 'Zoom / Google Meet', colorClass: 'card-c1' },
          { icon: 'fa-chart-pie', title: 'Tech Feasibility', sub: 'Architecture & Tech Stack', colorClass: 'card-c2' },
          { icon: 'fa-file-signature', title: 'SRS Specification', sub: 'Official Scope Document', colorClass: 'card-c3' },
          { icon: 'fa-timeline', title: 'Roadmap & Budget', sub: 'Fixed-Price Milestones', colorClass: 'card-c4' }
        ]
      },
      2: {
        phaseName: '02. Architecture Blueprint',
        shortName: 'Architecture Blueprint',
        badge: 'Phase 02 Deliverables',
        items: [
          { icon: 'fa-cloud', title: 'Cloud Architecture', sub: 'AWS / GCP Native Design', colorClass: 'card-c1' },
          { icon: 'fa-database', title: 'Database Schema', sub: 'Postgres / Redis Clusters', colorClass: 'card-c2' },
          { icon: 'fa-network-wired', title: 'Microservices Spec', sub: 'REST & GraphQL Design', colorClass: 'card-c3' },
          { icon: 'fa-file-contract', title: 'Scope of Work (SOW)', sub: 'Timeline & Budget Agreement', colorClass: 'card-c4' }
        ]
      },
      3: {
        phaseName: '03. UI/UX Prototype',
        shortName: 'UI/UX Prototype',
        badge: 'Phase 03 Deliverables',
        items: [
          { icon: 'fa-bezier-curve', title: 'Wireframing & UX', sub: 'User Journeys & Flows', colorClass: 'card-c1' },
          { icon: 'fab fa-figma', title: 'Clickable Figma', sub: 'Interactive Prototype', colorClass: 'card-c2' },
          { icon: 'fa-palette', title: 'Design System', sub: 'Web & Mobile UI Kit', colorClass: 'card-c3' },
          { icon: 'fa-circle-check', title: 'Client Sign-off', sub: '100% Approved Design', colorClass: 'card-c4' }
        ]
      },
      4: {
        phaseName: '04. Agile Staging Sprints',
        shortName: 'Agile Staging Sprints',
        badge: 'Phase 04 Deliverables',
        items: [
          { icon: 'fa-code-branch', title: '2-Week Agile Sprints', sub: 'Rapid Milestone Velocity', colorClass: 'card-c1' },
          { icon: 'fa-globe', title: 'Live Staging URL', sub: 'Real Working Software', colorClass: 'card-c2' },
          { icon: 'fab fa-slack', title: 'Direct Slack Channel', sub: 'Realtime Team Sync', colorClass: 'card-c3' },
          { icon: 'fa-laptop-code', title: 'Bi-Weekly Demos', sub: 'Feature Walkthrough Calls', colorClass: 'card-c4' }
        ]
      },
      5: {
        phaseName: '05. Cloud & API Integration',
        shortName: 'Cloud & API Integration',
        badge: 'Phase 05 Deliverables',
        items: [
          { icon: 'fa-server', title: 'REST & GraphQL APIs', sub: 'High-Throughput Endpoints', colorClass: 'card-c1' },
          { icon: 'fa-credit-card', title: 'Payment Gateways', sub: 'Stripe, PayPal, SSLCommerz', colorClass: 'card-c2' },
          { icon: 'fa-cloud-arrow-up', title: 'Cloud DB Cluster', sub: 'Automated Daily Backups', colorClass: 'card-c3' },
          { icon: 'fa-key', title: 'Auth & Data Security', sub: 'JWT, OAuth2 & Encryption', colorClass: 'card-c4' }
        ]
      },
      6: {
        phaseName: '06. Security & QA Audit',
        shortName: 'Security & QA Audit',
        badge: 'Phase 06 Deliverables',
        items: [
          { icon: 'fa-shield-halved', title: 'OWASP Top 10 Audit', sub: '0 Vulnerabilities Found', colorClass: 'card-c1' },
          { icon: 'fa-gauge-high', title: 'Lighthouse 99+ Speed', sub: 'Sub-second Load Times', colorClass: 'card-c2' },
          { icon: 'fa-vial-circle-check', title: 'Regression Suite', sub: '99.4% Automated Coverage', colorClass: 'card-c3' },
          { icon: 'fa-certificate', title: 'ISO 27001 Certified', sub: 'Enterprise Security Pass', colorClass: 'card-c4' }
        ]
      },
      7: {
        phaseName: '07. Live Production Launch',
        shortName: 'Live Production Launch',
        badge: 'Phase 07 Deliverables',
        items: [
          { icon: 'fa-rocket', title: 'Zero-Downtime Deploy', sub: 'High-Availability Cloud', colorClass: 'card-c1' },
          { icon: 'fab fa-github', title: '100% Code Ownership', sub: 'Full Repository Transfer', colorClass: 'card-c2' },
          { icon: 'fa-cloud-arrow-up', title: 'Cloud Keys Handover', sub: 'Complete Client Control', colorClass: 'card-c3' },
          { icon: 'fa-chalkboard-user', title: 'Admin & Team Training', sub: 'Comprehensive Documentation', colorClass: 'card-c4' }
        ]
      },
      8: {
        phaseName: '08. 24/7 SLA & Support',
        shortName: '24/7 SLA & Support',
        badge: 'Phase 08 Deliverables',
        items: [
          { icon: 'fa-clock', title: '24/7 SLA Monitoring', sub: '99.98% Uptime SLA', colorClass: 'card-c1' },
          { icon: 'fa-bolt', title: '< 15m Emergency SLA', sub: 'Dedicated Fast Response', colorClass: 'card-c2' },
          { icon: 'fa-wrench', title: 'Security Patches', sub: 'Proactive Zero-Day Updates', colorClass: 'card-c3' },
          { icon: 'fa-chart-line', title: 'Feature Evolution', sub: 'Ongoing Growth Sprints', colorClass: 'card-c4' }
        ]
      }
    };

    const stagesData = {
      1: {
        shortName: 'Discovery & Scope',
        phase: 'Phase 01 / 08',
        title: '1-on-1 Strategy Meeting & Scope Analysis',
        desc: 'Direct consultation via Zoom or Meet. We align on business goals, user personas, and technical feasibility.',
        deliverable: '<i class="fas fa-file-signature text-primary me-2"></i> <strong>Deliverable:</strong> SRS Specification & Scope Draft',
        pillarIndex: 1
      },
      2: {
        shortName: 'Architecture Blueprint',
        phase: 'Phase 02 / 08',
        title: 'System Architecture & Milestone SOW',
        desc: 'Senior architects design microservices, database schemas, and 2-week sprint milestones with a fixed budget.',
        deliverable: '<i class="fas fa-sitemap text-primary me-2"></i> <strong>Deliverable:</strong> Cloud Architecture Blueprint & SOW',
        pillarIndex: 1
      },
      3: {
        shortName: 'UI/UX Prototype',
        phase: 'Phase 03 / 08',
        title: 'Clickable Figma Prototype & Sign-off',
        desc: 'Interactive Figma prototypes before coding. Experience every user flow and give feedback with full sign-off.',
        deliverable: '<i class="fab fa-figma text-primary me-2"></i> <strong>Deliverable:</strong> Interactive Figma Prototype & Design System',
        pillarIndex: 2
      },
      4: {
        shortName: 'Agile Staging Sprints',
        phase: 'Phase 04 / 08',
        title: 'Bi-Weekly Sprints & Live Staging Demos',
        desc: 'Development in 2-week agile sprints with bi-weekly live staging demos and dedicated Slack / WhatsApp sync.',
        deliverable: '<i class="fas fa-code text-primary me-2"></i> <strong>Deliverable:</strong> Private Live Staging URL & Sprint Build',
        pillarIndex: 3
      },
      5: {
        shortName: 'Cloud & API Integration',
        phase: 'Phase 05 / 08',
        title: 'Microservices & Cloud Backend Setup',
        desc: 'Building scalable REST/GraphQL APIs, secure payment gateways, and containerized microservices on AWS/Azure.',
        deliverable: '<i class="fas fa-cloud-arrow-up text-primary me-2"></i> <strong>Deliverable:</strong> API Gateway & Cloud DB Cluster',
        pillarIndex: 3
      },
      6: {
        shortName: 'Security & QA Audit',
        phase: 'Phase 06 / 08',
        title: 'Zero-Defect QA & Security Audit',
        desc: 'Automated regression, cross-browser compatibility, load testing, and OWASP penetration checks.',
        deliverable: '<i class="fas fa-shield-halved text-primary me-2"></i> <strong>Deliverable:</strong> QA Certification & ISO Security Report',
        pillarIndex: 3
      },
      7: {
        shortName: 'Live Cloud Launch',
        phase: 'Phase 07 / 08',
        title: 'Zero-Downtime Launch & Handover',
        desc: 'Zero-downtime production deployment with 100% full source code ownership and cloud infrastructure handover.',
        deliverable: '<i class="fas fa-rocket text-primary me-2"></i> <strong>Deliverable:</strong> Live Production Platform & Full Codebase',
        pillarIndex: 4
      },
      8: {
        shortName: '24/7 SLA & Support',
        phase: 'Phase 08 / 08',
        title: '24/7 SLA Maintenance & Evolution',
        desc: 'Round-the-clock monitoring, 99.98% uptime SLA guarantee, instant security patches, and feature expansion.',
        deliverable: '<i class="fas fa-rotate text-primary me-2"></i> <strong>Deliverable:</strong> 24/7 Emergency SLA Guarantee & Maintenance',
        pillarIndex: 4
      }
    };

    let currentStep = 1;
    const totalSteps = 8;
    let autoTimer = null;
    let isPaused = false;
    const STEP_DURATION = 4000;

    function switchStage(stepNum) {
      stepNum = parseInt(stepNum, 10) || 1;
      currentStep = stepNum;
      const data = stagesData[stepNum] || stagesData[1];

      // Update Desktop Arc Slices
      arcSlices.forEach((slice) => {
        const isCur = parseInt(slice.getAttribute('data-step'), 10) === stepNum;
        slice.classList.toggle('active', isCur);
        slice.setAttribute('aria-selected', isCur ? 'true' : 'false');
      });

      // Update Mobile Pills
      mobilePills.forEach((pill) => {
        const isCur = parseInt(pill.getAttribute('data-step'), 10) === stepNum;
        pill.classList.toggle('active', isCur);
      });

      // Update Bottom 4 Deliverable Cards for the active phase
      const deliv = deliverablesData[stepNum] || deliverablesData[1];
      const phaseTitleText = (deliv && deliv.phaseName) || (deliv && deliv.shortName) || (data && data.shortName) || `Phase 0${stepNum}`;
      if (cardsPhaseBadge) cardsPhaseBadge.textContent = deliv ? deliv.badge : `Phase 0${stepNum} Deliverables`;
      if (cardsPhaseTitle) cardsPhaseTitle.textContent = `${phaseTitleText} Outcomes`;

      if (deliv && deliv.items) {
        deliv.items.forEach((item, idx) => {
          const card = document.getElementById(`pCard${idx}`);
          const iconEl = document.getElementById(`pIcon${idx}`);
          const titleEl = document.getElementById(`pTitle${idx}`);
          const subEl = document.getElementById(`pSub${idx}`);

          if (card && iconEl && titleEl && subEl) {
            card.className = `radial-pillar-card ${item.colorClass}`;
            iconEl.innerHTML = `<i class="${item.icon.startsWith('fab') ? item.icon : 'fas ' + item.icon}"></i>`;
            titleEl.textContent = item.title;
            subEl.textContent = item.sub;
          }
        });
      }

      // Animate cards on change
      const delivRow = document.getElementById('deliverablesRow');
      if (delivRow && delivRow.children.length) {
        gsap.fromTo(delivRow.children,
          { opacity: 0.5, y: 8 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
        );
      }

      // Update All 8 Stages View highlights
      allStageCards.forEach((c) => {
        const target = parseInt(c.getAttribute('data-step-target'), 10);
        c.classList.toggle('active', target === stepNum);
      });

      // Animate Desktop Center Hub Content
      if (radialTitle && radialDesc && radialPhaseTag && radialDeliverable) {
        gsap.to([radialTitle, radialDesc, radialPhaseTag, radialDeliverable], {
          opacity: 0,
          y: -5,
          duration: 0.2,
          ease: 'power1.in',
          onComplete: () => {
            radialPhaseTag.innerHTML = `<span class="pulse-indicator"></span> Active Phase: 0${stepNum} / 08 • ${data.shortName}`;
            radialTitle.textContent = data.title;
            radialDesc.textContent = data.desc;
            radialDeliverable.innerHTML = data.deliverable;

            gsap.fromTo([radialTitle, radialDesc, radialPhaseTag, radialDeliverable],
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
            );
          }
        });
      }

      // Update Mobile Card Content
      if (mStageTitle && mStageDesc && mPhaseBadge && mStageDeliverable) {
        mPhaseBadge.textContent = data.phase;
        mStageTitle.textContent = data.title;
        mStageDesc.textContent = data.desc;
        mStageDeliverable.innerHTML = data.deliverable;
      }
    }

    function nextStage() {
      const next = (currentStep % totalSteps) + 1;
      switchStage(next);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoTimer = setInterval(() => {
        if (!isPaused) {
          nextStage();
        }
      }, STEP_DURATION);
    }

    function stopAutoPlay() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Hover pause
    const container = document.querySelector('.radial-process-container');
    if (container) {
      container.addEventListener('mouseenter', () => { isPaused = true; });
      container.addEventListener('mouseleave', () => { isPaused = false; });
    }

    // Attach click listeners to arc slices
    arcSlices.forEach((slice) => {
      slice.addEventListener('click', () => {
        const step = slice.getAttribute('data-step');
        switchStage(step);
        restartAutoPlay();
      });
    });

    // Attach click listeners to mobile pills
    mobilePills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const step = pill.getAttribute('data-step');
        switchStage(step);
        restartAutoPlay();
      });
    });

    // Toggle between Phase Deliverables view and All 8 Stages view
    if (tabDeliverables && tabAllStages && viewDeliverables && viewAllStages) {
      tabDeliverables.addEventListener('click', () => {
        tabDeliverables.classList.add('active');
        tabAllStages.classList.remove('active');
        viewDeliverables.classList.remove('d-none');
        viewAllStages.classList.add('d-none');
      });

      tabAllStages.addEventListener('click', () => {
        tabAllStages.classList.add('active');
        tabDeliverables.classList.remove('active');
        viewAllStages.classList.remove('d-none');
        viewDeliverables.classList.add('d-none');
      });
    }

    // Clicking any card in the All 8 Stages grid activates that stage
    allStageCards.forEach((c) => {
      c.addEventListener('click', () => {
        const step = parseInt(c.getAttribute('data-step-target'), 10);
        if (step) {
          switchStage(step);
          restartAutoPlay();
        }
      });
    });

    // ScrollTrigger to only run auto-play when visible
    const processSec = document.getElementById('process');
    if (typeof ScrollTrigger !== 'undefined' && processSec) {
      ScrollTrigger.create({
        trigger: '#process',
        start: 'top 80%',
        end: 'bottom 15%',
        onEnter: () => {
          startAutoPlay();
        },
        onEnterBack: () => {
          startAutoPlay();
        },
        onLeave: () => {
          stopAutoPlay();
        },
        onLeaveBack: () => {
          stopAutoPlay();
        },
      });
    } else {
      startAutoPlay();
    }

    // CTA Box reveal
    const ctaBox = document.querySelector('.process-cta-box');
    if (ctaBox && typeof ScrollTrigger !== 'undefined') {
      gsap.fromTo(ctaBox,
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaBox,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  }

  /* ══════════════════════════════════════════════
     20. VENETIAN BLINDS REVEAL ANIMATIONS (GSAP Louver Shutter)
     gsap.to(".blind", {
       scaleX: 0, duration: 0.6,
       stagger: { amount: 0.4, from: "edges" },
       ease: "power2.inOut"
     });
  ══════════════════════════════════════════════ */
  function initBlindAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Helper: generate vertical blind slats inside container
    function createBlinds(container, slatCount = 8, variantClass = '') {
      if (!container || container.querySelector('.blind-overlay')) return null;

      container.classList.add('blind-reveal-target');

      const overlay = document.createElement('div');
      overlay.className = `blind-overlay ${variantClass}`.trim();

      for (let i = 0; i < slatCount; i++) {
        const blind = document.createElement('div');
        blind.className = 'blind';
        overlay.appendChild(blind);
      }

      container.appendChild(overlay);
      return overlay;
    }

    // List of key sections and cards across the website to reveal with blind slats
    const targets = [
      { selector: '#stats', slats: 10, variant: 'blind-dark', start: 'top 85%' },
      { selector: '#cta', slats: 10, variant: 'blind-gradient', start: 'top 84%' },
      { selector: '#about .about-img-wrapper', slats: 7, variant: 'blind-light', start: 'top 84%' },
      { selector: '#faq .faq-illus', slats: 6, variant: 'blind-light', start: 'top 84%' },
      { selector: '#services .row.justify-content-center', slats: 8, variant: 'blind-light', start: 'top 86%' },
      { selector: '#portfolio .row.justify-content-center', slats: 8, variant: 'blind-light', start: 'top 86%' },
      { selector: '#techGrid', slats: 8, variant: 'blind-light', start: 'top 85%' },
    ];

    // Also support any element with .blind-reveal in the markup
    document.querySelectorAll('.blind-reveal').forEach((el) => {
      const slats = parseInt(el.getAttribute('data-slats'), 10) || 8;
      const variant = el.getAttribute('data-variant') || '';
      targets.push({ element: el, slats, variant, start: 'top 85%' });
    });

    targets.forEach((item) => {
      const el = item.element || document.querySelector(item.selector);
      if (!el) return;

      const overlay = createBlinds(el, item.slats, item.variant);
      if (!overlay) return;

      const blinds = overlay.querySelectorAll('.blind');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: item.start || 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      });

      tl.fromTo(blinds,
        { scaleX: 1 },
        {
          scaleX: 0,
          duration: 0.65,
          stagger: {
            amount: 0.45,
            from: 'edges',
          },
          ease: 'power2.inOut',
        }
      );
    });
  }

  /* ══════════════════════════════════════════════
     21. GSAP VELOCITY & DIRECTION SCROLL-RESPONSIVE MARQUEE
  ══════════════════════════════════════════════ */
  function initGSAPMarquee() {
    if (typeof gsap === 'undefined') return;

    const track1 = document.querySelector('.marquee-track-1');
    const track2 = document.querySelector('.marquee-track-2');
    if (!track1 && !track2) return;

    let tl1 = null;
    let tl2 = null;

    // Track 1: Continuous smooth infinite drift to the left (←)
    if (track1) {
      tl1 = gsap.to(track1, {
        xPercent: -50,
        repeat: -1,
        duration: 32,
        ease: 'none',
      });
    }

    // Track 2: Continuous smooth infinite drift to the right (→)
    if (track2) {
      gsap.set(track2, { xPercent: -50 });
      tl2 = gsap.to(track2, {
        xPercent: 0,
        repeat: -1,
        duration: 36,
        ease: 'none',
      });
    }

    // ScrollTrigger: Velocity & Direction Synchronization
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#partners',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const vel = self.getVelocity();
          const isDown = self.direction === 1;
          const speedFactor = 1 + Math.min(Math.abs(vel) / 220, 5);

          // Kinetic Inertia Aerodynamic Skew on fast scroll
          const skewVal = gsap.utils.clamp(-9, 9, vel / 180);
          gsap.to('.marquee-skew-item', {
            skewX: skewVal,
            duration: 0.25,
            ease: 'power1.out',
            overwrite: 'auto',
            onComplete: () => {
              gsap.to('.marquee-skew-item', {
                skewX: 0,
                duration: 0.5,
                ease: 'power2.out',
              });
            },
          });

          // Accelerate track timelines with current scroll direction & velocity
          if (tl1) {
            gsap.to(tl1, {
              timeScale: (isDown ? 1 : -1) * speedFactor,
              duration: 0.15,
              overwrite: 'auto',
            });
            // Smooth inertia return to normal speed
            gsap.to(tl1, {
              timeScale: isDown ? 1 : -1,
              duration: 1.2,
              delay: 0.2,
              ease: 'power2.out',
              overwrite: false,
            });
          }

          if (tl2) {
            gsap.to(tl2, {
              timeScale: (isDown ? 1 : -1) * speedFactor,
              duration: 0.15,
              overwrite: 'auto',
            });
            // Smooth inertia return to normal speed
            gsap.to(tl2, {
              timeScale: isDown ? 1 : -1,
              duration: 1.2,
              delay: 0.2,
              ease: 'power2.out',
              overwrite: false,
            });
          }
        },
      });
    }

    // Interactive Hover: Slow down track smoothly when hovering, resume on leave
    const row1 = document.querySelector('.marquee-row-1');
    if (row1 && tl1) {
      row1.addEventListener('mouseenter', () => gsap.to(tl1, { timeScale: 0.2, duration: 0.4 }));
      row1.addEventListener('mouseleave', () => gsap.to(tl1, { timeScale: 1, duration: 0.6 }));
    }

    const row2 = document.querySelector('.marquee-row-2');
    if (row2 && tl2) {
      row2.addEventListener('mouseenter', () => gsap.to(tl2, { timeScale: 0.2, duration: 0.4 }));
      row2.addEventListener('mouseleave', () => gsap.to(tl2, { timeScale: 1, duration: 0.6 }));
    }
  }

  /* ══════════════════════════════════════════════
     UTILITY
  ══════════════════════════════════════════════ */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ══════════════════════════════════════════════
     INIT — DOMCONTENTLOADED
  ══════════════════════════════════════════════ */
  function init() {
    initPreloader();
    initGSAP();

    const lenis = initLenis();
    if (lenis) window.__lenis = lenis;

    initNavbar();
    initSearch();
    initScrollProgress();
    initCardGlows();
    initDirectionAwareHover();
    initSkillBars();
    initCounters();
    initSwiper();
    initPortfolioFilter();
    initFAQ();
    initScrollTop();
    initContactForm();
    initNewsletter();

    // GSAP animations suite (after GSAP & ScrollTrigger load)
    if (typeof gsap !== 'undefined') {
      initHeroAnimations();
      initHeroLiquidBlob();
      initHeadingAnimations();
      initImageAnimations();
      initBlindAnimations();
      initGSAPMarquee();
      initSectionReveals();
      initMagneticButtons();
      initBackgroundOrbs();
      initCardHovers();
      initProcessHovers();
    } else {
      // Fallback: make everything visible if GSAP didn't load
      document.querySelectorAll('.gsap-fade, .gsap-from-bottom, .gsap-from-left, .gsap-from-right, .gsap-scale')
        .forEach((el) => {
          el.style.opacity   = '1';
          el.style.transform = 'none';
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
