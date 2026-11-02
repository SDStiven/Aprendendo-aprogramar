// app/noticias/page.tsx

interface Noticia {
  id: number;
  documentId: string;
  titulo: string;
  description: string;
  link: string;
  fonte: string;
  categoria: string;
  publishedAt: string;
  capa: any
}

interface ApiResponse {
  data: Noticia[];
}

const url = process.env.link

async function getNoticias(): Promise<ApiResponse> {
  try {
    const res = await fetch(`${url}/api/noticias?populate=capa`);

  if (!res.ok) {
    throw new Error('Falha ao carregar as notícias');
  }

  return res.json();
  } catch (error) {
    console.error('Falha de conexão com a API:', error);
    return { data: [] };
  }
}

export default async function DestackNoticias() {
  const { data: noticias } = await getNoticias();

  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Notícias em Destaque</h1>

      {noticias.length === 0 ? (
        <p className="text-gray-500">Nenhuma notícia encontrada.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-gray-200">
            <img 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              src={`${url}${noticias[noticias.length -1]?.capa?.[0]?.url}`}
              alt="Notícia em destaque"
            />
          </div>

          {noticias.slice(-1).map((noticia) => (
            <article key={noticia.id || noticia.documentId} className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                  {noticia.categoria}
                </span>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                  {decodeURIComponent(noticia.titulo)}
                </h2>

                <p className="text-gray-600 leading-relaxed text-base">
                  {noticia.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  Ler notícia original ↗
                </a>
                <span className="text-gray-400">
                  Fonte: {noticia.fonte}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}