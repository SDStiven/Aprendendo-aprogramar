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
    <div className="min-h-[calc(100vh-72px)] bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-display text-slate-900 mb-8">Meu Perfil</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-display uppercase shadow-sm">
              {user.nome.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{user.nome}</h2>
              <p className="text-slate-500">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 mt-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Detalhes da Conta</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">ID do Utilizador</p>
                <p className="font-medium text-slate-900">{user.id}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="font-medium text-green-700">Conta Ativa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 font-medium rounded-xl transition-all shadow-sm active:translate-y-0.5"
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
