import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Especies from './Especies.tsx';
import Produtos from './Produtos.tsx';
import AnimaisResgatados from './AnimaisResgatados.tsx';
import Login from './Login.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especies" element={<Especies />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/animaisresgatados" element={<AnimaisResgatados />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
