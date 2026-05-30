import './index.css'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from './components/Livros.tsx'
import Footer from './components/Footer.tsx'
import Home from './components/Home.tsx';
import Teste from './components/Teste.tsx';
import Login from './components/Login.tsx';
import Cadastro from './components/Cadastro.tsx';
import Perfil from './components/Perfil.tsx';

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
            <Route path="/teste" element={<Teste />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
