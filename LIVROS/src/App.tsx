import './index.css'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from './components/Livros.tsx'
import Footer from './components/Footer.tsx'
import Home from './components/Home.tsx';
// import New_livro from './components/new-livro.tsx';
import Login from './components/Login.tsx';
import Cadastro from './components/Cadastro.tsx';
import Perfil from './components/Perfil.tsx';
import Api from './components/Api.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* <Route path="/new_livro" element={<New_livro />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/Api" element={<Api />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
