import './index.css'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from './components/Livros.tsx'
import Footer from './components/Footer.tsx'
import Home from './components/Home.tsx';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
