(function () {
  var K = { fb: '', ig: '', wa: '' }; /* wa = número com indicativo, ex.: 2389XXXXXXX */
  var LOGO = '<svg viewBox="0 0 200 200"><path class="ring" pathLength="1" d="M84.4 188.6 A90 90 0 1 1 184.6 130.8"/><polygon class="head" points="180.5,144 193,133 176,126"/><text class="n24" x="14" y="132" font-family="Josefin Sans, Futura, sans-serif">24</text><text class="hr" x="112" y="150" font-family="Josefin Sans, Futura, sans-serif">HORA</text></svg>';
  [].forEach.call(document.querySelectorAll('[data-logo]'), function (e) { e.innerHTML = LOGO });
  var wa = document.getElementById('wa');
  if (K.wa) { wa.href = 'https://wa.me/' + K.wa; document.getElementById('wb').href = wa.href } else wa.addEventListener('click', function (e) { e.preventDefault() });
  if (K.fb) document.getElementById('fb').href = K.fb; if (K.ig) document.getElementById('ig').href = K.ig;
  var els = [].slice.call(document.querySelectorAll('[data-en]')), L = 'pt', hora = document.getElementById('hora'), pin = document.getElementById('pin'), btn = document.getElementById('lang'), desc = document.querySelector('meta[name=description]'), D = desc.content;
  els.forEach(function (e) { e.dataset.pt = e.textContent });
  function now() { var h, m; try { var p = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Atlantic/Cape_Verde' }).formatToParts(new Date()); h = +p[0].value; m = +p[2].value } catch (x) { var d = new Date(); h = d.getHours(); m = d.getMinutes() } return [h, m] }
  function tick() { var t = now(), s = ('0' + t[0]).slice(-2) + ':' + ('0' + t[1]).slice(-2); hora.textContent = L == 'en' ? 'Open now · ' + s + ' in Praia' : 'Aberto agora · ' + s + ' na Praia'; pin.style.left = ((t[0] * 60 + t[1]) / 14.4) + '%' }
  function setLang(l) {
    L = l; els.forEach(function (e) { e.textContent = e.dataset[l] }); document.documentElement.lang = l; btn.dataset.l = l;
    document.title = l == 'en' ? 'Restaurante 24h Praia | 24-hour buffet, Cape Verde' : 'Restaurante 24h Praia | Buffet aberto 24 horas, Cabo Verde';
    desc.content = l == 'en' ? 'Self-service restaurant in Praia, Cape Verde. Buffet with vegetarian, vegan, meat and sushi options, open 24 hours a day at affordable prices.' : D;
    try { localStorage.setItem('lang', l) } catch (x) { } tick()
  }
  btn.addEventListener('click', function () { setLang(L == 'pt' ? 'en' : 'pt') });
  var saved; try { saved = localStorage.getItem('lang') } catch (x) { }
  if (saved == 'en') setLang('en'); else tick();
  setInterval(tick, 30000);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(hover:hover)').matches) {
    var P = [].slice.call(document.querySelectorAll('[data-d]')), W = document.querySelector('.wm');
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      P.forEach(function (el) { var d = +el.dataset.d; el.style.setProperty('--x', x * d + 'px'); el.style.setProperty('--y', y * d + 'px') });
      W.style.setProperty('--x', -x * 40 + 'px'); W.style.setProperty('--y', -y * 40 + 'px');
    });
  }

  var nav = document.querySelector('.main-nav');
  if (nav) {
    function handleNavScroll() {
      if (window.scrollY > 30) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }
})();
