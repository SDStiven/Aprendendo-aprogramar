export default function Home() {
  return (
    <>
      <section id="home ">
        <div id="">
          <img className=" p-4  h-200" src="https://picsum.photos/300/200" alt="gato" />
        </div>
        <div className="w-full max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Entre em contato</h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="seuemail@exemplo.com" />
            </div>

            {/* Contacto */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contacto</label>
              <input type="text" id="contact" name="contact"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+238 999 9999" />
            </div>

            {/* Morada */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Morada</label>
              <input type="text" id="address" name="address"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Rua Exemplo, nº 123" />
            </div>

            {/* Botão Submit */}
            <button type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Enviar
            </button>
          </form>
        </div>

      </section>
    </>
  );
}
