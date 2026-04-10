
const Livros = () => {
    return (
        <>
        <div className="capas">
            <h1>Capas</h1>
            <div className="columns-3 ... bg-white gap ">
                <img src="https://picsum.photos/300/200" alt="gato" />
                <img src="https://picsum.photos/300/200" alt="gato" />
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/400/300"
                        alt="Imagem de teste"
                    />
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">Título do Card</h2>
                        <p className="text-gray-700 text-base">
                            Este é um exemplo de card com imagem de teste.
                        </p>
                    </div>
                </div>
                <img src="https://picsum.photos/300/200" alt="gato" />
                <img src="https://picsum.photos/300/200" alt="gato" />
            </div>
            <div className=" bg-zinc-500 flex justify-center m-4 p-4 items-center rounded-lg">
                tes
                <img src="https://picsum.photos/300/200" alt="ft-aleatoria"/>
                te

            </div>
            
            
        </div>
          

        </>
    );
};

export default Livros;