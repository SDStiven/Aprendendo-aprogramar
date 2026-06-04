import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, [location.pathname]);

  const links = ['Home', 'Livros', 'Sobre'];
  let link = '';
  if (isAuthenticated) {
    link = 'Perfil';
  } else {
    link = 'Login';
  }

  return ( 
    <nav className="fixed top-0 left-0 w-full z-[1000] h-[72px] bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm px-8" aria-label="Navegação principal">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between gap-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 text-slate-900 shrink-0 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 transition-transform group-hover:rotate-[-8deg] group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <span className="hidden sm:block font-display text-lg tracking-tight">Livros</span>
        </NavLink>

        {/* Search */}
        {/* <div className="hidden md:block flex-1 max-w-sm">
          <div className="relative flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3.5 text-slate-400 pointer-events-none group-focus-within:text-blue-600 transition-colors"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="navbar-search"
              type="text"
              placeholder="Pesquisar livros..."
              className="w-full h-10 pl-10 pr-4 bg-slate-100/60 focus:bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              aria-label="Pesquisar livros"
            />
          </div>
        </div> */}

        {/* Links */}
        <ul className="flex items-center gap-1 list-none p-0 m-0" role="list">
          {links.map((label) => (
            <li key={label}>
              <NavLink
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                end={label === 'Home'}
                className={({ isActive }) => `
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-[#13a4ec] font-semibold p-2 rounded-sm ">
          <NavLink to={link === 'Perfil' ? '/perfil' : '/login'}>
            {link}
          </NavLink>
          {!isAuthenticated && (
            <NavLink to='/new_livro' 
            className="text-[#13a4ec] font-semibold p-2 rounded-sm hover:underline">
              New_livro
            </NavLink>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
