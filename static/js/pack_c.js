
/* Source: app.js */
(function () {
  'use strict';

  var menuButton = document.querySelector('[data-menu-button]');
  var sidebar = document.getElementById('siteSidebar');
  var shade = document.querySelector('[data-sidebar-shade]');

  function setMenu(open) {
    if (!menuButton || !sidebar || !shade) return;
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    sidebar.classList.toggle('is-open', open);
    shade.classList.toggle('is-visible', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuButton && sidebar && shade) {
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    shade.addEventListener('click', function () { setMenu(false); });
    sidebar.addEventListener('click', function (event) {
      if (event.target.closest('a') && window.innerWidth <= 1120) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  var cookie = document.querySelector('[data-cookie]');
  var cookieAccept = document.querySelector('[data-cookie-accept]');
  if (cookie && cookieAccept && !localStorage.getItem('pc-cookie-accepted')) {
    window.setTimeout(function () { cookie.classList.add('is-visible'); }, 900);
    cookieAccept.addEventListener('click', function () {
      localStorage.setItem('pc-cookie-accepted', '1');
      cookie.classList.remove('is-visible');
    });
  }
}());


/* Source: top-shell.js */
(function () {
  'use strict';
  var button = document.querySelector('[data-top-menu]');
  var nav = document.querySelector('[data-top-nav]');
  if (button && nav) {
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        button.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  var sections = document.querySelector('[data-sections-dropdown]');
  var sectionsButton = document.querySelector('[data-sections-toggle]');
  function setSections(open) {
    if (!sections || !sectionsButton) return;
    sections.classList.toggle('is-open', open);
    sectionsButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (sections && sectionsButton) {
    sectionsButton.addEventListener('click', function (event) {
      event.stopPropagation();
      setSections(sectionsButton.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', function (event) {
      if (!sections.contains(event.target)) setSections(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setSections(false);
    });
  }
}());
