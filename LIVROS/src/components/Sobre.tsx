
const TECH_STACK = [
  { name: 'React 19', color: 'bg-sky-500', shadow: 'shadow-sky-500/60', link: 'https://react.dev/' },
  { name: 'TypeScript', color: 'bg-blue-600', shadow: 'shadow-blue-600/60', link: 'https://www.typescriptlang.org/' },
  { name: 'Vite', color: 'bg-indigo-500', shadow: 'shadow-indigo-500/60', link: 'https://vitejs.dev/' },
  { name: 'Tailwind CSS', color: 'bg-teal-600', shadow: 'shadow-teal-600/60', link: 'https://tailwindcss.com/' },
  { name: 'React Router', color: 'bg-rose-500', shadow: 'shadow-rose-500/60', link: 'https://reactrouter.com/' },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero — Inverted ────────────────────────────────── */}
      <section className="bg-slate-900 py-28 px-8 relative overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px]" />
        {/* Corner glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/40 bg-blue-500/15 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-[pulse-soft_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white font-medium">Sobre</span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-display leading-[1.08] tracking-tight max-w-2xl mb-6 animate-[fade-in-up_0.7s_ease_both]">
            Um projeto feito com{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">paixão</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl animate-[fade-in-up_0.7s_ease_0.15s_both]">
            Este projeto nasceu do desejo de aprender React, TypeScript e design
            moderno enquanto construía algo com propósito real — um catálogo de
            livros pessoal e funcional.
          </p>
        </div>
      </section>

      {/* ── About Content ─────────────────────────────────── */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — About the author */}
          <div className="animate-[fade-in-up_0.64s_ease_both]">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-600/30 bg-blue-600/5 px-5 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-soft_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-600 font-medium">O Autor</span>
            </div>

            {/* Avatar Card */}
            <div className="flex items-center gap-5 mb-8 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shrink-0 text-2xl shadow-lg shadow-blue-500/30">
                👤
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-base font-bold text-slate-900 tracking-tight">
                  Stiven Dias
                </div>
                <div className="text-sm text-slate-500 -translate-y-[1px]">
                  Estudante de Programação
                </div>
                <div className="flex gap-1.5 mt-2">
                  <a
                    href="https://github.com/SDStiven"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub de Stiven Dias"
                    className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center transition-all hover:bg-slate-900 hover:border-slate-900 hover:text-white text-slate-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                      viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Sobre o projeto
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-4">
              O <strong className="text-slate-900 font-semibold">Livros</strong> é um
              protótipo desenvolvido como exercício de aprendizagem em React,
              TypeScript e design moderno, com foco na construção de interfaces
              de utilizador elegantes e acessíveis.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Embora seja um projeto académico, foi construído com os mesmos
              cuidados de um produto real: design system centralizado, componentes
              reutilizáveis e código limpo e tipado.
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4 pt-4">
              Prosimo Atualização
            </h3>
            <p className="text-base text-slate-500 leading-relaxed mb-4">
              - Login <br />
              - Cadastro <br />
              - Recuperação de senha <br />
              - Adicionar livros <br />
              - Editar livros <br />
              - Excluir livros <br />
              - Listar livros <br />
              - Detalhes do livro <br />
              - Pesquisar livros <br />
              - Filtrar livros <br />
              - Ordenar livros <br />
            </p>
            <p>
              Box de perquiza estara funcional.
            </p>
            <p>Formularios estaram funcionais.</p>

          </div>

          {/* Right — Tech stack + goals */}
          <div className="animate-[fade-in-up_0.64s_ease_0.1s_both]">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-600/30 bg-blue-600/5 px-5 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-soft_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-600 font-medium">Tecnologias</span>
            </div>

            <div className="flex flex-col gap-3 mb-12">
              {TECH_STACK.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-3.5 bg-white border border-slate-200 rounded-xl shadow-sm transition-all hover:translate-x-1 hover:shadow-md animate-[fade-in-up_0.5s_ease_both]"
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.2)] ${tech.color} ${tech.shadow}`} />
                  <a href={tech.link} target="_blank" className="text-[0.9375rem] font-medium text-slate-900 flex-1">
                    {tech.name}
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-slate-400 "
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Objectives card */}
            <div className="p-8 bg-slate-900 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:20px_20px] opacity-40" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-blue-400 mb-1">
                  Objetivos de aprendizagem
                </div>
                <div className="flex flex-col">
                  {[
                    'Componentes React com TypeScript',
                    'Routing com React Router v7',
                    'Design System e CSS moderno',
                    'Boas práticas de acessibilidade',
                  ].map((goal, i) => (
                    <div key={i} className={`flex items-center gap-3 py-3 ${i < 3 ? 'border-b border-white/5' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shrink-0" />
                      <span className="text-sm text-white/75">
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}