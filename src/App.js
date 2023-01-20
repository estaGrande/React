import logo from './logo.svg';
import './App.css';

import InicioPagina from './paginas/inicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import MaterialesPagina from './paginas/MaterialesPagina';
import LanzamintosPagina from './paginas/LanzamientosPagina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './componentes/Menu';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container pt-5 mt-2">
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/contacto" element={<ContactoPagina />} />
            <Route path="/materiales" element={<MaterialesPagina />} />
            <Route path="/lanzamientos" element={<LanzamintosPagina />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
