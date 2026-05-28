(function () {
  'use strict';

  var BRAND_FA = 'اپکس';
  var BRAND_EN = 'Apex';
  var BRAND_CKB = 'ئەپێکس';
  var TAGLINE = {
    fa: 'مجلهٔ دندانپزشکی اپکس',
    en: 'Apex Dental Journal',
    ckb: 'گۆڤاری ددانپزیشکی ئەپێکس'
  };

  var NAV = [
    { href: 'index.html',                key: 'home',       fa: 'خانه',           en: 'Home',        ckb: 'سەرەکی' },
    { href: 'about.html',                key: 'about',      fa: 'دربارهٔ سردبیر', en: 'About',       ckb: 'دەربارە' },
    { href: 'curriculum/index.html',     key: 'curriculum', fa: 'برنامه',         en: 'Curriculum',  ckb: 'بەرنامە' },
    { href: 'lab/index.html',            key: 'lab',        fa: 'آزمایشگاه',      en: 'Lab',         ckb: 'تاقیگە' },
    { href: 'articles.html',             key: 'articles',   fa: 'مقاله‌ها',       en: 'Articles',    ckb: 'وتارەکان' },
    { href: 'tips-supply.html',          key: 'tips',       fa: 'اشاره‌ها',       en: 'Tips',        ckb: 'ئامۆژگاری' },
    { href: 'admissions.html',           key: 'admissions', fa: 'ثبت‌نام',        en: 'Admissions',  ckb: 'تۆمارکردن' }
  ];

  function rel(href) {
    var segs = window.location.pathname.split('/').filter(Boolean);
    if (segs.length && segs[segs.length - 1].indexOf('.') > -1) segs.pop();
    var depth = segs.length;
    var prefix = '';
    for (var i = 0; i < depth; i++) prefix += '../';
    return prefix + href;
  }

  function currentLang() {
    try {
      var stored = localStorage.getItem('apex_lang');
      if (stored === 'fa' || stored === 'en' || stored === 'ckb') return stored;
    } catch (e) {}
    var doc = document.documentElement.getAttribute('lang');
    if (doc === 'fa' || doc === 'en' || doc === 'ckb') return doc;
    return 'fa';
  }

  function buildHeader() {
    var lang = currentLang();
    var brand = lang === 'fa' ? BRAND_FA : (lang === 'ckb' ? BRAND_CKB : BRAND_EN);
    var tagline = TAGLINE[lang] || TAGLINE.fa;

    var navHtml = NAV.map(function (item) {
      var label = item[lang] || item.en;
      var href = rel(item.href);
      return '<li><a href="' + href + '" data-nav-key="' + item.key + '">' + label + '</a></li>';
    }).join('');

    var html =
      '<header class="ap-header" data-ap-header role="banner">' +
        '<div class="ap-header-inner">' +
          '<a class="ap-brand" href="' + rel('index.html') + '" aria-label="' + brand + '">' +
            '<span class="ap-brand-mark" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">' +
                '<path d="M12 2.5c-3.2 0-5.5 2.3-5.5 5.6 0 2.5 1.2 4.2 1.2 6.5 0 1.3-.4 2.5-.4 4.1 0 1.7.8 2.8 1.9 2.8 1 0 1.4-1.1 1.7-2.7.3-1.5.5-2.4 1.1-2.4s.8.9 1.1 2.4c.3 1.6.7 2.7 1.7 2.7 1.1 0 1.9-1.1 1.9-2.8 0-1.6-.4-2.8-.4-4.1 0-2.3 1.2-4 1.2-6.5 0-3.3-2.3-5.6-5.5-5.6z" fill="currentColor"/>' +
              '</svg>' +
            '</span>' +
            '<span class="ap-brand-text">' +
              '<span class="ap-brand-name">' + brand + '</span>' +
              '<span class="ap-brand-tagline">' + tagline + '</span>' +
            '</span>' +
          '</a>' +
          '<button class="ap-nav-toggle" type="button" aria-expanded="false" aria-controls="ap-nav-list" aria-label="menu">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<nav class="ap-nav" role="navigation" aria-label="primary">' +
            '<ul class="ap-nav-list" id="ap-nav-list">' + navHtml + '</ul>' +
          '</nav>' +
          '<div class="ap-lang-switch" role="group" aria-label="language">' +
            '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
            '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
            '<button type="button" data-lang="ckb" class="' + (lang === 'ckb' ? 'is-active' : '') + '">کو</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="ap-lang-dock" role="group" aria-label="language">' +
        '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
        '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
        '<button type="button" data-lang="ckb" class="' + (lang === 'ckb' ? 'is-active' : '') + '">کو</button>' +
      '</div>';

    return html;
  }

  function hideLegacyHeaders() {
    var legacy = document.querySelectorAll('header.site-header, header.site-head, header.hdr');
    legacy.forEach(function (el) {
      if (el.closest('[data-ap-header-mount]')) return;
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
    });
  }

  function mountHeader() {
    var mount = document.querySelector('[data-ap-header-mount]');
    if (!mount) {
      mount = document.createElement('div');
      mount.setAttribute('data-ap-header-mount', '');
      document.body.insertBefore(mount, document.body.firstChild);
    }
    mount.innerHTML = buildHeader();
    hideLegacyHeaders();
    wire();
  }

  function setLang(lang) {
    if (lang !== 'fa' && lang !== 'en' && lang !== 'ckb') return;
    try { localStorage.setItem('apex_lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    var i18n = window.ApexI18n || window.I18n;
    if (i18n && typeof i18n.applyLang === 'function') {
      i18n.applyLang(lang);
    } else {
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }
    mountHeader();
  }

  function wire() {
    var toggle = document.querySelector('.ap-nav-toggle');
    var nav = document.querySelector('.ap-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('ap-nav-open', open);
      });
    }
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
    wireScrollDirection();
  }

  function wireScrollDirection() {
    var header = document.querySelector('.ap-header');
    if (!header) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var lastY = window.scrollY;
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y > 200 && y > lastY) {
          header.classList.add('is-hidden');
        } else {
          header.classList.remove('is-hidden');
        }
        if (y > 12) header.classList.add('is-condensed'); else header.classList.remove('is-condensed');
        lastY = y;
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeader);
  } else {
    mountHeader();
  }

  window.ApexHeader = { mount: mountHeader, setLang: setLang };
})();
