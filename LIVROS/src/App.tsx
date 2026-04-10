
import './App.css'
import 'tailwindcss'
import Home from './components/home.tsx'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from './components/Livros.tsx'
import Footer from './components/Footer.tsx'
function App() {
  return (
    <div >
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
