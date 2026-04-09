import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="logo-icon"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    <span className="logo-text">LIVROS</span>
                </div>

                <div className="navbar-search">
                    <div className="search-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="search-icon"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <input type="text" placeholder="Pesquisar livros..." />
                    </div>
                </div>

                <ul className="navbar-links">
                    <li>
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                    <li>
                        <a href="#sobre" className="nav-link">Sobre</a>
                    </li>
                </ul>
                
                <div className="navbar-actions">
                  <button className="btn-primary">Entrar</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
