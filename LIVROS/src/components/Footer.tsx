

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-400 p-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Logo + texto */}
                <div className="flex items-center space-x-3">
                    <img src="https://picsum.photos/60/60" alt="logo" className="rounded-full" />
                    <span className="font-semibold">Stiven Dias</span>
                </div>

                {/* Links sociais */}
                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li>
                        <a href="https://github.com/SDStiven" target="_blank" className="hover:text-white flex items-center space-x-2">
                            <svg className="w-5 h-5 fill-current" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#github-icon"></use>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="###" target="_blank" className="hover:text-white flex items-center space-x-2">
                            <svg className="w-5 h-5 fill-current" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#x-icon"></use>
                            </svg>
                            <span>X.com</span>
                        </a>
                    </li>
                </ul>

               
            </div>

            {/* Versão / direitos */}
                <div className="mt-4  p-2 text-center md:mt-0 text-sm">
                  © 2026 - Todos os direitos reservados
                </div>
        </footer>
    
    );
};

export default Footer;