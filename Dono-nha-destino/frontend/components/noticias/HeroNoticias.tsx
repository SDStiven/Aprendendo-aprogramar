export default function HeroNoticias() {
  return (
    <section className="relative w-full bg-[#08101E] text-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Lado Esquerdo: Títulos e Descrição */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              <span className="block text-white">Notícias &</span>
              <span className="block text-emerald-500">Agenda</span>
              <span className="block text-emerald-500">Comunitária</span>
            </h1>

            {/* Descrição com linha verde vertical */}
            <div className="mt-6 border-l-2 border-emerald-500 pl-4">
              <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                Acompanhe de perto as novidades, conquistas desportivas,
                parcerias institucionais e os próximos eventos nos bairros de
                Castellão e Coqueiro.
              </p>
            </div>
          </div>

          {/* Lado Direito: Caixa de Estatísticas */}
          <div className="self-start md:self-end">
            <div className="bg-white text-slate-900 rounded-xl shadow-md p-4 sm:p-5 flex items-center divide-x divide-slate-200">
              <div className="pr-5 sm:pr-6">
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 leading-none">
                  120+
                </span>
                <span className="block text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
                  Jovens Ativos
                </span>
              </div>
              <div className="pl-5 sm:pl-6">
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                  14
                </span>
                <span className="block text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
                  Ações em 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

