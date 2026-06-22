import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/utilizadores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            id: crypto.randomUUID(), 
            nome, 
            email, 
            senha: password 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redireciona para o login após cadastro com sucesso
        navigate('/login');
      } else {
        setError(data.error || 'Erro ao criar conta');
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-[28px] font-display text-center text-white mb-2">
          Criar nova conta
        </h1>
        <p className="text-center text-slate-400 mb-8 text-[16px]">
          Preencha os dados abaixo para se cadastrar
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleCadastro}>
          {error && (
            <div className="bg-red-950/50 text-red-400 p-3 rounded-xl text-sm text-center border border-red-500/30 animate-fade-in">
              {error}
            </div>
          )}

          {/* Nome input */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-2">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Seu nome completo"
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-slate-950/50 text-[0.9375rem] text-white placeholder-slate-500 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            />
          </div>
          
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seuemail@exemplo.com"
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-slate-950/50 text-[0.9375rem] text-white placeholder-slate-500 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            />
          </div>

          {/* Senha input */}
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

          <div className="flex items-center justify-between mt-6">
            <a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login'); }} className="text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-3 -ml-3 rounded-xl transition-all">
              Já tenho conta
            </a>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold h-11 px-8 rounded-xl transition-all shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Cadastrar
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

export default Cadastro;
