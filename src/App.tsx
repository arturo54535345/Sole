import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="relative">
        {/* El Navbar va FUERA de las rutas para que salga en TODAS las páginas */}
        <Navbar />
        
        <Routes>
          {/* Cuando la ruta sea "/", mostramos el Home */}
          <Route path="/" element={<Home />} />
          
          {/* Aquí pondremos las demás rutas en el futuro */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;