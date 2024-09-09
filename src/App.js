import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from './Home';
import Projetos from './Projetos';
import Sobremim from './Sobre-mim';
import Contato from './contato';
import Habilidades from './Habilidades';

import './style.css';

function App() {
  return (
    <HelmetProvider>
    <Router>
       <Helmet>
        <title>ínicio</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Sobre-mim" element={<Sobremim />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Habilidades" element={<Habilidades />} />

      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
