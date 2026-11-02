
export default function Footer() {
  return (
    <footer className="w-full bg-[#020617] px-6 pt-14 text-slate-400 md:px-10">

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Identidade da Associação  */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo Donu Nha Distinu"
              className="h-10 w-10 rounded object-contain"
            />

            <h2 className="text-sm font-bold uppercase text-white">
              DONU NHA DISTINU
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-slate-400">
            Associação comunitária com foco no desporto, inclusão social,
            cultura e educação no Castelão e Coqueiro, Praia, Cabo Verde.
            Fundada em 2020.
          </p>

          <p className="mt-3 text-xs leading-5 text-green-600">
            Transformando realidades através do futebol e da cidadania.
          </p>

          {/* Redes sociais */}
          <div className="mt-12 flex gap-2">
            {["Facebook", "Instagram", "Youtube"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="h-8 w-8 rounded-md bg-[#111827] transition hover:bg-green-700"
              />
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
            Navegação
          </h3>

          <ul className="space-y-3 text-xs">
            {[
              "Início",
              "Sobre Nós",
              "Que fazemos",
              "Impacto",
              "Notícias e Eventos",
              "Formações",
              "Contactos",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-green-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Informações */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
            Informações
          </h3>

          <ul className="space-y-3 text-xs">
            {[
              "Inscrições Época 2026/27",
              "Programa de Apadrinhamento",
              "Estúdio Comunitário",
              "Formação Vocacional",
              "Contactar a Direção",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-green-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contactos */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
            Contactos
          </h3>

          <ul className="space-y-4 text-xs">
            <li className="flex items-start gap-3">
              <span className="text-green-600">✉</span>
              <a
                href="mailto:donunhadistinu19@gmail.com"
                className="transition hover:text-green-500"
              >
                donunhadistinu19@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600">☎</span>
              <a
                href="https://wa.me/2389596856"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-green-500"
              >
                WhatsApp: (+238) 959 68 56
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600">♧</span>
              <span>
                Castelão e Coqueiro, Praia — Cabo Verde
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 border-t border-slate-800 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center">
        <p>
          © 2026 Associação Donu Nha Distinu. Todos os direitos reservados.
        </p>

        <p>
          Construindo pontes para as futuras gerações.
        </p>
      </div>

    </footer>
  );
}
