import { Link } from 'react-router-dom';

/* ── Section: Hero ────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-72px)] flex items-center py-20 px-8 overflow-hidden">

      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/library_bg.png"
          alt="Library background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-0">
        <div className="animate-[fade-in-up_0.7s_ease_both] max-w-2xl">

          {/* Label */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/50 bg-blue-500/15 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-[pulse-soft_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white font-medium">Biblioteca Digital</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-display leading-[1.05] tracking-tighter mb-6">
            Descubra o prazer da{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">leitura</span>
              <span className="absolute bottom-[-4px] left-0 right-0 h-2 rounded-sm bg-gradient-to-r from-blue-400/35 to-transparent shadow-sm" />
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-10">
            Uma coleção cuidadosamente selecionada de livros para expandir sua
            mente, alimentar sua imaginação e inspirar novas perspectivas.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              to="/livros"
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl bg-blue-600 text-white font-semibold text-[0.9375rem] transition-all hover:translate-y-[-2px] hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] active:scale-[0.98] shadow-[0_4px_14px_rgba(37,99,235,0.25)]"
            >
              Explorar Livros
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/sobre"
              className="inline-flex items-center h-[52px] px-7 rounded-xl border border-white/30 text-white font-medium text-[0.9375rem] transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
            >
              Sobre o projeto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section: Stats ───────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: '248+', label: 'Livros catalogados' },
    { value: '80+', label: 'Autores diferentes' },
    { value: '12', label: 'Géneros literários' },
    { value: '100%', label: 'Curadoria manual' },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-8 bg-slate-900">
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px]" />
      {/* Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="animate-[fade-in-up_0.64s_ease_both]" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="text-4xl md:text-5xl font-display leading-tight mb-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
            <div className="text-slate-400 font-medium text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Section: Features ────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      ),
      title: 'Catálogo Rico',
      description: 'Explore centenas de títulos cuidadosamente catalogados com informações detalhadas sobre autor, género e sinopse.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      title: 'Pesquisa Rápida',
      description: 'Encontre qualquer livro em segundos. Pesquise por título, autor ou género com resultados instantâneos.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Curadoria Especial',
      description: 'Cada livro é selecionado manualmente para garantir qualidade, diversidade e relevância literária.',
    },
  ];

  return (
    <section className="py-28 px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-[fade-in-up_0.64s_ease_both]">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-600/30 bg-blue-600/5 px-5 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-soft_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-600 font-medium">Funcionalidades</span>
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Tudo o que você <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">precisa</span>
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Uma plataforma simples, poderosa e pensada para os amantes da leitura.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-lg cursor-default animate-[fade-in-up_0.64s_ease_both]"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 shadow-[0_4px_14px_rgba(37,99,235,0.25)] mb-5">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section: Contact ─────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contato" className="py-28 px-8 bg-slate-100">
      <div className="max-w-lg mx-auto animate-[fade-in-up_0.64s_ease_both]">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-600/30 bg-blue-600/5 px-5 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-soft_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-600 font-medium">Contato</span>
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4 text-slate-900">
            Entre em <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">contato</span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Sugestões de livros, dúvidas ou só um olá — respondemos a tudo.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white border border-slate-200 rounded-[20px] p-8 shadow-md flex flex-col gap-5">
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-slate-900 mb-2">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="seuemail@exemplo.com"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[0.9375rem] text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-900 mb-2">Telefone</label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="+238 999 9999"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[0.9375rem] text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-slate-900 mb-2">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="A sua mensagem..."
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-[0.9375rem] text-slate-900 outline-none resize-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 leading-relaxed"
            />
          </div>

          <button 
            type="submit" 
            className="w-full inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl bg-blue-600 text-white font-semibold text-[0.9375rem] transition-all hover:translate-y-[-2px] hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] active:scale-[0.98] shadow-[0_4px_14px_rgba(37,99,235,0.25)]"
          >
            Enviar mensagem
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

/* ── Page: Home ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ContactSection />
    </>
  );
}
