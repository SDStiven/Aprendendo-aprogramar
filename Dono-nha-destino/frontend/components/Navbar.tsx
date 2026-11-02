
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/#" },
  { label: "Que fazemos", href: "/#" },
  { label: "Impacto", href: "/#" },
  { label: "Notícias e Eventos", href: "/#", active: true },
  { label: "Formações", href: "/#" },
  { label: "Contactos", href: "/#" },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between px-4 md:px-6"
        aria-label="Navegação principal"
      >
        {/* Logótipo e nome */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logótipo Donu Nha Distinu"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />

          <div className="leading-tight">
            <span className="block text-[9px] font-medium uppercase tracking-wider text-gray-500">
              Associação
            </span>
            <span className="block text-[12px] font-extrabold uppercase text-slate-950">
              Donu Nha Distinu
            </span>
          </div>
        </Link>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-900 md:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Links de navegação */}
        <div
          className={`${
            menuAberto ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-1 border-b border-gray-200 bg-white p-4 shadow-lg md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className={`whitespace-nowrap py-2 text-xs font-semibold transition-colors md:py-1 ${
                link.active
                  ? "text-green-700 md:border-b-2 md:border-green-700"
                  : "text-slate-600 hover:text-green-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Botão Apoiar */}
          <Link
            href="/#"
            onClick={() => setMenuAberto(false)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-green-800 md:ml-4 md:mt-0"
          >
            Apoiar
          </Link>
        </div>
      </nav>
    </header>
  );
}
