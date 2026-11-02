'use client'
import { BellRing, Mail, Send } from "lucide-react";

export default function BoletimInformativo() {
  return (
    <section className="w-full bg-[#020f20] px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-8 rounded-xl bg-[#071d34] px-6 py-10 md:flex-row md:px-12 md:py-12">

        {/* Texto */}
        <div className="w-full md:max-w-[55%]">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-600">
            <BellRing size={17} />
            <span>Boletim Comunitário</span>
          </div>

          <h2 className="mb-3 text-2xl font-bold leading-tight text-white md:text-3xl">
            as nossas novidades e comunicaRecebados
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Informações sobre abertura de inscrições desportivas, cursos
            profissionais e convívios comunitários diretamente na sua
            caixa de correio eletrónico.
          </p>
        </div>

        {/* Formulário */}
        <div className="w-full md:max-w-[520px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Aqui podes integrar o serviço de newsletter.
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-md border border-slate-300 bg-white px-3 py-3">
              <Mail size={21} className="shrink-0 text-slate-600" />

              <input
                type="email"
                placeholder="Introduza o seu email..."
                required
                className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Subscrever
              <Send size={17} />
            </button>
          </form>

          <p className="mt-3 text-xs leading-relaxed text-slate-500 md:text-sm">
            Garantimos privacidade total. Cancele a qualquer momento com
            um clique.
          </p>
        </div>

      </div>
    </section>
  );
}
