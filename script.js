(function () {
  'use strict';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile / tablet menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setMenu(false);
      }
    });
  }

  // Hide the sticky mobile booking bar while the contact section or footer
  // is on screen, so it never covers the same buttons.
  var bar = document.getElementById('mobile-bar');
  var targets = [document.getElementById('contact'), document.querySelector('.footer')].filter(Boolean);

  if (bar && targets.length && 'IntersectionObserver' in window) {
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      var hide = visible.size > 0;
      bar.classList.toggle('is-hidden', hide);
      bar.inert = hide;
    }, { threshold: 0.15 });

    targets.forEach(function (t) { observer.observe(t); });
  }
})();
