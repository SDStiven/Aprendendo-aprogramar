import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/utilizadores/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/perfil');
      } else {
        setError(data.error || 'Erro ao fazer login');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] bg-slate-950 p-4">
      <div className="w-full max-w-[450px] bg-slate-900 sm:border sm:border-white/10 sm:rounded-3xl sm:px-10 sm:py-12 flex flex-col shadow-2xl">
        {/* Site Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2.5 text-white group cursor-default">
            <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 shadow-[0_4px_14px_rgba(37,99,235,0.25)] text-white transition-transform group-hover:rotate-[-8deg] group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-[28px] font-display text-center text-white mb-2">
          Bem-vindo de volta
        </h1>
        <p className="text-center text-slate-400 mb-8 text-[16px]">
          Acesse sua conta para continuar
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-950/50 text-red-400 p-3 rounded-xl text-sm text-center border border-red-500/30 animate-fade-in">
              {error}
            </div>
          )}
          
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              E-mail ou telefone
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seuemail@exemplo.com"
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-slate-950/50 text-[0.9375rem] text-white placeholder-slate-500 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            />
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Sua senha"
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-slate-950/50 text-[0.9375rem] text-white placeholder-slate-500 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            />
          </div>

          <div className="flex items-start mb-2">
            <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="flex items-center justify-between mt-6">
            <a href="/cadastro" onClick={(e) => { e.preventDefault(); navigate('/cadastro'); }} className="text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-3 -ml-3 rounded-xl transition-all">
              Criar conta
            </a>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold h-11 px-8 rounded-xl transition-all shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
      
      {/* Footer style links */}
      <div className="mt-6 flex gap-6 text-[12px] text-slate-400 sm:max-w-[450px] w-full px-2 justify-between">
        <div className="cursor-pointer hover:bg-white/5 hover:text-white py-1 px-2 rounded -ml-2 transition-all">
          Português (Brasil)
        </div>
        <div className="flex gap-2 text-slate-400">
          <a href="#" className="hover:bg-white/5 hover:text-white px-2 py-1 rounded transition-colors">Ajuda</a>
          <a href="#" className="hover:bg-white/5 hover:text-white px-2 py-1 rounded transition-colors">Privacidade</a>
          <a href="#" className="hover:bg-white/5 hover:text-white px-2 py-1 rounded transition-colors">Termos</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
