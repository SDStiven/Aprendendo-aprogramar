import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  year: number;
  cover: string;
  description: string;
}

const BOOKS: Book[] = [
  {
    id: 1,
    title: 'O Alquimista',
    author: 'Paulo Coelho',
    genre: 'Ficção',
    rating: 5,
    year: 1988,
    cover: 'https://picsum.photos/seed/alquimista/240/340',
    description: 'A jornada de Santiago em busca do seu tesouro pessoal, atravessando o deserto do Egito.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Distopia',
    rating: 5,
    year: 1949,
    cover: 'https://picsum.photos/seed/1984book/240/340',
    description: 'Uma visão sombria de um futuro totalitário onde o pensamento independente é crime.',
  },
  {
    id: 3,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    genre: 'Clássico',
    rating: 4,
    year: 1605,
    cover: 'https://picsum.photos/seed/quixote/240/340',
    description: 'As aventuras do sonhador cavaleiro andante e seu fiel escudeiro Sancho Pança.',
  },
  {
    id: 4,
    title: '100 Anos de Solidão',
    author: 'García Márquez',
    genre: 'Realismo Mágico',
    rating: 5,
    year: 1967,
    cover: 'https://picsum.photos/seed/solidao/240/340',
    description: 'A saga épica da família Buendía na mítica cidade de Macondo.',
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Não-ficção',
    rating: 5,
    year: 2011,
    cover: 'https://picsum.photos/seed/sapiens/240/340',
    description: 'Uma breve história da humanidade, desde os primeiros humanos até o presente.',
  },
  {
    id: 6,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    genre: 'Fábula',
    rating: 5,
    year: 1943,
    cover: 'https://picsum.photos/seed/principe/240/340',
    description: 'Uma história poética sobre um pequeno príncipe que viaja de planeta em planeta.',
  },
];

const GENRES = ['Todos', 'Ficção', 'Distopia', 'Clássico', 'Realismo Mágico', 'Não-ficção', 'Fábula'];

const GENRE_STYLES: Record<string, string> = {
  'Ficção': 'bg-blue-600',
  'Distopia': 'bg-violet-600',
  'Clássico': 'bg-amber-700',
  'Realismo Mágico': 'bg-cyan-600',
  'Não-ficção': 'bg-emerald-600',
  'Fábula': 'bg-pink-600',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
          className={`
            ${i <= rating ? 'fill-blue-600 stroke-blue-600' : 'fill-none stroke-slate-300'}
            stroke-[2]
          `}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  const genreBg = GENRE_STYLES[book.genre] || 'bg-blue-600';

  return (
    <article
      id={`book-card-${book.id}`}
      className="bg-white border border-slate-200 rounded-2xl flex flex-col p-0 overflow-hidden shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-lg group animate-[fade-in-up_0.64s_ease_both]"
      style={{ animationDelay: `${(book.id - 1) * 0.08}s` }}
    >
      {/* Cover */}
      <div className="relative overflow-hidden aspect-[3/2] shrink-0">
        <img
          src={book.cover}
          alt={`Capa do livro ${book.title}`}
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
        />
        {/* Genre badge over cover */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold font-mono tracking-wider uppercase text-white shadow-lg ${genreBg}`}>
          {book.genre}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-sm md:text-base font-bold text-slate-900 tracking-tight leading-tight flex-1">
            {book.title}
          </h2>
          <span className="text-[11px] text-slate-400 font-medium font-mono">
            {book.year}
          </span>
        </div>

        <div className="text-[12px] text-slate-500 font-medium">
          {book.author}
        </div>

        <div className="my-0.5">
          <StarRating rating={book.rating} />
        </div>

        <p className="text-[12px] text-slate-500 leading-relaxed flex-1 mt-1 opacity-80">
          {book.description}
        </p>
      </div>
    </article>
  );
}

export default function Livros() {
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState('Todos');

  const filtered = BOOKS.filter(b => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = activeGenre === 'Todos' || b.genre === activeGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <section className="pt-20 pb-12 px-8 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 animate-[fade-in-up_0.64s_ease_both]">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-600/30 bg-blue-600/5 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-soft_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-600 font-medium">Catálogo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display leading-tight tracking-tight mb-4">
            Os nossos <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">livros</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-[1.6] mb-8">
            Explore a nossa coleção completa. Use a pesquisa ou filtre por género.
          </p>

          {/* Search */}
          <div className="relative max-w-md flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="absolute left-4 text-slate-400 pointer-events-none transition-colors group-focus-within:text-blue-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="livros-search"
              type="text"
              placeholder="Pesquisar por título ou autor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>
        </div>
      </section>

      {/* Genre filters */}
      <section className="px-8 py-5 border-b border-slate-200 bg-white sticky top-[72px] z-20 backdrop-blur-md bg-white/70">
        <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {GENRES.map(genre => (
            <button
              key={genre}
              id={`filter-${genre.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveGenre(genre)}
              className={`h-9 px-4 rounded-lg border text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 flex items-center
                ${activeGenre === genre
                  ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm font-semibold'
                  : 'border-slate-200 bg-transparent text-slate-500 hover:border-slate-400 hover:text-slate-900'
                }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Book grid */}
      <section className="px-8 py-12 pb-24">
        <div className="max-w-5xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-[11px] text-slate-400 font-mono tracking-widest uppercase mb-6 opacity-70 animate-[fade-in_0.5s_ease_both]">
                {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fade-in-up_0.64s_ease_both]">
                {filtered.map(book => <BookCard key={book.id} book={book} />)}
              </div>
            </>
          ) : (
            <div className="text-center py-20 animate-[fade-in_0.5s_ease_both]">
              <div className="text-5xl mb-6">📚</div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                Nenhum livro encontrado
              </h2>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Tente outra pesquisa ou selecione um género diferente para continuar a explorar.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}