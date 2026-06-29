
import { useState, useEffect } from 'react'

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  language?: string[];
}

export default function Api() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        const api = 'https://openlibrary.org/search.json?q=the+lord+of+the+ring';
        const response = await fetch(api);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados da API.');
        }
        const data = await response.json();
        setBooks(data.docs ? data.docs.slice(0, 12) : []);
      } catch (err: any) {
        setError(err.message || 'Ocorreu um erro inesperado.');
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-100 py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
            O Senhor dos Anéis
          </h1>
        </header>
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 animate-pulse">
                <div className="w-full h-64 bg-slate-700/50 rounded-xl mb-4"></div>
                <div className="h-5 bg-slate-700/50 rounded-md w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-700/50 rounded-md w-1/2 mb-4"></div>
                <div className="h-3 bg-slate-700/50 rounded-md w-1/3"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-6 rounded-2xl text-center max-w-md mx-auto">
            <svg className="w-12 h-12 mx-auto mb-3 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="font-semibold">Erro ao buscar dados</p>
            <p className="text-sm mt-1 opacity-80">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => {
              const coverUrl = book.cover_i 
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300&auto=format&fit=crop';

              return (
                <div 
                  key={book.key} 
                  className="group bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 hover:border-slate-600/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-slate-950 flex items-center justify-center">
                    <img 
                      src={coverUrl} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-bold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {book.title}
                      </h2>
                      <h2 className="text-lg text-slate-100 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {book.language}
                      </h2>
                      <p className="text-slate-400 text-sm mt-1 line-clamp-1">
                        {book.author_name ? book.author_name.join(', ') : 'Autor desconhecido'}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-500">
                      <span>Ano de publicação:</span>
                      <span className="font-semibold text-slate-300">
                        {book.first_publish_year || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}