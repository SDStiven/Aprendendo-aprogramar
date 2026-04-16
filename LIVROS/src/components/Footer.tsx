import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white/55 relative overflow-hidden">
      {/* Dot pattern texture */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-400" />

      <div className="max-w-5xl mx-auto px-8 py-16 relative z-10">
        {/* Main row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <span className="font-display text-xl text-white">
                Livros
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/45 max-w-[220px]">
              Um catálogo digital de livros feito com paixão e código limpo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[1.5px] text-white/35 mb-5">
              Navegação
            </div>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/livros', label: 'Livros' },
                  { to: '/sobre', label: 'Sobre' },
                ].map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/55 hover:text-white text-[15px] font-medium transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[1.5px] text-white/35 mb-5">
              Redes Sociais
            </div>
            <div className="flex flex-col gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/SDStiven"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Stiven Dias"
                className="flex items-center gap-3 text-white/55 hover:text-white text-[15px] font-medium transition-colors w-fit group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              {/* X.com */}
              <a
                href="#"
                aria-label="X.com de Stiven Dias"
                className="flex items-center gap-3 text-white/55 hover:text-white text-[15px] font-medium transition-colors w-fit group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-white/30 text-sm">
          <p className="italic">
            © {year} Stiven Dias — Todos os direitos reservados
          </p>
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-60">
            React · TypeScript · Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;