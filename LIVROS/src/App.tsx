
import './App.css'
import 'tailwindcss'
import Home from './components/home.tsx'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre.tsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Livros from './components/Livros.tsx'
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <nav className='     '>
        <Link to="/">Home</Link> | 
        <Link to="/livros">Livros</Link> | 
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>


      <div className="ticks">
        1    2    3    4    5    6    7    8    9    10
      </div>
fu
      <section id="next-steps">
        <div id="social" className=''>
          <h2>Connect with us</h2>
          <ul>
            <li>
              <a href="https://github.com/StivenDias" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>

            <li>
              <a href="###" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="###" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks">Stiven Dias</div>
      <section id="spacer">Livros 0.1</section>
    </>
  )
}

export default App
