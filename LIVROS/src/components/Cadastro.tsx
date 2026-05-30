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
      const response = await fetch('http://localhost:8080/api/utilizadores', {
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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] bg-white sm:bg-slate-50 p-4">
      <div className="w-full max-w-[450px] bg-white sm:border sm:border-slate-200 sm:rounded-3xl sm:px-10 sm:py-12 flex flex-col shadow-sm">
        {/* Site Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform group-hover:rotate-[-8deg] group-hover:scale-110 shadow-sm border border-blue-100">
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
        
        <h1 className="text-[28px] font-display text-center text-slate-900 mb-2">
          Criar nova conta
        </h1>
        <p className="text-center text-slate-500 mb-8 text-[16px]">
          Preencha os dados abaixo para se cadastrar
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleCadastro}>
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm text-center border border-red-100 animate-fade-in">
              {error}
            </div>
          )}

          {/* Nome input */}
          <div className="relative group">
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="block w-full px-4 pb-2.5 pt-5 text-base text-slate-900 bg-transparent border border-slate-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent peer transition-shadow"
              placeholder=" "
              required
            />
            <label
              htmlFor="nome"
              className="absolute text-base text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 cursor-text"
            >
              Nome completo
            </label>
          </div>
          
          {/* Email input */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 pb-2.5 pt-5 text-base text-slate-900 bg-transparent border border-slate-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent peer transition-shadow"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-base text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 cursor-text"
            >
              E-mail
            </label>
          </div>

          <div className="relative group mt-1">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 pb-2.5 pt-5 text-base text-slate-900 bg-transparent border border-slate-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent peer transition-shadow"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute text-base text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 cursor-text"
            >
              Senha
            </label>
          </div>

          <div className="flex items-center justify-between mt-6">
            <a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login'); }} className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 py-2 px-3 -ml-3 rounded-xl transition-all">
              Já tenho conta
            </a>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      
      {/* Footer style links */}
      <div className="mt-6 flex gap-6 text-[12px] text-slate-600 sm:max-w-[450px] w-full px-2 justify-between">
        <div className="cursor-pointer hover:bg-slate-100 py-1 px-2 rounded -ml-2">
          Português (Brasil)
        </div>
        <div className="flex gap-2">
          <a href="#" className="hover:bg-slate-100 px-2 py-1 rounded transition-colors">Ajuda</a>
          <a href="#" className="hover:bg-slate-100 px-2 py-1 rounded transition-colors">Privacidade</a>
          <a href="#" className="hover:bg-slate-100 px-2 py-1 rounded transition-colors">Termos</a>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
