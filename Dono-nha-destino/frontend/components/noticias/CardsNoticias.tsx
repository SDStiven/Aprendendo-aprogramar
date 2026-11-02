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
  capa: any;
 
}

interface ApiResponse {
  data: Noticia[];
}
const url = process.env.link

async function getNoticias(): Promise<ApiResponse> {
 try {
   const res = await fetch(`${url}/api/noticias?populate=capa`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Falha ao carregar as notícias');
  }

  return res.json();
  } catch (error) {
    console.error('Falha de conexão com a API:', error);
    return { data: [] };
  }
}

export default async function CardsNoticias() {
  const { data: noticias } = await getNoticias();

  // Pega apenas as últimas 6 notícias
  const ultimasNoticias = noticias.slice(-6).reverse();

  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Cobertura Comunitária
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
            Últimas Notícias & Realizações
          </h1>
        </div>
        <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
          {ultimasNoticias.length} Artigos Publicados
        </span>
      </div>

      {ultimasNoticias.length === 0 ? (
        <p className="text-gray-500">Nenhuma notícia encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultimasNoticias.map((noticia,) => {
         

            return (
              <article 
                key={noticia.id || noticia.documentId} 
                className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                       src={`${url}${noticia.capa[0].url}`}

                      alt={noticia.titulo}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-800 text-white px-2.5 py-1 rounded shadow-sm">
                        {noticia.categoria}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[11px] font-medium bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded">
                        {new Date(noticia.publishedAt || Date.now()).toLocaleDateString('pt-PT')}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                      {decodeURIComponent(noticia.titulo)}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {noticia.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Ler mais →
                  </a>
                  <span className="text-gray-400 font-medium">
                    {noticia.fonte}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}