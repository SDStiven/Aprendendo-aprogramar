    document.getElementById('f').addEventListener('submit', function (e) {
            e.preventDefault(); var f = e.target, v = function (n) { return f.elements[n].value.trim() };
            var t = 'Olá! Sou ' + v('nome') + (v('tel') ? ' (' + v('tel') + ')' : '') + '.\nAssunto: ' + (v('assunto') || '—') + '\n' + v('msg');
            var u = 'https://wa.me/2389588038?text=' + encodeURIComponent(t); window.open(u, '_blank') || (location.href = u)
        });