import React, { useEffect, useState } from 'react';

export default function Teste(): React.ReactNode {
  const [livros, setLivros] = useState<any[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  async function buscarLivros(termo: string): Promise<any> {
    // Codifica o termo para evitar problemas com espaços ou acentos
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}`;

    try {
      const resposta = await fetch(url);
      
      if (!resposta.ok) {
        throw new Error(`Erro na API: ${resposta.status}`);
      }

      // Força o JSON a seguir a estrutura da nossa interface
      const dados: any = await resposta.json();
      
      return dados.docs;
    } catch (error) {
      console.error("Erro ao procurar livros:", error);
      return [];
    }
  }

  useEffect(() => {
    // Exemplo de uso prático:
    buscarLivros('o senhor dos aneis').then(livrosEncontrados => {
      if (livrosEncontrados && livrosEncontrados.length > 0) {
        // Guardar apenas os primeiros 5 livros no estado
        setLivros(livrosEncontrados.slice(0, 5));
      }
      setCarregando(false);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Livros Encontrados
      </h1>
      
      {carregando ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg text-gray-600 animate-pulse">A carregar livros...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {livros.map((livro: any, index: number) => {
            const autores = livro.author_name ? livro.author_name.join(', ') : 'Autor Desconhecido';
            const ano = livro.first_publish_year || 'Ano n/d';
            const urlCapa = livro.cover_i 
              ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
              : 'https://via.placeholder.com/200x300?text=Sem+Capa'; // Imagem padrão

            return (
              <div 
                key={livro.key || index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Área da Imagem */}
                <div className="h-64 w-full bg-gray-200 overflow-hidden">
                  <img 
                    src={urlCapa} 
                    alt={`Capa de ${livro.title}`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Área de Informação */}
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2" title={livro.title}>
                    {livro.title}
                  </h2>
                  
                  <div className="mt-auto">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold text-gray-700">Autor(es):</span> {autores}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-700">Ano:</span> {ano}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}