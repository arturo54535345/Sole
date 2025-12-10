// 1. Importamos el Navbar que acabamos de crear
import Navbar from './components/shared/Navbar.tsx';

function App() {
  return (
    <div className="">
    <div>
      {/* 2. Aquí colocamos el Navbar */}
      <Navbar />

      {/* 3. Contenido de prueba */}
      <div className="pt-24 px-4"> 
      </div>
    </div>
    </div>
  );
}

export default App;