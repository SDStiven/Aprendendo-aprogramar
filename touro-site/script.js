/* ============================================================
   CONFIGURAÇÃO: preencher para cada novo negócio
   Campos vazios = o botão/ícone fica inativo (não leva a lado nenhum)
   ============================================================ */
var CONFIG = {
  lang: 'pt',                 // idioma inicial: 'pt' ou 'en'
  whatsapp: '2389915474',     // número com indicativo, só dígitos (ex: 2389915474)
  facebook: '',               // link completo
  instagram: 'https://www.instagram.com/touro_restaurant_and_lounge/',              // link completo
  maps: 'https://www.google.com/maps/place/TOURO/@14.9036211,-23.5200908,748m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935990af379f8ad:0xa8d48ea92c4b9a81!8m2!3d14.9036211!4d-23.5200908!16s%2Fg%2F11nv7krx7f?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',                   // link do Google Maps (botão do destaque)
  reviews: 'https://www.google.com/maps/place/TOURO/@14.9036211,-23.5200908,748m/data=!3m1!1e3!4m8!3m7!1s0x935990af379f8ad:0xa8d48ea92c4b9a81!8m2!3d14.9036211!4d-23.5200908!9m1!1b1!16s%2Fg%2F11nv7krx7f?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',                // link das avaliações (se vazio, usa o do maps)
  title: { pt: 'Touro Steakhouse Premium | Praia, Cabo Verde', en: 'Touro Premium Steakhouse | Praia, Cape Verde' },        // título da aba / Google (vazio = mantém o do HTML)
  description: { pt: 'Steakhouse premium na Praia, Cabo Verde: carnes grelhadas de alta qualidade, seleção de vinhos, pratos de marisco e opções vegetarianas.', en: 'Premium steakhouse in Praia, Cape Verde: high-quality grilled meats, wine selection, seafood dishes and vegetarian options.' },  // descrição para o Google (vazio = mantém o do HTML)
  clock: { enabled: false, timezone: '', label: { pt: 'Agora', en: 'Now' } } // relógio opcional no início
};

(function () {
  var C = CONFIG;

  /* Logótipo Touro oficial (Vermelho Hibachi) */
  var LOGO_SRC = 'images/Logo de Touro Vermelho Hibachi.png';
  var IMG = '<img src="' + LOGO_SRC + '" alt="Logótipo Touro">',
      RING = '<svg viewBox="0 0 200 200"><circle class="ring" pathLength="1" cx="100" cy="100" r="90"/></svg>';
  [].forEach.call(document.querySelectorAll('[data-logo]'), function (e) {
    if (e.classList.contains('wm')) {
      e.innerHTML = '<img src="' + LOGO_SRC + '" alt="" class="wm-img">';
    } else if (e.classList.contains('c3')) {
      e.innerHTML = IMG + RING;
    } else {
      e.innerHTML = IMG;
    }
  });

  /* Ligações: qualquer elemento com data-link="whatsapp|facebook|instagram|maps|reviews" */
  var wa = C.whatsapp ? C.whatsapp.replace(/\D/g, '') : '';
  if (wa && wa.length === 7) wa = '238' + wa;
  var url = {
    whatsapp: wa ? 'https://wa.me/' + wa : '',
    facebook: C.facebook, instagram: C.instagram,
    maps: C.maps, reviews: C.reviews || C.maps
  };
  [].forEach.call(document.querySelectorAll('[data-link]'), function (a) {
    var u = url[a.dataset.link];
    if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; }
    else a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  /* Idiomas PT/EN: o texto base fica em PT, o inglês em data-en="..." */
  var els = [].slice.call(document.querySelectorAll('[data-en]')),
    L = 'pt', btn = document.getElementById('lang'),
    desc = document.querySelector('meta[name=description]'),
    baseTitle = document.title, baseDesc = desc ? desc.content : '';
  els.forEach(function (e) { e.dataset.pt = e.textContent; });

  var hora = document.getElementById('hora'), now = document.querySelector('.now');
  function clock() {
    if (!C.clock.enabled) return;
    var o = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' };
    if (C.clock.timezone) o.timeZone = C.clock.timezone;
    var s; try { s = new Intl.DateTimeFormat('pt-PT', o).format(new Date()); } catch (x) { s = ''; }
    hora.textContent = C.clock.label[L] + (s ? ' · ' + s : '');
  }
  if (C.clock.enabled) { now.hidden = false; setInterval(clock, 30000); }

  function setLang(l) {
    L = l;
    els.forEach(function (e) { e.textContent = e.dataset[l]; });
    document.documentElement.lang = l;
    if (btn) btn.dataset.l = l;
    document.title = C.title[l] || baseTitle;
    if (desc) desc.content = C.description[l] || baseDesc;
    try { localStorage.setItem('lang', l); } catch (x) { }
    clock();
  }
  if (btn) btn.addEventListener('click', function () { setLang(L === 'pt' ? 'en' : 'pt'); });
  var saved; try { saved = localStorage.getItem('lang'); } catch (x) { }
  setLang(saved || C.lang);

  /* Movimento com o rato (apenas em computadores): cada elemento com data-d */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(hover:hover)').matches) {
    var P = [].slice.call(document.querySelectorAll('[data-d]')), W = document.querySelector('.wm');
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      P.forEach(function (el) { var d = +el.dataset.d; el.style.setProperty('--x', x * d + 'px'); el.style.setProperty('--y', y * d + 'px'); });
      if (W) { W.style.setProperty('--x', -x * 40 + 'px'); W.style.setProperty('--y', -y * 40 + 'px'); }
    });
  }

  /* Barra de navegação fixa e ScrollSpy para indicar a secção ativa */
  var bar = document.querySelector('.main-nav') || document.querySelector('header nav');
  var navLinks = [].slice.call(document.querySelectorAll('.main-nav a[href^="#"]:not(.brand)'));
  var sections = navLinks.map(function (a) {
    var id = a.getAttribute('href').slice(1);
    return document.getElementById(id);
  }).filter(Boolean);

  function onScroll() {
    var scrollY = window.scrollY;
    if (bar) bar.classList.toggle('scrolled', scrollY > 30);

    /* Identificar a secção ativa no ecrã */
    var currentId = '';
    var threshold = scrollY + 160;
    var isAtBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60);

    if (isAtBottom && sections.length) {
      currentId = sections[sections.length - 1].id;
    } else {
      for (var i = 0; i < sections.length; i++) {
        var sec = sections[i];
        var top = sec.offsetTop;
        var bottom = top + sec.offsetHeight;
        if (threshold >= top && threshold < bottom) {
          currentId = sec.id;
          break;
        }
      }
    }

    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      a.classList.toggle('active', id === currentId);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* Separadores Comida / Bebidas e atalho "Seleção de Vinhos" */
  var tabs = [].slice.call(document.querySelectorAll('.tabs button')), panes = { food: document.getElementById('tab-food'), drinks: document.getElementById('tab-drinks') };
  function showTab(t) { tabs.forEach(function (b) { b.classList.toggle('on', b.dataset.t === t); }); for (var k in panes) panes[k].hidden = k !== t; }
  tabs.forEach(function (b) { b.addEventListener('click', function () { showTab(b.dataset.t); }); });
  [].forEach.call(document.querySelectorAll('[data-goto]'), function (e) {
    function go() { showTab(e.dataset.goto); document.getElementById('tab-' + e.dataset.goto).scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    e.addEventListener('click', go);
    e.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); go(); } });
  });
  /* Ano no rodapé */
  var yr = document.getElementById('year'); if (yr) yr.textContent = new Date().getFullYear();
})();
