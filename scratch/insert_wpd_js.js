const fs = require('fs');

let js = fs.readFileSync('js/main.js', 'utf8');

const targetFunction = `  /* ============================================================
     12AA. WPDEVELOPER COMMERCIAL PRODUCTS FILTER (index.html)
     ============================================================ */`;

const wpdCylinderCode = `  /* ============================================================
     12AAA. WPDEVELOPER EXACT 3D CYLINDER SHOWCASE ENGINE ("Made using our Products")
     ============================================================ */
  function initWpdMadeShowcase() {
    var sec = document.querySelector('.wpd-made');
    if (!sec) return;

    var stage = sec.querySelector('.wpd-mstage');
    var world = sec.querySelector('.wpd-mworld');
    if (!stage || !world) return;

    var all = Array.prototype.slice.call(sec.querySelectorAll('.wpd-mtile'));
    var tiles = all.filter(function(t) { return !t.classList.contains('wpd-mspare'); });
    var spares = all.filter(function(t) { return t.classList.contains('wpd-mspare'); });
    if (tiles.length < 9) return;

    var cs = getComputedStyle(sec);
    var A = parseFloat(cs.getPropertyValue('--mA')) || 28.5;
    var D = parseFloat(cs.getPropertyValue('--mD')) || 360;
    var K = parseFloat(cs.getPropertyValue('--mk')) || 1;
    D *= K;

    var LOOK_X = 8, LOOK_Y = 40 * K, EASE = 0.08, FRICTION = 0.93, CLICK = 5;
    function mod(a, n) { return ((a % n) + n) % n; }

    var n = all.length, sites = [];
    function num(t, p) {
      var v = t.style.getPropertyValue(p);
      if (v) return parseFloat(v);
      return parseFloat(getComputedStyle(t).getPropertyValue(p)) || 0;
    }

    all.forEach(function(t) {
      var img = t.querySelector('img'), a = t.querySelector('a');
      var k = t.classList.contains('wpd-mspare') ? num(t, '--k') : mod(num(t, '--c') + 5 * num(t, '--r'), n);
      sites[k] = {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') || '' : '',
        href: a ? a.getAttribute('href') : '',
        site: a ? a.getAttribute('data-site') || '' : ''
      };
    });

    function slot(t, c, r) {
      t._c = c;
      t._r = r;
      t.style.setProperty('--c', c);
      t.style.setProperty('--r', r);
      var k = mod(c + 5 * r, n);
      if (t._k === k) return;
      t._k = k;
      var s = sites[k];
      if (!s) return;
      var img = t.querySelector('img'), a = t.querySelector('a');
      if (img && s.src) {
        img.setAttribute('src', s.src);
        img.setAttribute('alt', s.alt);
      }
      if (a) {
        if (s.href) a.setAttribute('href', s.href);
        if (s.site) a.setAttribute('data-site', s.site);
      }
    }

    tiles.forEach(function(t) {
      t._c = num(t, '--c');
      t._r = num(t, '--r');
      t._k = mod(t._c + 5 * t._r, n);
    });

    var have = {};
    tiles.forEach(function(t) {
      have[t._c + ',' + t._r] = 1;
    });

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (!have[c + ',' + r]) {
          var t = spares.length ? spares.shift() : tiles[0].cloneNode(true);
          var a = t.querySelector('a');
          t.classList.remove('wpd-mspare');
          t.removeAttribute('id');
          t.setAttribute('aria-hidden', 'true');
          if (a) a.setAttribute('tabindex', '-1');
          t._k = -1;
          slot(t, c, r);
          world.appendChild(t);
          tiles.push(t);
        }
      }
    }

    var park = sec.querySelector('.wpd-mspares');
    if (park && park.parentNode) park.parentNode.removeChild(park);

    var yaw = 0, off = 0, dragYaw = 0, dragOff = 0, lookYaw = 0, lookOff = 0, vYaw = 0, vOff = 0;
    var raf = 0, onScreen = true, down = null, dragged = false, px = -1, py = -1, pillX = 0, pillY = 0, pill;
    var P = parseFloat(cs.getPropertyValue('--mP')) || 550;
    var R = parseFloat(cs.getPropertyValue('--mR')) || 788;
    var degPerPx = A / (2 * P * K * Math.tan(A * Math.PI / 360));
    var worldPerPx = R / P;

    function tick() {
      if (!raf) raf = requestAnimationFrame(frame);
    }

    function frame() {
      raf = 0;
      var tYaw = dragYaw + lookYaw, tOff = dragOff + lookOff, moving = !!down;
      if (!down) {
        if (Math.abs(vYaw) > 0.002 || Math.abs(vOff) > 0.02) {
          dragYaw += vYaw;
          dragOff += vOff;
          vYaw *= FRICTION;
          vOff *= FRICTION;
          moving = true;
        } else {
          vYaw = vOff = 0;
        }
        tYaw = dragYaw + lookYaw;
        tOff = dragOff + lookOff;
      }
      yaw += (tYaw - yaw) * (down ? 0.5 : EASE);
      off += (tOff - off) * (down ? 0.5 : EASE);
      if (Math.abs(tYaw - yaw) > 0.005 || Math.abs(tOff - off) > 0.05) {
        moving = true;
      } else {
        yaw = tYaw;
        off = tOff;
      }

      var cc = Math.round(yaw / A);
      var rc = Math.round(-off / D);
      for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i], c = tile._c, r = tile._r;
        while (c < cc - 2) c += 5;
        while (c > cc + 2) c -= 5;
        while (r < rc - 2) r += 5;
        while (r > rc + 2) r -= 5;
        if (c !== tile._c || r !== tile._r) slot(tile, c, r);
      }

      world.style.setProperty('--yaw', yaw.toFixed(3) + 'deg');
      world.style.setProperty('--yoff', off.toFixed(2) + 'px');

      if (pill && pill.classList.contains('is-on')) {
        pillX += (px - pillX) * 0.25;
        pillY += (py - pillY) * 0.25;
        pill.style.transform = 'translate(' + pillX.toFixed(1) + 'px,' + pillY.toFixed(1) + 'px)';
        if (Math.abs(px - pillX) > 0.5 || Math.abs(py - pillY) > 0.5) moving = true;
      }

      if (moving && onScreen) raf = requestAnimationFrame(frame);
    }

    function look(e) {
      var r = stage.getBoundingClientRect();
      lookYaw = ((e.clientX - r.left) / r.width - 0.5) * 2 * LOOK_X;
      lookOff = -((e.clientY - r.top) / r.height - 0.5) * 2 * LOOK_Y;
    }

    function hover(e) {
      var t = e.target.closest ? e.target.closest('.wpd-mtile') : null;
      var s = t && t.querySelector('a') ? (t.querySelector('a').getAttribute('data-site') || '') : '';
      if (!pill) {
        pill = document.createElement('div');
        pill.className = 'wpd-mpill';
        document.body.appendChild(pill);
        pillX = px;
        pillY = py;
      }
      if (s && !down) {
        pill.textContent = s + ' ↗';
        pill.classList.add('is-on');
      } else {
        pill.classList.remove('is-on');
      }
    }

    sec.addEventListener('pointermove', function(e) {
      px = e.clientX;
      py = e.clientY;
      if (down) {
        var dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (!dragged && Math.abs(dx) + Math.abs(dy) > CLICK) {
          dragged = true;
          sec.classList.add('is-dragging');
          if (pill) pill.classList.remove('is-on');
        }
        var ny = down.yaw - dx * degPerPx;
        var no = down.off + dy * worldPerPx;
        var now = e.timeStamp;
        vYaw = (ny - dragYaw) * Math.min(1, 16 / Math.max(1, now - down.t));
        vOff = (no - dragOff) * Math.min(1, 16 / Math.max(1, now - down.t));
        dragYaw = ny;
        dragOff = no;
        down.t = now;
      } else {
        look(e);
        hover(e);
      }
      tick();
    });

    sec.addEventListener('pointerleave', function() {
      lookYaw = lookOff = 0;
      if (pill) pill.classList.remove('is-on');
      tick();
    });

    sec.addEventListener('pointerdown', function(e) {
      if (e.button !== 0) return;
      down = { x: e.clientX, y: e.clientY, yaw: dragYaw, off: dragOff, t: e.timeStamp };
      dragged = false;
      vYaw = vOff = 0;
      tick();
    });

    function up() {
      if (!down) return;
      down = null;
      sec.classList.remove('is-dragging');
      tick();
    }

    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);

    sec.addEventListener('click', function(e) {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    sec.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function(es) {
        onScreen = es[0].isIntersecting;
        if (onScreen) tick();
      }, { rootMargin: '100px' }).observe(sec);
    } else {
      onScreen = true;
    }

    // Gentle auto-pan when idle
    setInterval(function() {
      if (!down && !sec.matches(':hover') && onScreen) {
        dragYaw += 0.05;
        tick();
      }
    }, 40);

    sec.classList.add('is-interactive');
    tick();
  }

` + targetFunction;

if (!js.includes(targetFunction)) {
  console.error('Target function not found!');
  process.exit(1);
}

js = js.replace(targetFunction, wpdCylinderCode);

// Also add initWpdMadeShowcase() to init() if not present
if (!js.includes('initWpdMadeShowcase();')) {
  js = js.replace('initWpdevProductFilter();', 'initWpdevProductFilter();\n    initWpdMadeShowcase();');
}

fs.writeFileSync('js/main.js', js, 'utf8');
console.log('Successfully inserted initWpdMadeShowcase in js/main.js');

