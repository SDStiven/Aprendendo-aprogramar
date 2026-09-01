import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = ['Home', 'Livros', 'Sobre', "ModoLeitor"];

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
      </div>
    </nav>
  );
};

export default Navbar;
