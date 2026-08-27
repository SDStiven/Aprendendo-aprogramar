import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  nome: string;
  email: string;
  data_registo?: string;
}

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Not logged in, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-slate-950 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-display text-white mb-8">Meu Perfil</h1>
        
        <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white text-3xl font-display uppercase shadow-[0_4px_14px_rgba(37,99,235,0.25)]">
              {user.nome.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{user.nome}</h2>
              <p className="text-slate-400">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-4">
            <h3 className="text-lg font-semibold text-white mb-4">Detalhes da Conta</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-white/10">
                <p className="text-sm text-slate-400 mb-1">ID do Utilizador</p>
                <p className="font-medium text-slate-300">{user.id}</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-white/10">
                <p className="text-sm text-slate-400 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse-soft_2s_ease-in-out_infinite]"></div>
                  <p className="font-medium text-blue-400">Conta Ativa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 border border-red-500/20 bg-red-950/20 hover:bg-red-950/40 text-red-400 font-medium rounded-xl transition-all shadow-sm active:scale-95"
            >
              Terminar Sessão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
