import React, { useState, useEffect } from 'react';

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  descricao?: string | null;
  capa?: string | null;
  ano?: string | null;
  categoria?: string | null;
  id_utilizador?: string | null;
  data_criacao: Date;
  updat: Date;
}

const API_URL = 'http://localhost:8080/api/livros';

export default function New_livro() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    preco: 0,
    descricao: '',
    capa: '',
    ano: '',
    categoria: '',
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const emptyForm = { titulo: '', autor: '', preco: 0, descricao: '', capa: '', ano: '', categoria: '' };

  const fetchLivros = async () => {
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        setLivros(data);
      }
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titulo || !formData.autor || formData.preco <= 0) return;

    try {
      if (editingId !== null) {
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            titulo: formData.titulo,
            autor: formData.autor,
            preco: Number(formData.preco),
            descricao: formData.descricao,
            capa: formData.capa,
            ano: formData.ano,
            categoria: formData.categoria,
          }),
        });

        if (res.ok) {
          await fetchLivros();
          setEditingId(null);
          setFormData(emptyForm);
          alert('Livro atualizado com sucesso!');
        } else {
          const err = await res.json();
          alert(`Erro ao atualizar: ${err.error || 'Desconhecido'}`);
        }
      } else {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            titulo: formData.titulo,
            autor: formData.autor,
            preco: Number(formData.preco),
            descricao: formData.descricao,
            capa: formData.capa,
            ano: formData.ano,
            categoria: formData.categoria,
            id_utilizador: null,
          }),
        });

        if (res.ok) {
          await fetchLivros();
          setFormData(emptyForm);
          alert('Livro adicionado com sucesso!');
        } else {
          const err = await res.json();
          alert(`Erro ao adicionar: ${err.error || 'Desconhecido'}`);
        }
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de conexão! Verifique se o servidor do backend (LIVROS_BD) está a correr.');
    }
  };

  const handleEdit = (livro: Livro) => {
    setEditingId(livro.id);
    setFormData({
      titulo: livro.titulo,
      autor: livro.autor,
      preco: livro.preco,
      descricao: livro.descricao || '',
      capa: livro.capa || '',
      ano: livro.ano || '',
      categoria: livro.categoria || '',
    });
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLivros(prev => prev.filter(l => l.id !== id));
        if (editingId === id) {
          setEditingId(null);
          setFormData(emptyForm);
        }
      }
    } catch (error) {
      console.error('Erro ao eliminar livro:', error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  const inputClass = "w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-600/15 focus:border-blue-500 transition-all duration-300";
  const labelClass = "text-sm font-medium text-slate-300";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-4 md:p-8 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <header className="text-center space-y-4 py-8">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-xl shadow-blue-500/10">
            <div className="bg-slate-950 rounded-full px-8 py-3">
              <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
                Gestão de Biblioteca
              </h1>
            </div>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Adicione, atualize e remova os seus livros favoritos num ambiente moderno e elegante.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Form Section */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {editingId ? 'Atualizar Livro' : 'Novo Livro'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className={labelClass}>Título</label>
                    <input
                      type="text"
                      value={formData.titulo}
                      onChange={e => setFormData({ ...formData, titulo: e.target.value })}
                      placeholder="Ex: O Senhor dos Anéis"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Autor</label>
                    <input
                      type="text"
                      value={formData.autor}
                      onChange={e => setFormData({ ...formData, autor: e.target.value })}
                      placeholder="Ex: J.R.R. Tolkien"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Preço (€)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.preco || ''}
                      onChange={e => setFormData({ ...formData, preco: parseFloat(e.target.value) })}
                      placeholder="Ex: 19.99"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Capa (URL da imagem)</label>
                    <input
                      type="text"
                      value={formData.capa}
                      onChange={e => setFormData({ ...formData, capa: e.target.value })}
                      placeholder="https://exemplo.com/capa.jpg"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Ano de Lançamento</label>
                    <input
                      type="text"
                      value={formData.ano}
                      onChange={e => setFormData({ ...formData, ano: e.target.value })}
                      placeholder="Ex: 2024"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Categoria</label>
                    <input
                      type="text"
                      value={formData.categoria}
                      onChange={e => setFormData({ ...formData, categoria: e.target.value })}
                      placeholder="Ex: Fantasia, Romance, Ficção..."
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Descrição (opcional)</label>
                    <textarea
                      value={formData.descricao}
                      onChange={e => setFormData({ ...formData, descricao: e.target.value })}
                      placeholder="Uma breve descrição..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transform transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                    >
                      {editingId ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Guardar Alterações
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          Adicionar Livro
                        </>
                      )}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-4 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-200 active:scale-95"
                        title="Cancelar Edição"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 min-h-[600px] shadow-2xl flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  Acervo ({livros.length})
                </h2>
              </div>

              {livros.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-500 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-slate-900/50 flex items-center justify-center border border-white/5">
                    <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <p className="text-lg">Nenhum livro no acervo ainda.</p>
                  <p className="text-sm text-slate-500">Adicione um livro usando o formulário ao lado.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {livros.map(livro => (
                    <div
                      key={livro.id}
                      className={`group relative bg-slate-950/80 border ${editingId === livro.id ? 'border-blue-500 ring-1 ring-blue-500/50' : 'border-white/10 hover:border-blue-500/50'} rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col overflow-hidden`}
                    >
                      {editingId === livro.id && (
                        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rotate-45 transform translate-x-8 -translate-y-8 blur-xl"></div>
                      )}

                      {/* Capa do livro */}
                      {livro.capa && (
                        <img
                          src={livro.capa}
                          alt={`Capa de ${livro.titulo}`}
                          className="w-full h-36 object-cover rounded-lg mb-3 border border-white/10"
                          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      )}

                      <div className="flex justify-between items-start mb-2 relative z-10">
                        <h3 className="text-xl font-semibold text-slate-100 line-clamp-1 pr-4" title={livro.titulo}>
                          {livro.titulo}
                        </h3>
                        <span className="shrink-0 bg-blue-500/15 text-blue-400 font-mono text-sm px-2.5 py-1 rounded-md border border-blue-500/30">
                          €{livro.preco}
                        </span>
                      </div>

                      <p className="text-blue-400 text-sm font-medium mb-2 relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        {livro.autor}
                      </p>

                      {/* Badges: Categoria + Ano */}
                      {(livro.categoria || livro.ano) && (
                        <div className="flex gap-2 mb-2 flex-wrap relative z-10">
                          {livro.categoria && (
                            <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-full border border-white/10">
                              {livro.categoria}
                            </span>
                          )}
                          {livro.ano && (
                            <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full border border-white/10">
                              {livro.ano}
                            </span>
                          )}
                        </div>
                      )}

                      {livro.descricao && (
                        <p className="text-slate-400 text-sm line-clamp-2 mb-3 flex-grow relative z-10">
                          {livro.descricao}
                        </p>
                      )}

                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {livro.updat ? new Date(livro.updat).toLocaleDateString('pt-PT') : new Date().toLocaleDateString('pt-PT')}
                        </span>

                        <div className="flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handleEdit(livro)}
                            className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            title="Editar Livro"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          </button>
                          <button
                            onClick={() => handleDelete(livro.id)}
                            className="p-2 text-red-600 hover:text-red-500 hover:bg-red-600/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-600/50"
                            title="Eliminar Livro"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}